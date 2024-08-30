"use client";
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="bg-white py-24 dark:bg-gray-900 dark:bg-gradient-to-b dark:from-violet-600/10 dark:via-transparent">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            
          </div>
          {/* End Announcement Banner */}

          {/* Title */}
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-gray-900 text-3xl sm:text-4xl md:text-4xl lg:text-6xl dark:text-gray-200">
            A-Aprender: Capacitando Mentes, Uma Aula de Cada Vez
            </h1>
          </div>
          {/* End Title */}

          {/* Subtitle */}
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-white/70">
            A-Aprender &eacute; uma plataforma de ensino online que oferece conte&uacute;dos did&aacute;ticos e interativos, projetados para capacitar estudantes de todas as idades. Com cursos diversificados e ferramentas inovadoras, buscamos transformar a educa&ccedil;&atilde;o, tornando-a acess&iacute;vel e eficaz para todos.

           
            </p>
          </div>
          {/* End Subtitle */}

          {/* Buttons */}
          <div className="text-center">
            <Link
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg hover:shadow-violet-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-violet-700/50 py-3 px-6 dark:bg-gradient-to-tl dark:from-blue-700 dark:to-violet-700 dark:hover:shadow-violet-700/50"
              href="/admin/home"
            >
              Comece j&aacute;
              <svg
                className="shrink-0 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
          {/* End Buttons */}
        </div>
      </div>
      {/* End Hero */}
    </>
  );
};

export default Hero;
