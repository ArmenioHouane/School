"use client";

import React from 'react';
import Link from 'next/link';

const IconSection: React.FC = () => {
  return (
    <div className='dark:bg-gray-900'>
         <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto  dark:bg-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-transparent">
      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="lg:w-3/4">
          <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
          Empoderando a Educa&ccedil;&atilde;o com Ferramentas Inovadoras

          </h2>
          <p className="mt-3 text-gray-800 dark:text-neutral-400">
          Oferecemos uma plataforma de e-learning completa que permite que alunos e educadores explorem o aprendizado digital de maneira eficiente e envolvente, proporcionando todas as ferramentas necess&aacute;rias para o sucesso educacional.

          </p>
          <p className="mt-5 ">
            <Link
              href="#"
              className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
            >
              Comece agora
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </p>
        </div>
        {/* End Col */}

        <div className="space-y-6 lg:space-y-10">
          {/* Icon Block */}
          <div className="flex gap-x-5 sm:gap-x-8">
            <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </span>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Recursos de Aprendizagem Abrangentes
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Nossa plataforma oferece documenta&ccedil;&atilde;o l&iacute;der no setor e recursos extensivos, permitindo que educadores integrem solu&ccedil;&otilde;es personalizadas de forma eficiente e eficaz.

              </p>
            </div>
          </div>
          {/* End Icon Block */}

          {/* Icon Block */}
          <div className="flex gap-x-5 sm:gap-x-8">
            <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </span>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Comunidade Educacional Ativa
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Contribu&iacute;mos para a inova&ccedil;&atilde;o educacional apoiando ativamente projetos de c&oacute;digo aberto, fornecendo recursos e promovendo a colabora&ccedil;&atilde;o dentro da comunidade de aprendizado.

              </p>
            </div>
          </div>
          {/* End Icon Block */}

          {/* Icon Block */}
          <div className="flex gap-x-5 sm:gap-x-8">
            <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
            </span>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Flex&iacute;vel e Acess&iacute;vel
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Seja para cursos online, certifica&ccedil;&otilde;es ou materiais de aprendizagem, nossa plataforma garante que o conte&uacute;do educacional seja facilmente acess&iacute;vel e armazenado com seguran&ccedil;a.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>

    </div>
   
  );
};

export default IconSection;
