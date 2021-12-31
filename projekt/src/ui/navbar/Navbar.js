import React from 'react'
import { Link } from 'react-router-dom';
import '../../styling/Navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to='/' style={{ textDecoration: 'none', color: "black" }}><div>Main Page</div></Link>
                <Link to='/breeds' style={{ textDecoration: 'none', color: "black" }}><div>Breeds</div></Link>
                <Link to='/breeds' style={{ textDecoration: 'none', color: "black" }}><div>Cat Images</div></Link>
                <div className='logo'><div>Cat</div><div>Lovers</div></div>
            </nav>
        </div>
    )
}
export default Navbar;