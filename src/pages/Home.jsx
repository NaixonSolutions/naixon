import logo from '../assets/Logo.png' 
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <Link to="/Servicios">Soluciones</Link>
          <Link to="/Contacto">Contacto</Link>
          <Link to="/FAQ">FAQ</Link>
        </nav>
      </header>
      <main className="home-main">
        <h1 className="home-title">Soluciones para potenciar tu negocio</h1>
        <h3 className="home-subtitle">Diseñamos estrategias tecnológicas innovadoras que impulsan tu crecimiento.</h3>
        <Link to="/Contacto" className="cta-btn">Me interesa</Link>
      </main>
    </div>
  )
}

export default Home
