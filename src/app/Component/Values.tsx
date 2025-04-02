// components/Values.tsx
import React from 'react';
import SectionTitle from './SectionTitle';
import ValueCard from './ValueCard';

interface ValueItem {
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
}

export default function Values() {
  const values: ValueItem[] = [
    {
      title: 'Artisanat authentique',
      description: 'Nous croyons en la valeur du fait main. Chaque pièce est unique, confectionnée avec soin par des créateurs talentueux.',
      imageSrc: '/valeur_1.png',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Soutien aux commerçants locaux',
      description: 'Loomeria met en avant les petits commerçants qui offrent des alternatives plus éthiques et durables aux produits.',
      imageSrc: '/valeur_2.png',
      bgColor: 'bg-[#FAF7F0] border'
    },
    {
      title: 'Éthique et Durabilité',
      description: 'Nous nous engageons pour des pratiques éthiques de consommation responsable qui valorisent des vêtements qui durent.',
      imageSrc: '/valeur_3.png',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto p-4 my-4">
      <SectionTitle>Nos valeurs</SectionTitle>
      
      <div className="grid md:grid-cols-1 gap-8 mt-12">
        {values.map((value, index) => (
          <ValueCard 
            key={index}
            title={value.title}
            description={value.description}
            imageSrc={value.imageSrc} 
            bgColor={value.bgColor}
            resverse={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
          />
        ))}
      </div>
    </section>
  );
}
