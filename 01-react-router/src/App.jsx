import { Routes, Route, Link, useLocation } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/portafolio">Portafolio </Link>
            </li>
            <li>
              <Link to="/contacto">Contacto </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </header>
    </div>
  )
}

function Home() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello React Router + React!</h1>
    </>
  )
}

function Portafolio(){
  return (
    <>
      <h1>Portafolio</h1>
      <p>Este es mi portafolio</p>
    </>
  
  )
}

function Contacto(){
  return (
    <>
      <h1>Contacto</h1>
    </>
  )
}

function Error404(){
  let location = useLocation();
  return (
    <>
      <h1>ERROR 404</h1>
      <p>Recurso no encontrado: { location.pathname }</p>
    </>
  )
}

export default App
