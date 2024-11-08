import React from 'react';
import './Sobre.css'; // Importando o arquivo CSS, se necessário


const Sobre = () => {
  return (
    <section id="section-sobre">
      <div className="figure">
        <img 
          className="figure-img" src="./Assets/taisf.png" alt="Logo" />   
        </div>
      <div className="conteudo">
        <h2 className="titulo">OLÁ</h2>
        <p className="subtitulo">
          Olá! Sou Tainá Souza, psicóloga especializada em Terapia Cognitivo-Comportamental (TCC).
          A TCC é uma abordagem eficaz que pode ajudar você a compreender e transformar seus
          pensamentos e emoções. Se você está enfrentando desafios como ansiedade,
          depressão ou estresse, convido você a dar o primeiro passo em direção ao bem-estar.
          Meu objetivo é criar um espaço acolhedor e seguro, onde possamos trabalhar juntos
          em sua jornada de autoconhecimento e mudança. Se está pronto para iniciar essa
          transformação, entre em contato e agende sua consulta. Estou aqui para ajudar!
        </p>
      </div>
    </section>
  );
};

export default Sobre;














