export default function HomePage() {
  return (
    <div className="page">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1>Senior React Developer Coding Test</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
          <strong>Time Limit:</strong> 40 minutes | <strong>Stack:</strong> React 18 + TypeScript + React Router v6 + Vitest
        </p>

        <div className="test-section">
          <h2>📋 Overview</h2>
          <p>Build a <strong>User Dashboard</strong> application that fetches and displays user data from an API.</p>
          <p><strong>API Endpoint:</strong> <code>https://jsonplaceholder.typicode.com/users</code></p>
        </div>

        <div className="test-section">
          <h2>🎯 Your Tasks</h2>
          
          <div className="task-card">
            <h3>1. Custom Hooks (15 min)</h3>
            <p>Implement two custom hooks in the <code>hooks/</code> folder:</p>
            <ul>
              <li><strong>useUsers.ts</strong> - Fetch all users, return <code>{`{ users, loading, error }`}</code></li>
              <li><strong>useUser.ts</strong> - Fetch single user by ID, re-fetch when ID changes</li>
            </ul>
          </div>

          <div className="task-card">
            <h3>2. Pages (15 min)</h3>
            <p>Complete the TODO items in:</p>
            <ul>
              <li><strong>UsersPage.tsx</strong> - Display list of users with links to details</li>
              <li><strong>UserDetailsPage.tsx</strong> - Display single user details with back link</li>
            </ul>
            <p>Use <code>&lt;Loader /&gt;</code> and <code>&lt;ErrorMessage /&gt;</code> components</p>
          </div>

          <div className="task-card">
            <h3>3. Testing (10 min)</h3>
            <p>Complete tests in <code>__tests__/UsersPage.test.tsx</code>:</p>
            <ul>
              <li>Mock the fetch API</li>
              <li>Test loading, success, and error states</li>
              <li>Test navigation links</li>
            </ul>
          </div>
        </div>

        <div className="test-section">
          <h2>✅ Evaluation Criteria</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Category</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>Custom Hooks</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>35%</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>React Router</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>20%</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>TypeScript</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>20%</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>Testing</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>15%</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>Code Quality</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>10%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="test-section">
          <h2>📁 Project Structure</h2>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '4px', 
            overflow: 'auto',
            fontSize: '0.9rem'
          }}>
{`src/
  App.tsx                  ✅ Already configured
  main.tsx                 ✅ Entry point
  types/
    User.ts                ✅ TypeScript types defined
  hooks/
    useUsers.ts            ⚠️  TODO: Implement
    useUser.ts             ⚠️  TODO: Implement
  pages/
    UsersPage.tsx          ⚠️  TODO: Complete
    UserDetailsPage.tsx    ⚠️  TODO: Complete
  components/
    Loader.tsx             ✅ Ready to use
    ErrorMessage.tsx       ✅ Ready to use
  __tests__/
    UsersPage.test.tsx     ⚠️  TODO: Complete`}
          </pre>
        </div>

        <div className="test-section">
          <h2>⏱️ Time Management</h2>
          <ul>
            <li><strong>0-15 min:</strong> Implement useUsers and useUser hooks</li>
            <li><strong>15-30 min:</strong> Complete UsersPage and UserDetailsPage</li>
            <li><strong>30-40 min:</strong> Complete tests and verify everything works</li>
          </ul>
        </div>

        <div className="test-section">
          <h2>🔍 Tips</h2>
          <ul>
            <li>Start with the hooks - they're the foundation</li>
            <li>Test your hooks manually before wiring them to components</li>
            <li>Use browser console to debug API calls</li>
            <li>Don't worry about styling - focus on functionality</li>
            <li>Use TypeScript to catch errors early</li>
          </ul>
        </div>

        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          backgroundColor: '#e8f4f8', 
          borderLeft: '4px solid #0066cc',
          borderRadius: '4px'
        }}>
          <p style={{ margin: 0, fontWeight: 500 }}>
            💡 <strong>Ready to start?</strong> Begin by implementing the custom hooks in the <code>src/hooks/</code> folder!
          </p>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
          <p style={{ color: '#999', fontSize: '0.9rem' }}>
            Run <code>npm run dev</code> to start development | <code>npm run test</code> to run tests
          </p>
        </div>
      </div>
    </div>
  )
}
