import { useEffect } from "react"
// import { createMarker } from "@react-google-maps/api"

function PlaceDetails({ placeID, mapRef }) {
  // const myLatLng = { lat: -25.363, lng: 131.044 };
  // const map = new window.google.maps.Map(document.getElementById("map"), {
  //   zoom: 4,
  //   center: myLatLng,
  // });

  useEffect(() => {
    const map = mapRef?.current;
    console.log(map)
    var request = {
      placeId: placeID,
      // fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
    };

    const service = new window.google.maps.places.PlacesService(map);
    service.getDetails(request, callback);

    function callback(place, status) {
      if (status == window.google.maps.places.PlacesServiceStatus.OK) {
        const center = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
        console.log(center)
        map.setCenter(center)

      }
    }

  }, [placeID, mapRef]);

  return (
    <div>PlaceDetails</div>
  )
}

export default PlaceDetails