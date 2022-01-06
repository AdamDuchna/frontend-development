import React from 'react'
import { Link } from 'react-router-dom';
import '../../styling/navbar/Navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to='/' style={{ textDecoration: 'none', color: "black" }}><div>STATS</div></Link>
                <Link to='/breeds' style={{ textDecoration: 'none', color: "black" }}><div>BREEDS</div></Link>
                <Link to='/images' style={{ textDecoration: 'none', color: "black" }}><div>IMAGES</div></Link>
                <div className='logo'><div>Cat</div><div>Lovers</div></div>
            </nav>
        </div>
    )
}
export default Navbar;