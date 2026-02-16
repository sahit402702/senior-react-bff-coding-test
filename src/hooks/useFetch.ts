import { useState, useEffect } from 'react'
import type { User } from '../types'

interface UseFetchResult<T> {
  data: T | null
  loading: boolean
  error: string | null
}

/**
 * TASK 2a — Implement this custom hook.
 *
 * Requirements:
 *  - Accept `url` parameter
 *  - Return `{ data, loading, error }` with proper TypeScript generics
 *  - Handle loading, success, and error states
 *  - Clean up / ignore stale responses when URL changes (use AbortController or cleanup flag)
 */

export function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // TODO: implement the useEffect that fetches data from `url`

  return { data, loading, error }
}

/**
 * TASK 2b — Implement this custom hook.
 *
 * Requirements:
 *  - Accept `value` and `delay` (ms)
 *  - Return the debounced value
 *  - Clean up timeout on unmount or when value/delay changes
 */

export function useDebounce<T>(value: T, delay: number): T {
  // TODO: implement debounce logic
  return value
}
