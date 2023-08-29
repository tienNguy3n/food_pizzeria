import React from 'react';
import classNames from 'classnames/bind';

import styles from './Widget.module.css';

const cx = classNames.bind(styles);
const images = [
    'https://demo.exptheme.com/pizzeria/wp-content/uploads/2015/09/16-570x220.jpg',
    'https://demo.exptheme.com/pizzeria/wp-content/uploads/2015/09/14-570x220.jpg',
];

const Widget = () => {
    return (
        <div className={cx('widget')}>
            {images.map((image, index) => {
                return (
                    <div key={index} className={cx('inner')}>
                        <img src={image} />
                        <div className={cx('desc')}>
                            <p>
                                THE BEST PIZZA
                                <br />
                                <strong>TEMPLATE</strong> ON ENVATO
                                <br />
                                MARKET
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Widget;
