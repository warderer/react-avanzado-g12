import { Routes, Route, Link, useLocation, useParams, Outlet, useNavigate } from 'react-router-dom'
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
          <Route path="/portafolio" element={<Portafolio />} >
            <Route path=":pid" element={<PortafolioDetalle />} />
          </Route>
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
      <Outlet />
      <ul>
        <li>
          <Link to="/portafolio/1">Pinterest</Link>
        </li>
        <li>
          <Link to="/portafolio/2">Cajero</Link>
        </li>
        <li>
          <Link to="/portafolio/3">Pokédex</Link>
        </li>
      </ul>
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

function PortafolioDetalle(){
  const proyectos = [
    { id: 1, nombre: "Pinterest", desc: "Un clon de pinterests con HTML y CSS" },
    { id: 2, nombre: "Cajero", desc: "Simulador de cajero autómatico con HTML, CSS y JS" },
    { id: 3, nombre: "Pokédex", desc: "Consumir la PokéAPI y mostrar un listado de Pokémons con HTML, CSS y JS" }
  ]

  const { pid } = useParams();
  const navigate = useNavigate();

  return(
    <>
      <h3>ID: {proyectos[pid-1].id}</h3>
      <h4>Nombre: {proyectos[pid-1].nombre} </h4>
      <p>Descripción: {proyectos[pid-1].desc} </p>

      <button onClick={()=>{
        /* <Link to="/portafolio"> no funcionaria aquí.
        Cuando quiero usar un enlace dentro de una lógica de JS,
        necesito usar useHistory(React Router v5) o useNavigate(React Router v6)
        */
        navigate('/portafolio')
        // Si quiero ir a la página anterior (go back): navigate(-1);
        // Si quiero ir a la página siguiente (go next): navigate(1);
      }}>
        Nos vamos al Portafolio
      </button>
    </>
  )
}

export default App
