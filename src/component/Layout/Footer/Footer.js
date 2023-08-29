import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Footer.module.css';
import { FooterIcon } from './Icon/icon';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('footer')}>
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <div className={cx('info')}>
                        <h2>Opening Hours</h2>
                        <div className={cx('time')}>
                            <div className={cx('hours')}>
                                <p>Monday - Friday</p>
                                <p>09:00 - 23:00h</p>
                            </div>

                            <div className={cx('hours')}>
                                <p>Saturday</p>
                                <p>09:00 - 16:00h</p>
                            </div>

                            <div className={cx('hours')}>
                                <p>Sunday</p>
                                <p>12:00 - 18:00h</p>
                            </div>
                        </div>

                        <h2>Our Address</h2>
                        <div className={cx('address')}>
                            Pizzeria Head Office
                            <br />
                            54866 2nd Road NY 48766
                            <br />
                            New York, U.S.A
                            <br />
                            <br />
                            Make Reservations: 0 800 111 555
                            <br />
                            Email: info@pizzeria.com
                        </div>
                    </div>

                    <div className={cx('title')}>
                        <FooterIcon />
                        <p className={cx('text')}>FOOD & PIZZERIA</p>
                        <p className={cx('detail')}>Lorem ipsum dolor sit amet</p>
                        <Link to="/menu">Make your order now!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
