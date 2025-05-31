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
          <div className="contacto-widgets-row">
            <div className="contacto-widget animated-widget">
              <h2 style={{ color: '#111' }}>Completá el formulario y nos pondremos en contacto.</h2>
              <a href="https://forms.gle/223P3vSQKfg4GPi17" className="contacto-form-link" target="_blank" rel="noopener noreferrer">
                Completar
              </a>
            </div>
            <div className="contacto-widget mail-widget">
              <h3>Tambien podes enviarnos un mail</h3>
              <form
                className="contacto-email-form"
                action="mailto:naixon.solutions@gmail.com"
                method="POST"
                encType="text/plain"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Escribí tu mensaje..."
                  required
                  rows={5}
                />
                <button
                  type="submit"
                  className="contacto-form-link"
                  style={{ width: '100%', maxWidth: 200, textAlign: 'center' }}
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  )
}

export default Contacto
