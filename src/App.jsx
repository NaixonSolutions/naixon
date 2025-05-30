import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Contacto from './pages/Contacto'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/contacto">Contacto</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  )
}

export default App
