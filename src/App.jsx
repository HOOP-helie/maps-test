import Map from './Map'
import './App.css'
import { useLoadScript } from "@react-google-maps/api"


const googleLibraries = ["places"];
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY

function App() {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: GOOGLE_MAPS_API_KEY, libraries: googleLibraries })
  let content;

  if (!isLoaded) content = <p>Loading...</p>;
  else {
    content = <>
      <Map />
    </>
  }
  return (
    <>
      <div className='app'>
        {content}
      </div>
    </>
  )
}

export default App
