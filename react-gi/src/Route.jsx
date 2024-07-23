import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchMovies from './Search'; 
import DisplayMovies from './DisplayMovie'; 
import List from './List';
import Details from './Details'
import TaskItems from './TaskItems'
function Routesroute() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<SearchMovies />} />
          <Route path="/movie/:id" element={<DisplayMovies />} />
          {/* <Route path="/" element={<List />} />
          <Route path="/task/:id" element={<Details />} />
          <Route
            path="/add-task"
            element={<TaskItems onSubmit={handleAddTask} />}
          /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Routesroute;
