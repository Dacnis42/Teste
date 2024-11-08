import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Queixas.css';

const Queixas = () => {
  const swiperRef = useRef(null);

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
    "Quero descobrir como a terapia pode me ajudar.",
    "Me sinto ansioso e estressado o tempo todo.",
    "Sinto-me isolado e não sei como conectar com os outros.",
    "Dificuldades em lidar com emoções.",
    "Sinto-me sobrecarregado com o trabalho.",
    "Sinto-me sobrecarregado com o trabalho.",
    "Sinto-me sobrecarregado com o trabalho.",
    "Sinto-me sobrecarregado com o trabalho.",
  ];

  return (
    <section id="queixas">
      <div className="queixa-titulo">O Que te trouxe Aqui ?</div>
      <div className="container">
        <Swiper
          ref={swiperRef}
          spaceBetween={12}
          slidesPerView={3}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        >
          {slidesContent.map((content, index) => (
            <SwiperSlide key={index}>
              <p className="txquadro">{content}</p>
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
