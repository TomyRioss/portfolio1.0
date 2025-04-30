import React from 'react';

const buttons = [
  {
    name: 'Certficados',
    link: 'https://drive.google.com/drive/folders/17WX0TMuy4EEEixqt7oEt9f4R0f3dtkOy?usp=sharing',
    icon: 'certificate',
  },
  { name: 'Blog', link: 'https://tomasrioss.vercel.app/blog', icon: 'blog' },

  {
    name: 'Proyectos',
    link: 'https://tomasrioss.vercel.app/projects',
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
