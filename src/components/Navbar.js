import React from 'react'; 
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

function Navbar() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <Link to="/" className="navbar-brand">Productos</Link>
        
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to ="/" className="nav-link">Lista de productos <span className="sr-only">(current)</span></Link>
            </li>
            </ul>
            </div>
        </nav>
        
        
    )
}

export default withRouter(Navbar);
