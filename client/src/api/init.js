import axios from 'axios'

// Create an axios instance
const api = axios.create({
  baseURL: 'https://express-mongo-passport-edjgjilspl.now.sh' // API server
  //baseURL: 'http://localhost:3000'
})

// Add the bearer token to the axios instance
// Axios will then add this to the HTTP header with every subsequent request
const setJwt = (token) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export { api, setJwt }
