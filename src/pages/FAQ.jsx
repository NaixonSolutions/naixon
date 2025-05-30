import React from 'react';

const FAQ = () => {
    return (
        <div>
            <header className="header">
                    <img src={logo} alt="Logo" className="logo" />
                    <nav className="nav">
                      <Link to="/Servicios">Soluciones</Link>
                      <Link to="/Contacto">Contacto</Link>
                      <Link to="/Home">Inicio</Link>
                    </nav>
                  </header>
            <h1>Preguntas Frecuentes</h1>
            <ul>
                <li>
                    <strong>¿Qué es este sitio?</strong>
                    <p>Este sitio es una plataforma para responder tus preguntas frecuentes.</p>
                </li>
                <li>
                    <strong>¿Cómo puedo contactarlos?</strong>
                    <p>Puedes contactarnos a través del formulario de contacto.</p>
                </li>
            </ul>
        </div>
    );
};

export default FAQ;