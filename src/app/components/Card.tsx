"use client";

import React, { useState } from 'react';

const Card: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Aprendendo",
      subtitle: "Se você tem uma tela, você pode aprender! Desbloqueie o mundo do conhecimento no conforto da sua casa.",
      imageUrl: "https://images.pexels.com/photos/68761/pexels-photo-68761.jpeg",
      buttonLabel: "Comece agora",
    },
    {
      title: "Variedade de Cursos",
      subtitle: "Explore uma variedade de cursos! De ciências a artes, encontre o que te interessa e comece a aprender hoje.",
      imageUrl: "https://images.pexels.com/photos/15575660/pexels-photo-15575660.jpeg",
      buttonLabel: "Comece agora",
    },
    {
      title: "Acompanhe seu Progresso",
      subtitle: "Acompanhe seu progresso! Mantenha-se motivado monitorando suas conquistas e marcos.",
      imageUrl: "https://images.pexels.com/photos/9034975/pexels-photo-9034975.jpeg",
      buttonLabel: "Comece agora",
    },
    {
      title: "Aprenda a Qualquer Hora",
      subtitle: "Aprenda a qualquer hora, em qualquer lugar! Acesse seus cursos em qualquer dispositivo, seja em casa ou em movimento.",
      imageUrl: "https://images.pexels.com/photos/4144038/pexels-photo-4144038.jpeg",
      buttonLabel: "Comece agora",
    },
    {
      title: "Comunidade de Aprendizado",
      subtitle: "Desfrute de uma experiência de aprendizado colaborativa! Junte-se a outros alunos e troque ideias para enriquecer sua jornada.",
      imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      buttonLabel: "Comece agora",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="px-4 lg:px-6 py-10 dark:bg-gray-900">
      <div className="relative w-[80%] mx-auto"> {/* Center the carousel and set width to 80% */}
        <div className="relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <div
            className="absolute top-0 bottom-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700"
            style={{
              backgroundImage: `url(${slides[currentSlide].imageUrl})`,
            }}
          >
            <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
              <span className="block text-white">
                {slides[currentSlide].title}
              </span>
              <span className="block text-white text-xl md:text-3xl">
                {slides[currentSlide].subtitle}
              </span>
              <div className="mt-5">
                <a
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  href="#"
                >
                  {slides[currentSlide].buttonLabel}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute inset-y-0 left-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-3.5 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute inset-y-0 right-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-3.5 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>
        {/* End Arrows */}
      </div>
    </div>
  );
};

export default Card;
