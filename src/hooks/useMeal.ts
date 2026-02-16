import { useState, useEffect } from 'react'
import type { Meal } from '../types/Meal'

interface UseMealResult {
  meal: Meal | null
  loading: boolean
  error: string | null
}

/**
 * Custom hook to fetch a single meal by ID.
 * 
 * TODO: Implement the following:
 * 1. Use useState to manage meal, loading, and error states
 * 2. Use useEffect to fetch data from: https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}
 * 3. The API returns { meals: [...] } - extract the first meal from the array
 * 4. Set loading to true before fetch, false after
 * 5. Handle errors appropriately
 * 6. Re-fetch when ID changes
 * 7. Return { meal, loading, error }
 */
export function useMeal(id: string): UseMealResult {
  // TODO: Implement this hook
  // Hint: You'll need useState and useEffect with id in the dependency array

  return {
    meal: null,
    loading: false,
    error: null
  }
}

