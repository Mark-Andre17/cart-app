import React from "react";
import './menu.css';

function Menu(props) {
    return (
        <ul className="header-menu">
            {props.menuList.map((item, index) => 
            <li key={index}>
                <a href='#'>{item}</a>
            </li>)}
        </ul>
    )
}

export default Menu;