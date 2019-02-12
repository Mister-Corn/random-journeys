import React, { useState } from 'react';
// Components
import Form from './Form';
import ToDoList from './ToDoList';

const App = () => {
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
      <ToDoList hideCompleted={hideCompleted} />
    </div>
  );
};

export default App;
