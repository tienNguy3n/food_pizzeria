import React from 'react';
import classNames from 'classnames/bind';

import styles from './CartItem.module.css';

const cx = classNames.bind(styles);

const CartItem = (props) => {
    const { name, price, image, amount } = props.item;

    return (
        <li className={cx('cart-item')}>
            <div className={cx('item')}>
                <div className={cx('info')}>
                    <img src={image} />
                    <div>
                        <h2>{name}</h2>
                        <span className={cx('price')}>${price}</span>
                    </div>
                </div>
                <span className={cx('amount')}>x{amount}</span>
            </div>

            <div className={cx('actions')}>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
