import useForm from '@/hooks/useForm'
import '@/assets/css/form.css'
import logo from '@/logo.svg'

const Signup = () => {
  const sendData = (data) => {
    console.log(data)
    // Logica de la función que maneja el envio del formulario
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    password: '',
    password_confirm: ''
  })

  return (
    <main className='form-signin'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

        <div className='form-floating my-1'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            placeholder='John'
            value={input.first_name}
            onChange={handleInputChange}
          />
          <label htmlFor='first_name'>First name</label>
        </div>

        <div className='form-floating my-1'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            placeholder='Doe'
            value={input.last_name}
            onChange={handleInputChange}
          />
          <label htmlFor='last_name'>Last name</label>
        </div>

        <div className='form-floating my-1'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
            value={input.email}
            onChange={handleInputChange}
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating my-1'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            required=''
            value={input.gender}
            onChange={handleInputChange}
          >
            <option value=''>Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender' className='form-label'>Gender</label>
        </div>

        <div className='form-floating my-1'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
            value={input.password}
            onChange={handleInputChange}
          />
          <label htmlFor='password'>Password</label>
        </div>

        <div className='form-floating my-1'>
          <input
            type='password'
            className='form-control'
            id='password_confirm'
            name='password_confirm'
            placeholder='Repeat your Password'
            value={input.password_confirm}
            onChange={handleInputChange}
          />
          <label htmlFor='password_confirm'>Repeat your Password</label>
        </div>

        <button className='my-3 w-100 btn btn-lg btn-primary' type='submit'>Sign up</button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2021</p>
      </form>
    </main>
  )
}

export default Signup
