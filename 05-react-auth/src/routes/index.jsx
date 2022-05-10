import { Routes, Route } from 'react-router-dom'
import { Home, Login, Signup, Secret, Logout } from '@/pages'

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
