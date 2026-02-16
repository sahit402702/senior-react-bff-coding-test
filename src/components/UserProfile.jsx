import { useState, useEffect } from 'react'

/**
 * UserProfile Component
 * 
 * TODO: Complete this component by implementing:
 * 1. Fetch user data from the API
 * 2. Display loading state while fetching
 * 3. Display error state if the fetch fails
 * 4. Show user's name, email, phone, and company name
 */
function UserProfile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // TODO: Implement useEffect to fetch user data
  useEffect(() => {
    // Fetch from: https://jsonplaceholder.typicode.com/users/1
    // Your code here
  }, [])

  // TODO: Display loading state
  if (loading) {
    return <div className="demo-component">Loading...</div>
  }

  // TODO: Display error state
  if (error) {
    return <div className="demo-component">Error: {error}</div>
  }

  // TODO: Display user data
  return (
    <div className="demo-component">
      <h4>User Profile</h4>
      <p style={{ color: '#888' }}>Implement data fetching to display user information here</p>
      {/* Display user.name, user.email, user.phone, user.company.name */}
    </div>
  )
}

export default UserProfile
