
// components/ValueCard.tsx
import React from 'react';
import Image from 'next/image';

interface ValueCardProps {
  title: string;
  description: string;
  imageSrc: string;
  bgColor?: string;
  resverse?: string;
}

export default function ValueCard({ title, description, imageSrc, bgColor = 'bg-blue-50',resverse="flex-row" }: ValueCardProps) {
  return (
    <div className={`flex ${resverse} p-4`}>
      <div className={`${bgColor} ${resverse=="flex-row"?"rounded-l-full rounded-tr-full":"rounded-r-full rounded-tl-full"} p-6  items-center `}>
        <h3 className="text-2xl text-center font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-lg text-center w-[70%] mx-auto ">{description}</p>
      </div>
      <div className="ml-4 flex-1  content-center">
        <Image src={imageSrc} alt={title} width={300} height={200} className="rounded-full" />
      </div>
    </div>
  );
}

