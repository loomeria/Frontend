// components/PricingFeature.tsx
import React, { ReactNode } from 'react';

interface PricingFeatureProps {
  active: boolean;
  children: ReactNode;
}

export default function PricingFeature({ active, children }: PricingFeatureProps) {
  return (
    <li className="flex items-start mb-3 text-gray-500">
      <span className={active ? "" : "line-through"}>{children}</span>
    </li>
  );
}
