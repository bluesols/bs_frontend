import React from 'react';
import logo from "public/images/logo.png";

const Navbar = () => {
  return (
    <>
        <div className="navbar-section">
            <div class="row" id='nav-inside-items'>
            <img src={logo} className="app-logo" alt="logo" />
            </div>
        </div>
    </>
  )
}

export default Navbar