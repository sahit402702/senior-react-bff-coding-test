export default function HomePage() {
  return (
    <div className="page">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>User Dashboard - Coding Test</h1>
        <p style={{ fontSize: '1rem', color: '#666', marginBottom: '2rem' }}>
          Build a user dashboard that fetches and displays data from <code>https://jsonplaceholder.typicode.com/users</code>
        </p>

        <div className="test-section">
          <h2>🎯 Tasks</h2>
          
          <div className="task-card">
            <h3>1. Implement Custom Hooks</h3>
            <ul>
              <li><code>useUsers.ts</code> - Fetch all users, return <code>{`{ users, loading, error }`}</code></li>
              <li><code>useUser.ts</code> - Fetch user by ID, re-fetch when ID changes</li>
            </ul>
          </div>

          <div className="task-card">
            <h3>2. Complete Pages</h3>
            <ul>
              <li><code>UsersPage.tsx</code> - Display users list with navigation links</li>
              <li><code>UserDetailsPage.tsx</code> - Display user details with back link</li>
            </ul>
          </div>

          <div className="task-card">
            <h3>3. Write Tests</h3>
            <ul>
              <li>Complete <code>UsersPage.test.tsx</code> - Mock fetch, test loading/error/success states</li>
            </ul>
          </div>
        </div>

        <div className="test-section">
          <h2>📁 What to Implement</h2>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '4px', 
            overflow: 'auto',
            fontSize: '0.9rem'
          }}>
{`src/hooks/
  useUsers.ts            ⚠️  TODO
  useUser.ts             ⚠️  TODO
src/pages/
  UsersPage.tsx          ⚠️  TODO
  UserDetailsPage.tsx    ⚠️  TODO
src/__tests__/
  UsersPage.test.tsx     ⚠️  TODO`}
          </pre>
        </div>

        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          backgroundColor: '#e8f4f8', 
          borderLeft: '4px solid #0066cc',
          borderRadius: '4px'
        }}>
          <p style={{ margin: 0, fontWeight: 500 }}>
            💡 Start with the hooks in <code>src/hooks/</code> - check the TODO comments for guidance
          </p>
        </div>
      </div>
    </div>
  )
}
