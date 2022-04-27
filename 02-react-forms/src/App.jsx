import RefDom from './components/RefDom'
import RefLogin from './components/RefLogin'
import SimpleForm from './components/SimpleForm'
import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <RefDom />
        <RefLogin />
        <SimpleForm />
      </header>
    </div>
  )
}

export default App
