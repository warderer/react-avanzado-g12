import { createContext, useState, useEffect } from 'react'
import getPayload from '@/util/getPayload'

// #1 Crear el contexto
export const AuthContext = createContext()

// #2 Crear el Proveedor del contexto
// Aquí va la lógica que me permite consumir el contexto
const AuthContextProvider = (props) => {
  // Defino mis estados globales
  // #1 ¿El usuario inicio sesión correctamente?
  const [isAuth, setIsAuth] = useState(false)
  // #2 Información del Payload del JWT descifrado
  const [user, setUser] = useState(null)

  // Necesito la lógica a usar cuando se inicie sesión
  const loginUser = (token) => {
    window.localStorage.setItem('token', token)
    const decoded = getPayload(token)
    setUser(decoded)
    setIsAuth(true)
  }

  const logoutUser = () => {
    window.localStorage.removeItem('token')
    setUser({})
    setIsAuth(false)
  }

  // Verificar en la carga de mi componente si ya existia un token y lo cargo
  useEffect(() => {
    const item = window.localStorage.getItem('token')
    if (item) {
      const decoded = getPayload(item)
      setUser(decoded)
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth, user, loginUser, logoutUser
    }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
