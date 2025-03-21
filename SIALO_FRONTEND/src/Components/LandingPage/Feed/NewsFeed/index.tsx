import React, { useState } from 'react'
import Image from 'next/image'

import axios from 'axios'

import styles from "./newsfeed.module.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import mainImg from '../../../../../public/images/main bg.jpg'
import { Comments, Heart } from '../../../../../public/SVG'
import profilePic from '../../../../../public/images/profile.jpg'
import { useDispatch, useSelector } from 'react-redux'
import Comment from './Comment'

import { addComment } from '@/redux/counter/postSlice';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NewsFeed = ({ ...postData }: any): JSX.Element => {
    const router = useRouter();
    const user = useSelector((state: any) => state.login.user)
    const dispatch = useDispatch();

    const [value, setValue] = useState({
        comment: "",
        loading: ""
    })

    const inputHandler = (e: any) => {
        let val = e.target.value;
        setValue((value: any) => ({ ...value, comment: val }))
    }

    const dateStringToDate = (dateString: string) => {
        const date = new Date(dateString);

        // Get the month, day, and year from the date
        const month = date.toLocaleString('en-US', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();

        // Format the date as "Month Day, Year"
        const formattedDate = `${year}, ${month} ${day}`;

        return formattedDate;
    }

    const submit = async (e: any) => {
        e.preventDefault();

        if (!value.comment) {
            toast("Please add the something to comment", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            return
        }

        let commentData = {
            userId: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            userPicturePath: user.img,
            comment: value.comment
        }
        try {
            const response = await axios.patch(`https://sialo-backend.vercel.app/api/comment/${postData._id}`, commentData)
                .then((data) => {
                    let commentPostData = data.data.data;
                    let updatedComment = commentPostData.comments[commentPostData.comments.length - 1];

                   

                    dispatch(addComment({
                        comment: {
                            updatedComment,
                            postId: commentPostData._id
                        }
                    }))
                })


        } catch (err) {
            toast("Please Try Again", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            return
        }

        e.target.reset();
    }



    return (
        <section key={postData._id || 1} className={`${styles.newsFeed_box} + flex flex-col gap-[12px] w-[100%] rounded-[15px] px-[16px] py-[20px] mb-[24px]`}>
            <div className={`hidden`}><ToastContainer /></div>
            <article className={`flex gap-[12px] items-center`}>

                <section className={`${styles.storys} + mx-[5px]`}>
                    <div className={`${styles.story} + w-[40px] bg-slate-200 h-[40px] rounded-full grid place-items-center`}>
                        <div className={`w-[35px] h-[35px] rounded-full overflow-hidden`}>
                            <Image src={postData.userPicturePath || profilePic} alt="User Picture" width={100} height={100} />
                        </div>
                    </div>
                </section>

                <section>
                    <Link href={`/${postData.userId}`} className={`cursor-pointer body_Medium_Bold`}>{`${postData.firstName || "Zoro"} ${postData.lastName || ""}`}</Link>
                    <p className={`label_Medium grey_light_hover mt-[2px]`}>{dateStringToDate(postData.createdAt)}</p>
                </section>

            </article>

            <p className={`body_Large mt-2`}>{(postData.caption) || 'Nature is beautiful!'}</p>


            <div className='max-sm:mx-[-8px]'>
                <Image className={`w-[100%] h-[100%] object-center `} src={!(postData.post_image) ? mainImg : postData.post_image} alt='post' width={400} height={30} />
            </div>

            <form onSubmit={submit} className={`${styles.like_comment} + flex items-center gap-[16px] h-[38px] `}>
                <div className={`${styles.svg} `}><div className={`w-[30px] h-[30px]`}><Heart /></div></div>

                <article className={`flex gap-[8px] w-[100%]  h-[100%] `}>
                    <input className={`label_Medium bg-transparent grow max-w-[100%] h-[100%] px-[16px] py-[12px] rounded-[8px]`} onChange={inputHandler} placeholder='Have something to say?' />
                    <button type='submit' className={`+ label_Medium_Bold ml-[10px] px-[15px] h-[100%] rounded-[5px] max-sm:hidden `}>Post</button>
                    <button className={`${styles.svg} + body_Medium ml-auto h-[100%] rounded-[5px] hidden max-sm:block  `}><Comments /></button>
                </article>
            </form>


            <section>
                <h3 className={`body_LargeBold my-[16px] mb-[8px]`}>Comments:</h3>

                {postData.comments && postData.comments.map((comment: any, index: number) => (
                    <Comment key={index} styles={styles} comment={comment} />
                ))}
            </section>

        </section>
    )
}

export default NewsFeed