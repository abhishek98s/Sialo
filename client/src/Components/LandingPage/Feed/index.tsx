import React, { useEffect, useState } from 'react'
import styles from './feed.module.scss';
import Story from './Stories/Story'

import mainImg from '../../../../public/images/main bg.jpg'


import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stories from './Stories';
import Post from './Post';
import NewsFeed from './NewsFeed';
import Image from 'next/image';
import { Comments, Heart, Plus } from '../../../../public/SVG';
import Loading from './Loading2';

const Feeds = () => {
    const [postData, setPostData] = useState([]);

    useEffect(() => {

        const api = async () => {
            const response = await fetch("https://sialo-backend.vercel.app/api/post");
            const jsonData = await response.json();

            await setPostData(jsonData.data)
        }

        api();
    }, [])

    return (
        <>
            <section className={`py-[24px] max-w-[800px] min-w-[300px] m-auto `}>

                <Stories />

                <Post />

                <NewsFeed />

                {postData && postData.map((data: any) => (
                    <NewsFeed key={data._id} {...data} />

                ))}


                {!postData.length && <Loading />}
            </section>
        </>
    )
}

export default Feeds