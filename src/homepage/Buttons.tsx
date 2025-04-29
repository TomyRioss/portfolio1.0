import React from 'react';

const buttons = [
  {
    name: 'Certficados',
    link: 'https://www.certficados.com/certificado/77d5c3c7-b7d2-4d3f-a3a7-d0b2a2d4a1f6',
    icon: 'certificate',
  },
  { name: 'Blog', link: 'https://blog.tomas-rios.com', icon: 'blog' },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UC1u-o3k8u5i-5x8h-6-1-4a',
    icon: 'youtube',
  },
  {
    name: 'Proyectos',
    link: 'https://github.com/tomas-rios',
    icon: 'github',
  },
];
function Buttons() {
  return (
    <aside>
      <ul className="flex gap-5 mt-5">
        {buttons.map(button => (
          <li
            key={button.name}
            className="border border-gray-300 rounded-lg p-2 hover:bg-gray-100"
          >
            <a href={button.link} target="_blank" rel="noreferrer">
              <i className={`fa fa-${button.icon}`}>{button.name}</i>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Buttons;
