import { useEffect, useState } from 'react'
import useForm from '../hooks/useForm'

const FormHook = () => {
  /* 1. Crear un UNICO estado con toda la información en forma de objeto */
  const [datos, setDatos] = useState({})

  /* 2. Voy a simular traer data de una API y prerellenar mi formulario */
  useEffect(() => {
    setTimeout(() => {
      const info = {
        // JSON que manda el BackEnd
        nombre: 'César',
        apellidos: 'Guerra',
        edad: 37,
        genero: 'M',
        email: 'cesar@devf.mx',
        password: 'passwordMySeguro'
      }
      setDatos(info)
    }, 1000)
  }, [])

  const sendData = (data) => {
    console.log('Esta es mi data final; ', data)
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  return (
    <div className='App'>
      <form action='' onSubmit={handleSubmit}> {/* onSubmit se usa el evento cuando mandamos la info del formulario */}
        <input
          type='text'
          name='nombre'
          onChange={handleInputChange}
          value={input.nombre}
          placeholder='tu nombre'
        />

        <input
          type='text'
          name='apellidos'
          onChange={handleInputChange}
          value={input.apellidos}
          placeholder='tu apellido'
        />

        <input
          type='email'
          name='email'
          onChange={handleInputChange}
          value={input.email}
          placeholder='tu email'
        />

        <input
          type='password'
          name='password'
          onChange={handleInputChange}
          value={input.password}
          placeholder='tu password'
        />

        <select
          name='genero'
          onChange={handleInputChange}
          value={input.genero}
        >

          <option value=''> Elige un genero </option>
          <option value='M'>Masculino</option>
          <option value='F'>Femenino</option>
        </select>

        <input
          type='number'
          name='edad'
          onChange={handleInputChange}
          value={input.edad}
          placeholder='tu edad'
        />

        <button type='submit'> Enviar </button>
      </form>
    </div>
  )
}

export default FormHook
