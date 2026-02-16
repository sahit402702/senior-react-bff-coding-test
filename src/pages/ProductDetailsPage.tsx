import { useParams, Link } from 'react-router-dom'
import { useProduct } from '../hooks/useProduct'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

/**
 * ProductDetailsPage component - displays details for a single product.
 * 
 * TODO: Implement the following:
 * 1. Use useParams to get the product ID from the URL
 * 2. Use the useProduct hook to fetch the product data
 * 3. Display Loader component while loading
 * 4. Display ErrorMessage component if there's an error
 * 5. Display product details: image, title, price, description, category, rating
 * 6. Add a "Back to Products" link
 * 
 * Hints:
 * - Use the .product-details class for styling
 * - Display the rating as "rating.rate / 5 (rating.count reviews)"
 */
export default function ProductDetailsPage() {
  // TODO: Get id from useParams

  // TODO: Call useProduct hook with the id

  // TODO: Handle loading and error states

  // TODO: Display product details

  return (
    <div className="page">
      <Link to="/products">← Back to Products</Link>
      <h1>Product Details</h1>
      <p>TODO: Display product information here</p>
    </div>
  )
}
