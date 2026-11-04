
export async function getActivities() {
  const response = await fetch('/api/activities')
  if (!response.ok) throw new Error('Could not load activities')
  return response.json()
}

export async function createActivity(activity) {
  const response = await fetch('/api/activities', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(activity),
  })

  if (!response.ok) throw new Error('Could not save activity')
  return response.json()
}
