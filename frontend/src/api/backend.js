
export async function checkBackendHealth() {
  const response = await fetch('/api/health')

  if (!response.ok) {
    throw new Error(`Backend returned ${response.status}`)
  }

  return response.json()
}
