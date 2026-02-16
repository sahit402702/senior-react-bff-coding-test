import { useParams, Link } from 'react-router-dom'
import { useMeal } from '../hooks/useMeal'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

/**
 * MealDetailsPage component - displays recipe details for a single meal.
 * 
 * TODO: Implement the following:
 * 1. Use useParams to get the meal ID from the URL (parameter name: 'id')
 * 2. Use the useMeal hook to fetch the meal data
 * 3. Display Loader component while loading
 * 4. Display ErrorMessage component if there's an error or meal is null
 * 5. Display meal details: image (strMealThumb), name (strMeal), category, area, instructions
 * 6. Display ingredients list - loop through strIngredient1-20 and strMeasure1-20
 *    - Only show ingredients that are not empty/null
 *    - Format: "measure ingredient" (e.g., "1 cup Sugar")
 * 7. Add a "Back to Meals" link
 * 
 * Hints:
 * - Use the .product-details and .detail-section classes for styling
 * - Create a helper array or loop from 1-20 to get ingredients
 * - Example: meal[`strIngredient${i}`] and meal[`strMeasure${i}`]
 */
export default function MealDetailsPage() {
  // TODO: Get id from useParams

  // TODO: Call useMeal hook with the id

  // TODO: Handle loading and error states

  // TODO: Display meal details with ingredients list

  return (
    <div className="page">
      <Link to="/meals">← Back to Meals</Link>
      <h1>Recipe Details</h1>
      <p>TODO: Display recipe information and ingredients here</p>
    </div>
  )
}

