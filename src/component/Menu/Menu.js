import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.module.css';
import MealItem from './MealItem/MealItem';
import fetchAPI from '../../services';

const cx = classNames.bind(styles);

const Menu = () => {
    const [meals, setMeals] = useState([]);
    const [isIncrease, setIsIncrease] = useState(false);
    const [isDecrease, setIsDecrease] = useState(false);

    useEffect(() => {
        fetchAPI('meals.json', { method: 'GET' }).then((data) => {
            const loadedData = [];
            for (const key in data) {
                loadedData.push({ ...data[key], id: key });
            }
            setMeals(loadedData)
        });
    }, []);

    const increaseHandler = () => {
        meals.sort((a, b) => a.price - b.price);
        setIsIncrease(true)
        setIsDecrease(false)
    };

    const decreaseHandler = () => {
        meals.sort((a, b) => b.price - a.price);
        setIsIncrease(false)
        setIsDecrease(true)
    };

    return (
        <div className={cx('container')}>
            <h1>MENU</h1>
            <div className={cx('action')}>
                <p>Sorter:</p>
                <div onClick={increaseHandler}>Increase</div>
                <div onClick={decreaseHandler}>Decrease</div>
            </div>
            <div className={cx('inner')}>
                {!isIncrease && !isDecrease && meals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
                {isIncrease && !isDecrease && meals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
                {!isIncrease && isDecrease && meals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
            </div>
        </div>
    );
};

export default Menu;
