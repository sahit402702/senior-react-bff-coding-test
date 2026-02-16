# Recipe Finder - React Test

Build a recipe finder app using React, TypeScript, and custom hooks.

## Setup

```bash
npm install
npm run dev        # Start dev server at http://localhost:5173
npm run test       # Run tests
```

## API

**TheMealDB API** (free, no key required)

- **Search:** `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
- **Get by ID:** `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
- **Response:** `{ meals: [...] }` or `{ meals: null }` if no results

## Tasks

### Task 1: Custom Hooks

**`src/hooks/useMeals.ts`**
- Fetch meals by search query
- Return `{ meals, loading, error }`
- Handle null response (no results)

**`src/hooks/useMeal.ts`**
- Fetch single meal by ID
- Return `{ meal, loading, error }`
- Re-fetch when ID changes

### Task 2: Pages

**`src/pages/MealsPage.tsx`**
- Search form (controlled input)
- Display meals grid with: image, name, category, area
- Link each meal to `/meals/:id`
- Handle empty results

**`src/pages/MealDetailsPage.tsx`**
- Show meal: image, name, category, area, instructions
- Extract & display ingredients (from strIngredient1-20, strMeasure1-20)
- Add "Back to Meals" link

### Task 3: Tests

**`src/__tests__/MealsPage.test.tsx`**
- Test loading state
- Test successful fetch & display
- Test error handling
- Test clickable links

## Files to Complete

```
src/hooks/
  ⚠️ useMeals.ts
  ⚠️ useMeal.ts

src/pages/
  ⚠️ MealsPage.tsx
  ⚠️ MealDetailsPage.tsx

src/__tests__/
  ⚠️ MealsPage.test.tsx
```

**Start here:** Open `src/hooks/useMeals.ts` and follow the TODO comments.

