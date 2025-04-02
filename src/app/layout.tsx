import "./globals.css";
import Header from './Component/Header';
import Footer from './Component/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loomeria - Le savoir-faire à portée de main',
  description: 'Plateforme de vente pour artisans et commerçants locaux',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="font-sans mx-auto bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
