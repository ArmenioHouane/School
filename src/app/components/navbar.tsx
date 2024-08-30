"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const confirmLogout = () => {
    console.log('Usuário deslogado');
    window.close();
  };

  const cancelLogout = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="dark:bg-gray-800 bg-[#e4e2e270] p-4">
        <div className="flex justify-between items-center">
          <div className="text-black dark:text-white text-xl font-bold">
            <Link href="/">A-Aprender</Link>
          </div>
          <div className="relative">
            <button onClick={toggleDropdown} className="text-white focus:outline-none">
              <FaUserCircle className='text-black dark:text-blue-400' size={24} />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48  dark:bg-gray-900 dark:bg-gradient-to-b dark:from-violet-600/10 dark:via-transparent bg-white rounded-md shadow-lg z-10">
                <Link href="/profile" className="block px-4 py-2 dark:text-white dark:hover:bg-[#006eff] text-gray-800 hover:bg-gray-100">
                  Perfil
                </Link>
                <Link href="/settings" className="block px-4 py-2 dark:text-white text-gray-800 dark:hover:bg-[#006eff] hover:bg-gray-100">
                  Definições
                </Link>
                <Link href="/auth/login" className="block px-4 py-2 dark:text-white text-gray-800 dark:hover:bg-[#006eff] hover:bg-gray-100">
                  Login
                </Link>
                <Link href="/auth/signup" className="block px-4 py-2 dark:text-white text-gray-800 dark:hover:bg-[#006eff] hover:bg-gray-100">
                  Signup
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block px-4 py-2 dark:text-white text-gray-800 dark:hover:bg-[#006eff] hover:bg-gray-100"
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-[#111827] p-6 rounded-md shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Confirmar Saída</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Você realmente deseja sair da página?</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none"
              >
                Cancelar
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded-md hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
