import { useState, useEffect } from 'react'
import type { User } from '../types/User'

interface UseUserResult {
  user: User | null
  loading: boolean
  error: string | null
}

/**
 * Custom hook to fetch a single user by ID.
 * 
 * TODO: Implement the following:
 * 1. Use useState to manage user, loading, and error states
 * 2. Use useEffect to fetch data from: https://jsonplaceholder.typicode.com/users/${id}
 * 3. Set loading to true before fetch, false after
 * 4. Handle errors appropriately
 * 5. Re-fetch if id changes
 * 6. Return { user, loading, error }
 */
export function useUser(id: string): UseUserResult {
  // TODO: Implement this hook
  // Hint: useEffect should depend on the id parameter

  return {
    user: null,
    loading: false,
    error: null,
  }
}
