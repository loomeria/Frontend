
// components/PricingCard.tsx
import React from 'react';
import PricingFeature from './PricingFeature';

interface Feature {
  active: boolean;
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  features: Feature[];
  bgColor: string;
}

export default function PricingCard({ title, price, features, bgColor="bg-blue-50" }: PricingCardProps) {
  
  
  return (
    <div className={`border rounded-2xl p-6 flex flex-col cursor-pointer ${bgColor}`}>
      <h3 className="font-bold text-xl text-blue-900 mb-4">{title}</h3>
      
      <ul className="mb-8 flex-grow">
        {features.map((feature, index) => (
          <PricingFeature key={index} active={feature.active}>
            <span dangerouslySetInnerHTML={{ __html: feature.text }} />
          </PricingFeature>
        ))}
      </ul>
      
      <div className="mt-auto">
        <div className="text-4xl font-bold text-blue-900 mb-4 text-center">{price}</div>
      </div>
    </div>
  );
}
