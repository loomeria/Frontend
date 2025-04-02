
// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="container mx-auto p-4 flex justify-between items-center">
      <Logo />
      <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
        <Link href="/">Qui sommes nous?</Link>
        <Link href="/">Aide vendeurs</Link>
        <Link href="/">Acheter sur Loomeria</Link>
        <Link href="/">Vendre sur Loomeria</Link>
        <Link href="/">Nous écrire</Link>
      </nav>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Télécharger l&apos;application</button>
    </header>
  );
}