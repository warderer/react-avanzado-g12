import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Portafolio />
        <Contacto />
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

export default App
