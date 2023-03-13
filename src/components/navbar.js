import '../css/navbar.css'

function Navbar() {

    return (
        <>
            <nav className="navbar">
                <ul className="nav-menu">
                    <li className='nav-item nav-item-end-left'><a className='nav-item-end-left' href="#home-section">Home</a></li>
                    <li className='nav-item'><a href="#about-section">About</a></li>
                    <li className='nav-item'><a href="#projects-section">Projects</a></li>
                    <li className='nav-item nav-item-end-right'><a className='nav-item-end-right' href="#contact-section">Contact</a></li>
                </ul>
            </nav>
            <div className="nav-offset"/>
        </>
    );
}

export default Navbar;
