import { createActorContext } from '@xstate/react';
import type { SnapshotFrom } from 'xstate';

import { FormMachine } from '~/internals/machines/form.machine';

export type SnapshotState = SnapshotFrom<typeof FormMachine>;

const FormMachineContext = createActorContext(FormMachine);

export const FormStoreProvider = FormMachineContext.Provider;
export const useFormStore = FormMachineContext.useActorRef;
export const useFormSelector = FormMachineContext.useSelector;

/**
 * Selects a global error, if it exists
 */
export const globalErrorsSelector = (state: SnapshotState) => state.context.errors;

/**
 * Selects if a specific field has a value
 */
export const fieldHasValueSelector = (name: string | undefined) => (state: SnapshotState) =>
  name ? Boolean(state.context.fields.get(name)?.value) : false;

/**
 * Selects a field-specific error, if it exists
 */
export const fieldErrorsSelector = (name: string | undefined) => (state: SnapshotState) =>
  name ? state.context.fields.get(name)?.errors : undefined;
