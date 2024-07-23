
import React, { useState, useEffect } from 'react';
// import { useParams, withRouter } from 'react-router-dom';


const Details = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const history = withRouter();

  useEffect(() => {
   
    const fakeTasks = { id: 1, title: 'Take out the trash', description: 'Mow the lawn' };
    setTask(fakeTasks);
  }, [id]);

  const handleDelete = () => {
   
    history.push('/');
  };

  return (
    <div>
      <h2>Task Detail</h2>
      {task && (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={handleDelete}>Delete Task</button>
        </div>
      )}
    </div>
  );
};

export default Details;
