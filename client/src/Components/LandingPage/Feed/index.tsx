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

    var base64Flag = 'data:image/jpeg;base64,';

    useEffect(() => {
        const arrayBufferToBase64 = (buffer: any) => {
            var binary = '';
            var bytes = [].slice.call(new Uint8Array(buffer));
            bytes.forEach((b) => binary += String.fromCharCode(b));
            return window.btoa(binary);
        };


        const api = async () => {
            const response = await fetch("https://sialo-backend.onrender.com/api/post");
            const jsonData = await response.json();

            const newarr = await jsonData.data.map((items: any) => (
                {
                    caption: items.caption,
                    img: items.img.data.data.toString("base64")
                }))

            await setPostData(newarr)
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