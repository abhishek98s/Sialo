import React, { Component } from 'react'
import Story from './Story'
import styles from './stories.module.scss'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const Stories = () => {

//     var settings = {
//         // dots: false,
//         // arrows: false,
//         // infinite: false,
//         // speed: 500,
//         // // slidesToShow: 3,
//         // slidesToScroll: 1
//         // variableWidth: true,
//         // centerPadding: '0px',,

//         dots: true,
//         infinite: true,
//         variableWidth: true,
//         variableHeight: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3
//     };

export default class Stories extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: false,

            // swipeToSlide: true,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 2,
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

        return (
            <section className={`w-[100%] mt-[56px]`}>

                <div className={`max-lg:hidden`}>

                    <Slider {...settings}>


                        <section className={`${styles.storys} + mx-[5px]`}>
                            <div className={`${styles.story} + w-[68px] bg-slate-200 h-[68px] rounded-full grid place-items-center`}>
                                <div className={`w-[58px] h-[58px] rounded-full`}>

                                </div>
                            </div>
                        </section>

                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                    </Slider>


                </div>

                <div className={`${styles.mobile_story} hidden max-lg:flex overflow-x-scroll`}>



                    <section className={`${styles.storys} + mx-[5px]`}>
                        <div className={`${styles.story} + w-[68px] bg-slate-200 h-[68px] rounded-full grid place-items-center`}>
                            <div className={`w-[58px] h-[58px] rounded-full`}>

                            </div>
                        </div>
                    </section>

                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />

                </div>

                {/* </section> */}

            </section>
        )
    }
}
