import axios from 'axios'


export const API = axios.create({})

API.interceptors.request.use(function (config)  {
  if (localStorage.getItem('authToken')) {
    config.headers.common['Authorization'] = localStorage.getItem('authToken')
  }
  return config
})

API.interceptors.response.use(function (response) {
  let token = response.data.token
  if(token) {
    localStorage.setItem('authToken', token, { expires: 1/24 })
  }
  return response 
})

export default API