# Test Overview - User Dashboard Implementation Test

## ✅ What's Been Created

A **40-minute implementation-focused coding test** for Senior React developers that evaluates:
- Custom hooks implementation
- React Router integration  
- TypeScript proficiency
- Testing skills
- API integration

---

## 📁 Test Structure

### What Candidates Need to Implement

1. **Custom Hooks (15 min)**
   - `src/hooks/useUsers.ts` - Fetch all users from API
   - `src/hooks/useUser.ts` - Fetch single user by ID

2. **Pages (15 min)**
   - `src/pages/UsersPage.tsx` - Display users list with navigation
   - `src/pages/UserDetailsPage.tsx` - Display user details

3. **Tests (10 min)**
   - `src/__tests__/UsersPage.test.tsx` - Complete test cases

### What's Already Provided

- ✅ `src/App.tsx` - Complete routing configuration
- ✅ `src/types/User.ts` - TypeScript interface
- ✅ `src/components/Loader.tsx` - Loading component
- ✅ `src/components/ErrorMessage.tsx` - Error component
- ✅ Complete project configuration (Vite, TypeScript, Vitest)

---

## 🎯 Key Features

### Implementation-Based (Not Bug-Fixing)
- Candidates build features from scaffolded TODOs
- Tests real-world scenarios: API calls, routing, state management
- More representative of day-to-day work

### Balanced Difficulty
- TODO comments provide structure and guidance
- Not completely blank slate, not too prescriptive
- Tests multiple skill levels within 40 minutes

### Complete Documentation
- `README.md` - Comprehensive candidate instructions
- `SOLUTIONS.md` - Full reference implementations for grading

---

## 🚀 How to Use This Test

### For Candidates

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd senior-react-bff-coding-test
   ```

2. **Install and run**
   ```bash
   npm install
   npm run dev
   ```

3. **Complete TODOs in order**
   - Hooks first (foundation)
   - Pages second (integration)
   - Tests last (verification)

4. **Verify completion**
   ```bash
   npm run test
   npx tsc --noEmit
   ```

### For Interviewers

1. **Share the repository** URL with candidates
2. **Set 40-minute timer** when they start
3. **Use SOLUTIONS.md** to grade their work
4. **Evaluation rubric** in README:
   - Custom Hooks: 35%
   - React Router: 20%
   - TypeScript: 20%
   - Testing: 15%
   - Code Quality: 10%

---

## 📊 Expected Outcomes

### Strong Candidate (35+ min completion)
- All hooks implemented with proper error handling
- Pages work with loading/error states
- Most tests passing
- Clean TypeScript with proper types

### Average Candidate (25-35 min completion)
- Hooks work but may miss edge cases
- Pages functional but basic error handling
- Some tests completed
- TypeScript mostly correct

### Weak Candidate (<25 min completion)
- Struggles with hooks or async patterns
- Pages incomplete or buggy
- Tests not attempted
- TypeScript errors or uses `any`

---

## 🔧 Technical Stack

- **React 18** - Latest stable version
- **TypeScript** - Strict mode enabled
- **React Router v6** - Latest routing patterns
- **Vitest** - Fast modern test runner
- **Vite** - Lightning-fast dev server

---

## 📝 Files Summary

| File | Status | Purpose |
|------|--------|---------|
| `README.md` | ✅ Complete | Candidate instructions |
| `SOLUTIONS.md` | ✅ Complete | Reference implementations |
| `src/App.tsx` | ✅ Complete | Router configuration |
| `src/main.tsx` | ✅ Complete | App entry point |
| `src/types/User.ts` | ✅ Complete | TypeScript types |
| `src/components/*.tsx` | ✅ Complete | Reusable components |
| `src/hooks/*.ts` | ⚠️ TODO | For candidates to implement |
| `src/pages/*.tsx` | ⚠️ TODO | For candidates to implement |
| `src/__tests__/*.tsx` | ⚠️ TODO | For candidates to implement |

---

## ✨ Advantages of This Test

1. **Real-World Skills** - Tests actual development patterns, not trivia
2. **Time-Appropriate** - Can be completed in 40 minutes
3. **Objective Grading** - Clear rubric and reference solutions
4. **Modern Stack** - Uses current React best practices
5. **Flexible Deployment** - Works on local setup or StackBlitz
6. **Progressive Difficulty** - Candidates can show partial competency

---

## 🎓 What This Tests

✅ **Custom Hooks** - Understanding of React hooks patterns  
✅ **Async State Management** - Handling loading/error states  
✅ **React Router** - Navigation and dynamic routes  
✅ **TypeScript** - Type safety and interfaces  
✅ **Testing** - Mocking, async testing, assertions  
✅ **Code Quality** - Clean, readable, maintainable code  
✅ **API Integration** - Real HTTP requests and error handling  

---

## 🔗 Repository

The test has been pushed to GitHub and is ready to share with candidates.

**Next Steps:**
1. Share repository URL with candidates
2. Give them 40 minutes to complete
3. Review using `SOLUTIONS.md` as reference
4. Discuss their approach in follow-up interview
