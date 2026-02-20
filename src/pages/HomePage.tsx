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
            <h3>Task 2: Display Users</h3>
            <ul>
              <li><strong>components/UserItem.tsx</strong> - Single user card component</li>
              <li><strong>components/UserList.tsx</strong> - List of user cards</li>
              <li><strong>App.tsx</strong> - Use useUsers hook, display UserList, handle loading/error states</li>
            </ul>
          </div>

          <div className="task-card">
            <h3>Task 3: Tests</h3>
            <ul>
              <li><strong>App.test.tsx</strong> - Test loading state and successful user display</li>
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
            <li>Proper TypeScript types (no <code>any</code>)</li>
            <li>Functional components only</li>
            <li>Display: name, email, company name for each user</li>
            <li>Handle loading and error states</li>
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
