import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.css';
import Slides from './Slides/Slides';
import Introduce from './Introduce/Introduce';
import Widget from './Widget/Widget';
import Banner from '../Banner/Banner';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <Slides />
                <Widget />
                <Banner />
                <Introduce />
            </div>
        </div>
    );
};

export default Home;
