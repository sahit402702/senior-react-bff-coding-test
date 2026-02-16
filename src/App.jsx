import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <div className="App">
      <h1>Senior React BFF Coding Test</h1>
      
      <div className="instructions">
        <h2>📝 Instructions</h2>
        <p>Welcome to the React coding test! This project is set up and ready to run in StackBlitz.</p>
        <ul>
          <li>Complete the tasks below in order</li>
          <li>Each task tests different React concepts and best practices</li>
          <li>Feel free to create new components or modify existing ones</li>
          <li>All components are located in the <code>src/components</code> folder</li>
          <li>Don't worry about styling - focus on functionality and React patterns</li>
        </ul>
      </div>

      <div className="task-section incomplete">
        <h3>Task 1: Complete the Counter Component</h3>
        <p>Open <code>src/components/Counter.jsx</code> and implement the missing functionality:</p>
        <ul>
          <li>Add increment and decrement buttons</li>
          <li>Add a reset button to set the count back to 0</li>
          <li>Prevent the counter from going below 0</li>
        </ul>
        <div className="hint">
          <strong>Hint:</strong> Use the useState hook and conditional logic
        </div>
        <Counter />
      </div>

      <div className="task-section incomplete">
        <h3>Task 2: Complete the Todo List Component</h3>
        <p>Open <code>src/components/TodoList.jsx</code> and add the following features:</p>
        <ul>
          <li>Add functionality to mark todos as complete/incomplete</li>
          <li>Add a delete button for each todo item</li>
          <li>Add a filter to show All/Active/Completed todos</li>
          <li>Display the count of active todos</li>
        </ul>
        <div className="hint">
          <strong>Hint:</strong> You'll need to manage an array of todo objects with id, text, and completed properties
        </div>
        <TodoList />
      </div>

      <div className="task-section incomplete">
        <h3>Task 3: Implement the User Profile Component</h3>
        <p>Open <code>src/components/UserProfile.jsx</code> and implement:</p>
        <ul>
          <li>Fetch user data from the API: <code>https://jsonplaceholder.typicode.com/users/1</code></li>
          <li>Display loading state while fetching</li>
          <li>Display error state if the fetch fails</li>
          <li>Show user's name, email, phone, and company name</li>
        </ul>
        <div className="hint">
          <strong>Hint:</strong> Use useEffect hook for data fetching and useState for managing loading/error states
        </div>
        <UserProfile />
      </div>

      <div className="task-section incomplete">
        <h3>Bonus Task: Create a Custom Hook</h3>
        <p>Create a custom hook called <code>useLocalStorage</code> that:</p>
        <ul>
          <li>Accepts a key and initial value</li>
          <li>Returns the stored value and a function to update it</li>
          <li>Persists the value to localStorage</li>
          <li>Retrieves the value from localStorage on mount</li>
        </ul>
        <p>Use this hook in the Counter component to persist the count value.</p>
        <div className="hint">
          <strong>Hint:</strong> Create a new file <code>src/hooks/useLocalStorage.js</code>
        </div>
      </div>

      <div className="instructions">
        <h2>🚀 Ready to Start?</h2>
        <p>Begin with Task 1 and work your way through. Good luck!</p>
        <p><strong>Time Estimate:</strong> 45-60 minutes</p>
      </div>
    </div>
  )
}

export default App
