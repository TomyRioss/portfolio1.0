import Image from 'next/image';
import { FC } from 'react';

interface Project {
  name: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    name: 'Mi Portfolio',
    description:
      'Portfolio personal creado con un stack de tecnologías modernas, cómo parte de la actualización de mi perfil, actualizado por última vez en Abril de 2025.',
    image: '/portfolio.webp',
    tags: [
      'React',
      'Next.js',
      'Next.js API Routes',
      'TailwindCSS',
      'TypeScript',
      'PostgreSQL',
      'ShadCN',
      'i18n',
      'Prisma',
    ],
    repoUrl: 'https://github.com/TomyRioss/portfolio1.0',
    liveUrl: 'https://proyecto.vercel.app',
  },
  {
    name: 'Ex-Portfolio',
    description:
      'Portfolio personal obsoleto debido a las tecnologías utilizadas, falta de actualizaciones en mi stack y diseño optimizable.',
    image: '/ex_portfolio.webp',
    tags: ['React', 'Vite.js', 'TailwindCSS', 'Javascript'],
    repoUrl: 'https://github.com/usuario/proyecto',
    liveUrl: 'https://proyecto.vercel.app',
  },
  {
    name: 'Backendito Website',
    description:
      'Página web para vender los servicios de mi agencia, utilizando tecnologías modernas, optimización de punta y accesibilidad en lo máximo posible.',
    image: '/backendito.webp',
    tags: [
      'React',
      'Next.js',
      'TailwindCSS',
      'TypeScript',
      'i18n',
      'Cloudflare',
      'Vercel',
    ],
    repoUrl: 'https://github.com/usuario/proyecto',
    liveUrl: 'https://proyecto.vercel.app',
  },
  {
    name: 'Krayson Website',
    description:
      'Página web para vender los servicios de la agencia de Marketing "Krayson Studios", utilizando pasarelas de pago y APIs externas, además de un diseño excelente.',
    image: '/krayson.webp',
    tags: ['React', 'Vite.js', 'TailwindCSS', 'Javascript', 'Paypal API'],
    repoUrl: 'https://github.com/usuario/proyecto',
    liveUrl: 'https://proyecto.vercel.app',
  },
  {
    name: 'Sleekstyles E-Commerce',
    description:
      'Página web cómo trabajo final de mi curso React y Firebase dictado por la UTN, es una aplicación estilo comercio en línea con un diseño minimalista, utilizando Firebase para la base de datos, Firestore para el almacenamiento de datos y Firebase Auth para la autenticación.',
    image: '/sleekstyles.webp',
    tags: [
      'React',
      'Vite.js',
      'TailwindCSS',
      'Javascript',
      'Fireabse',
      'Firestore',
      'Firebase Auth',
    ],
    repoUrl: 'https://github.com/usuario/proyecto',
    liveUrl: 'https://proyecto.vercel.app',
  },
  {
    name: 'Tablero de Mensajes',
    description:
      'Aplicación web sencilla que muestra mensajes almacenados en la base de datos, cómo parte de mi curso NodeJS completo, utiliza tecnologías Backend de punta, además de pruebas unitarias, integración con la base de datos de PostgreSQL y una API REST propia con NodeJS.',
    image: '/messageboard.webp',
    tags: [
      'React',
      'Next.js',
      'TailwindCSS',
      'Typescript',
      'NodeJS',
      'Express',
      'Cors',
      'PostgreSQL',
      'Postman',
    ],
    repoUrl: 'https://github.com/usuario/proyecto',
    liveUrl: 'https://proyecto.vercel.app',
  },
];

const ProjectCard: FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform">
    <Image
      src={project.image}
      alt={project.name}
      width={1920}
      height={1080}
      className="object-cover w-full h-48"
    />
    <div className="p-4 flex flex-col flex-grow">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
        {project.name}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
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
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-500 hover:underline border-2 rounded-2xl border-gray-400 p-2"
        >
          Repositorio
        </a>
        <a
          href={project.liveUrl}
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

const page: FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Mis Proyectos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </main>
  );
};

export default page;
