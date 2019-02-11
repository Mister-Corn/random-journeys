import React, { useState } from 'react';
// Meteor Data
import { Tasks } from '../api/tasks';

const Form = () => {
  const [task, setTask] = useState({ text: '' });

  const onChange = (event) => {
    setTask({ text: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const { text } = task;

    Tasks.insert({
      text,
      createdAt: new Date(),
    });

    setTask({ text: '' });
  };

  return (
    <form onSubmit={handleSubmit} className='new-task'>
      <input
        type='text'
        name='text'
        value={task.text}
        placeholder='Type to add new tasks'
        onChange={onChange}
      />
    </form>
  );
};

export default Form;
