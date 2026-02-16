/**
 * MealsPage Component
 * 
 * TODO: Implement this page to search and display meals
 * 
 * Requirements:
 * 1. Use useState to manage the search query (default: 'chicken')
 * 2. Add a search input field for users to enter a query
 * 3. Use the useMeals hook with the search query to fetch meals
 * 4. Show <Loader /> component while loading
 * 5. Show <ErrorMessage /> component if there's an error
 * 6. Display the meals in a grid once loaded
 * 7. Each meal should be a clickable link to /meals/:idMeal
 * 8. Display meal image (strMealThumb) and name (strMeal) for each meal
 * 
 * Hints:
 * - Import Link from 'react-router-dom' for navigation
 * - Map through the meals array to display each meal
 * - Use the .products-list class for the grid container (reusing existing styles)
 * - Use the .product-card class for each meal card
 */

export default function MealsPage() {
  // TODO: Implement the component with search functionality
  return (
    <div className="page">
      <h1>Recipe Finder</h1>
      <p>TODO: Add search input and meal list</p>
    </div>
  )
}
