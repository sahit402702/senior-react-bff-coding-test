import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import UsersPage from '../pages/UsersPage'

/**
 * Tests for UsersPage component.
 * 
 * TODO: Complete the following tests:
 * 1. Mock the fetch API to return test users
 * 2. Verify loading state is displayed initially
 * 3. Verify users are displayed after loading
 * 4. Verify error message is displayed on fetch failure
 * 5. Verify links to user details are created correctly
 */

const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    website: 'johndoe.com',
    company: { name: 'Acme Corp' }
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '098-765-4321',
    website: 'janesmith.com',
    company: { name: 'Tech Inc' }
  },
]

function renderWithRouter(component: React.ReactElement) {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('UsersPage', () => {
  beforeEach(() => {
    // TODO: Mock global fetch
    // vi.spyOn(global, 'fetch').mockResolvedValue({
    //   ok: true,
    //   json: async () => mockUsers,
    // } as Response)
  })

  it('displays loading state initially', () => {
    renderWithRouter(<UsersPage />)
    // TODO: Add assertion to check for loading state
    // expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('displays users after loading', async () => {
    // TODO: Mock fetch to return mockUsers
    
    renderWithRouter(<UsersPage />)
    
    // TODO: Wait for users to be displayed
    // await waitFor(() => {
    //   expect(screen.getByText('John Doe')).toBeInTheDocument()
    // })
    
    // TODO: Verify both users are displayed
  })

  it('displays error message on fetch failure', async () => {
    // TODO: Mock fetch to reject with an error
    // vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Failed to fetch'))
    
    renderWithRouter(<UsersPage />)
    
    // TODO: Wait for error message to be displayed
    // await waitFor(() => {
    //   expect(screen.getByText(/error/i)).toBeInTheDocument()
    // })
  })

  it('creates links to user details pages', async () => {
    // TODO: Verify that clicking a user navigates to /users/:id
  })
})
