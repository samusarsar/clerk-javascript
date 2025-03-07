import type { ClerkAPIError, ClerkAPIErrorJSON } from '@clerk/types';
import snakecaseKeys from 'snakecase-keys';

import { API_URL, API_VERSION, constants, USER_AGENT } from '../constants';
// DO NOT CHANGE: Runtime needs to be imported as a default export so that we can stub its dependencies with Sinon.js
// For more information refer to https://sinonjs.org/how-to/stub-dependency/
import runtime from '../runtime';
import { assertValidSecretKey } from '../util/assertValidSecretKey';
import { joinPaths } from '../util/path';
import { deserialize } from './resources/Deserializer';

export type ClerkBackendApiRequestOptions = {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
  queryParams?: Record<string, unknown>;
  headerParams?: Record<string, string>;
  bodyParams?: object;
  formData?: FormData;
} & (
  | {
      url: string;
      path?: string;
    }
  | {
      url?: string;
      path: string;
    }
);

export type ClerkBackendApiResponse<T> =
  | {
      data: T;
      errors: null;
      totalCount?: number;
    }
  | {
      data: null;
      errors: ClerkAPIError[];
      totalCount?: never;
      clerkTraceId?: string;
      status?: number;
      statusText?: string;
    };

export type RequestFunction = ReturnType<typeof buildRequest>;

type BuildRequestOptions = {
  /* Secret Key */
  secretKey?: string;
  /* Backend API URL */
  apiUrl?: string;
  /* Backend API version */
  apiVersion?: string;
  /* Library/SDK name */
  userAgent?: string;
};
export function buildRequest(options: BuildRequestOptions) {
  return async <T>(requestOptions: ClerkBackendApiRequestOptions): Promise<ClerkBackendApiResponse<T>> => {
    const { secretKey, apiUrl = API_URL, apiVersion = API_VERSION, userAgent = USER_AGENT } = options;
    const { path, method, queryParams, headerParams, bodyParams, formData } = requestOptions;

    assertValidSecretKey(secretKey);

    const url = joinPaths(apiUrl, apiVersion, path);

    // Build final URL with search parameters
    const finalUrl = new URL(url);

    if (queryParams) {
      // Snakecase query parameters
      const snakecasedQueryParams = snakecaseKeys({ ...queryParams });

      // Support array values for queryParams such as { foo: [42, 43] }
      for (const [key, val] of Object.entries(snakecasedQueryParams)) {
        if (val) {
          [val].flat().forEach(v => finalUrl.searchParams.append(key, v as string));
        }
      }
    }

    // Build headers
    const headers: Record<string, any> = {
      Authorization: `Bearer ${secretKey}`,
      'User-Agent': userAgent,
      ...headerParams,
    };

    let res: Response | undefined;
    try {
      if (formData) {
        res = await runtime.fetch(finalUrl.href, {
          method,
          headers,
          body: formData,
        });
      } else {
        // Enforce application/json for all non form-data requests
        headers['Content-Type'] = 'application/json';
        // Build body
        const hasBody = method !== 'GET' && bodyParams && Object.keys(bodyParams).length > 0;
        const body = hasBody ? { body: JSON.stringify(snakecaseKeys(bodyParams, { deep: false })) } : null;

        res = await runtime.fetch(finalUrl.href, {
          method,
          headers,
          ...body,
        });
      }

      // TODO: Parse JSON or Text response based on a response header
      const isJSONResponse =
        res?.headers && res.headers?.get(constants.Headers.ContentType) === constants.ContentTypes.Json;
      const responseBody = await (isJSONResponse ? res.json() : res.text());

      if (!res.ok) {
        return {
          data: null,
          errors: parseErrors(responseBody),
          status: res?.status,
          statusText: res?.statusText,
          clerkTraceId: getTraceId(responseBody, res?.headers),
        };
      }

      return {
        ...deserialize<T>(responseBody),
        errors: null,
      };
    } catch (err) {
      if (err instanceof Error) {
        return {
          data: null,
          errors: [
            {
              code: 'unexpected_error',
              message: err.message || 'Unexpected error',
            },
          ],
          clerkTraceId: getTraceId(err, res?.headers),
        };
      }

      return {
        data: null,
        errors: parseErrors(err),
        status: res?.status,
        statusText: res?.statusText,
        clerkTraceId: getTraceId(err, res?.headers),
      };
    }
  };
}

// Returns either clerk_trace_id if present in response json, otherwise defaults to CF-Ray header
// If the request failed before receiving a response, returns undefined
function getTraceId(data: unknown, headers?: Headers): string {
  if (data && typeof data === 'object' && 'clerk_trace_id' in data && typeof data.clerk_trace_id === 'string') {
    return data.clerk_trace_id;
  }

  const cfRay = headers?.get('cf-ray');
  return cfRay || '';
}

function parseErrors(data: unknown): ClerkAPIError[] {
  if (!!data && typeof data === 'object' && 'errors' in data) {
    const errors = data.errors as ClerkAPIErrorJSON[];
    return errors.length > 0 ? errors.map(parseError) : [];
  }
  return [];
}

function parseError(error: ClerkAPIErrorJSON): ClerkAPIError {
  return {
    code: error.code,
    message: error.message,
    longMessage: error.long_message,
    meta: {
      paramName: error?.meta?.param_name,
      sessionId: error?.meta?.session_id,
    },
  };
}
