import React from "react";

export const ToDoList = () => {
  const getTasks = () => {
    return [
      { _id: 1, text: "This is task 1" },
      { _id: 2, text: "This is task 2" },
      { _id: 3, text: "This is task 3" }
    ];
  };

  return (
    <ul>
      {getTasks().map(task => (
        <li key={task._id}>{task.text}</li>
      ))}
    </ul>
  );
};
