import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import UserDetailsPage from './pages/UserDetailsPage'
import './App.css'

/**
 * Main App component with routing configuration.
 * 
 * Routes:
 * 1. "/" - Shows test instructions
 * 2. "/users" - Shows users list (to be implemented)
 * 3. "/users/:id" - Shows user details (to be implemented)
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
