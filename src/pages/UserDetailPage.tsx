import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import type { User } from '../types'

/**
 * This page is already wired up — it will work once useFetch is implemented.
 */

export default function UserDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { data: user, loading, error } = useFetch<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  )

  if (loading) return <p className="loading">Loading user…</p>
  if (error) return <p className="error">Error: {error}</p>
  if (!user) return null

  return (
    <div className="demo-area">
      <Link to="/users" className="back-link">
        ← Back to Users
      </Link>
      <div className="user-detail">
        <h3>{user.name}</h3>
        <p>📧 {user.email}</p>
        <p>📞 {user.phone}</p>
        <p>🏢 {user.company.name}</p>
      </div>
    </div>
  )
}
