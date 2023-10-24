import { GoogleMap } from "@react-google-maps/api"
import SideBar from './SideBar'

function Map() {

    return (
        <GoogleMap zoom={10} center={{ lat: 44, lng: -88 }} mapContainerClassName="map-container">
            <SideBar />
        </GoogleMap>
    )
}

export default Map