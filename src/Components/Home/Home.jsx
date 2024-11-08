// Home.js
import React from "react";
import './Home.css';
import Agenda from '../Agenda/Agenda';  // Importando o componente de agenda

const Home = () => {
  return (
    <section id="home">
      <div className="shape"></div>
      <div id="cta">
        <h1 className="title">
          Atendimento <br />
          <span>Psicológico</span>
        </h1>

        <p className="description">
          Você merece viver uma vida plena e saudável, não hesite em buscar apoio.
        </p>

        <div id="home-btn">
          {/* Usando o componente Agenda aqui */}
          <Agenda />
        </div>
      </div>
      <div id="banner">
        <img className="banner-img" src="./Assets/Cabeca.png" alt="Logo" />
      </div>
    </section>
  );
};

export default Home;













