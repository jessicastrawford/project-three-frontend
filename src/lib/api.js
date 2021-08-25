import axios from 'axios'
import { getToken } from './auth'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}


const baseUrl = '/api'

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
  return axios.get('/api/clubs')
}

export function getSingleClub(clubId) {
  return axios.get(`${baseUrl}/clubs/${clubId}`)
}

export function createClub(formData) {
  return axios.post('/api/clubs', formData, headers())
}

export function deleteClub(clubId, formData) {
  return axios.delete(`/api/clubs/${clubId}`, formData, headers())
}

export function editClub(clubId, formData) {
  return axios.put(`/api/clubs/${clubId}`, formData, headers())
}


// Pub Requests


export function getAllPubs() {
  return axios.get('/api/pubs')
}

export function getSinglePub(pubId) {
  return axios.get(`/pubs/${pubId}`)
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

// Comments

