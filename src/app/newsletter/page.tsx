"use client";

import React, { useState } from 'react';
import { Navbar } from '@/app/components/navbar'; // Ajuste o caminho conforme necessário
import { Footer } from '@/app/components/footer'; // Ajuste o caminho conforme necessário
import { FixedPlugin } from '@/app/components/fixed-plugin'; // Ajuste o caminho conforme necessário
import { FaEnvelope } from 'react-icons/fa'; // Ícone para o formulário de newsletter

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para inscrição na newsletter aqui
    console.log('Inscrição na Newsletter:', { name, email });
    // Limpar os campos do formulário após o envio
    setName('');
    setEmail('');
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-900">
        <div className="max-w-lg w-full p-6 bg-white dark:bg-[#1F2937] shadow-md rounded-md">
          <div className="flex items-center mb-6">
            <FaEnvelope size={24} className="text-black dark:text-indigo-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Inscreva-se na Nossa Newsletter</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Estamos muito animados em anunciar o nosso próximo lançamento em apenas um mês! Fique atento para atualizações empolgantes e ofertas exclusivas.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-gray-100"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-gray-100"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black dark:bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Fixed Plugin */}
      <FixedPlugin />
    </>
  );
};

export default Newsletter;
