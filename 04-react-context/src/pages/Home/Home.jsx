import SongList from '@/components/SongList/SongList'
import SongDetails from '@/components/SongDetails'
import { SongProvider } from '@/context/SongContext'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <SongProvider>
        <div className='izquierdo'>
          <h2>Izquierdo</h2>
          <SongList />
        </div>
        <div className='derecho'>
          <SongDetails />
          <h2>Derecho</h2>
        </div>
      </SongProvider>
    </div>
  )
}

export default Home
