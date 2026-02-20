# User Directory - React Test

Build a user directory app with search functionality using React, TypeScript, and custom hooks.

## Setup

```bash
npm install
npm run dev        # Start dev server at http://localhost:5173
npm run test       # Run tests
```

## API

**JSONPlaceholder API** (free, no key required)

- **Get all users:** `https://jsonplaceholder.typicode.com/users`
- **Response:** Array of user objects with id, name, email, company, etc.

## Tasks

### Task 1: API Service & Custom Hook

**`src/services/userService.ts`**
- Create `fetchUsers()` function using native fetch API
- Return `Promise<User[]>`
- Handle errors appropriately

**`src/hooks/useUsers.ts`**
- Fetch users on mount
- Return `{ users, loading, error }`
- Handle all states properly

### Task 2: Components

**`src/components/SearchBar.tsx`**
- Controlled input component
- Accept `value` and `onChange` props
- Clean, accessible design

**`src/components/UserItem.tsx`**
- Display single user card
- Show: name, email, company name
- Clean layout

**`src/components/UserList.tsx`**
- Display list of users using UserItem
- Handle empty state
- Use proper key props

### Task 3: Main App Logic

**`src/App.tsx`**
- Use `useUsers()` hook to fetch data
- Implement search with `useMemo` for filtering
- Show loading/error/empty states
- Integrate SearchBar and UserList

### Task 4: Tests

**`src/__tests__/App.test.tsx`**
- Test loading state
- Test successful user display
- Test error handling
- Test search filtering

## Requirements

✅ Functional components only
✅ Proper TypeScript types (no `any`)
✅ Use `useMemo` for search filtering
✅ Prevent unnecessary re-renders
✅ Clean code with comments
✅ Modular structure

## Files to Complete

```
src/
  ⚠️ types/User.ts
  ⚠️ services/userService.ts
  ⚠️ hooks/useUsers.ts
  ⚠️ components/
      ⚠️ SearchBar.tsx
      ⚠️ UserItem.tsx
      ⚠️ UserList.tsx
  ⚠️ App.tsx
  ⚠️ __tests__/App.test.tsx
```

**Start here:** Open `src/types/User.ts` and define the User interface.

