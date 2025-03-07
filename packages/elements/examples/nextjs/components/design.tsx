import type { ComponentPropsWithoutRef } from 'react';

export const H1 = (props: ComponentPropsWithoutRef<'h1'>) => (
  <h1 // eslint-disable-line jsx-a11y/heading-has-content
    className='text-xl mb-6 font-mono'
    {...props}
  />
);

export const H2 = (props: ComponentPropsWithoutRef<'h2'>) => (
  <h2 // eslint-disable-line jsx-a11y/heading-has-content
    className='text-l mb-4 font-mono'
    {...props}
  />
);

export const H3 = (props: ComponentPropsWithoutRef<'h3'>) => (
  <h3 // eslint-disable-line jsx-a11y/heading-has-content
    className='text-m mb-3 font-mono'
    {...props}
  />
);

export const P = (props: ComponentPropsWithoutRef<'p'>) => (
  <p
    className='text-sm font-mono'
    {...props}
  />
);

export const HR = (props: ComponentPropsWithoutRef<'hr'>) => (
  <hr
    className='w-full border-foreground opacity-10'
    {...props}
  />
);

export function Button(props: React.ComponentProps<'button'>) {
  return (
    <button
      className='px-4 py-2 b-1 bg-blue-950 bg-opacity-20 hover:bg-opacity-10 active:bg-opacity-5 rounded-md dark:bg-opacity-100 dark:hover:bg-opacity-80 dark:active:bg-opacity-50 transition'
      type='button'
      {...props}
    />
  );
}
