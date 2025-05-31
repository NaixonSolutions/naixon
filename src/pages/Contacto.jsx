import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import './Contacto.css'

function Contacto() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/Servicios">Soluciones</Link>
          <Link to="/FAQ">FAQ</Link>
        </nav>
      </header>
      <main className="contacto-container">
        <section className="contacto-hero">
          <h1>Contactanos 🚀 </h1>
          <div className="contacto-widget animated-widget">
            <h2 style={{ color: '#111' }}>Completá el formulario y nos pondremos en contacto.</h2>
            <a
              href="https://forms.gle/223P3vSQKfg4GPi17"
              className="contacto-form-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Completar
            </a>
          </div>
        </section>
        <br />
        <br />
         <br />
        <br />
         <br />
        <br />
         <br />
        <br />
      </main>
    </div>
  )
}

export default Contacto
