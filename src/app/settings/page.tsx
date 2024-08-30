'use client';

import React, { useState } from 'react';
import { Navbar } from '@/app/components/navbar'; // Adjust the path as necessary
import { Footer } from '@/app/components/footer'; // Adjust the path as necessary
import { FixedPlugin } from '@/app/components/fixed-plugin'; // Adjust the path as necessary

const Settings = () => {
  const [theme, setTheme] = useState<string>('light');
  const [notifications, setNotifications] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const handleNotificationsToggle = () => {
    setNotifications((prev) => !prev);
  };

  const handleLeavePage = () => {
    setIsModalOpen(true);
  };

  const confirmLeave = () => {
    window.close();
  };

  const cancelLeave = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="flex items-center justify-center min-h-screen dark:bg-gray-900">
        <div className="max-w-md w-full p-6 bg-white dark:bg-[#111827] shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Definições</h2>
          
          {/* Theme Setting */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="theme">
              Tema
            </label>
            <select
              id="theme"
              value={theme}
              onChange={handleThemeChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-gray-100"
            >
              <option value="light">Claro</option>
              <option value="dark">Escuro</option>
            </select>
          </div>

          {/* Notifications Setting */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Notificações
            </label>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="notifications"
                checked={notifications}
                onChange={handleNotificationsToggle}
                className="h-4 w-4 text-indigo-600 dark:text-indigo-500 focus:ring-indigo-500 border-gray-300 dark:border-gray-700 rounded"
              />
              <label htmlFor="notifications" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                Ativar notificações
              </label>
            </div>
          </div>

          {/* Leave Page Button */}
          <button
            onClick={handleLeavePage}
            className="w-full bg-red-600 dark:bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Sair da Página
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-[#111827] p-6 rounded-md shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Confirmar Saída</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Você realmente deseja sair da página?</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={cancelLeave}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none"
              >
                Cancelar
              </button>
              <button
                onClick={confirmLeave}
                className="px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded-md hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />

      {/* Fixed Plugin */}
      <FixedPlugin />
    </>
  );
};

export default Settings;
