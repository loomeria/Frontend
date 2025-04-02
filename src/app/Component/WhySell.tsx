// components/WhySell.tsx
import React from 'react';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import ColoredCard from './ColoredCard';

interface SellingPoint {
  color: 'yellow' | 'blue' | 'indigo';
  title: string;
  description: string;
  wight?: string;
}

export default function WhySell() {
  const sellingPoints: SellingPoint[] = [
    {
      color: 'yellow',
      title: '👁️ Visibilité Accrue',
      description: 'Profitez de notre communauté active pour mettre en avant vos créations et toucher de nouveaux clients passionnés.',
      wight: 'w-[70%]'
    },
    {
      color: 'blue',
      title: '📲 Outils de Gestion Simplifiés',
      wight: 'w-[80%]',
      description: 'Gérez facilement vos ventes avec notre interface intuitive. Suivez vos performances et consultez vos analyses en quelques clics.'
    },
    {
      color: 'indigo',
      title: '🫱🏻‍🫲🏻 Communauté Engagée',
      wight: 'w-[90%]',
      description: 'Rejoignez nos créateurs passionnés qui partagent vos valeurs. Ensemble, nous créons une mode plus éthique.'
    }
  ];

  return (
    <section className="container mx-auto p-4 my-4">
      <SectionTitle>Pourquoi vendre sur Loomeria ? 🧵</SectionTitle>
      
      <div className="flex flex-col md:flex-row-reverse my-12">
        <div className="md:w-1/2 mb-8 justify-center md:mb-0 md:pl-8">
          <Image 
            src="/iPhone-13-Pro.png" 
            alt="Vendre sur Loomeria" 
            width={400} 
            height={500} 
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-gray-600 mb-8">
            Rejoignez une communauté dynamique de créateurs passionnés qui partagent votre amour pour la mode éthique, vendent leurs créations uniques et touchent une audience engagée.
          </p>
          
          {sellingPoints.map((point, index) => (
            <ColoredCard 
              key={index}
              color={point.color}
              title={point.title}
              description={point.description}
              wight={point.wight}
            />
          ))}
        </div>
      </div>
      
 
    </section>
  );
}

