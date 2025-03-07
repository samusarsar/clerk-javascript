import React from 'react';

import type { PrimitiveProps, StyleVariants } from '../styledSystem';
import { createVariants } from '../styledSystem';
import type { BoxProps } from './Box';
import { Box } from './Box';

const { applyVariants, filterProps } = createVariants(theme => {
  return {
    base: {
      borderSpacing: '0',
      borderCollapse: 'separate',
      border: theme.borders.$normal,
      borderColor: theme.colors.$blackAlpha100,
      borderRadius: theme.radii.$lg,
      boxShadow: theme.shadows.$tableBodyShadow,
      width: '100%',
      '>:not([hidden])~:not([hidden])': {
        borderBottomWidth: '0px',
        borderTopWidth: '1px',
        borderStyle: 'solid',
        borderLeftWidth: '0px',
        borderRightWidth: '0px',
        borderColor: theme.colors.$blackAlpha100,
      },
      'td:not(:first-of-type)': {
        paddingLeft: theme.space.$2,
      },
      'th:not(:first-of-type)': {
        paddingLeft: theme.space.$2,
      },
      'tr > td': {
        borderTop: theme.borders.$normal,
        borderColor: theme.colors.$blackAlpha100,
        paddingBottom: theme.space.$2,
        paddingTop: theme.space.$2,
        paddingLeft: theme.space.$4,
        paddingRight: theme.space.$4,
      },
      'tbody > :not([hidden])~:not([hidden])': {
        borderBottomWidth: '0px',
        borderTopWidth: '1px',
        borderStyle: 'solid',
        borderLeftWidth: '0px',
        borderRightWidth: '0px',
        borderColor: theme.colors.$blackAlpha100,
      },
      'tr > th:first-of-type': {
        paddingLeft: theme.space.$5,
      },
      'thead::after': {
        content: '""',
        display: 'block',
      },
    },
    variants: {},
  };
});

export type TableProps = PrimitiveProps<'table'> & Omit<BoxProps, 'as'> & StyleVariants<typeof applyVariants>;

export const Table = React.forwardRef<HTMLTableCellElement, TableProps>((props, ref) => {
  return (
    <Box
      as='table'
      {...filterProps(props)}
      css={applyVariants(props) as any}
      ref={ref}
    />
  );
});
