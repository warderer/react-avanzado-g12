import { useState, useEffect, createContext, useContext } from 'react'
import canciones from '@/assets/listaCanciones.json'

// CONTEXT tiene que ver con el manejo de estados globales en React
// Es decir, poder compartir la misma información entre diferentes niveles de componentes.
// Para usarlo, necesitamos seguir una serie de pasos:

// #1 Creación del contexto (lo inicializare vacío)
const SongContext = createContext()

// #2 Crear al proveedor del contexto
// Es decir, manejo de donde se obtiene y como se pasa la info

function SongProvider (props) {
  const [list, setList] = useState([]) // Lista de canciones
  const [loading, setLoading] = useState(true) // Nos indica cuando los datos estan disponibles
  const [selectedSong, setSelectedSong] = useState({}) // Nos dira la canción seleccionada

  // Simulo una llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  // Tenemos que indicar al provider que datos debe proveer.
  // Estos son públicos para todos los componentes
  const value = {
    list,
    selectedSong,
    setSelectedSong,
    loading
  }

  return (
    // Siempre se llama value el prop del Provider con la data
    // value es un objeto que indica que los datos son globales
    <SongContext.Provider value={value} {...props} />
  )
}

// #3 Consumidor del contexto
// Brinda acceso a la data de los componentes
const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

// #4 Exportar las funciones del provide y del consumer
// para que puedan ser invocadas en nuestros componentes

export {
  SongProvider,
  useSongContext
}

/* USO DE CONTEXT
   #5 Ahora debemos ir a un componente de orden superior y envolver a los componentes que necesiten la información del contexto a través del Provider,
   en este caso sera <SongProvider> <SongProvider />

*/
