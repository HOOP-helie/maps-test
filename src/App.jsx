import Map from './Map'
// import Sidebar from './Sidebar'
import SearchBar from './SearchBar'
import './App.css'
// import { useLoadScript } from "@react-google-maps/api"

function App() {
  // const { isLoaded } = useLoadScript({ googleMapsApiKey: import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY, libraries: ['places'] })
  let content;

  // if (!isLoaded) content = <p>Loading...</p>;
  // else {
  content = <>
    <Map />
    <SearchBar />
    {/* <Sidebar /> */}

  </>
  // }
  return (
    <>
      <div className='app'>
        {content}
      </div>
    </>
  )
}

export default App
