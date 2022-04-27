import { useState } from 'react'

const SimpleForm = () => {
  /* 1. Creo los estados donde guardare la información tecleada */
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  /* 4. Manejo lo que sucedera cuando se envie mi formulario */
  const handleSubmit = (event) => {
    event.preventDefault() // Esto hace que no se recargue la página
    // Convertir mi data en un objeto JSON
    const submittedData = JSON.stringify({ email, password })
    console.log(submittedData)
  }

  console.log('Email', email)
  console.log('Password', password)

  /* 2. Creo el formulario base */
  return (
    <div className='login'>
      <div className='login-container'>
        <form className='form'>
          <label htmlFor='email'>Email</label>
          {/* 3. Guardo cada cambio del input en su estado correspondiente */}
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor='email'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='******'
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={handleSubmit}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default SimpleForm
