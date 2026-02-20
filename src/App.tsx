import { useState, useMemo } from 'react'
import { useUsers } from './hooks/useUsers'
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import './App.css'

/**
 * Main App Component
 * 
 * TODO: Implement the user directory with search functionality
 * 
 * Requirements:
 * 1. Use useUsers() hook to fetch users
 * 2. Use useState for search query
 * 3. Use useMemo to filter users by search query (case-insensitive)
 * 4. Show loading state while fetching
 * 5. Show error state if fetch fails
 * 6. Show SearchBar and UserList when data loaded
 * 7. Filter users by name matching search query
 * 
 * useMemo example for filtering:
 * const filteredUsers = useMemo(() => {
 *   if (!searchQuery) return users
 *   return users.filter(user => 
 *     user.name.toLowerCase().includes(searchQuery.toLowerCase())
 *   )
 * }, [users, searchQuery])
 * 
 * This prevents unnecessary filtering on every render
 */

export default function App() {
  // TODO: Get users, loading, error from useUsers hook
  
  // TODO: Add state for search query
  
  // TODO: Use useMemo to filter users based on search query
  
  // TODO: Handle loading state - show <Loader />
  
  // TODO: Handle error state - show <ErrorMessage message={error} />
  
  // TODO: Render SearchBar and UserList with filtered users
  
  return (
    <div className="app">
      <div className="container">
        <h1>User Directory</h1>
        <p>TODO: Implement user directory with search</p>
      </div>
    </div>
  )
}


