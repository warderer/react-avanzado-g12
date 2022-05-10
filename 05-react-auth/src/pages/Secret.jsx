import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

const Secret = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <h1>Secret</h1>
      {user.role === 'ADMIN'
        ? <h2>Hola Admin</h2>
        : <h2>Hola Cliente</h2>}

      {user.role === 'CUSTOMER' &&
        <h4>Bienvenido seas cliente</h4>}

      {user.role === 'ADMIN' &&
        <h4>Bienvenido seas admin</h4>}

    </div>
  )
}

export default Secret
