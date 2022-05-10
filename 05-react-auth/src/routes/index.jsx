import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Signup, Secret, Logout } from '@/pages'
import Protected from '@/hoc/Protected'
import { AuthContext } from '@/context/AuthContext'

function RoutesIndex () {
  const { isAuth } = useContext(AuthContext)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route
        path='/secret'
        element={
          <Protected isLoggedIn={isAuth}>
            <Secret />
          </Protected>
      }
      />
      <Route path='/logout' element={<Logout />} />
    </Routes>
  )
}

export default RoutesIndex
