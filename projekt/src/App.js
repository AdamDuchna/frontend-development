import './App.css';
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route
} from "react-router-dom";
import CatsBreedsList from './ui/breeds/CatsBreedsList';
import CatBreedDetail from './ui/breeds/CatBreedDetail';
import CatsImagesList from './ui/images/CatsImagesList';
import CatBreedForm from './ui/breeds/CatBreedForm';
import CatImageDetail from './ui/images/CatImageDetail';
import CatImageForm from './ui/images/CatImageForm';
import Navbar from './ui/navbar/Navbar'

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
            <Routes>
              <Route path='/breeds/add'><CatBreedForm/></Route>
              <Route path='/breeds/edit/:id'><CatBreedForm/></Route>
              <Route path='/breeds/:id'><CatBreedDetail/></Route>
              <Route path='/breeds'><CatsBreedsList/></Route>
              <Route path='/images/add'><CatImageForm/></Route>
              <Route path='/images/edit/:id'><CatImageForm/></Route>
              <Route path='/images/:id'><CatImageDetail/></Route>
              <Route path='/images'><CatsImagesList/></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
