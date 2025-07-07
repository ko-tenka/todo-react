import React from 'react';
import type { Todo } from '../types';

import './TodoItem.css';

type TodoItemProps = {
  todo: Todo;
  onToggle?: (id: number) => void;
  clickable?: boolean;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, clickable = true }) => (
  <li className={todo.completed ? 'completed' : ''} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <span
      className={`custom-checkbox${todo.completed ? ' checked' : ''}`}
      onClick={clickable && onToggle ? () => onToggle(todo.id) : undefined}
      style={{ cursor: clickable ? 'pointer' : 'default' }}
      tabIndex={0}
      role="checkbox"
      aria-checked={todo.completed}
    >
      {todo.completed && (
        <svg width="16" height="16" viewBox="0 0 16 16">
          <polyline points="4,8 7,11 12,5" style={{ fill: 'none', stroke: '#48f321', strokeWidth: 2 }} />
        </svg>
      )}
    </span>
    <span>{todo.text}</span>
  </li>
);

export default TodoItem; 