import { GoogleMap } from "@react-google-maps/api"
import SearchBar from './SearchBar'

function Map() {

    return (
        <GoogleMap zoom={10} center={{ lat: 44, lng: -88 }} mapContainerClassName="map-container">
            <SearchBar />

        </GoogleMap>
    )
}

export default Map