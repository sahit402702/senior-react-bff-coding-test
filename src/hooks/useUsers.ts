import { useState, useEffect } from 'react'
import type { User } from '../types/User'
import { fetchUsers } from '../services/userService'

/**
 * Custom hook for fetching users
 * 
 * TODO: Implement useUsers hook
 * 
 * Requirements:
 * 1. Manage three states: users, loading, error
 * 2. Use useEffect to fetch users on mount
 * 3. Call fetchUsers() from userService
 * 4. Handle try-catch for errors
 * 5. Return { users, loading, error }
 * 
 * States to manage:
 * - users: User[] (initially empty array)
 * - loading: boolean (initially true)
 * - error: string | null (initially null)
 * 
 * Flow:
 * 1. Set loading true
 * 2. Try to fetch users
 * 3. Set users and loading false on success
 * 4. Set error and loading false on failure
 */

interface UseUsersResult {
  users: User[]
  loading: boolean
  error: string | null
}

export function useUsers(): UseUsersResult {
  // TODO: Implement the hook
  
  return {
    users: [],
    loading: false,
    error: null
  }
}
