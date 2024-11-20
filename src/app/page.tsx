import Carousel from "@/app/Composant/Carousel";

export default function Home() {

  return (
    <div className="bg-white pb-20 font-[family-name:var(--font-geist-sans)] flex flex-col min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex h-96 gap-8 w-full pl-20 pr-20">
          <div className="w-2/3 bg-gray-100 hover:shadow-2xl p-4 rounded-lg transition-shadow duration-300 flex justify-end items-end">
            <button className=" absolute rounded-xl py-2 px-4 text-black bg-green-200 hover:shadow-xl transition-shadow duration-300">Visiter la boutique</button>

          </div>
          <div className="w-1/3 bg-gray-100 hover:shadow-2xl p-4 rounded-lg transition-shadow duration-300"/>
        </div>

        <div className="flex h-96 gap-8 w-full lg:w-full pl-20 pr-20">
          <div className="w-1/3 bg-gray-100 hover:shadow-2xl p-4 rounded-lg transition-shadow duration-300"/>
          <div className="w-2/3 bg-gray-100 hover:shadow-2xl p-4 rounded-lg transition-shadow duration-300"/>
        </div>
        <h1 className="text-2xl pl-20 text-black">Les dernières boutiques</h1>
          <Carousel></Carousel>
      </main>
      <div className="flex-grow-0"></div>
    </div>
  );
}
