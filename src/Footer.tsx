'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const socials = [
  {
    name: 'Github',
    link: 'https://github.com/tomyrioss',
    icon: <FaGithub />,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/tomy-rios/',
    icon: <FaLinkedin />,
  },
  {
    name: 'Correo',
    link: 'mailto:tomyrios2006@gmail.com',
    icon: <FaEnvelope />,
  },
  {
    name: 'Descargar CV',
    link: '/CV.pdf',
    icon: <FaFilePdf />,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white py-10 flex flex-col items-center justify-center">
      <ul className="flex gap-8 mb-6">
        {socials.map(social => {
          const isDownload = social.name.toLowerCase().includes('cv');

          return (
            <li key={social.name}>
              <a
                href={social.link}
                target={isDownload ? '_self' : '_blank'}
                rel="noreferrer"
                className="text-2xl hover:text-blue-400 transition"
                title={social.name}
                {...(isDownload && { download: true })}
              >
                {social.icon}
              </a>
            </li>
          );
        })}
      </ul>
      <p className="text-sm text-gray-400">
        © {currentYear} Tomás Ríos. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
