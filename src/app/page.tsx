import Image from "next/image";
import { Product } from "./type";
import ProductItem from "./Component/ProductItem";


export default function Home() {
  const products: Product[] = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1457844/pexels-photo-1457844.jpeg",
      name: "Panier artisanal en osier fait main",
      price: "€45,00",
      description: "Un panier fait main avec des matériaux durables.",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/4721446/pexels-photo-4721446.jpeg",
      name: "Baguette artisanale de France",
      price: "€1,20",
      description: "Une baguette traditionnelle, faite à la main.",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/2045457/pexels-photo-2045457.jpeg",
      name: "Fromage artisanal",
      price: "€12,00",
      description:
        "Fromage de chèvre fabriqué selon des méthodes traditionnelles.",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/2178192/pexels-photo-2178192.jpeg",
      name: "Vin français bio",
      price: "€20,00",
      description: "Vin bio provenant de la région du Sud de la France.",
    },
  ];

  return (
    <div className="bg-white pb-20 font-[family-name:var(--font-geist-sans)] flex flex-col">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="relative w-full h-64 sm:h-80">
          <Image
            src="https://images.pexels.com/photos/3667116/pexels-photo-3667116.jpeg"
            alt="Couturier local"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Artisanat local, fait main
            </h2>
            <p className="mt-4 text-lg sm:text-xl">
              Découvrez nos produits créés avec passion par des artisans
              français
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 w-full px-4 sm:px-20 py-8">
          <div className="sm:w-2/3 bg-gray-100 hover:shadow-2xl p-4 rounded-lg transition-shadow duration-300 flex justify-end items-end">
            <button className="absolute rounded-xl py-2 px-4 text-black bg-green-200 hover:shadow-xl transition-shadow duration-300">
              Visiter la boutique
            </button>
          </div>
          <div className="sm:w-1/3 bg-gray-100 hover:shadow-2xl p-4 rounded-lg transition-shadow duration-300" />
        </div>

        <h1 className="text-2xl pl-4 sm:pl-20 text-black">
          Nos produits artisanaux
        </h1>
        <div className="flex flex-wrap gap-8 pl-4 sm:pl-20 pr-4 sm:pr-20 py-8">
          {products.map((produit) => (
            <>
            <ProductItem produit={produit} />
            </>
          ))}
        </div>
      </main>
    </div>
  );
}
