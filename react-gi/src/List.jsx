
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
 
    const tasks = [
      { id: 1, title: 'Monday', description: 'Doctors Appointment' },
      { id: 2, title: 'Tuesday', description: 'Pay bills' },
      { id: 3, title: 'Thursday', description: 'Was the car' },
    ];
    setTasks(tasks);
  }, []);

  return (
    <div>
      <h2>Todo list</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>
              {task.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
