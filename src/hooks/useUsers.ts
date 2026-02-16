import { useState, useEffect } from 'react'
import type { User } from '../types/User'

interface UseUsersResult {
  users: User[]
  loading: boolean
  error: string | null
}

/**
 * Custom hook to fetch all users from the API.
 * 
 * TODO: Implement the following:
 * 1. Use useState to manage users, loading, and error states
 * 2. Use useEffect to fetch data from: https://jsonplaceholder.typicode.com/users
 * 3. Set loading to true before fetch, false after
 * 4. Handle errors appropriately
 * 5. Return { users, loading, error }
 */
export function useUsers(): UseUsersResult {
  // TODO: Implement this hook
  // Hint: You'll need useState and useEffect

  return {
    users: [],
    loading: false,
    error: null,
  }
}
