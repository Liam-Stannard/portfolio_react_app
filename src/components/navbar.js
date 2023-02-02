import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import {MdMenu}  from "react-icons/md";
import { MdClose } from "react-icons/md"

import '../css/navbar.css'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });


    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
    }
    



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
