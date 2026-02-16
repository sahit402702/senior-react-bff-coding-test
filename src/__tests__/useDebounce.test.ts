import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useDebounce } from '../hooks/useFetch'

/**
 * TASK 3b — Fix and complete these tests.
 *
 * TODO:
 *  1. Ensure tests pass once useDebounce is implemented
 *  2. Add a "cleans up on unmount" test
 */

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('hello', 500))
    expect(result.current).toBe('hello')
  })

  it('updates the value after the delay', () => {
    let value = 'hello'
    const { result, rerender } = renderHook(() => useDebounce(value, 500))

    // change the input value
    value = 'world'
    rerender()

    // before the delay — should still be old value
    expect(result.current).toBe('hello')

    // fast-forward time
    act(() => {
      vi.advanceTimersByTime(500)
    })

    // now it should have updated
    expect(result.current).toBe('world')
  })

  it('resets the timer when value changes rapidly', () => {
    let value = 'a'
    const { result, rerender } = renderHook(() => useDebounce(value, 300))

    value = 'ab'
    rerender()
    act(() => vi.advanceTimersByTime(200))

    value = 'abc'
    rerender()
    act(() => vi.advanceTimersByTime(200))

    // only 200ms passed since last change — should still be 'a'
    expect(result.current).toBe('a')

    act(() => vi.advanceTimersByTime(100))

    // 300ms since last change — now it should be 'abc'
    expect(result.current).toBe('abc')
  })

  // TODO: add test "cleans up timeout on unmount"
  // Hint: render hook, change value, unmount before delay, advance timers
  //       → debounced value should NOT have updated
})
