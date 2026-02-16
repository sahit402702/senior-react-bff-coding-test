import { useParams, Link } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

/**
 * UserDetailsPage component - displays details for a single user.
 * 
 * TODO: Implement the following:
 * 1. Use useParams to get the user ID from the URL
 * 2. Use the useUser hook to fetch the user data
 * 3. Display Loader component while loading
 * 4. Display ErrorMessage component if there's an error
 * 5. Display user details: name, email, phone, website, company name
 * 6. Add a "Back to Users" link
 */
export default function UserDetailsPage() {
  // TODO: Get id from useParams

  // TODO: Call useUser hook with the id

  // TODO: Handle loading state

  // TODO: Handle error state

  // TODO: Display user details

  return (
    <div style={{ padding: '2rem' }}>
      <Link to="/users">← Back to Users</Link>
      <h1>User Details</h1>
      <p>TODO: Display user information here</p>
    </div>
  )
}
