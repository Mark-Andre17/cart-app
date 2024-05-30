import React from "react";
import Logo from './logo/Logo';
import Menu from './menu/Menu';
import Checkout from './checkout/Checkout';
import './header.css';

const menuList = ['одежда', 'детям', 'книги', 'компьютеры', 'контакты'];


function Header( {cart}) {
    return (
        <header className="header">
            <Logo />
            <Menu menuList={menuList} />
            <Checkout cart={cart}/>
        </header>
    )
}

export default Header;