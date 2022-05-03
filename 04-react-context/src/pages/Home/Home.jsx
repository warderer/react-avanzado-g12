import SongList from '@/components/SongList/SongList'
import SongDetails from '@/components/SongDetails'
import { SongProvider } from '@/context/SongContext'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <SongProvider>
        <div className='izquierdo'>
          <h2>Lista de Canciones</h2>
          <SongList />
        </div>
        <div className='derecho'>
          <SongDetails />
        </div>
      </SongProvider>
    </div>
  )
}

export default Home
