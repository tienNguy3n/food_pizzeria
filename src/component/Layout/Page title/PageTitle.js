import React from 'react';
import classNames from 'classnames/bind';

import styles from './PageTitle.module.css';

const cx = classNames.bind(styles);

const PageTitle = () => {
    return (
        <div className={cx('page-title')}>
            <img src="https://demo.exptheme.com/pizzeria/wp-content/uploads/2015/09/blog.png" alt="Page tittle" />
            <div className={cx('title')}>
                <h1>FOOD & PIZZERIA</h1>
                <p className={cx('sub-title')}>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    );
};

export default PageTitle;
