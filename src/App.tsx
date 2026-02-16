import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MealsPage from './pages/MealsPage'
import MealDetailsPage from './pages/MealDetailsPage'
import './App.css'

/**
 * Main App component with routing configuration.
 * 
 * Routes:
 * 1. "/" - Shows test instructions
 * 2. "/meals" - Shows meals search and list (to be implemented)
 * 3. "/meals/:id" - Shows meal recipe details (to be implemented)
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meals" element={<MealsPage />} />
          <Route path="/meals/:id" element={<MealDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

