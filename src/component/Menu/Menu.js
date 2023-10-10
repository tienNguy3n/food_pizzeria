import React, { useEffect, useState } from 'react';
import ReactPaginate from 'https://cdn.skypack.dev/react-paginate@7.1.3';
import classNames from 'classnames/bind';

import styles from './Menu.module.css';
import MealItem from './MealItem/MealItem';
import { instance as axios } from '../../services/axios';

const cx = classNames.bind(styles);

const Menu = () => {
    const [meals, setMeals] = useState([]);
    const [isIncrease, setIsIncrease] = useState(false);
    const [isDecrease, setIsDecrease] = useState(false);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 6;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = meals.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(meals.length / itemsPerPage);
    
    useEffect(() => {
        axios
        .get('meals.json')
        .then((data) => {
            const loadedData = [];
            for (const key in data) {
                loadedData.push({ ...data[key], id: key });
            }
            setMeals(loadedData)
        })
        .catch((error) => {
            alert(error.message);
        });
    }, []);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % meals.length;
        setItemOffset(newOffset);
    };

    const increaseHandler = () => {
        meals.sort((a, b) => a.price - b.price);
        setIsIncrease(true);
        setIsDecrease(false);
    };

    const decreaseHandler = () => {
        meals.sort((a, b) => b.price - a.price);
        setIsIncrease(false);
        setIsDecrease(true);
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
                {!isIncrease && !isDecrease && currentItems.map((meal) => <MealItem key={meal.id} meal={meal} />)}
                {isIncrease && !isDecrease && currentItems.map((meal) => <MealItem key={meal.id} meal={meal} />)}
                {!isIncrease && isDecrease && currentItems.map((meal) => <MealItem key={meal.id} meal={meal} />)}
            </div>

            <div className={cx('pagination')}>
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
};

export default Menu;
