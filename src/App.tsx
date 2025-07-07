import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoStats from './components/TodoStats'
import TodoClearCompleted from './components/TodoClearCompleted'
import TodoItem from './components/TodoItem'
import type { Todo } from './types'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed'>('all')

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    setTodos([
      ...todos,
      { id: Date.now(), text: input.trim(), completed: false },
    ])
    setInput('')
  }

  const toggleTodo = (id: number) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const clearCompleted = () => {
    setTodos(todos => todos.filter(todo => !todo.completed))
  }

  const remaining = todos.filter(todo => !todo.completed).length
  const completed = todos.filter(todo => todo.completed)
  const uncompleted = todos.filter(todo => !todo.completed)

  // Для табов
  let tabTodos: Todo[] = []
  if (activeTab === 'all') tabTodos = [...uncompleted, ...completed]
  if (activeTab === 'active') tabTodos = uncompleted
  if (activeTab === 'completed') tabTodos = completed

  return (
    <div className="todo-app">
      <h1>todos</h1>

      <div className='todo-app-content'>
      <TodoInput input={input} setInput={setInput} onAdd={addTodo} />

      <div className="todo-column-list-block">
        <ul className="todo-column-list">
          {tabTodos.length === 0 && <li className="todo-column-item empty">Нет задач</li>}
          {tabTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
          ))}
        </ul>
      </div>

      <div className="todo-bottom-bar">
      <TodoStats remaining={remaining} />
        <div className="todo-tabs">
          <button
            className={activeTab === 'all' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={activeTab === 'active' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('active')}
          >
            Active
          </button>
          <button
            className={activeTab === 'completed' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('completed')}
          >
            Выполненные
          </button>
        </div>
        <TodoClearCompleted onClear={clearCompleted} disabled={completed.length === 0} />
      </div>
    </div>
    </div>
  )
}

export default App
