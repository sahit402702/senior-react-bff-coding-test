import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import UsersPage from './pages/UsersPage'
import UserDetailsPage from './pages/UserDetailsPage'
import './App.css'

/**
 * Main App component with routing configuration.
 * 
 * TODO: Verify routing is set up correctly:
 * 1. "/" should redirect to "/users"
 * 2. "/users" should render UsersPage
 * 3. "/users/:id" should render UserDetailsPage
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
