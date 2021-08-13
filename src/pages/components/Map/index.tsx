import React, { useState, useEffect } from "react"
import {
  GoogleMap,
  withGoogleMap,
  Marker
} from "react-google-maps"
import getISSPosition from "../../services/getISSPosition"

function MapComponent () {
  const [ latitudeState, setLatitudeState ] = useState('')
  const [ longitudeState, setLongitudeState ] = useState('')

  const Map = withGoogleMap(props => (
    <GoogleMap 
      defaultZoom={ 4 } 
      center={{ lat: parseInt(latitudeState), lng: parseInt(longitudeState) }}
      mapTypeId={ google.maps.MapTypeId.HYBRID }
    >
      <Marker 
        position={{ lat: parseInt(latitudeState), lng: parseInt(longitudeState) }} 
        icon={{
          url: 'https://i.ibb.co/7RgCbjS/Frame-1-8.png',
          anchor: new google.maps.Point(17, 46),
          scaledSize: new google.maps.Size(100, 100)
        }}
      />
    </GoogleMap>
  ))
  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await getISSPosition.get('')
      if(response.data.message === 'success') {
        setLatitudeState(response.data.iss_position.latitude)
        setLongitudeState(response.data.iss_position.longitude)
        console.log(longitudeState)
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [latitudeState, longitudeState])
  return (
    <>
      <Map 
        containerElement={ <div style={{ height: `76vh`, width: '90vw' }} /> }
        mapElement={ <div style={{ height: `100%` }} /> }
    /></>
  )
}

export default MapComponent