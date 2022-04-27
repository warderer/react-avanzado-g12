import { useRef } from 'react'
import logo from '../logo.svg'

const RefLogin = () => {
  const form = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault() // Esto hace que no se recargue la página
    // console.log(form.current)
    // eslint-disable-next-line no-undef
    const formData = new FormData(form.current)
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data)
  }

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='logo' />
        <form className='form' ref={form}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
          />
          <label htmlFor='email'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='******'
          />
          <button onClick={handleSubmit}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default RefLogin
