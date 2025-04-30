'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaSun, FaMoon } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'ES' | 'EN'>('ES');
  const pathname = usePathname();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'ES' ? 'EN' : 'ES';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/projects', label: 'Proyectos' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-10 py-6 bg-white dark:bg-black shadow-md fixed top-0 z-50">
      {/* Izquierda: Links */}
      <div className="flex items-center gap-8 text-black dark:text-white font-semibold text-lg">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative group ${
              pathname === link.href ? 'text-blue-500' : ''
            }`}
          >
            {link.label}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                pathname === link.href ? 'w-full' : ''
              }`}
            />
          </Link>
        ))}
      </div>

      {/* Derecha: Botones */}
      <div className="flex items-center gap-6 text-black dark:text-white text-2xl">
        <button onClick={toggleTheme} aria-label="Toggle Theme">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          onClick={toggleLanguage}
          aria-label="Toggle Language"
          className="flex items-center gap-1 text-lg font-semibold"
        >
          <IoLanguage className="text-2xl" />
          {language}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
