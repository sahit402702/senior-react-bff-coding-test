import { useState, useEffect, useRef } from 'react'
import type { Product } from '../types'

/**
 * TASK 1 — Fix the performance & rendering bugs.
 *
 * THREE bugs to fix:
 *  1. `filteredProducts` re-computed on every render → use `useMemo`
 *  2. `ProductCard` re-renders unnecessarily → use `React.memo`
 *  3. `useEffect` runs on every render → fix dependency array
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
]

// ── BUG 2: This component re-renders unnecessarily ──
// TODO: wrap with React.memo
function ProductCard({ product }: { product: Product }) {
  const renderCount = useRef(0)
  renderCount.current += 1

  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <p className="price">${product.price}</p>
      <p className="category">{product.category}</p>
      <p className="render-count">renders: {renderCount.current}</p>
    </div>
  )
}

export default function ProductList() {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name')
  const [products] = useState<Product[]>(PRODUCTS)

  // ── BUG 3: incorrect dependency array ──
  // TODO: fix the dependency array
  useEffect(() => {
    console.log('Products updated — count:', products.length)
  })

  // ── BUG 1: expensive computation runs on every render ──
  // TODO: wrap with useMemo
  const filteredProducts = (() => {
    console.log('💡 filtering & sorting products…')
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
      </div>

      <p style={{ fontSize: '0.85em', color: '#888' }}>
        Showing {filteredProducts.length} of {products.length} products
      </p>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
