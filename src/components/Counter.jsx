import { useState } from 'react'

/**
 * Counter Component
 * 
 * TODO: Complete this component by implementing:
 * 1. Add increment and decrement buttons
 * 2. Add a reset button
 * 3. Prevent the counter from going below 0
 */
function Counter() {
  const [count, setCount] = useState(0)

  // TODO: Implement increment function
  const increment = () => {
    // Your code here
  }

  // TODO: Implement decrement function (should not go below 0)
  const decrement = () => {
    // Your code here
  }

  // TODO: Implement reset function
  const reset = () => {
    // Your code here
  }

  return (
    <div className="demo-component">
      <h4>Counter</h4>
      <div className="counter-display">{count}</div>
      
      <div className="button-group">
        {/* TODO: Add your buttons here */}
        <p style={{ color: '#888' }}>Add increment, decrement, and reset buttons</p>
      </div>
    </div>
  )
}

export default Counter
