import React from 'react';
import classNames from 'classnames/bind';

import styles from './Modal.module.css';

const cx = classNames.bind(styles);

const BackDrop = (props) => {
    return <div className={cx('backdrop')} onClick={props.onHideCart} />;
};

const ModalOverLay = (props) => {
    return (
        <div className={cx('modal')}>
            <div className={cx('content')}>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    return (
        <div>
            <BackDrop onHideCart={props.onHideCart} />
            <ModalOverLay>{props.children}</ModalOverLay>
        </div>
    );
};

export default Modal;
