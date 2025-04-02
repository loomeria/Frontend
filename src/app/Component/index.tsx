// // components/Layout.js
// import Head from 'next/head'
// import Header from './Header'
// import Footer from './Footer'

// export default function Layout({ children, title = 'Loomeria' }) {
//   return (
//     <div className="font-sans">
//       <Head>
//         <title>{title} - Le savoir-faire à portée de main</title>
//         <meta name="description" content="Plateforme de vente pour artisans et commerçants locaux" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   )
// }

// // components/Header.js
// import Link from 'next/link'
// import Logo from './Logo'

// export default function Header() {
//   return (
//     <header className="container mx-auto p-4 flex justify-between items-center">
//       <Logo />
//       <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
//         <Link href="/">Qui sommes nous?</Link>
//         <Link href="/">Aide vendeurs</Link>
//         <Link href="/">Acheter sur Loomeria</Link>
//         <Link href="/">Vendre sur Loomeria</Link>
//         <Link href="/">Nous écrire</Link>
//       </nav>
//       <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Télécharger l'application</button>
//     </header>
//   )
// }

// // components/Logo.js
// import Link from 'next/link'

// export default function Logo({ withText = false }) {
//   return (
//     <Link href="/">
//       <div className="flex items-center">
//         <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold">
//           <span>L</span>
//         </div>
//         {withText && <span className="ml-2 text-xl font-bold text-blue-900">LOOMERIA</span>}
//       </div>
//     </Link>
//   )
// }

// // components/Hero.js
// import Image from 'next/image'

// export default function Hero() {
//   return (
//     <div className="container mx-auto p-4 flex flex-col md:flex-row items-center mt-10">
//       <div className="md:w-1/2 mb-8 md:mb-0 pr-8">
//         <h1 className="text-3xl font-bold text-blue-900 mb-4">Le savoir-faire à portée de main</h1>
//         <p className="text-gray-600 mb-6">
//           Rejoignez une communauté dynamique de créateurs, passionnés et commerçants locaux. Partagez vos créations, votre passion pour l'artisanat et connectez-vous avec une communauté engagée.
//         </p>
//         <button className="bg-blue-800 text-white px-6 py-3 rounded-full">Je télécharge l'application gratuitement</button>
//       </div>
//       <div className="md:w-1/2">
//         <Image 
//           src="/images/phones.png" 
//           alt="Loomeria application" 
//           width={500} 
//           height={400} 
//           className="object-contain"
//         />
//       </div>
//     </div>
//   )
// }

// // components/SectionTitle.js
// export default function SectionTitle({ children, withStar = false }) {
//   return (
//     <h2 className="text-2xl font-bold text-blue-900 text-center mb-4">
//       {children} {withStar && '⭐'}
//     </h2>
//   )
// }

// // components/ValueCard.js
// import Image from 'next/image'

// export default function ValueCard({ title, description, imageSrc, bgColor = 'bg-blue-50' }) {
//   return (
//     <div className={`${bgColor} rounded-xl p-6 flex items-center`}>
//       <div className="flex-1">
//         <h3 className="text-lg font-bold text-blue-900 mb-2">{title}</h3>
//         <p className="text-gray-600">{description}</p>
//       </div>
//       <div className="ml-4">
//         <Image src={imageSrc} alt={title} width={120} height={120} className="rounded-xl" />
//       </div>
//     </div>
//   )
// }

// // components/Values.js
// import SectionTitle from './SectionTitle'
// import ValueCard from './ValueCard'

// export default function Values() {
//   const values = [
//     {
//       title: 'Artisanat authentique',
//       description: 'Nous croyons en la valeur du fait main. Chaque pièce est unique, confectionnée avec soin par des créateurs talentueux.',
//       imageSrc: '/images/artisanat.png',
//       bgColor: 'bg-blue-50'
//     },
//     {
//       title: 'Soutien aux commerçants locaux',
//       description: 'Loomeria met en avant les petits commerçants qui offrent des alternatives plus éthiques et durables aux produits.',
//       imageSrc: '/images/local.png',
//       bgColor: 'bg-white border'
//     },
//     {
//       title: 'Éthique et Durabilité',
//       description: 'Nous nous engageons pour des pratiques éthiques de consommation responsable qui valorisent des vêtements qui durent.',
//       imageSrc: '/images/durable.png',
//       bgColor: 'bg-blue-50'
//     }
//   ]

