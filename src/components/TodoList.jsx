import { useState } from 'react'

/**
 * TodoList Component
 * 
 * TODO: Complete this component by implementing:
 * 1. Add functionality to mark todos as complete/incomplete
 * 2. Add a delete button for each todo item
 * 3. Add a filter to show All/Active/Completed todos
 * 4. Display the count of active todos
 */
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Get hired', completed: false },
  ])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      }
      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

  // TODO: Implement toggle complete function
  const toggleComplete = (id) => {
    // Your code here
  }

  // TODO: Implement delete todo function
  const deleteTodo = (id) => {
    // Your code here
  }

  // TODO: Implement filtered todos based on the filter state
  const filteredTodos = todos // Replace this with your filtering logic

  // TODO: Calculate active todos count
  const activeTodosCount = 0 // Replace with actual count

  return (
    <div className="demo-component">
      <h4>Todo List</h4>
      
      <div>
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      {/* TODO: Add filter buttons here (All, Active, Completed) */}
      <div className="button-group" style={{ margin: '1rem 0' }}>
        <p style={{ color: '#888', fontSize: '0.9em' }}>Add filter buttons here</p>
      </div>

      {/* TODO: Display active todos count */}
      <p style={{ fontSize: '0.9em', color: '#888' }}>
        Active todos: {activeTodosCount}
      </p>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {/* TODO: Add checkbox to toggle completion */}
            <span>{todo.text}</span>
            {/* TODO: Add delete button */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
