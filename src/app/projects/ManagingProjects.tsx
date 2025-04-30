import React from 'react';
import { FC } from 'react';
import Image from 'next/image';

interface Managing {
  name: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
}

const manage: Managing[] = [
  {
    name: 'Bloxyfruits',
    description:
      'Gestione las relaciones con el cliente, negociación previa, facturación posterior, reclutamiento de candidatos y gestión administrativa para el seguimiento de la aplicación, está comisión realizo cambios estructurales en la pasarela de pagos, se añadió el método de Marketing por afiliados y un dashboard para gestionar compras de clientes.',
    image: '/bloxyweb.webp',
    tags: [
      'Relaciones con el cliente',
      'Gestión de personal',
      'Gestión Técnica',
      'Coordinación de equipos',
      'Negociación Comercial',
      'Facturación',
      'Reclutamiento IT',
    ],
    liveUrl: 'https://bloxyfruit.com/',
  },
  {
    name: 'Radio Ibiza',
    description:
      'Gestione las relaciones con el cliente, cotización y facturación del servicio, reclutamiento de candidatos y gestión administrativa para el seguimiento de la aplicación, está comisión se encargó de realizar un mantenimiento de la aplicación migrandola de una versión posterior a 5 años para la nueva versión de react-native, además de rediseño parcia, mejoras en la experiencia de usuario y despliegue tanto en iOS cómo en Android.',
    image: '/radioweb.webp',
    tags: [
      'Relaciones con el cliente',
      'Gestión de personal',
      'Facturación',
      'Reclutamiento IT',
      'Negociación Comercial',
    ],
    liveUrl: 'https://www.pureibizaradio.com/',
  },
  {
    name: 'Minecomunidad Website',
    description:
      'Gestione las relaciones con el cliente, negociación previa, facturación, reclutamiento de candidatos y supervisión del trabajo en la aplicación para  la página principal de Minecomunidadd, la comunidad hispanohablente más grande del videojuego "Minecraft".',
    image: '/mineweb.webp',
    tags: [
      'Relaciones con el cliente',
      'Gestión de personal',
      'Gestión Técnica',
      'Coordinación de equipos',
      'Negociación Comercial',
      'Facturación',
      'Reclutamiento IT',
    ],
    liveUrl: 'https://minecomunidad.com/',
  },
  {
    name: 'Dashboard Trabajo (Sin Online)',
    description:
      'Gestione una comisión sencilla, negociacndo previamente con el cliente, manteniendo la comunicación de forma efectiva, diligente y en última instancia, manejando la facturación. La comisión es un componente de tipo tabla de gestión para agendar entrevistas laborales en una aplicación que sirve a muchos usuarios de Europa a encontrar trabajo en el mercado Local.',
    image: '/dashboardtrabajos.webp',
    tags: [
      'Relaciones con el cliente',
      'Gestión de personal',
      'Gestión Técnica',
      'Coordinación de equipos',
      'Negociación Comercial',
      'Facturación',
    ],
    liveUrl: 'https://tomasrioss.vercel.app/projects',
  },
];

const ManagingCard: FC<{ manage: Managing }> = ({ manage }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform">
    <Image
      src={manage.image}
      alt={manage.name}
      width={1920}
      height={1080}
      className="object-cover w-full h-48"
    />
    <div className="p-4 flex flex-col flex-grow">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
        {manage.name}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        {manage.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {manage.tags.map(tag => (
          <span
            key={tag}
            className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-4">
        <a
          href={manage.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-green-500 hover:underline border-2 rounded-2xl border-gray-400 p-2"
        >
          Ver online
        </a>
      </div>
    </div>
  </div>
);

function ManagingProjects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white my-12">
        Proyectos Gestionados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {manage.map(managed => (
          <ManagingCard key={managed.name} manage={managed} />
        ))}
      </div>
    </div>
  );
}

export default ManagingProjects;
