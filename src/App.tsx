import { useUsers } from './hooks/useUsers'
import UserList from './components/UserList'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import './App.css'

/**
 * Main App Component
 * 
 * TODO: Implement the user directory
 * 
 * Requirements:
 * 1. Use useUsers() hook to fetch users
 * 2. Show loading state while fetching
 * 3. Show error state if fetch fails
 * 4. Show UserList when data loaded
 * 
 * Example structure:
 * const { users, loading, error } = useUsers()
 * 
 * if (loading) return <Loader />
 * if (error) return <ErrorMessage message={error} />
 * 
 * return <UserList users={users} />
 */

export default function App() {
  // TODO: Get users, loading, error from useUsers hook
  
  // TODO: Handle loading state - show <Loader />
  
  // TODO: Handle error state - show <ErrorMessage message={error} />
  
  // TODO: Display UserList with users
  
  return (
    <div className="app">
      <div className="container">
        <h1>User Directory</h1>
        <p>TODO: Implement user directory</p>
      </div>
    </div>
  )
}


