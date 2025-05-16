import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="B2agro Logo" className="h-10 w-10 rg-10" />
              <span className="ml-2.5 text-2xl font-bold text-blue-950">B2<span className="text-green-600">agro</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-blue-900 hover:text-green-600 font-medium transition duration-300"
            >
              Home
            </a>
            <a
              href="/sobre"
              className="text-blue-900 hover:text-green-600 font-medium transition duration-300"
            >
              Sobre nós
            </a>
            <a
              href="/servicos"
              className="text-blue-900 hover:text-green-600 font-medium transition duration-300"
            >
              Serviços
            </a>
            {/*<a
              href="/blog"
              className="text-blue-900 hover:text-green-600 font-medium transition duration-300"
            >
              Blog
            </a>*/}
            <a
              href="/contato"
              className="text-blue-900 hover:text-green-600 font-medium transition duration-300"
            >
              Contato
            </a>
          </div>

          {/* CTA Button & Contact Info */}
          <div className="hidden md:flex items-center">
            <div className="mr-6 flex items-center text-sm">
              <Phone className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-gray-700">(61) 98161-4932</span>
            </div>
            <a
              href="/contato"
              className="bg-gradient-to-r from-green-600 to-blue-900 text-white font-medium py-2 px-4 rounded hover:opacity-90 transition duration-300"
            >
              Fale com um especialista
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-blue-900" />
            ) : (
              <Menu className="h-6 w-6 text-blue-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-3 pb-4">
            <a
              href="/"
              className="text-blue-900 hover:text-green-600 font-medium py-2 transition duration-300"
            >
              Home
            </a>
            <a
              href="/sobre"
              className="text-blue-900 hover:text-green-600 font-medium py-2 transition duration-300"
            >
              Sobre nós
            </a>
            <a
              href="/servicos"
              className="text-blue-900 hover:text-green-600 font-medium py-2 transition duration-300"
            >
              Serviços
            </a>
            <a
              href="/blog"
              className="text-blue-900 hover:text-green-600 font-medium py-2 transition duration-300"
            >
              Blog
            </a>
            <a
              href="/contato"
              className="text-blue-900 hover:text-green-600 font-medium py-2 transition duration-300"
            >
              Contato
            </a>
            <div className="flex items-center text-sm py-2">
              <Phone className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-gray-700">(11) 9999-9999</span>
            </div>
            <a
              href="/contato"
              className="bg-gradient-to-r from-green-600 to-blue-900 text-white font-medium py-2 px-4 rounded hover:opacity-90 transition duration-300 inline-block text-center"
            >
              Fale com um especialista
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}