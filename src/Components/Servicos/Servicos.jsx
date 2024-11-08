import React from "react";
import "./Servicos.css"


const Servicos = () => {
  return (
    <section id="servicos">
       <div className="servicos-titulo">Serviços</div> {/* Título centralizado */}
      <div className="card-container"> {/* Novo contêiner para os cards */}
        <div className="card">
          <div className="img-box">
            <img src="./Assets/online.png" alt="Logo" />
          </div>
          <div className="content">
            <h2>Atendimento Online</h2>
            <p>
              Não importa onde você esteja, a terapia está a um 
              clique de distância. Comece a sua sessão, 
              independentemente da sua localização.
            </p>
            <a href="./home" className="read-more">
              Agende Sua Consulta
            </a>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>Atendimento Presncial</h2>
            <p>
              Não importa onde você esteja, a terapia está a um 
              clique de distância. Comece a sua sessão, 
              independentemente da sua localização.
            </p>
            <a href="./home" className="read-more">
              Agende Sua Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;

