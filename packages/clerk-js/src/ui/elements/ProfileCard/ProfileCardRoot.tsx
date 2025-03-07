import React from 'react';

import { Box, descriptors, Icon } from '../../customizables';
import { Close } from '../../icons';
import type { PropsOfComponent } from '../../styledSystem';
import { mqu } from '../../styledSystem';
import { IconButton, useUnsafeModalContext } from '..';
import { Card } from '../Card';

export const ProfileCardRoot = React.forwardRef<HTMLDivElement, PropsOfComponent<typeof Card.Root>>((props, ref) => {
  const { sx, children, ...rest } = props;
  const { toggle } = useUnsafeModalContext();

  return (
    <Card.Root
      ref={ref}
      sx={[
        t => ({
          width: t.sizes.$220,
          maxWidth: `calc(100vw - ${t.sizes.$16})`,
          display: 'flex',
          flexDirection: 'row',
          [mqu.md]: {
            display: 'flex',
            flexDirection: 'column',
          },
          overflow: 'hidden',
          height: t.sizes.$176,
          position: 'relative',
        }),
        sx,
      ]}
      {...rest}
    >
      {toggle && (
        <Box
          sx={t => ({
            [mqu.md]: {
              padding: `${t.space.$1x5} ${t.space.$2}`,
              top: t.space.$none,
              right: t.space.$none,
            },
            zIndex: t.zIndices.$modal,
            position: 'absolute',
            top: t.space.$0x5,
            right: t.space.$2,
          })}
        >
          <IconButton
            elementDescriptor={descriptors.modalCloseButton}
            variant='ghost'
            aria-label='Close modal'
            onClick={toggle}
            icon={
              <Icon
                icon={Close}
                size='sm'
              />
            }
            sx={t => ({
              color: t.colors.$colorTextTertiary,
              padding: t.space.$3,
            })}
          />
        </Box>
      )}
      {children}
      <Card.Footer
        sx={{
          display: 'none',
          [mqu.md]: {
            display: 'flex',
          },
        }}
      />
    </Card.Root>
  );
});
