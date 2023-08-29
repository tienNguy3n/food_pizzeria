import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Header.module.css';
import Navigation from './Navigation/Navigation';
import CartContext from '../../../store/cart-context';

const cx = classNames.bind(styles);

const Header = (props) => {
    const [showSubNav, setShowSubNav] = useState(false);
    const cartContext = useContext(CartContext);

    const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const showSubMenu = cx('sub-menu', 'show-sub-menu');

    return (
        <header className={cx('header')}>
            <div className={cx('inner')}>
                <div className={cx('sub-menu-icon')} onClick={() => setShowSubNav(!showSubNav)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <div className={cx('avatar')}>
                    <Link to="/">
                        <img
                            className={cx('logo')}
                            src="https://demo.exptheme.com/pizzeria/wp-content/themes/wp_pizzeria/assets/images/logo.png"
                            alt="FOOD & PIZZERIA"
                        />
                    </Link>
                    <div className={cx('title')}>
                        <h1>FOOD & PIZZERIA</h1>
                        <h4>Lorem ipsum dolor sit amet</h4>
                    </div>
                </div>

                <div className={cx('nav')}>
                    <div className={cx('nav-menu')}>
                        <Navigation hideSubMenu={setShowSubNav} />
                    </div>

                    <div className={showSubNav ? showSubMenu : cx('sub-menu')}>
                        <Navigation hideSubMenu={setShowSubNav} />
                    </div>

                    <div className={cx('cart')} onClick={() => props.onShowCart()}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className={cx('small-label')}>
                            <span className={cx('cart-total')}>{numberOfCartItems}</span>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
