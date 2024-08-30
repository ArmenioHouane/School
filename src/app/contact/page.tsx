"use client";

import React, { useState } from 'react';
import { Navbar } from '@/app/components/navbar'; // Adjust the path as necessary
import { Footer } from '@/app/components/footer'; // Adjust the path as necessary
import { FixedPlugin } from '@/app/components/fixed-plugin'; // Adjust the path as necessary
import { FaEnvelope } from 'react-icons/fa'; // Import the contact icon

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Message Sent:', { name, email, subject, message });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="flex items-center justify-center min-h-screen dark:bg-gray-900">
        <div className="max-w-lg w-full p-6 bg-white dark:bg-[#1F2937] shadow-md rounded-md">
          <div className="flex items-center mb-6">
            <FaEnvelope className="text-indigo-600 dark:text-indigo-400 mr-2" size={24} />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Entre em Contacto</h2>
          </div>
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
                Email
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

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="subject">
                Titulo
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-gray-100"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="message">
                Mensagem
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-gray-100"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Enviar mensagem
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

export default ContactUs;
