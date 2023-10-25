import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './AboutUs.module.css';
import Banner from '../Layout/Banner/Banner';
import { Carousel } from 'react-responsive-carousel';
import { instance as axios } from '../../services/axios';

const cx = classNames.bind(styles);
const sliders = [
    'https://demo.exptheme.com/pizzeria/wp-content/uploads/2015/10/15-570x334.jpg',
    'https://demo.exptheme.com/pizzeria/wp-content/uploads/2015/10/18-570x334.jpg',
    'https://demo.exptheme.com/pizzeria/wp-content/uploads/2015/10/8-570x334.jpg',
];

const AboutUs = () => {
    const [dataMembers, setDataMembers] = useState([]);

    useEffect(() => {
        axios
            .get('members')
            .then((data) => {
                setDataMembers(data);
            })
            .catch((error) => {
                alert(error.message);
            });
    }, []);

    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                    <h1>About Us</h1>
                    <p>When gliding by the Bashee isles we emerged at last upon the great South Sea.</p>
                </div>

                <div className={cx('history')}>
                    <div className={cx('text')}>
                        <h2>Our History</h2>
                        <p>
                            It may be that the primal source of all those pictorial delusions will be found among the
                            oldest Hindoo, Egyptian, and Grecian sculptures. For ever since those inventive but
                            unscrupulous times when on the marble panellings of temples, the pedestals of statues, and
                            on shields, medallions, cups, and coins, the dolphin was drawn in scales of chain-armor like
                            Saladin’s, and a helmeted head like St. George’s; ever since then has something of the same
                            sort of license prevailed, not only in most popular pictures of the whale, but in many
                            scientific presentations of him.
                        </p>
                    </div>

                    <div className={cx('video')}>
                        <iframe title='myFrame' src="https://www.youtube.com/embed/8uOTZO6LTPs?feature=oembed" />
                    </div>
                </div>

                <Banner />

                <div className={cx('interior')}>
                    <div className={cx('carousel')}>
                        <Carousel autoPlay infiniteLoop>
                            {sliders.map((slider, index) => {
                                return <img key={index} src={slider} alt="" />;
                            })}
                        </Carousel>
                    </div>

                    <div className={cx('text')}>
                        <h2>Amazing Interior</h2>
                        <p>
                            It may be that the primal source of all those pictorial delusions will be found among the
                            oldest Hindoo, Egyptian, and Grecian sculptures. For ever since those inventive but
                            unscrupulous times when on the marble panellings of temples, the pedestals of statues, and
                            on shields, medallions, cups, and coins, the dolphin was drawn in scales of chain-armor like
                            Saladin’s, and a helmeted head like St. George’s; ever since then has something of the same
                            sort of license prevailed, not only in most popular pictures of the whale, but in many
                            scientific presentations of him.
                        </p>
                    </div>
                </div>

                <div className={cx('member')}>
                    <h1>Our Team</h1>

                    {dataMembers.map((member) => {
                        return (
                            <div className={cx('wrapper')} key={member.id}>
                                <div className={cx('item')}>
                                    <img src={member.image} alt=""/>

                                    <div className={cx('name-tag')}>
                                        <h4>{member.name}</h4>
                                        <p>{member.position}</p>
                                    </div>
                                </div>

                                <p>{member.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
