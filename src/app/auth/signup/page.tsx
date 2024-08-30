'use client';

import { IoPersonAddOutline } from "react-icons/io5";
import {Navbar} from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { FixedPlugin } from "@/app/components/fixed-plugin";


const SignupForm = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-200 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8">
        
        <div className="flex items-center justify-center mb-4">
          <IoPersonAddOutline className="text-6xl text-gray-900 dark:text-white" />
          
        </div>
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white mb-6">
          Criar Conta
        </h1>
        <form className="space-y-4" action="#">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nome Completo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Artur Silva"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="artur@aprender.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Número de Celular
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+258 12 3456 789"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Senha
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-black dark:bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Criar Conta
          </button>
        </form>
      </div>
    </div>
    
    <FixedPlugin />
    <Footer />
    </>
   
  );
};

export default SignupForm;
