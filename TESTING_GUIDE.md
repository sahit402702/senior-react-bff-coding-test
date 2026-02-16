# 🎯 Senior React Coding Test — Complete

## ✅ What's Included

### **3 Tasks (30-40 min total)**

1. **Task 1 — Performance & Rendering (10 min)**
   - Fix `useMemo`, `React.memo`, `useEffect` dependency bugs
   - Visual feedback via render-count badges
   - File: `src/components/ProductList.tsx`

2. **Task 2 — Custom Hooks & Routing (15 min)**
   - Implement `useFetch<T>(url)` with cleanup
   - Implement `useDebounce<T>(value, delay)`
   - File: `src/hooks/useFetch.ts`
   - Test by navigating to `/users` page

3. **Task 3 — Test Cases (10 min)**
   - Fix/complete Vitest tests
   - Mock `fetch`, test cleanup, test routing
   - Files: `src/__tests__/*.test.ts(x)`

---

## 📦 How to Share

### Option 1: StackBlitz (Recommended)
1. Go to https://stackblitz.com
2. Click **"Upload Project"**
3. Drag/drop the entire project folder
4. Copy the generated URL and share with candidates

### Option 2: GitHub + StackBlitz
1. Push this repo to GitHub
2. Share: `https://stackblitz.com/github/<owner>/<repo>`

### Option 3: ZIP File
1. Zip this folder
2. Share via email/Slack
3. Candidate runs `npm install && npm run dev`

---

## 🧪 Testing the Test

### Run it yourself:
```bash
npm install
npm run dev          # opens at http://localhost:5173
npm run test         # shows failing tests (expected)
```

### What candidates will see:
- **Home page (/)** — All 3 tasks listed with clear instructions
- **Users page (/users)** — Tests Task 2 (hooks + routing)
- **Console** — Shows performance issues in Task 1
- **Test output** — Shows incomplete tests in Task 3

---

## 📊 Evaluation Checklist

### Task 1
- [ ] Used `useMemo` for filtered products
- [ ] Wrapped `ProductCard` with `React.memo`
- [ ] Fixed `useEffect` dependency array
- [ ] Render counts stay low when searching

### Task 2
- [ ] `useFetch` handles loading/error states
- [ ] `useFetch` cleans up on URL change (AbortController or flag)
- [ ] `useDebounce` delays updates correctly
- [ ] Both hooks properly typed with generics
- [ ] `/users` and `/users/:id` pages work

### Task 3
- [ ] Mocked `fetch` in tests
- [ ] Completed error handling test
- [ ] Added stale-response test
- [ ] Added cleanup-on-unmount test
- [ ] All tests pass (`npm run test`)

---

## 🎨 What Makes This Test Good

✅ **Realistic scenarios** — Not contrived exercises  
✅ **Visual feedback** — Candidates can see their fixes work  
✅ **Core concepts** — useMemo, React.memo, custom hooks, routing, testing  
✅ **TypeScript throughout** — Generics, proper typing  
✅ **Self-contained** — No external setup needed  
✅ **Clear TODOs** — Candidates know exactly what to do  
✅ **Time-boxed** — Can be completed in 30-40 min  

---

## 🔧 Customization

Want to adjust difficulty?

**Make it easier:**
- Add more hints in code comments
- Pre-fill some TODO sections
- Remove one task

**Make it harder:**
- Remove TODO comments
- Add a 4th task (e.g., context API, error boundaries)
- Require candidates to write tests from scratch
- Add performance profiling requirement

---

Good luck with your interviews! 🚀
