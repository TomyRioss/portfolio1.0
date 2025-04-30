'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Link from 'next/link';

const projects = [
  { title: 'Backendito Website', image: '/backendito.webp' },
  { title: 'Ex-Portfolio', image: '/ex_portfolio.webp' },
  { title: 'Krayson Website', image: '/krayson.webp' },
  { title: 'Messageboard', image: '/messageboard.webp' },
  { title: 'Sleekstyles E-Commerce', image: '/sleekstyles.webp' },
];

function ProjectsSlider() {
  const [slider1Ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    slides: {
      perView: 3,
      spacing: 20,
    },
    created(slider) {
      slider.moveToIdx(0, true);
      setInterval(() => {
        slider.next();
      }, 2000);
    },
  });

  const [slider2Ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    slides: {
      perView: 3,
      spacing: 20,
    },
    created(slider) {
      slider.moveToIdx(0, true);
      setInterval(() => {
        slider.prev();
      }, 2000);
    },
  });

  return (
    <section className="flex flex-col items-center justify-center w-full py-20  dark:bg-gradient-to-b dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
      <div ref={slider1Ref} className="keen-slider w-full max-w-7xl">
        {projects.map((project, idx) => (
          <div
            key={`slider1-${idx}`}
            className="keen-slider__slide flex flex-col items-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-48 h-32 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
          </div>
        ))}
      </div>

      {/* Slider 2 */}
      <div ref={slider2Ref} className="keen-slider w-full max-w-7xl mt-16">
        {projects.map((project, idx) => (
          <div
            key={`slider2-${idx}`}
            className="keen-slider__slide flex flex-col items-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-48 h-32 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
          </div>
        ))}
      </div>

      {/* Botón */}
      <Link
        href="/projects"
        className="mt-16 px-8 py-4 bg-black text-white text-xl font-bold rounded-full hover:bg-gray-800 transition"
      >
        Ver Todos los Proyectos
      </Link>
    </section>
  );
}

export default ProjectsSlider;
