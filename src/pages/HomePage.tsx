export default function HomePage() {
  return (
    <div className="page">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Recipe Finder</h1>

        <div className="test-section">
          <h2>📋 Tasks</h2>
          
          <div className="task-card">
            <h3>Task 1: Custom Hooks</h3>
            <ul>
              <li><strong>useMeals.ts</strong> - Fetch meals by search query</li>
              <li><strong>useMeal.ts</strong> - Fetch single meal by ID</li>
            </ul>
          </div>

          <div className="task-card">
            <h3>Task 2: Pages</h3>
            <ul>
              <li><strong>MealsPage.tsx</strong> - Search form + display meals grid</li>
              <li><strong>MealDetailsPage.tsx</strong> - Show recipe with ingredients & instructions</li>
            </ul>
          </div>

          <div className="task-card">
            <h3>Task 3: Tests</h3>
            <ul>
              <li><strong>MealsPage.test.tsx</strong> - Complete test cases (loading, success, error, links)</li>
            </ul>
          </div>
        </div>

        <div className="test-section">
          <h2>🌐 API Endpoints</h2>
          <div style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '0.9rem'
          }}>
            <p><strong>Search meals:</strong></p>
            <code style={{ display: 'block', marginBottom: '1rem' }}>
              https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
            </code>
            
            <p><strong>Get meal by ID:</strong></p>
            <code style={{ display: 'block' }}>
              https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
            </code>
          </div>
          
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
            💡 The API returns <code>{`{ meals: [...] }`}</code> or <code>{`{ meals: null }`}</code> if no results
          </p>
        </div>

        <div className="test-section">
          <h2>📁 Files to Complete</h2>
          <pre style={{ 
            backgroundColor: '#fff3cd', 
            padding: '1rem', 
            borderRadius: '4px', 
            overflow: 'auto',
            fontSize: '0.9rem',
            border: '1px solid #ffc107'
          }}>
{`src/hooks/
  ⚠️ useMeals.ts
  ⚠️ useMeal.ts
  
src/pages/
  ⚠️ MealsPage.tsx
  ⚠️ MealDetailsPage.tsx
  
src/__tests__/
  ⚠️ MealsPage.test.tsx`}
          </pre>
        </div>

        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          backgroundColor: '#d4edda', 
          borderLeft: '4px solid #28a745',
          borderRadius: '4px'
        }}>
          <p style={{ margin: 0 }}>
            ✅ <strong>Getting Started:</strong> Open <code>src/hooks/useMeals.ts</code> and follow the TODO comments
          </p>
        </div>
      </div>
    </div>
  )
}
