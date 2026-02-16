import ProductList from '../components/ProductList'

export default function HomePage() {
  return (
    <div>
      <div className="task-card">
        <h2 style={{ marginBottom: '1rem' }}>📋 React Coding Test — 3 Tasks (30-40 min)</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Complete all three tasks below. Each tests core React concepts including performance optimization,
          custom hooks, routing, TypeScript, and testing.
        </p>
      </div>

      <div className="task-card">
        <h3>Task 1 — Fix useMemo / useEffect / Re-render Bugs (15 min)</h3>
        <p>
          Open <code>src/components/ProductList.tsx</code>. The component has
          <strong> five intentional bugs</strong>:
        </p>
        <ul>
          <li>
            <strong>Bug 1:</strong> Filtered products re-compute on every render → Wrap with <code>useMemo</code>
          </li>
          <li>
            <strong>Bug 2:</strong> <code>ProductCard</code> re-renders unnecessarily → Wrap with <code>React.memo</code>
          </li>
          <li>
            <strong>Bug 3:</strong> <code>useEffect</code> fires on every render due to missing deps → Fix dependency array
          </li>
          <li>
            <strong>Bug 4:</strong> <code>handleSort</code> function recreated on every render → Use <code>useCallback</code>
          </li>
          <li>
            <strong>Bug 5:</strong> Expensive <code>calculateFinalPrice</code> runs in child component → Memoize in parent
          </li>
        </ul>
        <p style={{ marginTop: '0.8rem', fontSize: '0.9em', color: '#888' }}>
          ✅ <strong>Success:</strong> Render counts should stay at 1-2, console logs should minimize
        </p>
      </div>

      <div className="demo-area">
        <h4 style={{ marginBottom: '1rem' }}>Task 1 Demo:</h4>
        <ProductList />
      </div>

      <div className="task-card">
        <h3>Task 2 — Custom Hooks &amp; Routing (12 min)</h3>
        <p>Open <code>src/hooks/useFetch.ts</code> and complete the two custom hooks by following the TODO comments:</p>
        <ul>
          <li>
            <strong>useFetch&lt;T&gt;(url):</strong> Fill in the 4 TODOs to fetch data with AbortController cleanup
          </li>
          <li>
            <strong>useDebounce&lt;T&gt;(value, delay):</strong> Fill in the 4 TODOs to debounce value updates
          </li>
        </ul>
        <p style={{ marginTop: '0.8rem', fontSize: '0.9em', color: '#888' }}>
          ✅ <strong>Success:</strong> Navigate to <strong>/users</strong> — the Users page and user detail pages should work
        </p>
      </div>

      <div className="task-card">
        <h3>Task 3 — Fix &amp; Complete Test Cases (13 min)</h3>
        <p>
          Run <code>npm run test</code> — several tests are failing or incomplete. Fix them:
        </p>
        <ul>
          <li>
            <code>src/__tests__/useFetch.test.ts</code> — Mock fetch, complete error test, add stale-response test
          </li>
          <li>
            <code>src/__tests__/useDebounce.test.ts</code> — Add cleanup-on-unmount test
          </li>
          <li>
            <code>src/__tests__/App.test.tsx</code> — Complete routing assertions
          </li>
        </ul>
        <p style={{ marginTop: '0.8rem', fontSize: '0.9em', color: '#888' }}>
          ✅ <strong>Success:</strong> All tests pass with <code>npm run test</code>
        </p>
      </div>

      <div className="task-card" style={{ background: 'rgba(100, 108, 255, 0.08)', borderColor: '#646cff' }}>
        <h3 style={{ marginTop: 0 }}>🚀 Ready to Start?</h3>
        <p>Work through all three tasks. Good luck!</p>
        <p style={{ fontSize: '0.9em', color: '#888', marginTop: '0.5rem' }}>
          💡 Navigate to <strong>/users</strong> to test Task 2 once you've implemented the hooks
        </p>
      </div>
    </div>
  )
}
