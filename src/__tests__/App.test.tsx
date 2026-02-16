import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import App from '../App'

/**
 * TASK 3c — Add routing tests.
 *
 * TODO:
 *  1. Complete the test that checks "/" renders the home page
 *  2. Add test for "/users" route
 *  3. Add test for "/users/:id" route
 */

// helper to render with a given route
function renderWithRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App Routing', () => {
  it('renders the home page on "/"', () => {
    renderWithRoute('/')
    // TODO: assert that Task 1 heading is visible
  })

  // TODO: add test for "/users" route

  // TODO: add test for "/users/1" route
})
