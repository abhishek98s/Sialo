import React, { Component } from 'react'
import Story from './Story'
import styles from './stories.module.scss'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SwiperCore, { Navigation, Pagination, FreeMode, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);


const Stories = () => {
    const story = [
        { id: 1, img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80" },
        { id: 2, img: "https://images.unsplash.com/photo-1542290425-b5d02738ef3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMGNsaWNrc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" },
        { id: 3, img: "https://plus.unsplash.com/premium_photo-1661700093968-b538c5a9f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
        { id: 4, img: "https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
        { id: 5, img: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
        { id: 6, img: "https://plus.unsplash.com/premium_photo-1663051160162-e004fc97891e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
        { id: 7, img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80" },
        { id: 8, img: "https://images.unsplash.com/photo-1542290425-b5d02738ef3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMGNsaWNrc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" },
        { id: 9, img: "https://plus.unsplash.com/premium_photo-1661700093968-b538c5a9f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
        { id: 10, img: "https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
        { id: 11, img: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
        { id: 12, img: "https://plus.unsplash.com/premium_photo-1663051160162-e004fc97891e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
        { id: 13, img: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    ]

    return (
        <section className={`w-[100%] mt-[56px]`}>

            <div>
                <Swiper
                    breakpoints={{
                        // When window width is >= 320px
                        320: {
                            slidesPerView: 3.2,
                            spaceBetween: 20,
                        },
                        // When window width is >= 768px
                        768: {
                            slidesPerView: 5.4,
                            spaceBetween: 30,
                        },
                        // When window width is >= 1024px
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 40,
                        },
                    }}
                    spaceBetween={5}
                    freeMode={true}
                    pagination={false}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {story.map((story: any, index: number) => (
                        <SwiperSlide><Story key={index} {...story} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    )
}


export default Stories;