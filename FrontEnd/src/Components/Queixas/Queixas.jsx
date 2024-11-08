import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Queixas.css';

const Queixas = () => {
  const swiperRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Armazena o índice do card que está sendo hoverado

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidesContent = [
    {
      text: "Quero descobrir como a terapia pode me ajudar.",
      info: "A terapia pode oferecer ferramentas para lidar com problemas emocionais e melhorar seu bem-estar."
    },
    {
      text: "Me sinto ansioso e estressado o tempo todo.",
      info: "Ansiedade é uma resposta natural ao estresse, mas pode ser gerenciada com técnicas adequadas."
    },
    {
      text: "Sinto-me isolado e não sei como conectar com os outros.",
      info: "Conectar-se com os outros pode ser desafiador, mas a terapia pode ajudar a desenvolver habilidades sociais."
    },
    {
      text: "Dificuldades em lidar com emoções.",
      info: "Aprender a reconhecer e expressar emoções é crucial para a saúde mental."
    },
    {
      text: "Sinto-me sobrecarregado com o trabalho.",
      info: "O estresse no trabalho pode afetar sua vida pessoal; técnicas de gerenciamento de estresse podem ajudar."
    },
  ];

  return (
    <section id="queixas">
      <div className="queixa-titulo">O Que te trouxe Aqui?</div>
      <div className="container">
        <Swiper
          ref={swiperRef}
          spaceBetween={12}
          slidesPerView={3}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        >
          {slidesContent.map((slide, index) => (
            <SwiperSlide 
              key={index} 
              onMouseEnter={() => setHoveredIndex(index)} // Define o índice quando o mouse entra
              onMouseLeave={() => setHoveredIndex(null)} // Limpa o índice quando o mouse sai
            >
              <div className="txquadro">
                <p>{slide.text}</p>
                {hoveredIndex === index && <p className="info-text">{slide.info}</p>} {/* Exibe a info se o card estiver em hover */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-prev seta" onClick={handlePrev}></div>
      <div className="swiper-button-next seta" onClick={handleNext}></div>
    </section>
  );
};

export default Queixas;