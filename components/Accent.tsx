import React, { ComponentPropsWithRef } from 'react';
import clsx from 'clsx';

type AccentType = ComponentPropsWithRef<'span'>;

export default function Accent({ children, className }: AccentType) {
  return (
    <span className={clsx(className, 'transition-colors bg-primary-300')}>
      {children}
    </span>
  );
}
