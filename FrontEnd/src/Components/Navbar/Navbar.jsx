import React from "react";
import './Navbar.css';

function Navbar () {
    return(
<>
    <div className="block">
        <p id="nome">Tai Souza</p>
      </div>

    <div className="navbar flex">
        <nav>
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#sobre">Sobre Mim</a>
            <a className="nav-link" href="#servicos">Serviços</a>
            <a className="nav-link" href="#queixas">Queixas</a>
            <a className="nav-link" href="#faq">FAQ</a>
           
       </nav>    
 </div>
  </>
);
}
export default Navbar;