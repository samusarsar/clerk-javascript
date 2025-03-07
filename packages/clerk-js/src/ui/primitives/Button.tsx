import type { PropsWithChildren } from 'react';
import React from 'react';

import { descriptors, Icon, Spinner } from '../customizables';
import { ArrowRightButtonIcon } from '../icons';
import type { PrimitiveProps, StyleVariants } from '../styledSystem';
import { common, createVariants } from '../styledSystem';
import { applyDataStateProps } from './applyDataStateProps';
import { Flex } from './Flex';

const { applyVariants, filterProps } = createVariants((theme, props: OwnProps) => {
  return {
    base: {
      margin: 0,
      padding: 0,
      border: 0,
      outline: 0,
      userSelect: 'none',
      cursor: 'pointer',
      backgroundColor: 'unset',
      color: 'currentColor',
      borderRadius: theme.radii.$md,
      position: 'relative',
      isolation: 'isolate',
      ...common.centeredFlex('inline-flex'),
      ...common.disabled(theme),
      transitionProperty: theme.transitionProperty.$common,
      transitionDuration: theme.transitionDuration.$controls,
    },
    variants: {
      textVariant: common.textVariants(theme),
      size: {
        iconLg: { minHeight: theme.sizes.$13, width: theme.sizes.$13 },
        xs: { minHeight: theme.sizes.$1x5, padding: `${theme.space.$1} ${theme.space.$2}` },
        sm: {
          minHeight: theme.sizes.$7,
          padding: `${theme.space.$1x5} ${theme.space.$3x5}`,
        },
        md: {
          minHeight: theme.sizes.$9,
          padding: `${theme.space.$2x5} ${theme.space.$5}`,
        },
      },
      variant: {
        primary: {
          backgroundColor: theme.colors.$primary500,
          color: theme.colors.$colorTextOnPrimaryBackground,
          boxShadow: theme.shadows.$buttonShadow,
          border: theme.borders.$normal,
          borderColor: theme.colors.$primary800,
          ':before': {
            position: 'absolute',
            content: '""',
            borderRadius: 'inherit',
            zIndex: -1,
            inset: 0,
            background: `linear-gradient(180deg, ${theme.colors.$whiteAlpha150} 0%, ${theme.colors.$transparent} 100%)`,
          },
          ':after': {
            position: 'absolute',
            content: '""',
            borderRadius: 'inherit',
            zIndex: -1,
            inset: 0,
            opacity: 0,
            transitionProperty: theme.transitionProperty.$common,
            transitionDuration: theme.transitionDuration.$controls,
            background: `linear-gradient(180deg, ${theme.colors.$whiteAlpha100} 0%, ${theme.colors.$transparent} 100%)`,
          },
          ':hover::after': {
            opacity: 1,
          },
          ':active::after': {
            opacity: 0,
          },
        },
        primaryDanger: {
          backgroundColor: theme.colors.$danger500,
          color: theme.colors.$colorTextOnPrimaryBackground,
          boxShadow: theme.shadows.$buttonShadow,
          border: theme.borders.$normal,
          borderColor: theme.colors.$danger800,
          ':before': {
            position: 'absolute',
            content: '""',
            borderRadius: 'inherit',
            zIndex: -1,
            inset: 0,
            background: `linear-gradient(180deg, ${theme.colors.$whiteAlpha300} 0%, ${theme.colors.$transparent} 100%)`,
          },
          ':after': {
            position: 'absolute',
            content: '""',
            borderRadius: 'inherit',
            zIndex: -1,
            inset: 0,
            opacity: 0,
            transitionProperty: theme.transitionProperty.$common,
            transitionDuration: theme.transitionDuration.$controls,
            background: `linear-gradient(180deg, ${theme.colors.$whiteAlpha200} 0%, ${theme.colors.$transparent} 100%)`,
          },
          ':hover::after': {
            opacity: 1,
          },
          ':active::after': {
            opacity: 0,
          },
        },
        secondary: {
          backgroundColor: theme.colors.$colorBackground,
          color: theme.colors.$blackAlpha700,
          '&:hover': {
            backgroundColor: theme.colors.$blackAlpha50,
            color: theme.colors.$blackAlpha950,
          },
          '&:focus': props.hoverAsFocus
            ? { backgroundColor: theme.colors.$blackAlpha50, color: theme.colors.$blackAlpha950 }
            : undefined,
          '&:active': { backgroundColor: theme.colors.$colorBackground },
          boxShadow: theme.shadows.$secondaryButtonShadow,
          border: theme.borders.$normal,
          borderColor: theme.colors.$blackAlpha100,
        },
        secondaryDanger: {
          backgroundColor: theme.colors.$colorBackground,
          color: theme.colors.$danger500,
          '&:hover': {
            backgroundColor: theme.colors.$dangerAlpha50,
            color: theme.colors.$danger500,
          },
          '&:focus': props.hoverAsFocus
            ? { backgroundColor: theme.colors.$dangerAlpha50, color: theme.colors.$danger500 }
            : undefined,
          '&:active': { backgroundColor: theme.colors.$colorBackground },
          boxShadow: theme.shadows.$secondaryButtonShadow,
          border: theme.borders.$normal,
          borderColor: theme.colors.$blackAlpha100,
        },
        ghost: {
          color: theme.colors.$blackAlpha700,
          '&:hover': { backgroundColor: theme.colors.$blackAlpha50, color: theme.colors.$blackAlpha950 },
          '&:focus': props.hoverAsFocus
            ? { backgroundColor: theme.colors.$blackAlpha50, color: theme.colors.$blackAlpha950 }
            : undefined,
          '&:active': { backgroundColor: theme.colors.$transparent },
        },
        ghostPrimary: {
          color: theme.colors.$primary500,
          '&:hover': { backgroundColor: theme.colors.$blackAlpha50, color: theme.colors.$primary500 },
          '&:focus': props.hoverAsFocus ? { backgroundColor: theme.colors.$blackAlpha50 } : undefined,
          '&:active': { backgroundColor: theme.colors.$transparent },
        },
        ghostDanger: {
          color: theme.colors.$danger500,
          '&:hover': { backgroundColor: theme.colors.$dangerAlpha50, color: theme.colors.$danger500 },
          '&:focus': props.hoverAsFocus ? { backgroundColor: theme.colors.$danger50 } : undefined,
          '&:active': { backgroundColor: theme.colors.$transparent },
        },
        link: {
          ...common.textVariants(theme).buttonSmall,
          minHeight: 'fit-content',
          height: 'fit-content',
          width: 'fit-content',
          textTransform: 'none',
          padding: 0,
          color: theme.colors.$primary500,
          '&:hover': { textDecoration: 'underline' },
          '&:focus': props.hoverAsFocus ? { textDecoration: 'underline' } : undefined,
        },
        linkDanger: {
          ...common.textVariants(theme).buttonSmall,
          minHeight: 'fit-content',
          height: 'fit-content',
          width: 'fit-content',
          textTransform: 'none',
          padding: 0,
          color: theme.colors.$danger500,
          '&:hover': { textDecoration: 'underline' },
          '&:focus': props.hoverAsFocus ? { textDecoration: 'underline' } : undefined,
        },
        unstyled: {},
        roundWrapper: { padding: 0, margin: 0, height: 'unset', width: 'unset', minHeight: 'unset' },
      },
      block: {
        true: { width: '100%' },
      },
      focusRing: {
        true: { ...common.focusRing(theme) },
      },
    },
    defaultVariants: {
      textVariant: 'buttonLarge',
      variant: 'primary',
      size: 'sm',
      focusRing: true,
    },
  };
});
type OwnProps = PrimitiveProps<'button'> & {
  isLoading?: boolean;
  loadingText?: string;
  isDisabled?: boolean;
  isActive?: boolean;
  hoverAsFocus?: boolean;
  hasArrow?: boolean;
};

