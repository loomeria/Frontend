// components/WhyChoose.tsx
import React from 'react';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import FeaturePoint from './FeaturePoint';

interface Feature {
  image_src: string;
  title: string;
  description: string;
  bgColor?: string;
}

export default function WhyChoose() {
  const features: Feature[] = [
    {
      image_src: "/why_choose_1.svg",
      title: 'Stock unique',
      bgColor:"bg-[#FAF7F0]",
      description: "Accédez à une sélection exclusive de vêtements d'occasion que vous ne trouverez nulle part ailleurs. Explorez notre catalogue renouvelé chaque semaine."
    },
    {
      image_src: "/why_choose_2.png",
      title: 'Histoire et Passion',
      bgColor:"bg-blue-100",
      description: "Chaque article a une histoire. Grâce aux descriptions des vendeurs, vous découvrez l'expérience derrière votre acquisition et contribuez à un développement durable."
    },
    {
      image_src: "/why_choose_3.png",
      title: 'Shopping Responsable',
      bgColor:"bg-[#FAF7F0]",
      description: "Votre décision d'acheter de l'occasion est écologiquement durable. Avec Loomeria, chaque achat contribue à un monde meilleur."
    }
  ];

  return (
    <section className="container mx-auto p-4 my-4">
      
      <div className="flex flex-col md:flex-row my-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image 
            src="/iPhone-16.png" 
            alt="Application Loomeria" 
            width={400} 
            height={500} 
            
          />
        </div>
        <div className="md:w-1/2 md:pl-12 flex flex-col justify-center">
          <SectionTitle withStar={true}>Pourquoi choisir Loomeria ?</SectionTitle>

          <p className="text-gray-600 mb-8">
            Imaginez une expérience de shopping qui change d&apos;internet est une réalité chez Loomeria. Voici pourquoi notre forte community vous fournira des produits qui concernent vos intérêts.
          </p>
          
          {features.map((feature, index) => (
            <FeaturePoint 
              key={index}
              image_src={feature.image_src}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
            />
          ))}
        <button className="bg-blue-800 text-white px-6 py-3 rounded-full">Je découvre Loomeria</button>
        </div>
      </div>
    </section>
  );
}

