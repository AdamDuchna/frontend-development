import React from 'react';

import './App.css';
import DirectorForm from './features/DirectorForm';
import MovieForm from './features/MovieForm';

function App() {
  return (
    <div className="App">
      <DirectorForm/>
      <MovieForm/>
    </div>
  );
}

export default App;
