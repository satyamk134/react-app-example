import React from "react";
import { NavLink,Link } from "react-router-dom";
import '../header/header.css'
function Header() {
    return (
        <div className="header">
            <Link  className="logo" to="/">CompanyLogo</Link>
            <div className="header-right">
                <Link to="/users">users</Link>
                <Link to="/contact">contact</Link>
                <Link to="/users">Login</Link>
            </div>
        </div>
    );
}
export default Header;