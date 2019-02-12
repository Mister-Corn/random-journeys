import React, { useState } from 'react';
// Components
import Form from './Form';
import ToDoList from './ToDoList';
// Meteor Data
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks';

const App = ({ tasks, incompleteCount }) => {
  const [hideCompleted, setHideCompleted] = useState(false);

  const toggleHideCompleted = () => setHideCompleted((prev) => !prev);

  return (
    <div className='container'>
      <h1>To-Do List</h1>
      <label className='hide-completed'>
        <input
          type='checkbox'
          checked={hideCompleted}
          onClick={toggleHideCompleted}
        />
        Hide Completed Tasks
      </label>
      <Form />
      <ToDoList tasks={tasks} hideCompleted={hideCompleted} />
    </div>
  );
};

export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
  };
})(App);
