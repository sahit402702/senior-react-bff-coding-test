# User Directory - React Test

Build a user directory app using React, TypeScript, and custom hooks.

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

### Task 1: Service & Hook

**`src/types/User.ts`**
- Define User interface with id, name, email, username, company

**`src/services/userService.ts`**
- Create `fetchUsers()` function using native fetch API
- Return `Promise<User[]>`
- Handle errors appropriately

**`src/hooks/useUsers.ts`**
- Fetch users on mount
- Return `{ users, loading, error }`
- Handle all states properly

### Task 2: Display Users

**`src/components/UserItem.tsx`**
- Display single user card
- Show: name, email, company name
- Clean layout

**`src/components/UserList.tsx`**
- Display list of users using UserItem
- Use proper key props

**`src/App.tsx`**
- Use `useUsers()` hook to fetch data
- Show loading/error states
- Display UserList with all users

### Task 3: Tests

**`src/__tests__/App.test.tsx`**
- Test loading state
- Test successful user display

## Requirements

✅ Functional components only
✅ Proper TypeScript types (no `any`)
✅ Clean code with comments
✅ Modular structure

## Files to Complete

```
src/
  ⚠️ types/User.ts
  ⚠️ services/userService.ts
  ⚠️ hooks/useUsers.ts
  ⚠️ components/
      ⚠️ UserItem.tsx
      ⚠️ UserList.tsx
  ⚠️ App.tsx
  ⚠️ __tests__/App.test.tsx
```

**Start here:** Open `src/types/User.ts` and define the User interface.

