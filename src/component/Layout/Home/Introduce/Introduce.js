import React from 'react';

import classNames from 'classnames/bind';
import { MushroomIcon, PizzaIcon, RosemaryIcon, TomatoIcon } from './Icon/Icon';
import styles from './Introduce.module.css';

const cx = classNames.bind(styles);
const items = [
    {
        name: 'Pizza Slices',
        description:
            'When gliding by the Bashee isles we emerged at last upon the great South Sea, were it not for other things, I could have greeted.',
        icon: <PizzaIcon />,
    },
    {
        name: 'Tomato',
        description:
            'When gliding by the Bashee isles we emerged at last upon the great South Sea, were it not for other things, I could have greeted.',
        icon: <TomatoIcon />,
    },
    {
        name: 'Mushroom',
        description:
            'When gliding by the Bashee isles we emerged at last upon the great South Sea, were it not for other things, I could have greeted.',
        icon: <MushroomIcon />,
    },
    {
        name: 'Rosemary',
        description:
            'When gliding by the Bashee isles we emerged at last upon the great South Sea, were it not for other things, I could have greeted.',
        icon: <RosemaryIcon />,
    },
];

const Introduce = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                {items.map((item, index) => {
                    return (
                        <div key={index} className={cx('inner')}>
                            <div className={cx('icon')}>{item.icon}</div>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Introduce;
