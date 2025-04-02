import "./globals.css";

// components/Layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Component/Header';
import Footer from './Component/Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'Loomeria' }: LayoutProps) {
  return (

    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
    <div className="font-sans  mx-auto bg-white">
      <Head>
        <title>{title} - Le savoir-faire à portée de main</title>
        <meta name="description" content="Plateforme de vente pour artisans et commerçants locaux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
    </body>
    </html>

  );
}
