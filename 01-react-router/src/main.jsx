import React from 'react'
import ReactDOM from 'react-dom/client'

/* Importar BrowserRouter, que toda a mi App de poder manejar rutas.
    Debe estar en un componente superior, para que este disponible
    en toda mi aplicación.
*/
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
