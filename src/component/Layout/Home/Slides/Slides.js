import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames/bind';

import styles from './Slides.module.css';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const images = [
    'https://demo.exptheme.com/pizzeria/wp-content/uploads/2015/10/Sliders-1170x580.jpg',
    'https://demo.exptheme.com/pizzeria/wp-content/uploads/2015/10/8-1170x580.jpg',
    'https://demo.exptheme.com/pizzeria/wp-content/uploads/2015/10/sliders-1-1170x580.jpg',
];

const Slides = () => {
    return (
        <div className={cx('container')}>
            <Carousel autoPlay infiniteLoop>
                {images.map((image, index) => {
                    return (
                        <div key={index} className={cx('slide-img')}>
                            <img src={image} />
                            <Link to="/menu">
                                <div className={cx('btn-order')}>
                                    <button className={cx('btn', 'btn-red')}>order now</button>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Slides;
