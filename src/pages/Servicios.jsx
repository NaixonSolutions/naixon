import React from 'react';
import logo from '../assets/Logo.png' 
import { Link } from 'react-router-dom'

function Servicios() {
    return (
      <div>
        <header className="header">
          <img src={logo} alt="Logo" className="logo" />
          <nav className="nav">
            <Link to="/">Inicio</Link>
            <Link to="/Contacto">Contacto</Link>
            <Link to="/FAQ">FAQ</Link>
          </nav>
        </header>
        <h1>Servicios</h1>
        <p>Bienvenido a la página de servicios.</p>
      </div>
    );
}

export default Servicios;