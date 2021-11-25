import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to='/' style={{ textDecoration: 'none', color: "black" }}><div>Main Page</div></Link>
                <Link to='/movies' style={{ textDecoration: 'none', color: "black" }}><div>Movie List</div></Link>
                <Link to='/movies/add' style={{ textDecoration: 'none', color: "black" }}><div>Movie Form</div></Link>
                <Link to='/directors' style={{ textDecoration: 'none', color: "black" }}><div>Director List</div></Link>
                <Link to='/directors/add' style={{ textDecoration: 'none', color: "black" }}><div>Director Form</div></Link>
                <Link to='/actors' style={{ textDecoration: 'none', color: "black" }}><div>Actor List</div></Link>
                <Link to='/actors/add' style={{ textDecoration: 'none', color: "black" }}><div>Actor Form</div></Link>
            </nav>
        </div>
    )
}
export default Navbar;