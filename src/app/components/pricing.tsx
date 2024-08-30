"use client";

import React from "react";

import Link from "next/link";

const Pricing: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Encontre o Plano Ideal para Sua Jornada de Aprendizado
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Seja voc&ecirc; um aprendiz solo ou parte de uma equipe, nossos planos de pre&ccedil;os s&atilde;o projetados para fornecer os recursos e o suporte necess&aacute;rios para voc&ecirc; se destacar.

          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Individual</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Ideal para aprendizes individuais que desejam explorar nossa plataforma.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <p className="mr-2 text-5xl font-extrabold"> 190 
             <span className="text-lg text-gray-500 dark:text-gray-400"> Mzn</span>
             
             </p>
              <span className="text-gray-500 dark:text-gray-400">/m&ecirc;s</span>
            </div>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Acesso a todos os cursos</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Sem taxas de configuração</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Suporte por e-mail</span>
              </li>
            </ul>
            <Link href="/signup">
              <div className="inline-block text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">
                Comece agora
              </div>
            </Link>
          </div>
          {/* Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Equipe</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Perfeito para pequenas equipes que precisam de recursos colaborativos.
            </p>
            <div className="flex justify-center items-baseline my-8">
            <p className="mr-2 text-5xl font-extrabold"> 490 
             <span className="text-lg text-gray-500 dark:text-gray-400"> Mzn</span>
             
             </p>   <span className="text-gray-500 dark:text-gray-400">/m&ecirc;s</span>
            </div>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Acesso a todos os cursos</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Sem taxas de configura&ccedil;&atilde;o
</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Ferramentas colaborativas</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Suporte priorit&aacute;rio
</span>
              </li>
            </ul>
            <Link href="/signup">
              <div className="inline-block text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">
                Comece agora
              </div>
            </Link>
          </div>
          {/* Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Pacote completo para grandes equipes com necessidades extensivas.
            </p>
            <div className="flex justify-center items-baseline my-8">
            <p className="mr-2 text-5xl font-extrabold"> 2499 
             <span className="text-lg text-gray-500 dark:text-gray-400"> Mzn</span>
             
             </p> <span className="text-gray-500 dark:text-gray-400">/m&ecirc;s</span>
            </div>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Acesso a todos os cursos</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Sem taxas de configura&ccedil;&atilde;o
</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Planos de treinamento personalizados</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Suporte dedicado</span>
              </li>
            </ul>
            <Link href="/signup">
              <div className="inline-block text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">
                Comece agora
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
