import { useState, useEffect } from 'react'
import type { User } from '../types/User'
import { fetchUsers } from '../services/userService'

/**
 * TODO: Implement useUsers custom hook
 * 
 * Requirements:
 * - Manage states: users, loading, error
 * - Fetch users on mount using useEffect
 * - Handle errors properly
 * - Return { users, loading, error }
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
