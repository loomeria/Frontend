
// components/SectionTitle.tsx
import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  withStar?: boolean;
}

export default function SectionTitle({ children, withStar = false }: SectionTitleProps) {
  return (
    <h2 className="text-2xl font-bold text-blue-900 text-center mb-4">
      {children} {withStar && '⭐'}
    </h2>
  );
}
