import axios from 'axios'
import { getToken } from './auth'

const baseUrl = 'baseurl": "localhost:4000/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}


// Auth Requests
export function registerUser(formData) {
  return axios.post('api/register', formData)
}

export function loginUser(formData) {
  return axios.post('api/login', formData)
}

export function showUserProfile() {
  return axios.get('api/profile/', headers())
}

// Club Requests
export function getAllClubs() {
  return axios.get(`${baseUrl}/clubs`)
}

export function getSingleClub() {
  return axios.get(`${baseUrl}/clubs/:clubId`)
}

// Pub Requests


export function getAllPubs() {
  return axios.get('/api/pubs')
}

export function getSinglePub(pubId) {
  return axios.get(`/api/pubs/${pubId}`)
}

export function createPub(formdata) {
  return axios.post('/api/pubs', formdata, headers())
}

export function deletePub(pubId) {
  return axios.delete(`/api/pubs/${pubId}`, headers())
}

export function editPub(pubId, formdata){
  return axios.put(`/api/pubs/${pubId}`, formdata, headers())
}
