import { useState, useEffect } from 'react'
import type { Meal } from '../types/Meal'

interface UseMealsResult {
  meals: Meal[]
  loading: boolean
  error: string | null
}

/**
 * Custom hook to search for meals by query term.
 * 
 * TODO: Implement the following:
 * 1. Accept a searchQuery parameter (string)
 * 2. Use useState to manage meals, loading, and error states
 * 3. Use useEffect to fetch data from: https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}
 * 4. The API returns { meals: [...] } - extract the meals array
 * 5. Handle the case where meals is null (no results) - set to empty array
 * 6. Set loading to true before fetch, false after
 * 7. Handle errors appropriately
 * 8. Re-fetch when searchQuery changes
 * 9. Return { meals, loading, error }
 */
export function useMeals(searchQuery: string): UseMealsResult {
  // TODO: Implement this hook
  // Hint: You'll need useState and useEffect with searchQuery in dependency array

  return {
    meals: [],
    loading: false,
    error: null
  }
}

