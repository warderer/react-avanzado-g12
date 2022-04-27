import RefDom from './components/RefDom'
import RefLogin from './components/RefLogin'
import SimpleForm from './components/SimpleForm'
import FormHook from './components/FormHook'
import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <RefDom />
        <RefLogin />
        <SimpleForm />
        <FormHook />
      </header>
    </div>
  )
}

export default App
