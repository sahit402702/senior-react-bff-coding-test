import { describe, it, expect, vi, beforeEach } from 'vitest'import { render, screen, waitFor } from '@testing-library/react'import userEvent from '@testing-library/user-event'import App from '../App'/** * Tests for App component *  * TODO: Complete the following tests: * 1. Mock the fetch API to return test users * 2. Verify loading state is displayed initially * 3. Verify users are displayed after loading * 4. Verify error message is displayed on fetch failure * 5. Verify search filtering works correctly *  * Hints: * - Use vi.spyOn(global, 'fetch') to mock fetch * - Use waitFor() to wait for async updates * - Use screen.getByText() to find elements * - Use userEvent.type() to simulate typing in search */const mockUsers = [  {    id: 1,    name: 'John Doe',    email: 'john@example.com',    username: 'johnd',    company: { name: 'Tech Corp' }  },  {    id: 2,    name: 'Jane Smith',    email: 'jane@example.com',
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

  it('filters users by search query', async () => {
    // TODO: Mock fetch to return mockUsers
    // global.fetch = vi.fn(() =>
    //   Promise.resolve({
    //     ok: true,
    //     json: () => Promise.resolve(mockUsers)
    //   } as Response)
    // )
    
    const user = userEvent.setup()
    render(<App />)
    
    // TODO: Wait for users to load
    // await waitFor(() => {
    //   expect(screen.getByText('John Doe')).toBeInTheDocument()
    // })
    
    // TODO: Type in search box
    // const searchInput = screen.getByPlaceholderText(/search/i)
    // await user.type(searchInput, 'Jane')
    
    // TODO: Verify only Jane is shown, John is not
    // expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    // expect(screen.queryByText('John Doe')).not.toBeInTheDocument()
  })
})
