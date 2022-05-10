import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '@/context/AuthContext'

const Navbar = () => {
  const { isAuth } = useContext(AuthContext)
  return (
    <div className='container'>
      <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
        <Link to='/' className='d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none'>
          LOGO
        </Link>

        <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
          <li><Link to='/' className='nav-link px-2 link-secondary'>Home</Link></li>
          <li><Link to='/secret' className='nav-link px-2 link-dark'>Secret</Link></li>
        </ul>

        <div className='col-md-3 text-end'>
          {isAuth
            ? (
              <Link to='/logout'>
                <button type='button' className='btn btn-outline-primary me-2'>Logout</button>
              </Link>
              )
            : (
              <>
                <Link to='/login'>
                  <button type='button' className='btn btn-outline-primary me-2'>Login</button>
                </Link>
                <Link to='/signup'>
                  <button type='button' className='btn btn-primary'>Sign-up</button>
                </Link>
              </>
              )}

        </div>
      </header>
    </div>
  )
}

export default Navbar
