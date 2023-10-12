import React, { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'https://cdn.skypack.dev/react-paginate@7.1.3';
import classNames from 'classnames/bind';

import styles from './Menu.module.css';
import MealItem from './MealItem/MealItem';
import { instance as axios } from '../../services/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch, faSortAmountDown, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Menu = () => {
    const [meals, setMeals] = useState([]);
    const [inputSearch, setInputSearch] = useState('');
    const [isIncrease, setIsIncrease] = useState(false);
    const [isDecrease, setIsDecrease] = useState(false);
    const [itemOffset, setItemOffset] = useState(0);
    const [mealSearch, setMealSearch] = useState('');
    const inputRef = useRef()

    const itemsPerPage = 6;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = meals.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(meals.length / itemsPerPage);
    
    useEffect(() => {
        axios
            .get(`meals?search=${mealSearch}`)
            .then((data) => {
                setMeals(data);
            })
            .catch((error) => {
                alert(error.message);
            });
    }, [mealSearch]);

    const handleInputSearch = (e) => {
        const value = e.target.value;
        setInputSearch(value);
        
        if (inputRef.current) {
            clearTimeout(inputRef.current)
        }
        
        inputRef.current = setTimeout(() => {
            setMealSearch(inputSearch.trim())
        }, 500)
    }

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
                <div className={cx('filter')}>
                    <FontAwesomeIcon icon={faFilter}/>
                    <div>Filter :</div>
                    <div className={cx('wrapper')}>
                        <div className={cx('sort')} onClick={increaseHandler}>
                            <FontAwesomeIcon icon={faSortAmountUp}/>
                            <p>Increase</p>
                        </div>
                        <div className={cx('sort')} onClick={decreaseHandler}>
                            <FontAwesomeIcon icon={faSortAmountDown}/>
                            <p>Decrease</p>
                        </div>
                    </div>
                </div>

                <div className={cx('search')}>
                    <div className={cx('icon-search')}><FontAwesomeIcon icon={faSearch} /></div>
                    <input ref={inputRef} className={cx('input-search')} type="text" placeholder='Search...' value={inputSearch} onChange={handleInputSearch} />
                </div>
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
