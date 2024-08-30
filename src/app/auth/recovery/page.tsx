'use client';

import { IoLockClosedOutline } from "react-icons/io5";
import {Navbar} from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { FixedPlugin } from "@/app/components/fixed-plugin";

const ForgotPassword = () => {
  return (
    <>
    <Navbar />
    
    <div className="bg-gray-200 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8">
        <div className="flex items-center justify-center mb-4">
          <IoLockClosedOutline className="text-6xl text-gray-900 dark:text-white" />
        </div>
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white mb-6">
          Recuperar Senha
        </h1>
        <form className="space-y-4" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seu e-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="aluno@aprender.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-black dark:bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Enviar link de recupera&ccedil;&atilde;o
          </button>
        </form>
      </div>
    </div>
    <FixedPlugin />
    <Footer />
    </>
 
  );
};

export default ForgotPassword;
