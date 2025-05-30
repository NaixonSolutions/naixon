import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<h1>Servicios</h1>} />
        <Route path="/faq" element={<h1>FAQ</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
