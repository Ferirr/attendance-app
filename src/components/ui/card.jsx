import React from 'react';

export function Card({ children, className, style }) {
  return (
    <div className={`bg-white ${className}`} style={style}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
