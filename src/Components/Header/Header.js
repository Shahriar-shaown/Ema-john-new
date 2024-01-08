import React from 'react';
import logo from'../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Home">Home</a>
                <a href="/Shop">Shop</a>
                <a href="/Inventory">Inventory</a>
                <a href="/Order_now">Order Now</a>
            </div>
        </nav>
    );
};

export default Header;