import React from 'react';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import './Servicios.css';

function Servicios() {
  return (
    <div className="servicios-bg">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/Contacto">Contacto</Link>
          <Link to="/FAQ">FAQ</Link>
        </nav>
      </header>

      <main className="servicios-container">
        <section className="servicios-hero">
          <h1>Soluciones</h1>
          <p>
            Te ayudamos a automatizar procesos, ahorrar tiempo y hacer crecer tu negocio con soluciones simples, inteligentes y efectivas.
          </p>
        </section>

        <section className="servicios-grid">
          {[
            {
              title: 'Automatización de Tareas Administrativas',
              desc: 'Optimizamos tus tareas repetitivas con scripts y flujos automáticos para que puedas enfocarte en lo importante.',
            },
            {
              title: 'Dashboards Financieros Integrados',
              desc: 'Visualizá tus finanzas con claridad. Integración con Excel, bancos o MercadoPago para tener todo bajo control.',
            },
            {
              title: 'Control de Vencimientos y Recordatorios',
              desc: 'Notificaciones automáticas por WhatsApp o email para no olvidar nada y mantener tus procesos organizados.',
            },
            {
              title: 'Informes Contables Automáticos',
              desc: 'Generamos y enviamos reportes transformando tus datos en documentos listos para presentar.',
            },
            {
              title: 'Formularios y Automatización de Flujos',
              desc: 'Desde un formulario hasta una cadena de acciones automatizadas conectadas con Sheets, Notion o tu CRM.',
            },
            {
              title: 'Bots y Asistentes Automatizados',
              desc: 'Implementamos bots que responden consultas, recolectan datos y hacen tareas por vos 24/7.',
            },
          ].map((servicio, i) => (
            <div key={i} className="servicios-card animated-widget">
              <h3>{servicio.title}</h3>
              <p>{servicio.desc}</p>
            </div>
          ))}
        </section>

        <div className="servicios-cta">
          <a
            href="https://forms.gle/223P3vSQKfg4GPi17"
            className="servicios-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero automatizar mi negocio
          </a>
        </div>
      </main>
    </div>
  );
}

export default Servicios;
