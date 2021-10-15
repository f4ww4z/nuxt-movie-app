import axios from 'axios'

const axClient = axios.create({
  baseURL: process.env.MOVIE_DB_BASE_URL || 'https://api.themoviedb.org/3/'
})

axClient.interceptors.request.use((config) => {
  config.params = config.params || {}
  config.params.api_key = process.env.MOVIE_DB_API_KEY
  config.params.language = 'en-US'

  return config
})

export default axClient
