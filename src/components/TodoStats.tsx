import React from 'react';

type TodoStatsProps = {
  total: number;
  remaining: number;
};

const TodoStats: React.FC<TodoStatsProps> = ({ total, remaining }) => (
  <div className="todo-stats">
  {remaining} items left
  </div>
);

export default TodoStats; 