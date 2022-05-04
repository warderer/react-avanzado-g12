import './App.css'
import { Navbar } from '@/components/Navbar'
import { Home, Login, Signup, Secret } from '@/pages'

function App () {
  return (
    <div>
      <Navbar />
      <h1>App</h1>
      <Home />
      <Login />
      <Signup />
      <Secret />
    </div>
  )
}

export default App
