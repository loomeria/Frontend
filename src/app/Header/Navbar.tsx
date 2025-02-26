"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";

export function Header() {
  const menuItems = {
    products: {
      title: "Produits",
      items: [
        { name: "Vue d'ensemble", href: "/products" },
        { name: "Fonctionnalités", href: "/products/features" },
        { name: "Solutions", href: "/products/solutions" },
      ],
    },
    resources: {
      title: "Créateurs",
      items: [
        { name: "Liste des créateurs", href: "/createurs" },
        { name: "Devenir Créateurs", href: "/resources/blog" },
        { name: "Guides", href: "/resources/guides" },
      ],
    },
    company: {
      title: "Entreprise",
      items: [
        { name: "À propos", href: "/company/about" },
        { name: "Carrières", href: "/company/careers" },
        { name: "Contact", href: "/company/contact" },
      ],
    },
    support: {
      title: "Support",
      items: [
        { name: "Aide", href: "/support/help" },
        { name: "FAQ", href: "/support/faq" },
        { name: "Service client", href: "/support/customer-service" },
      ],
    },
  };

  return (
    <nav className="bg-white dark:bg-gray-800 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <Navbar fluid rounded>
          <Navbar.Brand href="https://flowbite-react.com">
            <Image
              src="/favicon.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
              width={50}
              height={50}
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Loomeria
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Boubacar Diallo</span>
                <span className="block truncate text-sm font-medium">
                  ladialloboubacar@gmail.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="/" active>
              Home
            </Navbar.Link>
            {Object.entries(menuItems).map(([key, category]) => (
              <Dropdown
                key={key}
                label={category.title}
                inline
                arrowIcon={true}
              >
                {category.items.map((item) => (
                  <Dropdown.Item key={item.href} href={item.href}>
                    {item.name}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </nav>
  );
}
