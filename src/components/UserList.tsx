import type { User } from '../types/User'
import UserItem from './UserItem'

/**
 * UserList Component
 * 
 * TODO: Create a component to display a list of users
 * 
 * Props:
 * - users: User[] (array of users to display)
 * 
 * Requirements:
 * 1. Map through users array
 * 2. Render UserItem for each user
 * 3. Use user.id as key prop
 * 4. Handle empty state (when users array is empty)
 * 5. Add appropriate container styling
 * 
 * Example structure:
 * {users.length === 0 ? (
 *   <p>No users found</p>
 * ) : (
 *   <div className="user-list">
 *     {users.map(user => <UserItem key={user.id} user={user} />)}
 *   </div>
 * )}
 */

interface UserListProps {
  users: User[]
}

export default function UserList({ users }: UserListProps) {
  // TODO: Implement the component
  return <div>UserList TODO</div>
}
