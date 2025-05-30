import logo from '../assets/Logo.png' // Asegúrate de tener tu logo en src/assets/logo.png
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <header className="home-header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="home-nav">
          <Link to="#que-hacemos">Qué hacemos</Link>
          <Link to="#como-lo-hacemos">Cómo lo hacemos</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </header>
      <main className="home-main">
        <h1 className="home-title">Bienvenido a NAIXON</h1>
        <h2 className="home-subtitle">Soluciones creativas para tu negocio</h2>
        {/* ...puedes agregar más contenido aquí... */}
      </main>
    </div>
  )
}

export default Home
