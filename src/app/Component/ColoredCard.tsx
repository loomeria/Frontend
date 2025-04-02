// components/ColoredCard.tsx
import React from 'react';

interface ColoredCardProps {
  color: 'yellow' | 'blue' | 'indigo';
  title: string;
  description: string;
  wight?: string;
}

export default function ColoredCard({ color, title, description,wight }: ColoredCardProps) {
  const bgColor = {
    yellow: 'bg-yellow-100',
    blue: 'bg-blue-100',
    indigo: 'bg-indigo-100'
  };


  return (
    <div className={`${bgColor[color]} ${wight} rounded-xl rounded-r-full p-4 mb-4`}>
      <div className="flex items-center mb-2">
        <h3 className="font-bold text-blue-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
