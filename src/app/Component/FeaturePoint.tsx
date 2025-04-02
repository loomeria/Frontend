// components/FeaturePoint.tsx
import React from "react";
import Image from "next/image";

interface FeaturePointProps {
  image_src: string;
  title: string;
  description: string;
  bgColor?: string;
}

export default function FeaturePoint({
  image_src,
  title,
  description,
  bgColor = "bg-blue-50",
}: FeaturePointProps) {
  return (
    <div className="mb-6 flex">
      <div className=" items-center mb-2">
        <div className={`${bgColor} h-full flex justify-center items-center w-24 bg-blue-100 p-2 rounded-tl-3xl rounded-br-3xl mr-4`}>
          <Image className="content-center" alt={title} src={image_src} width={40} height={40} />
        </div>
      </div>
      <div className="">
        <h3 className="font-bold text-blue-900">{title}</h3>
        <p className="text-gray-600 ">{description}</p>
      </div>
    </div>
  );
}
