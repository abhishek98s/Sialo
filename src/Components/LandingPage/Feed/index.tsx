import React from 'react'
import styles from './feed.module.scss';
import Story from './Stories/Story'


import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stories from './Stories';
import Post from './Post';
import NewsFeed from './NewsFeed';

const Feeds = () => {
    return (
        <>
            <section className={`py-[24px] w-[53vw]`}>

                <Stories />
                
                <Post />

                <NewsFeed />
            </section>
        </>
    )
}

export default Feeds