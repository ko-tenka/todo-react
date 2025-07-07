import React from 'react';

type TodoStatsProps = {
  remaining: number;
};

const TodoStats: React.FC<TodoStatsProps> = ({ remaining }) => (
  <div className="todo-stats">
  {remaining} items left
  </div>
);

export default TodoStats; 