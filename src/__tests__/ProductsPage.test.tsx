import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import ProductsPage from '../pages/ProductsPage'

/**
 * Tests for ProductsPage component.
 * 
 * TODO: Complete the following tests:
 * 1. Mock the fetch API to return test products
 * 2. Verify loading state is displayed initially
 * 3. Verify products are displayed after loading
 * 4. Verify error message is displayed on fetch failure
 * 5. Verify links to product details are created correctly
 * 
 * Hints:
 * - Use vi.spyOn(global, 'fetch') to mock fetch
 * - Use waitFor() to wait for async updates
 * - Use screen.getByText() to find elements
 */

const mockProducts = [
  {
    id: 1,
    title: 'Test Product 1',
    price: 29.99,
    description: 'A great product',
    category: 'electronics',
    image: 'https://via.placeholder.com/150',
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 2,
    title: 'Test Product 2',
    price: 49.99,
    description: 'Another great product',
    category: 'clothing',
    image: 'https://via.placeholder.com/150',
    rating: { rate: 4.2, count: 85 }
  }
]

function renderWithRouter(component: React.ReactElement) {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('ProductsPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('displays loading state initially', () => {
    // TODO: Mock fetch to return a promise that never resolves (simulate loading)
    // global.fetch = vi.fn(() => new Promise(() => {}))
    
    renderWithRouter(<ProductsPage />)
    
    // TODO: Add assertion to check for loading state
    // expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('displays products after successful fetch', async () => {
    // TODO: Mock fetch to return mockProducts
    // global.fetch = vi.fn(() =>
    //   Promise.resolve({
    //     ok: true,
    //     json: () => Promise.resolve(mockProducts)
    //   } as Response)
    // )
    
    renderWithRouter(<ProductsPage />)
    
    // TODO: Wait for products to be displayed
    // await waitFor(() => {
    //   expect(screen.getByText('Test Product 1')).toBeInTheDocument()
    // })
    
    // TODO: Verify both products are displayed with prices
  })

  it('displays error message on fetch failure', async () => {
    // TODO: Mock fetch to return an error response
    // global.fetch = vi.fn(() =>
    //   Promise.resolve({
    //     ok: false,
    //     status: 500
    //   } as Response)
    // )
    
    renderWithRouter(<ProductsPage />)
    
    // TODO: Wait for error message to be displayed
    // await waitFor(() => {
    //   expect(screen.getByText(/error/i)).toBeInTheDocument()
    // })
  })

  it('renders clickable links to product detail pages', async () => {
    // TODO: Mock fetch and verify that product links have correct href
    // Hint: Use closest('a') to get the link element
  })
})
