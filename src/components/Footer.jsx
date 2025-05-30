import { Link } from 'react-router-dom'
import instagramIcon from '../assets/instagram.png'
import mailIcon from '../assets/mail.webp'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <div className="footer-copyright">
            © {currentYear} NAIXON. Todos los derechos reservados.
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-links">
            <a href="/privacidad" className="footer-link">Política de Privacidad</a>
            <a href="/terminos" className="footer-link">Términos y Condiciones</a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-quicklinks">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/contacto" className="footer-link">Contacto</Link>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-social">
            <a href="https://https://www.instagram.com/naixon_solutions?igsh=aG0yZzY3Z2R5b2c5&utm_source=qr.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={instagramIcon} alt="Instagram" className="footer-social-icon" />
            </a>
            <a href="mailto:naixon.solutions@gmail.com" className="footer-social-link">
              <img src={mailIcon} alt="Mail" className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
