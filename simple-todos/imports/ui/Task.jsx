import React from 'react';
import { Tasks } from '../api/tasks';

export const Task = (props) => {
  const toggleChecked = () => {
    Tasks.update(props.task._id, {
      $set: { checked: !props.task.checked },
    });
  };

  const deleteThisTask = () => {
    Tasks.remove(props.task._id);
  };

  return (
    <li>
      <button className='delete' onClick={deleteThisTask}>
        &times;
      </button>

      <input
        type='checkbox'
        readOnly
        checked={Boolean(props.task.checked)}
        onClick={toggleChecked}
      />

      <span className='text'>{props.task.text}</span>
    </li>
  );
};
