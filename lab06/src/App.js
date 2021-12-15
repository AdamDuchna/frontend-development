import logo from './logo.svg';
import './App.css';
import UserList from './ui/users/UserList';
import UserDetail from './ui/users/UserDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
              <Route exact path="users/" element={<UserList/>}></Route>
              <Route exact path="users/:id" element={<UserDetail/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
