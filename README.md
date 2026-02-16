# User Dashboard - Coding Test

Build a user dashboard that fetches and displays data from `https://jsonplaceholder.typicode.com/users`

## Getting Started

```bash
npm install
npm run dev        # Visit http://localhost:5173
npm run test       # Run tests
```

## Tasks

### 1. Implement Custom Hooks
- **`src/hooks/useUsers.ts`** - Fetch all users, return `{ users, loading, error }`
- **`src/hooks/useUser.ts`** - Fetch user by ID, re-fetch when ID changes

### 2. Complete Pages
- **`src/pages/UsersPage.tsx`** - Display users list with navigation links
- **`src/pages/UserDetailsPage.tsx`** - Display user details with back link

### 3. Write Tests
- **`src/__tests__/UsersPage.test.tsx`** - Mock fetch, test loading/error/success states

## What to Implement

```
src/hooks/
  useUsers.ts            ⚠️  TODO
  useUser.ts             ⚠️  TODO
src/pages/
  UsersPage.tsx          ⚠️  TODO
  UserDetailsPage.tsx    ⚠️  TODO
src/__tests__/
  UsersPage.test.tsx     ⚠️  TODO
```

**Tip:** Check the TODO comments in each file for guidance.

