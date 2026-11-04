import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  timeout: 10000,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

let accessToken = null

apiClient.interceptors.request.use((config) => {
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

export function setAccessToken(token) {
  accessToken = token || null
}

export function isDemoMode() {
  return import.meta.env.VITE_USE_MOCK_DATA !== 'false'
}

export default apiClient
