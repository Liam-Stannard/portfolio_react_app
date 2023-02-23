import { Link } from "react-router-dom";

import '../css/navbar.css'

function Navbar() {

    return (
        <nav className="navbar">
            <ul className="nav-menu">
                <li className='nav-item nav-item-end-left'><Link className='nav-item-end-left' to="/">Home</Link></li>
                <li className='nav-item'><Link to="/about">About</Link></li>
                <li className='nav-item'><Link to="/projects">Projects</Link></li>
                <li className='nav-item nav-item-end-right'><Link className='nav-item-end-right' to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
