import React from 'react'
import styles from './feed.module.scss';
import Story from './Stories/Story'


import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stories from './Stories';

const Feeds = () => {
    return (
        <>
            <Stories />
        </>
    )
}

export default Feeds