import { useEffect, useState } from "react"
import { useGoogleMap } from '@react-google-maps/api'
// import { createMarker } from "@react-google-maps/api"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function PlaceDetails({ selectedPlaceID }) {
  const [place, setPlace] = useState({});

  const map = useGoogleMap()

  useEffect(() => {

    let request = {
      placeId: selectedPlaceID,
      // fields: ['name', 'rating', 'formatted_phone_number', 'geometry', 'opening_hours', 'photos', 'reviews', 'website']
    };

    const service = new window.google.maps.places.PlacesService(map);
    service.getDetails(request, callback);

    function callback(foundPlace, status) {
      if (status == window.google.maps.places.PlacesServiceStatus.OK) {
        const center = {
          lat: foundPlace.geometry.location.lat(),
          lng: foundPlace.geometry.location.lng()
        }
        map.setCenter(center)

        let marker = new window.google.maps.Marker({
          position: center,
        });

        marker.setMap(map);
        setPlace(foundPlace)
        console.log(foundPlace)
      }
    }

  }, [selectedPlaceID, map]);


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={place.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={place.photos[0].getUrl()}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default PlaceDetails