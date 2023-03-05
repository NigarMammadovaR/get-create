import { Link } from "react-router-dom";

import React from 'react';

const Header = () => {
  return (
      <header>
    <div className="container">
        
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/Register">Register</Link>
                </li>
                <li>
                <Link to="/Table">Table</Link>
                </li>
            </ul>
        </nav>
    
    </div>
  </header>
    
  )
}

export default Header;