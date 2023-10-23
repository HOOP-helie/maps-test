import { GoogleMap, Marker } from "@react-google-maps/api"

function Map() {
    return (
        <GoogleMap zoom={10} center={{ lat: 44, lng: -88 }} mapContainerClassName="map-container">
            <Marker position={{ lat: 44, lng: -88 }} />
        </GoogleMap>
    )
}

export default Map