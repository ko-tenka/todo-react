import React from 'react';

type TodoClearCompletedProps = {
  onClear: () => void;
  disabled: boolean;
};

const TodoClearCompleted: React.FC<TodoClearCompletedProps> = ({ onClear, disabled }) => (
  <button onClick={onClear} disabled={disabled} className="todo-clear-btn">
    Clear complated
  </button>
);

export default TodoClearCompleted; 