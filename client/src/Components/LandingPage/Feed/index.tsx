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
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '@/redux/counter/postSlice';

const Feeds = () => {
    const dispatch = useDispatch();
    const userPosts = useSelector((state: any) => state.posts.posts);

    useEffect(() => {

        const getUserPosts = async () => {
            const response = await fetch("https://sialo-backend.vercel.app/api/post");
            const jsonData = await response.json();
            dispatch(setPosts({ posts: jsonData.data }));
        }

        getUserPosts();
    }, [])

    return (
        <>
            <section className={`py-[24px] max-w-[800px] min-w-[300px] min-h-[100vh] m-auto `}>

                <Stories />

                <section className={`mt-[24px]`}><Post /></section>

                <NewsFeed />

                <article className={`min-h-[500px]`}>

                    {userPosts && userPosts.map((data: any, index: number) => (
                        <NewsFeed key={index} {...data} />
                    ))}
                </article>


                {!userPosts.length && <Loading />}
            </section>
        </>
    )
}

export default Feeds