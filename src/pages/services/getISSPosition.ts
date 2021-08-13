import axios from 'axios'

const getISSPosition = axios.create({
  baseURL: 'http://api.open-notify.org/iss-now.json'
})

export default getISSPosition