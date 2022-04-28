import './App.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Deploy</h1>
        <p>{import.meta.env.VITE_MY_SECRET}</p>
      </header>
    </div>
  )
}

export default App
