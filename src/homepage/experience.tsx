import React from 'react';

const xp = [
  {
    time: '+3 Años de experiencia',
    description:
      'Hace más de 3 años que comencé en programación desarrollando aplicaciones web fullstack, utilizando Javascript, HTML/CSS, NodeJS y PostgreSQL. Desde entonces, mi ansias de aprendizaje y perfeccionismo me han llevado a aumentar mi stack significativamente, así cómo también el dominio de mis tecnologías.',
  },
  {
    time: '+3000 Horas programando',
    description:
      'Desde hace tres años que dedico una porción de mi tiempo a aprender nuevas tecnologías, realizar nuevos proyectos, leer artículos relevantes, informarme sobre nuevas tecnologías y trabajar en equipos de desarrollo. Así también cómo varios cursos de programación completados y trabajos satisfactorios por clientes. ',
  },
];

function experience() {
  return (
    <>
      <ul className="flex gap-5 mt-5 justify-center">
        {xp.map(xp => (
          <li key={xp.time} className="text-left">
            <p className="text-gray-600 text-xl dark:text-gray-300">
              {xp.time}
            </p>
            <p className="text-gray-800 text-sm dark:text-gray-400">
              {xp.description}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default experience;
