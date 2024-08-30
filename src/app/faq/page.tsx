//@ts-nocheck

'use client';
import {Navbar} from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { FixedPlugin } from "@/app/components/fixed-plugin";


const Faq = () => {
  return (<>
   <Navbar />
  
  
  
   <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      Perguntas Frequentes (FAQ)
      </h2>
      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
        <div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              O que &eacute; A-Aprender?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
            A-Aprender &eacute; uma plataforma de aprendizado online projetada para fornecer conte&uacute;do educacional de alta qualidade em uma variedade de assuntos. Nossa plataforma oferece cursos, quizzes e recursos interativos para melhorar a experi&ecirc;ncia de aprendizado.
</p>
          </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Como fa&ccedil;o para me inscrever?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
            Para se inscrever, clique no bot&atilde;o &quot;Inscreva-se&quot; na p&aacute;gina inicial, preencha seus dados e siga as instru&ccedil;&otilde;es para criar sua conta.
    </p>
          </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Como posso encontrar um curso?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
            Use a barra de pesquisa em nossa p&aacute;gina inicial ou navegue pelas categorias de cursos para encontrar o curso de seu interesse.
   </p>
           
          </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Posso visualizar um curso antes de me inscrever?   </h3>
            <p className="text-gray-500 dark:text-gray-400">
            Sim, muitos cursos oferecem uma se&ccedil;&atilde;o de pr&eacute;-visualiza&ccedil;&atilde;o que permite ver o conte&uacute;do do curso e o instrutor antes de se inscrever.
 </p>
           
          </div>
        </div>
        <div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Como me inscrevo em um curso?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
            Clique no curso que deseja se inscrever e siga as instru&ccedil;&otilde;es para comprar ou se inscrever.<br /><br />
 </p>
          </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Posso baixar materiais do curso?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
            Alguns cursos oferecem materiais para download. Verifique os detalhes do curso ou entre em contato com o instrutor para mais informa&ccedil;&otilde;es.
</p>
           </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Como posso entrar em contato com o suporte ao cliente?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
            Voc&ecirc; pode entrar em contato com nossa equipe de suporte atrav&eacute;s da p&aacute;gina &quot;Fale Conosco&quot; em nosso site ou enviando um e-mail para support@a-aprender.com.
</p>
             </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              O que devo fazer se enfrentar problemas t&eacute;cnicos?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
            Primeiro, tente atualizar a p&aacute;gina ou limpar o cache do seu navegador. Se o problema persistir, entre em contato com nossa equipe de suporte com detalhes sobre o problema que voc&ecirc; est&aacute; enfrentando.
</p>
          
          </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Como posso acompanhar meu progresso?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
            Voc&ecirc; pode acompanhar seu progresso atrav&eacute;s do seu painel, que mostra seus cursos conclu&iacute;dos, inscri&ccedil;&otilde;es atuais e quaisquer quizzes ou tarefas em andamento.</p>
          
          </div>
        </div>
      </div>
    </div>
  </section>







  <FixedPlugin />
      <Footer />
  </>);
};

export default Faq;