//   return (
//     <section className="container mx-auto p-4 my-16">
//       <SectionTitle>Nos valeurs</SectionTitle>
      
//       <div className="grid md:grid-cols-2 gap-8 mt-12">
//         {values.map((value, index) => (
//           <ValueCard 
//             key={index}
//             title={value.title}
//             description={value.description}
//             imageSrc={value.imageSrc}
//             bgColor={value.bgColor}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

// // components/FeaturePoint.js
// export default function FeaturePoint({ icon, title, description }) {
//   return (
//     <div className="mb-6">
//       <div className="flex items-center mb-2">
//         <div className="bg-blue-100 p-2 rounded-md mr-4">
//           {icon}
//         </div>
//         <h3 className="font-bold text-blue-900">{title}</h3>
//       </div>
//       <p className="text-gray-600 ml-12">
//         {description}
//       </p>
//     </div>
//   )
// }

// // components/WhyChoose.js
// import Image from 'next/image'
// import SectionTitle from './SectionTitle'
// import FeaturePoint from './FeaturePoint'

// export default function WhyChoose() {
//   const features = [
//     {
//       icon: <svg className="w-6 h-6 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
//         <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
//       </svg>,
//       title: 'Stock unique',
//       description: 'Accédez à une sélection exclusive de vêtements d'occasion que vous ne trouverez nulle part ailleurs. Explorez notre catalogue renouvelé chaque semaine.'
//     },
//     {
//       icon: <svg className="w-6 h-6 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
//         <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
//       </svg>,
//       title: 'Histoire et Passion',
//       description: 'Chaque article a une histoire. Grâce aux descriptions des vendeurs, vous découvrez l'expérience derrière votre acquisition et contribuez à un développement durable.'
//     },
//     {
//       icon: <svg className="w-6 h-6 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
//         <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
//       </svg>,
//       title: 'Shopping Responsable',
//       description: 'Votre décision d'acheter de l'occasion est écologiquement durable. Avec Loomeria, chaque achat contribue à un monde meilleur.'
//     }
//   ]

//   return (
//     <section className="container mx-auto p-4 my-16">
//       <SectionTitle withStar={true}>Pourquoi choisir Loomeria ?</SectionTitle>
      
//       <div className="flex flex-col md:flex-row my-12">
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <Image src="/images/phones-vertical.png" alt="Application Loomeria" width={400} height={500} />
//         </div>
//         <div className="md:w-1/2 md:pl-12 flex flex-col justify-center">
//           <p className="text-gray-600 mb-8">
//             Imaginez une expérience de shopping qui change d'internet est une réalité chez Loomeria. Voici pourquoi notre forte community vous fournira des produits qui concernent vos intérêts.
//           </p>
          
//           {features.map((feature, index) => (
//             <FeaturePoint 
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               description={feature.description}
//             />
//           ))}
//         </div>
//       </div>
      
//       <div className="text-center">
//         <button className="bg-blue-800 text-white px-6 py-3 rounded-full">Je découvre Loomeria</button>
//       </div>
//     </section>
//   )
// }

// // components/ColoredCard.js
// export default function ColoredCard({ color, title, description }) {
//   const bgColor = {
//     yellow: 'bg-yellow-50',
//     blue: 'bg-blue-50',
//     indigo: 'bg-indigo-50'
//   }
  
//   const dotColor = {
//     yellow: 'text-yellow-500',
//     blue: 'text-blue-500',
//     indigo: 'text-indigo-500'
//   }

//   return (
//     <div className={`${bgColor[color]} rounded-xl p-4 mb-4`}>
//       <div className="flex items-center mb-2">
//         <span className={`${dotColor[color]} mr-2`}>●</span>
//         <h3 className="font-bold text-blue-900">{title}</h3>
//       </div>
//       <p className="text-gray-600 ml-6">{description}</p>
//     </div>
//   )
// }

// // components/WhySell.js
// import Image from 'next/image'
// import SectionTitle from './SectionTitle'
// import ColoredCard from './ColoredCard'

