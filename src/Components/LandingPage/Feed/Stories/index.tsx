import React from 'react'
import Story from './Story'
import styles from './stories.module.scss'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Stories = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerPadding: '0px',
    };

    return (
        <section className={`mt-[56px w-[53vw] mt-[56px]`}>

            <section className={`w-[100%] flex gap-[16px] mt-[24px] overflow-hidden mx-[-5px]`}>
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
            </section>

        </section>
    )
}

export default Stories