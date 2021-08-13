import React from 'react'

import {
  Box,
} from '@material-ui/core'

import {
  View
} from './style'

import MapComponent from '../components/Map'

function Home () {
 
  return (
    <Box>
      <View>
        <h1>Galilei</h1>
        <h3 style={{ color:"rgb(230, 230, 230)" }}>localização da ISS em tempo real</h3>
        <br/>
        <MapComponent />
      </View>
    </Box>
  )
}

export default Home