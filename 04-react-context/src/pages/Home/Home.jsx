import SongList from '@/components/SongList/SongList'
import SongDetails from '@/components/SongDetails'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='izquierdo'>
        <h2>Izquierdo</h2>
        <SongList />
      </div>
      <div className='derecho'>
        <SongDetails />
        <h2>Derecho</h2>
      </div>
    </div>
  )
}

export default Home
