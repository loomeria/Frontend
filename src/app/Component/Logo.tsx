import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  withText?: boolean;
}

export default function Logo({ withText = false }: LogoProps) {
  return (
    <Link href="/">
      <div className="flex items-center">
          <Image src="/logo-loomeria.png" alt="Loomeria Logo" width={40} height={40} />

        {withText && <span className="ml-2 text-xl font-bold text-blue-900">LOOMERIA</span>}
      </div>
    </Link>
  );
}