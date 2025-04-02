"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";

export function Header() {
  return (
    <nav className="bg-white dark:bg-gray-800 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="w-3/4 mx-auto">
          <Navbar
            fluid={false}
            rounded
            className="rounded-full shadow-lg fixed top-12 left-0 right-0 z-50 bg-white dark:bg-gray-800"
          >
            <Navbar.Brand href="/">
              <Image
                src="/logo-loomeria.png"
                className="mr-3"
                alt="Flowbite React Logo"
                width={60}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </Navbar.Brand>

            <Navbar.Collapse className="flex justify-center space-x-12">
              <Navbar.Link href="#qui-sommes-nous">Qui sommes-nous</Navbar.Link>
              <Navbar.Link href="#nos-valeurs">Nos valeurs</Navbar.Link>
              <Navbar.Link href="#acheter-sur-loomeria">
                Acheter sur Loomeria
              </Navbar.Link>
              <Navbar.Link href="#vendre-sur-loomeria">
                Vendre sur Loomeria
              </Navbar.Link>
              <Navbar.Link href="#nos-tarifs">Nos tarifs</Navbar.Link>
            </Navbar.Collapse>
            <Navbar.Collapse className="flex justify-end">
              <button
                className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition text-md flex items-center"
                onClick={() => (window.location.href = "#decouvrir-loomeria")}
              >
                ✨Découvrir Loomeria
              </button>
            </Navbar.Collapse>
            <div className="fixed top-36 left-12  flex justify-center space-x-4 z-50">
              <Image
                src="/FB.png"
                alt="Logo 1"
                width={20}
                height={20}
                className="rounded-full shadow-md"
              />
              <Image
                src="/inst.png"
                alt="Logo 2"
                width={20}
                height={20}
                className="rounded-full shadow-md"
              />
              <Image
                src="/vector.png"
                alt="Logo 3"
                width={20}
                height={20}
                className="rounded-full shadow-md"
              />
            </div>
          </Navbar>
        </div>
      </div>
    </nav>
  );
}
