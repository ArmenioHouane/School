"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dark:bg-gray-800 bg-[#e4e2e270] p-4">
      <div className="flex justify-between items-center">
        <div className=" text-black dark:text-white text-xl font-bold">
          <Link href="/">A-Aprender</Link>
        </div>
        <div className="relative">
          <button onClick={toggleDropdown} className="text-white focus:outline-none">
            <FaUserCircle
            className='text-black dark:text-blue-400'
            
            size={24} />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Perfil
              </Link>
              <Link href="/profile/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Configurações
              </Link>
              <Link href="/profile/definitions" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Definições
              </Link>
              <Link href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Login
              </Link>
              <Link href="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Signup
              </Link>
              <button
                onClick={() => console.log('Usuário deslogado')}
                className="w-full text-left block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
