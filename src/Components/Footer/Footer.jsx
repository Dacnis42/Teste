import React from "react";
import "./Footer.css"; // Certifique-se de que o arquivo CSS esteja na pasta correta

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>© 2024 Seu Nome ou Sua Empresa - Todos os direitos reservados.</p>
        </div>
      </div>
      
      {/* SVG com a onda */}
      <svg
        className="footer-wave-svg"
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,64 C480,130 960,30 1440,64 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
};

export default Footer;
