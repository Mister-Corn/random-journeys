import React from "react";
import { Task } from "./Task";

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
        <Task key={task._id} task={task} />
      ))}
    </ul>
  );
};
