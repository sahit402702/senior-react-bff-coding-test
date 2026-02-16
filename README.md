# Senior React Developer Coding Test

**Time Limit:** 40 minutes  
**Stack:** React 18 + TypeScript + React Router v6 + Vitest

---

## 📋 Overview

Build a **User Dashboard** application that fetches and displays user data from an API.

**API Endpoint:**  
`https://jsonplaceholder.typicode.com/users`

---

## 🚀 Getting Started

```bash
npm install
npm run dev        # Start development server
npm run test       # Run tests
```

---

## 🎯 Requirements

### 1. Custom Hooks (15 min)

Implement two custom hooks in the `hooks/` folder:

#### **`useUsers.ts`**
- Fetch all users from `https://jsonplaceholder.typicode.com/users`
- Return `{ users, loading, error }`
- Use `useState` and `useEffect`

#### **`useUser.ts`**
- Fetch a single user by ID from `https://jsonplaceholder.typicode.com/users/:id`
- Return `{ user, loading, error }`
- Re-fetch when ID changes

---

### 2. Pages (15 min)

Complete the TODO items in:

#### **`UsersPage.tsx`**
- Use the `useUsers` hook
- Show `<Loader />` while loading
- Show `<ErrorMessage />` if error
- Display list of users
- Each user name should be a `<Link>` to `/users/:id`

#### **`UserDetailsPage.tsx`**
- Use `useParams` to get the user ID from URL
- Use the `useUser` hook
- Show `<Loader />` while loading
- Show `<ErrorMessage />` if error
- Display user details: name, email, phone, website, company name
- Include a "Back to Users" link

---

### 3. Testing (10 min)

Complete the tests in `__tests__/UsersPage.test.tsx`:

- Mock the `fetch` API
- Test loading state
- Test successful user list display
- Test error handling
- Test navigation links

---

## 📁 Project Structure

```
src/
  App.tsx                  ✅ Already configured
  main.tsx                 ✅ Entry point
  types/
    User.ts                ✅ TypeScript types defined
  hooks/
    useUsers.ts            ⚠️  TODO: Implement
    useUser.ts             ⚠️  TODO: Implement
  pages/
    UsersPage.tsx          ⚠️  TODO: Complete
    UserDetailsPage.tsx    ⚠️  TODO: Complete
  components/
    Loader.tsx             ✅ Ready to use
    ErrorMessage.tsx       ✅ Ready to use
  __tests__/
    UsersPage.test.tsx     ⚠️  TODO: Complete
```

---

## ✅ Evaluation Criteria

| Category | Points | What We're Looking For |
|----------|--------|------------------------|
| **Custom Hooks** | 35% | Correct use of useState, useEffect, proper TypeScript types, error handling |
| **React Router** | 20% | useParams usage, navigation, proper routing |
| **TypeScript** | 20% | Type safety, no `any`, proper interfaces |
| **Testing** | 15% | Mocking, async testing, assertions |
| **Code Quality** | 10% | Clean code, readable, follows React best practices |

---

## 📝 Submission Checklist

Before submitting, verify:

- [ ] `npm run dev` works without errors
- [ ] All users display on `/users` page
- [ ] Clicking a user navigates to `/users/:id`
- [ ] User details page shows all required information
- [ ] Loading states work correctly
- [ ] Error states are handled
- [ ] Tests run with `npm run test`
- [ ] TypeScript compiles without errors (`npx tsc --noEmit`)

---

## 🔍 Tips

- Start with the hooks - they're the foundation
- Test your hooks manually before wiring them to components
- Use browser console to debug API calls
- Don't worry about styling - focus on functionality
- Use TypeScript to catch errors early

---

## ⏱️ Time Management

- **0-15 min:** Implement `useUsers` and `useUser` hooks
- **15-30 min:** Complete `UsersPage` and `UserDetailsPage`
- **30-40 min:** Complete tests and verify everything works

Good luck! 🚀