// export default function WhySell() {
//   const sellingPoints = [
//     {
//       color: 'yellow',
//       title: 'Visibilité Accrue',
//       description: 'Profitez de notre communauté active pour mettre en avant vos créations et toucher de nouveaux clients passionnés.'
//     },
//     {
//       color: 'blue',
//       title: 'Outils de Gestion Simplifiés',
//       description: 'Gérez facilement vos ventes avec notre interface intuitive. Suivez vos performances et consultez vos analyses en quelques clics.'
//     },
//     {
//       color: 'indigo',
//       title: 'Communauté Engagée',
//       description: 'Rejoignez nos créateurs passionnés qui partagent vos valeurs. Ensemble, nous créons une mode plus éthique.'
//     }
//   ]

//   return (
//     <section className="container mx-auto p-4 my-16">
//       <SectionTitle>Pourquoi vendre sur Loomeria ? 🧵</SectionTitle>
      
//       <div className="flex flex-col md:flex-row-reverse my-12">
//         <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
//           <Image src="/images/phones-selling.png" alt="Vendre sur Loomeria" width={400} height={500} />
//         </div>
//         <div className="md:w-1/2 flex flex-col justify-center">
//           <p className="text-gray-600 mb-8">
//             Rejoignez une communauté dynamique de créateurs passionnés qui partagent votre amour pour la mode éthique, vendent leurs créations uniques et touchent une audience engagée.
//           </p>
          
//           {sellingPoints.map((point, index) => (
//             <ColoredCard 
//               key={index}
//               color={point.color}
//               title={point.title}
//               description={point.description}
//             />
//           ))}
//         </div>
//       </div>
      
//       <div className="text-center">
//         <button className="bg-blue-800 text-white px-6 py-3 rounded-full">Je vends sur Loomeria</button>
//       </div>
//     </section>
//   )
// }

// // components/PricingFeature.js
// export default function PricingFeature({ active, children }) {
//   return (
//     <li className="flex items-start mb-3">
//       <span className={active ? "text-red-500 mr-2" : "text-gray-400 mr-2"}>●</span>
//       <span>{children}</span>
//     </li>
//   )
// }

// // components/PricingCard.js
// import PricingFeature from './PricingFeature'

// export default function PricingCard({ title, price, features, highlighted = false }) {
//   const bgClass = highlighted ? "bg-blue-50 rounded-2xl p-6 flex flex-col" : "border rounded-2xl p-6 flex flex-col"
  
//   return (
//     <div className={bgClass}>
//       <h3 className="font-bold text-xl text-blue-900 mb-4">{title}</h3>
      
//       <ul className="mb-8 flex-grow">
//         {features.map((feature, index) => (
//           <PricingFeature key={index} active={feature.active}>
//             {feature.text}
//           </PricingFeature>
//         ))}
//       </ul>
      
//       <div className="mt-auto">
//         <div className="text-4xl font-bold text-blue-900 mb-4 text-center">{price}</div>
//       </div>
//     </div>
//   )
// }

// // components/Pricing.js
// import SectionTitle from './SectionTitle'
// import PricingCard from './PricingCard'

// export default function Pricing() {
//   const plans = [
//     {
//       title: 'Tarif Gratuit',
//       price: '0,0 €',
//       features: [
//         { active: true, text: 'Création jusqu\'à <strong>5 articles</strong>' },
//         { active: false, text: '<strong>Assistance rapide</strong> en cas de besoin' },
//         { active: false, text: 'Visibilité sur notre <strong>page d\'accueil</strong>' },
//         { active: false, text: 'Statistiques <strong>de base</strong> des visites et commandes' },
//         { active: false, text: 'Promotion <strong>occasionnelle</strong> de vos articles sur notre page Instagram' }
//       ]
//     },
//     {
//       title: 'Tarif Standard',
//       price: '9,9 €/mois',
//       features: [
//         { active: true, text: 'Création <strong>jusqu\'à 50 articles</strong>' },
//         { active: true, text: '<strong>Assistance rapide</strong> en cas de besoin' },
//         { active: true, text: 'Mise en avant de vos <strong>6 meilleurs articles</strong> pour plus de visibilité' },
//         { active: false, text: 'Statistiques <strong>détaillées</strong> des performances' },
//         { active: false, text: 'Promotion <strong>occasionnelle</strong> de vos articles' }
//       ]
//     },
//     {
//       title: 'Tarif Standard',
//       price: '19,9 €/mois',
//       features: [
//         { active: true, text: 'Création <strong>sans limite</strong> d\'articles' },
//         { active: true, text: '<strong>Assistance rapide</strong> en cas de besoin' },
//         { active: true, text: 'Mise en avant <strong>jusqu\'à 20 articles</strong> pour plus de visibilité' },
//         { active: true, text: 'Toutes les <strong>performances</strong> et statistiques <strong>avancées</strong>' },
//         { active: true, text: 'Promotion <strong>hebdomadaire</strong> sur nos réseaux sociaux' },
//         { active: true, text: 'Participation aux <strong>formations</strong> en ligne pour les commerçants' }
//       ],
//       highlighted: true
//     }
//   ]

