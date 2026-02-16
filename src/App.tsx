import { Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import UserDetailPage from './pages/UserDetailPage'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <h1>React</h1>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
      </Routes>
    </div>
  )
}
