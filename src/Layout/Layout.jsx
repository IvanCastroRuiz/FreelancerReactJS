import  { Outlet } from 'react-router-dom';

import Navegacion from '../components/Navegacion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Layout = () => {
    return (
       <>
         <Header/>
         <Navegacion/>
         <Hero/>   
         <main className="contenedor sombra">    
          <Outlet/>
         </main> 
         <Footer/>
       </>
    )
  }
  
  export default Layout