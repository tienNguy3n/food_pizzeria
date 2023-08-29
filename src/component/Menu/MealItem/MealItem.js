import React, { useContext, useRef } from 'react';
import classNames from 'classnames/bind';

import CartContext from '../../../store/cart-context';
import styles from './MealItem.module.css';

const cx = classNames.bind(styles);

const MealItem = (props) => {
    const { id, name, price, description, image } = props.meal;
    const cartContext = useContext(CartContext);
    const amountInputRef = useRef();

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: id,
            name: name,
            price: price,
            image: image,
            amount: amount,
        });
    };

    const submitHandle = (e) => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0) {
            return;
        }

        addToCartHandler(enteredAmountNumber);
        amountInputRef.current.value = 1;
    };

    return (
        <div className={cx('container')}>
            <div className={cx('price')}>${price}</div>
            <img src={image} alt="pizza" />
            <h3>{name}</h3>
            <p>{description}</p>

            <form className={cx('form')} onSubmit={submitHandle}>
                <input ref={amountInputRef} type="number" min={1} max={99} step={1} defaultValue={1} />
                <button>Add to cart</button>
            </form>
        </div>
    );
};

export default MealItem;
