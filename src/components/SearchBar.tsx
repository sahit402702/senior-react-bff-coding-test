/**
 * SearchBar Component
 * 
 * TODO: Create a controlled input component for searching users
 * 
 * Props:
 * - value: string (current search term)
 * - onChange: (value: string) => void (callback when input changes)
 * 
 * Requirements:
 * 1. Use a controlled input element
 * 2. Call onChange with the new value on input change
 * 3. Add placeholder text like "Search users by name..."
 * 4. Add appropriate styling
 * 5. Make it accessible (label, aria attributes)
 * 
 * Example structure:
 * interface SearchBarProps {
 *   value: string
 *   onChange: (value: string) => void
 * }
 * 
 * export default function SearchBar({ value, onChange }: SearchBarProps) {
 *   return (
 *     <input
 *       type="text"
 *       value={value}
 *       onChange={(e) => onChange(e.target.value)}
 *       ...
 *     />
 *   )
 * }
 */

// TODO: Implement SearchBar component
export default function SearchBar() {
  return <div>SearchBar TODO</div>
}
