import React from 'react';
// Components
import Form from './Form';
import ToDoList from './ToDoList';

const App = () => (
  <div className='container'>
    <h1>To-Do List</h1>
    <Form />
    <ToDoList />
  </div>
);

export default App;
