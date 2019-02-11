import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Task } from './Task';
import { Tasks } from '../api/tasks';

const ToDoList = (props) => {
  const getTasks = () => {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  };

  return (
    <ul>
      {props.tasks.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </ul>
  );
};

export default withTracker(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
})(ToDoList);
