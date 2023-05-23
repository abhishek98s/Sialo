import React, { Component } from 'react'
import Story from './Story'
import styles from './stories.module.scss'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Stories extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: false,

            // swipeToSlide: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            variableWidth: true,
            centerPadding: "5px",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        infinite: false,
                        initialSlide: 5
                    }
                }
            ]
        };

        const story = [
            { img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80" },
            { img: "https://images.unsplash.com/photo-1542290425-b5d02738ef3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMGNsaWNrc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" },
            { img: "https://plus.unsplash.com/premium_photo-1661700093968-b538c5a9f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
            { img: "https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
            { img: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
            { img: "https://plus.unsplash.com/premium_photo-1663051160162-e004fc97891e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
            { img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80" },
            { img: "https://images.unsplash.com/photo-1542290425-b5d02738ef3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMGNsaWNrc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" },
            { img: "https://plus.unsplash.com/premium_photo-1661700093968-b538c5a9f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
            { img: "https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
            { img: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
            { img: "https://plus.unsplash.com/premium_photo-1663051160162-e004fc97891e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
            { img: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
        ]

        return (
            <section className={`w-[100%] mt-[56px]`}>

                <div className={`max-lg:hidden`}>

                    <Slider {...settings}>


                        {/* <section className={`${styles.storys} + mx-[5px]`}>
                            <div className={`${styles.story} + w-[68px] bg-slate-200 h-[68px] rounded-full grid place-items-center`}>
                                <div className={`w-[58px] h-[58px] rounded-full`}>

                                </div>
                            </div>
                        </section> */}
                        {story.map((story: any) => (
                            <Story {...story} />
                        ))}
                    </Slider>


                </div>

                <section className={`${styles.mobile_story} hidden max-lg:flex overflow-x-scroll`}>
                    {story.map((story: any) => (
                        <Story {...story} />
                    ))}
                </section>

                {/* </section> */}

            </section>
        )
    }
}
