import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, Signup, Secret } from '@/pages'

// Componente que hara Logout
const Logout = () => {
  window.localStorage.removeItem('token')
  return <Navigate to='/' />
}

function RoutesIndex () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/logout' element={<Logout />} />
    </Routes>
  )
}

export default RoutesIndex
