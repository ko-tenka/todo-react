import React from 'react';

type TodoInputProps = {
  input: string;
  setInput: (val: string) => void;
  onAdd: (e: React.FormEvent) => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ input, setInput, onAdd }) => (
  <form onSubmit={onAdd} className="todo-form">
    <input
      value={input}
      onChange={e => setInput(e.target.value)}
      placeholder="Новая задача"
      className="todo-input"
    />
    <button type="submit" className="todo-add-btn">Добавить</button>
  </form>
);

export default TodoInput; 