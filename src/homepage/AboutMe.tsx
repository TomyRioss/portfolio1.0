import Image from 'next/image';
import React from 'react';
import { Separator } from '@/components/ui/separator';

const career = [
  {
    name: 'Ingeniero Informático',
    description:
      'Estoy cursando la carrera de ingeniería informática en la Universidad de Buenos Aires, próximo al tercer año de carrera. Motivado por mi pasión a la tecnología y innovación, también soy un entusiasta de la electrónica digital y sistemas complejos de gran escala. ',
  },
  {
    name: 'Emprendedor',
    description:
      'Tengo una pasión natural por las negociaciones, gestión, ambición y liderazgo. Lo que usualmente me lleva a explorar en emprendimientos y negocios, siendo el último Backendito, una asociación que sigue el modelo de consultoría IT y en el cuál aún me encuentro trabajando parcialmente. ',
  },
];

function AboutMe() {
  return (
    <section className="flex  w-full h-full mt-20 justify-around">
      <div className="max-w-5xl">
        <h1 className="text-5xl font-sans text-left mb-5">Sobre mí</h1>
        <p className="text-left text-gray-600 dark:text-gray-300 text-xl max-w-5xl">
          Soy un desarrollador fullstack con experiencia en desarrollo web,
          desde hace 3 años que desarrollé aplicaciones web con Javascript,
          HTML/CSS, NodeJS y PostgreSQL. Desde entonces, mi ansias de
          aprendizaje y perfeccionismo me han llevado a aumentar mi stack
          significativamente, así cómo también el dominio de mis tecnologías.
        </p>
        <Separator className="mt-5" />
        <aside className="flex mt-5">
          <ul className="flex gap-5 justify-center">
            {career.map(career => (
              <li key={career.name} className="text-left">
                <p className="text-gray-600 dark:text-gray-300 text-xl">
                  {career.name}
                </p>
                <p className="text-gray-800 dark:text-gray-400 text-sm">
                  {career.description}
                </p>
              </li>
            ))}
          </ul>
        </aside>
        <h2 className="mt-10 border-2 border-black dark:border-gray-600 max-w-28 text-center rounded-lg p-2">
          <a href="https://backendito.com/">Backendito</a>
        </h2>
      </div>
      <div className="grid grid-cols-2 mt-10 items-center justify-center">
        <div>
          <Image
            src="/prog.webp"
            alt="Tomas Rios"
            width={300}
            height={300}
            className="rounded-full border-4 border-black shadow-xl "
          />
        </div>
        <div className="justify-center items-center">
          <Image
            src="/IngInf.webp"
            alt="Tomas Rios"
            width={300}
            height={300}
            className="rounded-full border-4 border-black shadow-xl mb-2"
          />{' '}
          <Image
            src="/emp.webp"
            alt="Tomas Rios"
            width={300}
            height={300}
            className="rounded-full border-4 border-black shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
