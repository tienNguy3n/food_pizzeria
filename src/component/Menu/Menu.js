import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.module.css';
import MealItem from './MealItem/MealItem';
import fetchAPI from '../../services';

const cx = classNames.bind(styles);

const Menu = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetchAPI('meals.json', {method: 'GET'})
            .then((data) => {
                setMeals(data);
            })
    }, []);

    return (
        <div className={cx('container')}>
            <h1>MENU</h1>
            <div className={cx('inner')}>
                {meals.map((meal) => (
                    <MealItem key={meal.id} meal={meal} />
                ))}
            </div>
        </div>
    );
};

export default Menu;
