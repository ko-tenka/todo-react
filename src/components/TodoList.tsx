import React from 'react';
import type { Todo } from '../types';
import TodoItem from './TodoItem';

type TodoListProps = {
  title: string;
  todos: Todo[];
  onToggle?: (id: number) => void;
  clickable?: boolean;
};

const TodoList: React.FC<TodoListProps> = ({ title, todos, onToggle, clickable = true }) => (
  <div className="todo-list-block">
    <h2>{title}</h2>
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} clickable={clickable} />
      ))}
    </ul>
  </div>
);

export default TodoList; 