import { GoogleMap } from "@react-google-maps/api"

function Map({ mapRef }) {

    return (
        <GoogleMap ref={mapRef} zoom={10} center={{ lat: 44, lng: -88 }} mapContainerClassName="map-container">
        </GoogleMap>
    )
}

export default Map