"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [indicatorStyle, setIndicatorStyle] = useState<{ width: string, left: string }>({ width: '0px', left: '0px' });
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const menuItems = {
        products: {
            title: 'Produits',
            items: [
                { name: 'Vue d\'ensemble', href: '/products' },
                { name: 'Fonctionnalités', href: '/products/features' },
                { name: 'Solutions', href: '/products/solutions' },
            ],
        },
        resources: {
            title: 'Créateurs',
            items: [
                { name: 'Liste des créateurs', href: '/createurs' },
                { name: 'Devenir Créateurs', href: '/resources/blog' },
                { name: 'Guides', href: '/resources/guides' },
            ],
        },
        company: {
            title: 'Entreprise',
            items: [
                { name: 'À propos', href: '/company/about' },
                { name: 'Carrières', href: '/company/careers' },
                { name: 'Contact', href: '/company/contact' },
            ],
        },
        support: {
            title: 'Support',
            items: [
                { name: 'Aide', href: '/support/help' },
                { name: 'FAQ', href: '/support/faq' },
                { name: 'Service client', href: '/support/customer-service' },
            ],
        },
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, key: string) => {
        // Clear existing timeout if there's any
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        const target = e.currentTarget;
        const { offsetWidth, offsetLeft } = target;
        setIndicatorStyle({
            width: `${offsetWidth}px`,
            left: `${offsetLeft}px`,
        });
        setOpenMenu(key);
    };

    const handleMouseLeave = () => {
        const newTimeoutId = setTimeout(() => {
            setIndicatorStyle({ width: '0px', left: '0px' });
            setOpenMenu(null);
        }, 300); // délais de 300ms avant que l'indicateur retourne à gauche
        setTimeoutId(newTimeoutId);
    };

    return (
        <header className="bg-white shadow-md py-4">
            <div className="ml-20 mr-20 px-4">
                <div className="relative flex h-16 items-center justify-between gap-8">
                    {/* Logo */}
                    <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200">
                        <Link href="/" className="text-2xl font-bold text-green-300">
                            P&apos;tits Créateurs
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex justify-center flex-1 items-center space-x-8 relative">
                        <div
                            style={indicatorStyle}
                            className="absolute bottom-0 h-0.5 bg-green-300 transition-all duration-200"
                        />
                        {Object.entries(menuItems).map(([key, category]) => (
                            <div
                                key={key}
                                className="relative"
                                onMouseEnter={(e) => handleMouseEnter(e, key)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="relative z-10 flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium">
                                    {category.title}
                                </button>

                                {openMenu === key && (
                                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu">
                                            {category.items.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    role="menuitem"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                    {/* Search Bar */}
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="w-64 px-4 py-2 border-4 rounded-2xl focus:outline-none focus:border-green-300"
                        />
                    </div>
                    {/* Page Button */}
                    <div className="flex items-center">
                        <Link href="/login/" className="flex items-center space-x-2 text-base font-medium text-gray-700 hover:text-gray-900">
                            <span>Connexion</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.943l-3.072-3.072a.75.75 0 111.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06-1.06l3.072-3.072H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
