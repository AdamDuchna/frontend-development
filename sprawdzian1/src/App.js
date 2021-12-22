import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CatForm from './ui/CatForm';
import CatList from './ui/CatList';
import CatDetail from './ui/CatDetail';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<><CatForm/><CatList/></>}></Route>
          <Route path='/:id' element={<CatDetail/>}></Route>
          <Route path='/:id/edit' element={<CatForm/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
