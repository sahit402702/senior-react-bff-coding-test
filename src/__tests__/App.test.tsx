import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'

/**
 * TODO: Complete the test cases
 * 
 * Tests to implement:
 * 1. Loading state
 * 2. Successful user display
 * 3. Error handling
 */

const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    username: 'johnd',
    company: { name: 'Tech Corp' }
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    username: 'janes',
    company: { name: 'Design Inc' }
  }
]

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('displays loading state initially', () => {
    // TODO: Mock fetch to return a promise that never resolves
    // global.fetch = vi.fn(() => new Promise(() => {}))
    
    render(<App />)
    
    // TODO: Check for loading indicator
    // expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('displays users after successful fetch', async () => {
    // TODO: Mock fetch to return mockUsers
    // global.fetch = vi.fn(() =>
    //   Promise.resolve({
    //     ok: true,
    //     json: () => Promise.resolve(mockUsers)
    //   } as Response)
    // )
    
    render(<App />)
    
    // TODO: Wait for users to be displayed
    // await waitFor(() => {
    //   expect(screen.getByText('John Doe')).toBeInTheDocument()
    //   expect(screen.getByText('jane@example.com')).toBeInTheDocument()
    // })
  })

  it('displays error message on fetch failure', async () => {
    // TODO: Mock fetch to return an error
    // global.fetch = vi.fn(() =>
    //   Promise.resolve({
    //     ok: false,
    //     status: 500
    //   } as Response)
    // )
    
    render(<App />)
    
    // TODO: Wait for error message
    // await waitFor(() => {
    //   expect(screen.getByText(/error/i)).toBeInTheDocument()
    // })
  })
})
