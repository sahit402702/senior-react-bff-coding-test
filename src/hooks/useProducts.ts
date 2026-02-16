import { useState, useEffect } from 'react'
import type { Product } from '../types/Product'

interface UseProductsResult {
  products: Product[]
  loading: boolean
  error: string | null
}

/**
 * Custom hook to fetch all products from the API.
 * 
 * TODO: Implement the following:
 * 1. Use useState to manage products, loading, and error states
 * 2. Use useEffect to fetch data from: https://fakestoreapi.com/products
 * 3. Set loading to true before fetch, false after
 * 4. Handle errors appropriately
 * 5. Return { products, loading, error }
 */
export function useProducts(): UseProductsResult {
  // TODO: Implement this hook
  // Hint: You'll need useState and useEffect

  return {
    products: [],
    loading: false,
    error: null
  }
}
