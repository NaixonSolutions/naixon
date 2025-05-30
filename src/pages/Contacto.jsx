import logo from '../assets/Logo.png' 
import { Link } from 'react-router-dom'

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
      <h1>Contacto</h1>
      <p>Puedes contactarnos a través de este formulario.</p>
      {/* Aquí puedes agregar un formulario de contacto si lo deseas */}
    </div>
  )
}

export default Contacto
