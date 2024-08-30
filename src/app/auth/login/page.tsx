'use client';

import { IoLogInOutline } from "react-icons/io5";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { FixedPlugin } from "@/app/components/fixed-plugin";
import Link from 'next/link';

const Login = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-200 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <IoLogInOutline className="font-bold text-6xl" />
          <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            A-Aprender Login
          </p>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Faça login na sua conta
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
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
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Lembrar de mim
                      </label>
                    </div>
                  </div>
                  <Link
                    href="/auth/recovery" // Substitua pelo caminho real para a página de recuperação de senha
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Fazer login
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  N&atilde;o tem uma conta ainda?{" "}
                  <Link
                    href="/auth/signup" // Substitua pelo caminho real para a página de cadastro
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Cadastre-se
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <FixedPlugin />
      <Footer />
    </>
  );
};

export default Login;
