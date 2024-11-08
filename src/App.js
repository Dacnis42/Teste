import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import  Home from './Components/Home/Home';
import Sobre from './Components/Sobre/Sobre';
import Servicos from './Components/Servicos/Servicos';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';
import Queixas from './Components/Queixas/Queixas';
// import Agenda from './Components/Agenda/Agenda';

function App() {
return(
  <>
    <Navbar/>
    <Home/>
    {/* <Agenda/>  */}
    <Queixas/>  
    <Servicos/>
    <Sobre/>
    <Faq/>
   <Footer/> 
  </>
  )
}

export default App;