type ButtonProps = OwnProps & StyleVariants<typeof applyVariants>;

const ButtonChildrenWithArrow = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      align='center'
      as='span'
    >
      {children}
      <Icon
        elementDescriptor={descriptors.buttonArrowIcon}
        icon={ArrowRightButtonIcon}
        sx={t => ({
          marginLeft: t.space.$2,
          width: t.sizes.$2x5,
          height: t.sizes.$2x5,
          opacity: t.opacity.$inactive,
        })}
      />
    </Flex>
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const parsedProps: ButtonProps = { ...props, isDisabled: props.isDisabled || props.isLoading };
  const {
    isLoading,
    isDisabled,
    hoverAsFocus,
    loadingText,
    children,
    hasArrow,
    onClick: onClickProp,
    ...rest
  } = filterProps(parsedProps);

  const onClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    if (rest.type !== 'submit') {
      e.preventDefault();
    }
    return onClickProp?.(e);
  };

  return (
    <button
      {...applyDataStateProps(rest)}
      // Explicitly remove type=submit or type=button
      // to prevent global css resets (eg tailwind) from affecting
      // the default styles of our components
      type={undefined}
      onClick={onClick}
      disabled={isDisabled}
      css={applyVariants(parsedProps) as any}
      ref={ref}
    >
      {isLoading && (
        <Flex
          as='span'
          gap={2}
          center
          css={{
            position: 'relative',
          }}
        >
          <Spinner
            aria-label={loadingText || 'Loading'}
            elementDescriptor={descriptors.spinner}
            sx={{
              position: loadingText ? undefined : 'absolute',
            }}
          />
          {loadingText || <span style={{ opacity: 0 }}>{children}</span>}
        </Flex>
      )}
      {!isLoading && (hasArrow ? <ButtonChildrenWithArrow>{children}</ButtonChildrenWithArrow> : children)}
    </button>
  );
});

const SimpleButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const parsedProps: ButtonProps = { ...props, isDisabled: props.isDisabled || props.isLoading };

  const { loadingText, isDisabled, hoverAsFocus, children, onClick: onClickProp, ...rest } = filterProps(parsedProps);

  const onClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    if (rest.type !== 'submit') {
      e.preventDefault();
    }
    return onClickProp?.(e);
  };

  return (
    <button
      {...applyDataStateProps(rest)}
      // Explicitly remove type=submit or type=button
      // to prevent global css resets (eg tailwind) from affecting
      // the default styles of our components
      type={undefined}
      onClick={onClick}
      css={applyVariants(parsedProps) as any}
      disabled={isDisabled}
      ref={ref}
    >
      {children}
    </button>
  );
});

export { Button, SimpleButton };
