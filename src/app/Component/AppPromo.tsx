// components/AppPromo.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';

export default function AppPromo() {
  return (
    <section className="container mx-auto p-4 my-16 text-center">
      <SectionTitle>Rejoignez l&apos;aventure de mode</SectionTitle>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Prêt à découvrir le meilleur de la mode faite main ? Téléchargez l&apos;application pour explorer des créations des créateurs de talent et rejoignez notre communauté.
      </p>
      
      <div className="flex justify-center space-x-4 mb-8">
        <Link href="/">
          <Image 
            src="/App-store.png" 
            alt="App Store" 
            width={150} 
            height={50} 
          />
        </Link>
        <Link href="/">
          <Image 
            src="/Gplay.png" 
            alt="Google Play" 
            width={150} 
            height={50} 
          />
        </Link>
      </div>
      
      <div className="flex bg-yellow-50 rounded-full justify-center">
        <Image 
          src="/iPhone-16-b.png" 
          alt="Application Loomeria" 
          width={600} 
          height={300} 
        />
        <Image 
          className='-ml-[15rem]'
          src="/iPhone-15-b.png" 
          alt="Application Loomeria" 
          width={600} 
          height={300} 
        />
      </div>
    </section>
  );
}
