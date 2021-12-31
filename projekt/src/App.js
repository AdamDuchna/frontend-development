import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route
} from "react-router-dom";
import CatsBreedsList from './ui/cats/CatsBreedsList';
import CatBreedDetail from './ui/cats/CatBreedDetail';
import Navbar from './ui/navbar/Navbar'

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
            <Routes>
              <Route path='/breeds/:id'><CatBreedDetail/></Route>
              <Route path='/breeds'><CatsBreedsList/></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
