import { useState, useEffect, useRef } from 'react'
import type { Product } from '../types'

/**
 * TASK 1 — Fix the performance & rendering bugs.
 *
 * FIVE bugs to fix:
 *  1. `filteredProducts` re-computed on every render → use `useMemo`
 *  2. `ProductCard` re-renders unnecessarily → use `React.memo`
 *  3. `useEffect` runs on every render → fix dependency array
 *  4. `handleSort` function recreated on every render → use `useCallback`
 *  5. Expensive price calculation in each card → memoize in parent
 */

// ── sample data ──────────────────────────────────────────────────────────
const PRODUCTS: Product[] = [
  { id: 1, name: 'Laptop',        price: 999,  category: 'Electronics' },
  { id: 2, name: 'Headphones',    price: 199,  category: 'Electronics' },
  { id: 3, name: 'Running Shoes', price: 129,  category: 'Sports' },
  { id: 4, name: 'Backpack',      price: 79,   category: 'Accessories' },
  { id: 5, name: 'Keyboard',      price: 149,  category: 'Electronics' },
  { id: 6, name: 'Yoga Mat',      price: 39,   category: 'Sports' },
  { id: 7, name: 'Watch',         price: 299,  category: 'Accessories' },
  { id: 8, name: 'Monitor',       price: 449,  category: 'Electronics' },
  { id: 9, name: 'Desk Chair',    price: 349,  category: 'Furniture' },
  { id: 10, name: 'Water Bottle', price: 25,   category: 'Sports' },
  { id: 11, name: 'USB Cable',    price: 15,   category: 'Electronics' },
  { id: 12, name: 'Notebook',     price: 12,   category: 'Office' },
]

// Expensive calculation (simulates tax + shipping)
function calculateFinalPrice(price: number): number {
  // Simulate expensive computation
  let result = price
  for (let i = 0; i < 100000; i++) {
    result = price * 1.15 + 5
  }
  return Math.round(result)
}

// ── BUG 2: This component re-renders unnecessarily ──
// TODO: wrap with React.memo
function ProductCard({ product, onSort }: { product: Product; onSort: (sortBy: 'name' | 'price') => void }) {
  const renderCount = useRef(0)
  renderCount.current += 1

  // ── BUG 5: Expensive calculation runs on every render ──
  // TODO: This should be calculated in parent and passed as prop
  const finalPrice = calculateFinalPrice(product.price)

  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <p className="price">${product.price}</p>
      <p className="category">{product.category}</p>
      <p style={{ fontSize: '0.85em', color: '#4ade80' }}>
        Final: ${finalPrice}
      </p>
      <p className="render-count">renders: {renderCount.current}</p>
      <button onClick={() => onSort('price')} style={{ fontSize: '0.75em', padding: '0.3em 0.6em' }}>
        Sort by price
      </button>
    </div>
  )
}

export default function ProductList() {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name')
  const [products] = useState<Product[]>(PRODUCTS)
  const [discount, setDiscount] = useState(0)

  // ── BUG 3: incorrect dependency array ──
  // This should only log when products actually change, not on every render
  useEffect(() => {
    console.log('📦 Products updated — count:', products.length)
  })

  // Track filter computations
  useEffect(() => {
    console.log('🔍 Filter effect ran — search:', search, 'sortBy:', sortBy)
  }, [search, sortBy, products])

  // ── BUG 4: Function recreated on every render ──
  // TODO: wrap with useCallback
  const handleSort = (newSortBy: 'name' | 'price') => {
    console.log('🔄 Sort changed to:', newSortBy)
    setSortBy(newSortBy)
  }

  // ── BUG 1: expensive computation runs on every render ──
  // TODO: wrap with useMemo
  const filteredProducts = (() => {
    console.log('💡 Computing filtered products…')
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    )
    return [...filtered].sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price
      return a.name.localeCompare(b.name)
    })
  })()

  return (
    <div>
      <div className="product-controls">
        <input
          placeholder="Search products…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'name' | 'price')}
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
        <input
          type="number"
          placeholder="Discount %"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
          style={{ width: '120px' }}
        />
      </div>

      <p style={{ fontSize: '0.85em', color: '#888' }}>
        Showing {filteredProducts.length} of {products.length} products
        {discount > 0 && ` • ${discount}% discount applied`}
      </p>

      <p style={{ fontSize: '0.8em', color: '#ff6b6b', marginBottom: '1rem' }}>
        Open the browser console to see performance logs
      </p>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onSort={handleSort} />
        ))}
      </div>
    </div>
  )
}
