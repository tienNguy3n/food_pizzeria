import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Checkout.module.css';

const cx = classNames.bind(styles);

const Checkout = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredPhoneIsValid, setEnteredPhoneIsValid] = useState(false);
    const [enteredPhoneTouched, setEnteredPhoneTouched] = useState(false);

    const [enteredAddress, setEnteredAddress] = useState('');
    const [enteredAddressIsValid, setEnteredAddressIsValid] = useState(false);
    const [enteredAddressTouched, setEnteredAddressTouched] = useState(false);

    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value);

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }
    };

    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true);

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(true);
            return;
        }
    };

    const phoneInputChangeHandler = (e) => {
        setEnteredPhone(e.target.value);

        if (enteredPhone.trim() === '' || enteredPhone.trim().length !== 10 || isNaN(enteredPhone)) {
            setEnteredPhoneIsValid(false);
            return;
        }
    };

    const phoneInputBlurHandler = () => {
        setEnteredPhoneTouched(true);

        if (enteredPhone.trim() === '' || enteredPhone.trim().length !== 10 || isNaN(enteredPhone)) {
            setEnteredPhoneIsValid(true);
            return;
        }
    };

    const addressInputChangeHandler = (e) => {
        setEnteredAddress(e.target.value);

        if (enteredAddress.trim() === '') {
            setEnteredAddressIsValid(false);
            return;
        }
    };

    const addressInputBlurHandler = () => {
        setEnteredAddressTouched(true);

        if (enteredAddress.trim() === '') {
            setEnteredAddressIsValid(true);
            return;
        }
    };

    const orderHandler = (e) => {
        e.preventDefault();

        let nameIsValid;
        let phoneIsValid;
        let addressIsValid;

        setEnteredNameTouched(true);
        setEnteredPhoneTouched(true);
        setEnteredAddressTouched(true);

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(true);
            nameIsValid = true;
        }

        if (enteredPhone.trim() === '' || enteredPhone.trim().length !== 10 || isNaN(enteredPhone)) {
            setEnteredPhoneIsValid(true);
            phoneIsValid = true;
        }

        if (enteredAddress.trim() === '') {
            setEnteredAddressIsValid(true);
            addressIsValid = true;
        }

        if (!enteredNameIsValid && !enteredPhoneIsValid && !enteredAddressIsValid) {
            if (!nameIsValid && !phoneIsValid && !addressIsValid) {
                props.onSubmit({
                    name: enteredName,
                    phone: enteredPhone,
                    address: enteredAddress,
                });
            }
        } else {
            return;
        }
    };

    return (
        <form className={cx('form')} onSubmit={orderHandler}>
            <div className={cx('control', `${enteredNameIsValid && enteredNameTouched ? 'invalid' : ''}`)}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
                {enteredNameIsValid && enteredNameTouched && <p>Please enter a valid name!</p>}
            </div>

            <div className={cx('control', `${enteredPhoneIsValid && enteredPhoneTouched ? 'invalid' : ''}`)}>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" onChange={phoneInputChangeHandler} onBlur={phoneInputBlurHandler} />
                {enteredPhoneIsValid && enteredPhoneTouched && (
                    <p>Please enter a valid phone (10 numeric characters long)!</p>
                )}
            </div>

            <div className={cx('control', `${enteredAddressIsValid && enteredAddressTouched ? 'invalid' : ''}`)}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" onChange={addressInputChangeHandler} onBlur={addressInputBlurHandler} />
                {enteredAddressIsValid && enteredAddressTouched && <p>Please enter a valid address!</p>}
            </div>

            <div className={cx('actions')}>
                <button onClick={props.onHideCart}>Close</button>
                <button>Order</button>
            </div>
        </form>
    );
};

export default Checkout;
