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
import { Comments, Heart } from '../../../../public/SVG';

const Feeds = () => {
    const [postData, setPostData] = useState([]);


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
                    img: arrayBufferToBase64(items.img.data.data)
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




                <section  className={`${styles.newsFeed_box} + flex flex-col gap-[16px] w-[100%] rounded-[15px] px-[17px] py-[23px] mt-[24px]`}>

                    <article className={`flex gap-[16px] items-center`}>

                        <section className={`${styles.storys} + mx-[5px]`}>
                            <div className={`${styles.story} + w-[40px] bg-slate-200 h-[40px] rounded-full grid place-items-center`}>
                                <div className={`w-[35px] h-[35px] rounded-full`}>

                                </div>
                            </div>
                        </section>

                        <section>
                            <h4 className={`body_LargeBold`}>Brian Cir</h4>
                            <p className={`body_Medium grey_light_hover mt-[2px]`}>Brian Cir</p>
                        </section>

                    </article>

                    <p className={`body_Large `}>Nature is Greate!!</p>


                    <div className='w-  mt-[8px]'>
                        <Image className={`w-[100%] h-[100%] object-center `} src={mainImg} alt='post' width={400} height={30} />
                    </div>

                    <section className={`${styles.like_comment} + flex items-center gap-[16px] h-[37px] `}>
                        <div className={`${styles.svg} `}><Heart /></div>

                        <article className={`flex gap-[8px] w-[100%]  h-[100%] `}>
                            <input className={`bg-transparent grow max-w-[100%]  pl-[11px] px-[21px] rounded-[10px]`} placeholder='Have something to say?' />
                            <button className={`body_Medium ml-auto px-[24px] py-[10px] h-[100%] rounded-[5px] max-sm:hidden `}>Post</button>
                            <button className={`${styles.svg} + body_Medium ml-auto h-[100%] rounded-[5px] hidden max-sm:block  `}><Comments /></button>
                        </article>
                    </section>


                    <section>
                        <h3 className={`body_LargeBold`}>Comments:</h3>

                        <div className={`p-[8px] mt-[8px]`}>

                            <article className={`flex gap-[8px] items-center`}>

                                <section className={`${styles.storys} + mx-[5px]`}>
                                    <div className={`${styles.story} + w-[34px] bg-slate-200 h-[34px] rounded-full grid place-items-center`}>
                                        <div className={`w-[30px] h-[30px] rounded-full`}>

                                        </div>
                                    </div>
                                </section>

                                <h4 className={`label_Large`}>Brian Cir</h4>
                            </article>

                            <article className={` ${styles.comment} + mt-[8px] rounded-[10px] p-[16px]`}>
                                <p className={`label_Large`}>From the rolling hills of a countryside landscape to the majestic peaks of a mountain range, nature's view can take your breath away. </p>
                            </article>
                        </div>
                    </section>

                </section>
                {postData && postData.map((data: any) => (
                    <NewsFeed key={data._id} {...data} />

                ))}
            </section>
        </>
    )
}

export default Feeds