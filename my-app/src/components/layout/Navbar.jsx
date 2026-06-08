import './layout.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar-container">
                {/* 1. Empty placeholder div to perfectly counterweight the search bar on the right */}
                <div className="navbar-left-spacer"></div>

                {/* 2. The main navigation links grouped together */}
                <ul className="navbar-list">
                    <li className="navbar-item"><Link className="navbar-link" to="/">Home</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" to="/women">Women</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" to="/kids">Kids</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" to="/men">Men</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" to="/about">About</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" to="/contact">Contact</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" to="/cart">Cart</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" to="/profile">Profile</Link></li>
                </ul>

                {/* 3. The Search Bar pinned to the right side */}
                <div className="navbar-search">
                    <input type="text" placeholder="Search shoes..." className="search-input" />
                </div>
            </nav>
        </>
    );
}

export default Navbar;