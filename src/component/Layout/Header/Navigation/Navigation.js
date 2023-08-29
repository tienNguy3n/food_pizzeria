import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <ul>
            <li>
                <Link to="/" onClick={() => props.hideSubMenu(false)}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="/aboutus" onClick={() => props.hideSubMenu(false)}>
                    About Us
                </Link>
            </li>
            <li>
                <Link to="/menu" onClick={() => props.hideSubMenu(false)}>
                    Menu
                </Link>
            </li>
        </ul>
    );
};

export default Navigation;
