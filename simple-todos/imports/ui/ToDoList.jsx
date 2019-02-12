import React from 'react';
// Components
import { Task } from './Task';
// Meteor Data
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks';

const ToDoList = (props) => {
  const filteredTasks = props.hideCompleted
    ? props.tasks.filter((task) => !task.checked)
    : props.tasks;

  return (
    <ul>
      {filteredTasks.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </ul>
  );
};

export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(ToDoList);
