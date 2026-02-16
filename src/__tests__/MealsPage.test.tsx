import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import MealsPage from '../pages/MealsPage'

/**
 * Tests for MealsPage component.
 * 
 * TODO: Complete the following tests:
 * 1. Mock the fetch API to return test meals
 * 2. Verify loading state is displayed initially
 * 3. Verify meals are displayed after loading
 * 4. Verify error message is displayed on fetch failure
 * 5. Verify links to meal details are created correctly
 * 
 * Hints:
 * - Use vi.spyOn(global, 'fetch') to mock fetch
 * - Use waitFor() to wait for async updates
 * - Use screen.getByText() to find elements
 * - Remember: TheMealDB API returns { meals: [...] }
 */

const mockMeals = [
  {
    idMeal: '52772',
    strMeal: 'Teriyaki Chicken',
    strCategory: 'Chicken',
    strArea: 'Japanese',
    strInstructions: 'Cook the chicken...',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
    strYoutube: '',
    strIngredient1: 'chicken',
    strMeasure1: '1 lb'
  },
  {
    idMeal: '52773',
    strMeal: 'Honey Balsamic Chicken',
    strCategory: 'Chicken',
    strArea: 'American',
    strInstructions: 'Cook the chicken...',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg',
    strYoutube: '',
    strIngredient1: 'chicken',
    strMeasure1: '2 lb'
  }
]

function renderWithRouter(component: React.ReactElement) {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('MealsPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('displays loading state initially', () => {
    // TODO: Mock fetch to return a promise that never resolves (simulate loading)
    // global.fetch = vi.fn(() => new Promise(() => {}))
    
    renderWithRouter(<MealsPage />)
    
    // TODO: Add assertion to check for loading state
    // expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('displays meals after successful fetch', async () => {
    // TODO: Mock fetch to return { meals: mockMeals }
    // global.fetch = vi.fn(() =>
    //   Promise.resolve({
    //     ok: true,
    //     json: () => Promise.resolve({ meals: mockMeals })
    //   } as Response)
    // )
    
    renderWithRouter(<MealsPage />)
    
    // TODO: Wait for meals to be displayed
    // await waitFor(() => {
    //   expect(screen.getByText('Teriyaki Chicken')).toBeInTheDocument()
    // })
    
    // TODO: Verify both meals are displayed
  })

  it('displays error message on fetch failure', async () => {
    // TODO: Mock fetch to return an error response
    // global.fetch = vi.fn(() =>
    //   Promise.resolve({
    //     ok: false,
    //     status: 500
    //   } as Response)
    // )
    
    renderWithRouter(<MealsPage />)
    
    // TODO: Wait for error message to be displayed
    // await waitFor(() => {
    //   expect(screen.getByText(/error/i)).toBeInTheDocument()
    // })
  })

  it('renders clickable links to meal detail pages', async () => {
    // TODO: Mock fetch and verify that meal links have correct href
    // Hint: Use closest('a') to get the link element, verify href='/meals/:id'
  })
})

