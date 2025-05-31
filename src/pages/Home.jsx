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
        <h3 className="home-subtitle">Diseñamos estrategias tecnológicas que impulsan tu crecimiento.</h3>
        <Link to="/Contacto" className="cta-btn">Me interesa</Link>
        <div className="benefits-grid">
          <div className="benefit-widget">
            <h4>Eficiencia y productividad aumentada</h4>
            <p>Automatiza procesos, optimiza flujos de trabajo y libera a tu equipo para tareas estratégicas, logrando más en menos tiempo.</p>
          </div>
          <div className="benefit-widget">
            <h4>Reducción inteligente de costos</h4>
            <p>Optimiza el uso de recursos, minimiza errores y gastos operativos, generando en una mayor rentabilidad para tu empresa.</p>
          </div>
          <div className="benefit-widget">
            <h4>Decisiones basadas en datos</h4>
            <p>Accede a información precisa y en tiempo real para tomar decisiones más informadas, ganando una clara ventaja competitiva en tu sector.</p>
          </div>
          <div className="benefit-widget">
            <h4>Experiencia del cliente superior</h4>
            <p>Personaliza la interacción y agiliza el servicio, mejorando la satisfacción y fidelidad de tus clientes de manera significativa.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
