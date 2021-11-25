import React from 'react';

import './App.css';
import DirectorForm from './features/DirectorForm';
import MovieForm from './features/MovieForm';
import MovieDetail from './features/MovieDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MovieList from './features/MovieList';
import DirectorList from './features/DirectorList';
import Navbar from './features/Navbar';
import Dashbord from './features/Dashbord';
import DirectorDetail from './features/DirectorDetail';
import DirectorEditForm from './features/DirectorEditForm';
import ActorForm from './features/ActorForm';
import ActorList from './features/ActorList';
import ActorDetail from './features/ActorDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Dashbord/>}></Route>
        <Route exact path="directors/:id/edit" element={<DirectorEditForm/>}></Route>
          <Route exact path="movies/add" element={<MovieForm/>}></Route>
          <Route exact path="directors/add" element={<DirectorForm/>}></Route>
          <Route exact path="movies/" element={<MovieList/>}></Route>
          <Route path="movies/:id" element={<MovieDetail/>}></Route>
          <Route path="directors/:id" element={<DirectorDetail/>}></Route>
          <Route exact path="directors/" element={<DirectorList/>}></Route>
          <Route path="actors/add" element={<ActorForm/>}></Route>
          <Route exact path="actors/" element={<ActorList/>}></Route>
          <Route path="actors/:id" element={<ActorDetail/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
