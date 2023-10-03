import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';
import fetchAPI from '../../services';
import { add, clear, remove } from '../../store/cartSlice';

const cx = classNames.bind(styles);

const Cart = (props) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);
    const [isDidSubmit, setIsDidSubmit] = useState(false);
    const hasItems = cart.items.length > 0;
    
    const submitOrderHandler = (userData) => {
        fetchAPI('orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cart.items,
            }),
        });
        setIsDidSubmit(true);
        dispatch(clear())
    };

    const cartItemAddHandler = (item) => {
        dispatch(add({
            ...item,
            amount: 1,
        }))
    };

    const cartItemRemoveHandler = (id) => {
        dispatch(remove(id))
    };

    const cartItems = (
        <ul className={cx('cart-items')}>
            {cart.items.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onAdd={() => cartItemAddHandler(item)}
                    onRemove={() => cartItemRemoveHandler(item.id)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onHideCart={props.onHideCart}>
            {!isDidSubmit && (
                <>
                    {cartItems}
                    {!hasItems && <div className={cx('message')}>Nothings</div>}
                    <div className={cx('total')}>
                        <span>Total Amount</span>
                        <span>${cart.totalAmount}</span>
                    </div>

                    {hasItems && <Checkout onHideCart={props.onHideCart} onSubmit={submitOrderHandler} />}

                    {!hasItems && (
                        <div className={cx('actions')}>
                            <button onClick={props.onHideCart}>Close</button>
                        </div>
                    )}
                </>
            )}
            {isDidSubmit && (
                <>
                    <div className={cx('message')}>Successfully sent the order!</div>
                    <div className={cx('actions')}>
                        <button onClick={props.onHideCart}>Close</button>
                    </div>
                </>
            )}
        </Modal>
    );
};

export default Cart;
