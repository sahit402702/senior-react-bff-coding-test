export default function HomePage() {
  return (
    <div className="page">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>User Directory</h1>

        <div className="test-section">
          <h2>📋 Tasks</h2>
          
          <div className="task-card">
            <h3>Task 1: Service & Hook</h3>
            <ul>
              <li><strong>types/User.ts</strong> - Define User interface</li>
              <li><strong>services/userService.ts</strong> - Create fetchUsers() function</li>
              <li><strong>hooks/useUsers.ts</strong> - Custom hook for fetching users</li>
            </ul>
          </div>

          <div className="task-card">
            <h3>Task 2: Components</h3>
            <ul>
              <li><strong>SearchBar.tsx</strong> - Controlled search input</li>
              <li><strong>UserItem.tsx</strong> - Single user card</li>
              <li><strong>UserList.tsx</strong> - List of users</li>
            </ul>
          </div>

          <div className="task-card">
            <h3>Task 3: App Integration</h3>
            <ul>
              <li><strong>App.tsx</strong> - Use useUsers hook, implement search with useMemo, handle states</li>
            </ul>
          </div>

          <div className="task-card">
            <h3>Task 4: Tests</h3>
            <ul>
              <li><strong>App.test.tsx</strong> - Test loading, success, error, search filtering</li>
            </ul>
          </div>
        </div>

        <div className="test-section">
          <h2>🌐 API Endpoint</h2>
          <div style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '0.9rem'
          }}>
            <p><strong>Get all users:</strong></p>
            <code style={{ display: 'block' }}>
              https://jsonplaceholder.typicode.com/users
            </code>
          </div>
          
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
            💡 Returns an array of 10 users with id, name, email, username, address, phone, website, company
          </p>
        </div>

        <div className="test-section">
          <h2>✅ Requirements</h2>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
            <li>Use <code>useMemo</code> for search filtering (case-insensitive)</li>
            <li>Prevent unnecessary re-renders</li>
            <li>Proper TypeScript types (no <code>any</code>)</li>
            <li>Functional components only</li>
            <li>Display: name, email, company name</li>
            <li>Handle loading, error, and empty states</li>
            <li>Use native fetch API (no axios)</li>
          </ul>
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
{`src/
  ⚠️ types/User.ts
  ⚠️ services/userService.ts
  ⚠️ hooks/useUsers.ts
  ⚠️ components/
      ⚠️ SearchBar.tsx
      ⚠️ UserItem.tsx
      ⚠️ UserList.tsx
  ⚠️ App.tsx
  ⚠️ __tests__/App.test.tsx`}
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
            ✅ <strong>Getting Started:</strong> Open <code>src/types/User.ts</code> and define the User interface
          </p>
        </div>
      </div>
    </div>
  )
}
