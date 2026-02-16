import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import type { User } from '../types'

/**
 * This page will work once you implement useFetch in Task 2.
 * Click on a user to navigate to their detail page (tests routing).
 */

export default function UsersPage() {
  const { data: users, loading, error } = useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users',
  )

  if (loading) return <p className="loading">Loading users…</p>
  if (error) return <p className="error">Error: {error}</p>

  return (
    <div>
      <div className="demo-area">
        <h2>
          Users <span className="badge">{users?.length ?? 0}</span>
        </h2>
        <p style={{ fontSize: '0.9em', color: '#888', marginBottom: '1rem' }}>
          Click a user to navigate to <code>/users/:id</code> (tests routing + useFetch)
        </p>

        <ul className="user-list">
          {users?.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>
                {user.name} — {user.email}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
