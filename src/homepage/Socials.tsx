import React from 'react';

const socials = [
  {
    name: 'Github',
    link: 'https://github.com/tomas-rios',
    icon: 'github',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/tomas-rios-dev/',
    icon: 'linkedin',
  },
  {
    name: 'Correo',
    link: 'mailto:tomyrios2006@gmail.com',
    icon: 'envelope',
  },
  {
    name: 'Descargar CV',
    link: '/CV.pdf',
    icon: 'file-pdf',
    download: true, // <- Agregamos esta propiedad
  },
  {
    name: 'Download CV (EN)',
    link: '/cv-en.pdf',
    icon: 'file-pdf',
    download: true, // <- También
  },
];

function Socials() {
  return (
    <section>
      <ul className="flex gap-5 mt-5">
        {socials.map(social => (
          <li key={social.name}>
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              {...(social.download ? { download: '' } : {})} // <- Agrega "download" si corresponde
            >
              <i className={`fa fa-${social.icon}`}>{social.name}</i>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Socials;
