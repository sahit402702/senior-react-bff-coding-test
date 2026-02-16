import { useState, useEffect } from 'react'
import type { Product } from '../types/Product'

interface UseProductResult {
  product: Product | null
  loading: boolean
  error: string | null
}

/**
 * Custom hook to fetch a single product by ID.
 * 
 * TODO: Implement the following:
 * 1. Use useState to manage product, loading, and error states
 * 2. Use useEffect to fetch data from: https://fakestoreapi.com/products/${id}
 * 3. Set loading to true before fetch, false after
 * 4. Handle errors appropriately
 * 5. Re-fetch when ID changes
 * 6. Return { product, loading, error }
 */
export function useProduct(id: string): UseProductResult {
  // TODO: Implement this hook
  // Hint: useEffect should depend on the id parameter

  return {
    product: null,
    loading: false,
    error: null
  }
}
