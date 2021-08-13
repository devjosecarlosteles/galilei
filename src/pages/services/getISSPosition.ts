import axios from 'axios'

const getISSPosition = axios.create({
  baseURL: 'https://api.wheretheiss.at/v1/satellites/25544'
})

export default getISSPosition