//   return (
//     <section className="container mx-auto p-4 my-16">
//       <SectionTitle>Tarifs pour les vendeurs</SectionTitle>
      
//       <div className="grid md:grid-cols-3 gap-6 mt-12">
//         {plans.map((plan, index) => (
//           <PricingCard 
//             key={index}
//             title={plan.title}
//             price={plan.price}
//             features={plan.features}
//             highlighted={plan.highlighted}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

// // components/AppPromo.js
// import Image from 'next/image'
// import Link from 'next/link'
// import SectionTitle from './SectionTitle'

// export default function AppPromo() {
//   return (
//     <section className="container mx-auto p-4 my-16 text-center">
//       <SectionTitle>Rejoignez l'aventure de mode</SectionTitle>
//       <p className="text-gray-600 max-w-2xl mx-auto mb-8">
//         Prêt à découvrir le meilleur de la mode faite main ? Téléchargez l'application pour explorer des créations des créateurs de talent et rejoignez notre communauté.
//       </p>
      
//       <div className="flex justify-center space-x-4 mb-8">
//         <Link href="/">
//           <Image src="/images/app-store.png" alt="App Store" width={150} height={50} />
//         </Link>
//         <Link href="/">
//           <Image src="/images/google-play.png" alt="Google Play" width={150} height={50} />
//         </Link>
//       </div>
      
//       <div className="flex justify-center">
//         <Image src="/images/phones-bottom.png" alt="Application Loomeria" width={600} height={300} />
//       </div>
//     </section>
//   )
// }

// // components/Footer.js
// import Link from 'next/link'
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
// import Logo from './Logo'

// export default function Footer() {
//   return (
//     <footer className="bg-white py-12">
//       <div className="container mx-auto p-4">
//         <div className="flex flex-col md:flex-row justify-between">
//           <div className="mb-8 md:mb-0">
//             <div className="flex items-center mb-4">
//               <Logo withText={true} />
//             </div>
//             <p className="text-gray-600 mb-4">contact@loomeria.com</p>
//             <div className="flex space-x-2">
//               <SocialIcon Icon={FaTwitter} />
//               <SocialIcon Icon={FaFacebook} />
//               <SocialIcon Icon={FaInstagram} />
//               <SocialIcon Icon={FaLinkedin} />
//             </div>
//           </div>
          
//           <div className="grid grid-cols-3 gap-8">
//             <div>
//               <h4 className="font-bold text-blue-900 mb-4">À propos de nous</h4>
//               <ul className="text-gray-600 space-y-2">
//                 <li><Link href="/">Qui sommes nous?</Link></li>
//                 <li><Link href="/">Nos valeurs</Link></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-bold text-blue-900 mb-4">Pour vous</h4>
//               <ul className="text-gray-600 space-y-2">
//                 <li><Link href="/">Acheter sur Loomeria</Link></li>
//                 <li><Link href="/">Vendre sur Loomeria</Link></li>
//               </ul>
//             </div>
//           </div>
//         </div>
        
//         <div className="border-t mt-12 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
//           <p>© 2023 Loomeria, tous droits réservés</p>
//           <div className="flex space-x-4 mt-2 md:mt-0">
//             <Link href="/">Politique de confidentialité</Link>
//             <Link href="/">Conditions générales d'utilisation</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// // components/SocialIcon.js
// export default function SocialIcon({ Icon }) {
//   return (
//     <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-blue-800">
//       <Icon />
//     </a>
//   )
// }