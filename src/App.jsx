import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Servicios from './pages/Servicios'
import FAQ from './pages/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
