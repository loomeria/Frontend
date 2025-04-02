// components/SocialIcon.tsx
import React from 'react';
import { IconType } from 'react-icons';

interface SocialIconProps {
  Icon: IconType;
}

export default function SocialIcon({ Icon }: SocialIconProps) {
  return (
    <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-blue-800">
      <Icon />
    </a>
  );
}