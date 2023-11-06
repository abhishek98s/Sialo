import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

import styles from './feed.module.scss';
import Story from './Stories/Story'
import Stories from './Stories';
import Post from './Post';
import NewsFeed from './NewsFeed';
import Loading from './Loading2';
import { addPosts, setPosts } from '@/redux/counter/postSlice';

const Feeds = () => {
    const dispatch = useDispatch();
    const userPosts = useSelector((state: any) => state.posts.posts);
    let page = 1;

    const { ref, inView } = useInView({
        threshold: 0.1, // Intersection ratio threshold for triggering the callback
        rootMargin: "2000px"
    });

    useEffect(() => {

        const getUserPosts = async () => {
            // const response = await fetch("https://sialo-backend.vercel.app/api/post");
            // const jsonData = await response.json();
            // dispatch(setPosts({ posts: jsonData.data }));
            const response = await fetch(`http://localhost:8000/api/reqPost/${page}`);
            const jsonData = await response.json();
            dispatch(setPosts({ posts: jsonData.data }));
            page++;
        }

        getUserPosts();
    }, [])

    const fetchData = async () => {
        // const getRequestedPosts = async () => {
        const response = await fetch(`http://localhost:8000/api/reqPost/${page}`);
        const jsonData = await response.json();
        dispatch(setPosts({ posts: jsonData.data }));
        page++;
        // }
        // dispatch(addPosts({ post: userPosts }))
        return
    }

    useEffect(() => {
        if (inView) {
            fetchData();
        }
    }, [inView])

    return (
        <>
            <section className={`py-[24px] max-w-[600px] w-[100%] min-h-[100vh] m-auto max-md:pb-[40px]`}>

                <Stories />

                <section className={`mt-[24px]`}><Post /></section>

                {/* <NewsFeed /> */}

                <article className={`min-h-[50px]`}>

                    {userPosts && userPosts.map((data: any, index: number) => (
                        <NewsFeed key={index} {...data} />
                    ))}
                </article>

                {!userPosts.length && <div className='w-[24px] h-[24px] mx-auto'><Loading /></div>}
                {userPosts && <div ref={ref}></div>}
            </section>
        </>
    )
}

export default Feeds