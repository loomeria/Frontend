
// components/Pricing.tsx
import React from 'react';
import SectionTitle from './SectionTitle';
import PricingCard from './PricingCard';

interface PricingPlan {
  title: string;
  price: string;
  features: Array<{
    active: boolean;
    text: string;
  }>;
  bgColor: string;
}

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      title: 'Tarif Gratuit',
      price: '0,0 €',
      bgColor:"bg-blue-50",
      features: [
        { active: true, text: 'Création jusqu\'à <strong>5 articles</strong>' },
        { active: false, text: '<strong>Assistance rapide</strong> en cas de besoin' },
        { active: false, text: 'Visibilité sur notre <strong>page d\'accueil</strong>' },
        { active: false, text: 'Statistiques <strong>de base</strong> des visites et commandes' },
        { active: false, text: 'Promotion <strong>occasionnelle</strong> de vos articles sur notre page Instagram' }
      ]
    },
    {
      title: 'Tarif Standard',
      price: '9,9 €/mois',
      bgColor:"bg-blue-100",
      features: [
        { active: true, text: 'Création <strong>jusqu\'à 50 articles</strong>' },
        { active: true, text: '<strong>Assistance rapide</strong> en cas de besoin' },
        { active: true, text: 'Mise en avant de vos <strong>6 meilleurs articles</strong> pour plus de visibilité' },
        { active: false, text: 'Statistiques <strong>détaillées</strong> des performances' },
        { active: false, text: 'Promotion <strong>occasionnelle</strong> de vos articles' }
      ]
    },
    {
      title: 'Tarif Standard',
      price: '19,9 €/mois',
      bgColor:"bg-blue-200",
      features: [
        { active: true, text: 'Création <strong>sans limite</strong> d\'articles' },
        { active: true, text: '<strong>Assistance rapide</strong> en cas de besoin' },
        { active: true, text: 'Mise en avant <strong>jusqu\'à 20 articles</strong> pour plus de visibilité' },
        { active: true, text: 'Toutes les <strong>performances</strong> et statistiques <strong>avancées</strong>' },
        { active: true, text: 'Promotion <strong>hebdomadaire</strong> sur nos réseaux sociaux' },
        { active: true, text: 'Participation aux <strong>formations</strong> en ligne pour les commerçants' }
      ],
     
    }
  ];

  return (
    <section className="container mx-auto p-4 my-4">
      <SectionTitle>Tarifs pour les vendeurs</SectionTitle>
      <div className="text-center">
        <button className="bg-blue-800 text-white px-6 py-3 rounded-full">Je vends sur Loomeria</button>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {plans.map((plan, index) => (
          <PricingCard 
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            bgColor={plan.bgColor}
          />
        ))}
      </div>
    </section>
  );
}
