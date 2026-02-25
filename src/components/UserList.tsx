import type { User } from '../types/User'
import UserItem from './UserItem'

/**
 * TODO: Display a list of users
 * 
 * Requirements:
 * - Map through users array
 * - Render UserItem for each user with proper key
 * - Use className="user-list" for styling
 */

interface UserListProps {
  users: User[]
}

export default function UserList({ users }: UserListProps) {
  // TODO: Implement the component
  return <div>UserList TODO</div>
}
