import AppPromo from "./Component/AppPromo";
import Hero from "./Component/Hero";
import Pricing from "./Component/Pricing";
import Values from "./Component/Values";
import WhyChoose from "./Component/WhyChoose";
import WhySell from "./Component/WhySell";

export default function Home() {
  return (
    <div className="bg-white max-w-7xl mx-auto  flex flex-col min-h-screen">
      <Hero />
      <Values />
      <WhyChoose />
      <WhySell />
      <Pricing />
      <AppPromo />
    </div>
    // <div className="bg-white flex flex-col min-h-screen">
    //   <div className="flex flex-1 items-center justify-between p-8">
    //     <div className="max-w-lg">
    //       <h1 className="text-4xl font-bold text-gray-800 mb-4">
    //         Le savoir-faire à portée de main
    //       </h1>
    //       <p className="text-gray-600 mb-6">
    //         Loomeria vous connecte directement avec des petits commerçants
    //         passionnés qui offrent des vêtements et accessoires uniques.
    //         Explorez une sélection variée, des pièces artisanales aux créations
    //         modernes, toutes accessibles en quelques clics.
    //       </p>
    //       <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
    //         Je télécharge l’application gratuitement
    //       </button>
    //     </div>
    //     <div className="flex-shrink-0">
    //       <img
    //         src="/iphone-15-pro.png"
    //         alt="Illustration"
    //         className="w-96 h-auto rounded-lg shadow-lg"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
