import type { User } from '../types/User'

/**
 * UserItem Component
 * 
 * TODO: Create a component to display a single user
 * 
 * Props:
 * - user: User object
 * 
 * Requirements:
 * 1. Display user name (user.name)
 * 2. Display user email (user.email)
 * 3. Display company name (user.company.name)
 * 4. Use a card-like layout
 * 5. Add appropriate styling
 * 
 * Suggested structure:
 * <div className="user-card">
 *   <h3>{user.name}</h3>
 *   <p>{user.email}</p>
 *   <p>{user.company.name}</p>
 * </div>
 */

interface UserItemProps {
  user: User
}

export default function UserItem({ user }: UserItemProps) {
  // TODO: Implement the component
  return <div>UserItem TODO</div>
}
