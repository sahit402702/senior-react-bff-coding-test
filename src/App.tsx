import { useUsers } from './hooks/useUsers'
import UserList from './components/UserList'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import './App.css'

/**
 * TODO: Implement the main App component
 * 
 * Requirements:
 * 1. Use useUsers() hook to fetch users
 * 2. Handle loading, error, and success states
 * 3. Display UserList with the fetched users
 */

export default function App() {
  // TODO: Implement
  
  return (
    <div className="app">
      <div className="container">
        <h1>User Directory</h1>
        <p>TODO: Implement user directory</p>
      </div>
    </div>
  )
}


