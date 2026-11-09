```javascript
import apiClient from '../services/apiClient'

export async function getActivities() {
  const response = await apiClient.get('/activities')
  return response.data
}

export async function createActivity(activity) {
  const response = await apiClient.post('/activities', activity)
  return response.data
}
```