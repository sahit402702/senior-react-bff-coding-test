import { renderHook, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useFetch } from '../hooks/useFetch'

/**
 * TASK 3a — Fix and complete these tests.
 *
 * TODO:
 *  1. Mock `fetch` so tests don't make real HTTP calls
 *  2. Complete the "handles fetch error" test
 *  3. Add a test that verifies cleanup (ignores stale responses when URL changes)
 */

// ── helpers ──────────────────────────────────────────────────────────────
const MOCK_USERS = [
  { id: 1, name: 'Alice', email: 'alice@test.com', phone: '123', company: { name: 'Acme' } },
  { id: 2, name: 'Bob', email: 'bob@test.com', phone: '456', company: { name: 'Globex' } },
]

describe('useFetch', () => {
  beforeEach(() => {
    // TODO: mock global `fetch` to return MOCK_USERS
    // Hint: vi.spyOn(global, 'fetch').mockResolvedValue(...)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns data after a successful fetch', async () => {
    const { result } = renderHook(() =>
      useFetch<typeof MOCK_USERS>('https://api.example.com/users'),
    )

    // Initially loading should be true
    expect(result.current.loading).toBe(true)
    expect(result.current.data).toBeNull()

    // After fetch resolves
    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toEqual(MOCK_USERS)
    expect(result.current.error).toBeNull()
  })

  it('handles fetch error', async () => {
    // TODO: mock fetch to reject with an error
    // e.g. vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'))

    const { result } = renderHook(() =>
      useFetch('https://api.example.com/fail'),
    )

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    // TODO: assert error message and data is null
  })

  // TODO: Add test "ignores stale response when URL changes"
  // Hint: render with URL A, rerender with URL B, ensure data matches B not A
})
