import React from 'react';

export function Button({ children, variant = 'default', size, ...props }) {
  const base = 'px-4 py-2 rounded cursor-pointer';
  const variants = {
    default: 'bg-blue-500 text-white',
    outline: 'border border-blue-500 text-blue-500',
  };
  const sizes = {
    sm: 'text-sm',
    lg: 'text-lg',
  };
  const cls = [
    base,
    variants[variant] || variants.default,
    size ? sizes[size] : '',
  ].join(' ');

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
