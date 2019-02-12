import React from 'react';
// Components
import { Task } from './Task';

const ToDoList = ({ tasks, hideCompleted }) => {
  const filteredTasks = hideCompleted
    ? tasks.filter((task) => !task.checked)
    : tasks;

  return (
    <>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
