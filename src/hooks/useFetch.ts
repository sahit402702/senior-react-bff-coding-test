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
 * Complete the useFetch hook by filling in the TODOs below.
 */

export function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // TODO 1: Create an AbortController for cleanup
    // const controller = new AbortController()

    setLoading(true)
    setError(null)

    // TODO 2: Call fetch with url and pass controller.signal
    // fetch(url, { signal: controller.signal })

    // TODO 3: Handle the response
    //   - Check if response.ok, if not throw error
    //   - Parse JSON and set data
    //   - Set loading to false
    //   - Catch errors (ignore AbortError)

    // TODO 4: Return cleanup function that calls controller.abort()
  }, [url])

  return { data, loading, error }
}

/**
 * TASK 2b — Implement this custom hook.
 *
 * Complete the useDebounce hook by filling in the TODOs below.
 */

export function useDebounce<T>(value: T, delay: number): T {
  // TODO 1: Create state for debouncedValue, initialized with value
  // const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // TODO 2: Create a setTimeout that updates debouncedValue after delay
    // const timer = setTimeout(() => {
    //   setDebouncedValue(value)
    // }, delay)

    // TODO 3: Return cleanup function that clears the timeout
    // return () => clearTimeout(timer)
  }, [value, delay])

  // TODO 4: Return the debouncedValue
  return value
}
