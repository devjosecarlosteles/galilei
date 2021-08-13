import React, { useState, useEffect } from "react"
import {
  GoogleMap,
  withGoogleMap,
  Marker
} from "react-google-maps"
import getISSPosition from "../../services/getISSPosition"

function MapComponent () {
  const [ latitudeState, setLatitudeState ] = useState('-34.397')
  const [ longitudeState, setLongitudeState ] = useState('150.644')

  const Map = withGoogleMap(props => (
    <GoogleMap 
      defaultZoom={ 4 } 
      center={{ lat: parseInt(latitudeState), lng: parseInt(longitudeState) }}
      mapTypeId={ google.maps.MapTypeId.HYBRID }
      key='AIzaSyBX_JVj9M3tZrj6mtKGCZI3KigF0H_IIqI'
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
        setLatitudeState(response.data.latitude)
        setLongitudeState(response.data.longitude)
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