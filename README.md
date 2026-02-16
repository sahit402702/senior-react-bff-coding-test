# Senior React Coding Test

A focused **30–40 minute** coding test for senior React / TypeScript developers.

**Tests:** `useMemo` / `useEffect` rendering, custom hooks, React Router, TypeScript, Vitest

---

## 🚀 Quick Start

```bash
npm install
npm run dev          # start dev server
npm run test         # run tests once
npm run test:watch   # run tests in watch mode
```

### Deploy to StackBlitz

1. Go to [stackblitz.com](https://stackblitz.com)
2. Click **"Upload Project"** or drag/drop this folder
3. Share the generated URL with candidates

---

## 📝 Overview

All tasks are visible on the **home page** (`/`) when you run the app.

| Task | Focus | Time |
|------|-------|------|
| **1** | Fix `useMemo` / `React.memo` / `useEffect` / `useCallback` bugs (5 bugs) | ~15 min |
| **2** | Complete `useFetch` & `useDebounce` custom hooks (fill TODOs) | ~12 min |
| **3** | Fix & complete Vitest test cases | ~13 min |

---

## 🎯 Task Details

### Task 1 — Fix Performance & Rendering Bugs

**File:** `src/components/ProductList.tsx`

Fix 5 intentional bugs:
1. Filtered products re-compute on every render → wrap with `useMemo`
2. `ProductCard` re-renders unnecessarily → wrap with `React.memo`
3. `useEffect` fires on every render → fix dependency array
4. `handleSort` function recreated on every render → use `useCallback`
5. Expensive price calculation runs in child component → memoize in parent

**Success:** Render counts stay low, console logs minimize when typing.

---

### Task 2 — Custom Hooks & Routing

**File:** `src/hooks/useFetch.ts`

Complete the custom hooks by filling in the TODO comments:
- **`useFetch<T>(url)`** — Fill in 4 TODOs to implement fetch with AbortController cleanup
- **`useDebounce<T>(value, delay)`** — Fill in 4 TODOs to implement debouncing

**Success:** Navigate to `/users` — the page loads user data and routing works.

---

### Task 3 — Test Cases

**Files:** `src/__tests__/*.test.ts(x)`

Fix/complete tests:
- Mock `fetch` in `useFetch.test.ts`
- Add cleanup test in `useDebounce.test.ts`
- Complete routing assertions in `App.test.tsx`

**Success:** `npm run test` passes all tests.

---

## 🏗 Project Structure

```
src/
  components/ProductList.tsx    ← Task 1
  hooks/useFetch.ts             ← Task 2
  __tests__/                    ← Task 3
  pages/
    HomePage.tsx                (shows all tasks)
    UsersPage.tsx               (tests Task 2)
    UserDetailPage.tsx          (tests routing)
```

---

## 📋 Evaluation

- ✅ Correct use of `useMemo`, `React.memo`, `useEffect` deps
- ✅ Custom hooks with proper cleanup & TypeScript generics
- ✅ React Router usage (`useParams`, `<Link>`)
- ✅ Test mocking, async assertions, edge cases
- ✅ Clean, idiomatic React/TypeScript code
