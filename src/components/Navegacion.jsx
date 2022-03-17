import React from 'react'
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <div className="nav-bg">
        <nav className="navegacion-principal contenedor">
              <Link to="/">Inicio</Link>
              <Link to="/servicios">Sobre Mi</Link>
              <Link to="/">Clientes</Link>
              <Link to="/contactos">Contactos</Link>
        </nav>
    </div>
  )
}

export default Navegacion