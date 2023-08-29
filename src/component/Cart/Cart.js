import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';
import fetchAPI from '../../services';

const cx = classNames.bind(styles);

const Cart = (props) => {
    const cartContext = useContext(CartContext);
    const [isDidSubmit, setIsDidSubmit] = useState(false);
    const hasItems = cartContext.items.length > 0;

    const submitOrderHandler = (userData) => {
        fetchAPI('orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartContext.items,
            }),
        });
        setIsDidSubmit(true);
        cartContext.clearCart();
    };

    const cartItemAddHandler = (item) => {
        cartContext.addItem({
            ...item,
            amount: 1,
        });
    };

    const cartItemRemoveHandler = (id) => {
        cartContext.removeItem(id);
    };

    const cartItems = (
        <ul className={cx('cart-items')}>
            {cartContext.items.map((item) => (
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
                        <span>${cartContext.totalAmount}</span>
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
