'use client';

import React from 'react';

const frontend = [
  {
    name: 'html',
    icon: 'html5',
  },
  {
    name: 'css',
    icon: 'css3',
  },
  {
    name: 'javascript',
    icon: 'js',
  },
  {
    name: 'react',
    icon: 'react',
  },
  {
    name: 'vitejs',
    icon: 'vitejs',
  },
  {
    name: 'nextjs',
    icon: 'nextjs',
  },
  {
    name: 'tailwindcss',
    icon: 'tailwindcss',
  },
  {
    name: 'sass',
    icon: 'sass',
  },
  {
    name: 'bootstrap',
    icon: 'bootstrap',
  },
  {
    name: 'angular',
    icon: 'angular',
  },
  {
    name: 'svelte',
    icon: 'svelte',
  },
];

const backend = [
  {
    name: 'node',
    icon: 'nodejs',
  },
  {
    name: 'express',
    icon: 'express',
  },
  {
    name: 'postgresql',
    icon: 'postgresql',
  },
  {
    name: 'mongodb',
    icon: 'mongodb',
  },
  {
    name: 'mysql',
    icon: 'mysql',
  },
  {
    name: 'mongoose',
    icon: 'mongoose',
  },
  {
    name: 'firebase',
    icon: 'firebase',
  },
  {
    name: 'aws',
    icon: 'aws',
  },
  {
    name: 'php',
    icon: 'php',
  },
  {
    name: 'prisma',
    icon: 'prisma',
  },
  {
    name: 'jest',
    icon: 'jest',
  },
  {
    name: 'jasmine',
    icon: 'jasmine',
  },
];

const tools = [
  {
    name: 'git',
    icon: 'git',
  },
  {
    name: 'github',
    icon: 'github',
  },
  {
    name: 'vscode',
    icon: 'vscode',
  },
  {
    name: 'figma',
    icon: 'figma',
  },
  {
    name: 'trello',
    icon: 'trello',
  },
  {
    name: 'slack',
    icon: 'slack',
  },
  {
    name: 'jira',
    icon: 'jira',
  },
  {
    name: 'clickup',
    icon: 'clickup',
  },
  {
    name: 'notion',
    icon: 'notion',
  },
];

const aprendiento = [
  {
    name: 'laravel',
    icon: 'laravel',
  },
  {
    name: 'java',
    icon: 'java',
  },
  {
    name: 'qiskit',
    icon: 'qiskit',
  },
  {
    name: 'tensorflow',
    icon: 'tensorflow',
  },
  {
    name: 'scikit-learn',
    icon: 'scikit-learn',
  },
  {
    name: 'c#',
    icon: 'csharp',
  },
  {
    name: 'vue',
    icon: 'vue',
  },
  {
    name: 'astro',
    icon: 'astro',
  },
];

function Technologies() {
  return (
    <>
      <section className="w-screen h-screen flex items-center justify-center p-10">
        <div className="grid grid-cols-2 grid-rows-2 gap-10 max-w-7xl w-full">
          {/* FRONTEND */}
          <div className="w-full text-center border-2 border-black p-10 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Frontend</h2>
            <ul className="grid grid-cols-3 gap-5">
              {frontend.map(tech => (
                <li key={tech.name} className="flex flex-col items-center">
                  <i className={`fa fa-${tech.icon} text-4xl mb-2`} />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BACKEND */}
          <div className="w-full text-center border-2 border-black p-10 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Backend</h2>
            <ul className="grid grid-cols-3 gap-5">
              {backend.map(tech => (
                <li key={tech.name} className="flex flex-col items-center">
                  <i className={`fa fa-${tech.icon} text-4xl mb-2`} />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* APRENDIENDO */}
          <div className="w-full text-center border-2 border-black p-10 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Aprendiendo</h2>
            <ul className="grid grid-cols-3 gap-5">
              {aprendiento.map(tech => (
                <li key={tech.name} className="flex flex-col items-center">
                  <i className={`fa fa-${tech.icon} text-4xl mb-2`} />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* HERRAMIENTAS */}
          <div className="w-full text-center border-2 border-black p-10 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Herramientas</h2>
            <ul className="grid grid-cols-3 gap-5">
              {tools.map(tech => (
                <li key={tech.name} className="flex flex-col items-center">
                  <i className={`fa fa-${tech.icon} text-4xl mb-2`} />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Technologies;
