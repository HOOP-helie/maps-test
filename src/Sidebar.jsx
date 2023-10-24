import PlaceDetails from "./PlaceDetails";
import SearchBar from "./SearchBar"
import { useState } from "react"

function Sidebar() {
    const [selectedPlace, setSelectedPlace] = useState(null);

    return (
        <div>
            <SearchBar setSelectedPlace={setSelectedPlace} />
            {selectedPlace && <PlaceDetails selectedPlaceID={selectedPlace} />}
        </div>
    )
}

export default Sidebar