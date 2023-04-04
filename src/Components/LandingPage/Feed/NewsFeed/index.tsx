import React from 'react'
import styles from "./newsfeed.module.scss"
import Image from 'next/image'
import mainImg from '../../../../../public/images/main bg.jpg'

const NewsFeed = () => {
    return (
        <section className={`${styles.newsFeed_box} + w-[100%] mt-[24px] rounded-[15px] px-[17px] py-[23px]`}>

            <article className={`flex gap-[16px] items-center`}>

                <section className={`${styles.storys} + mx-[5px]`}>
                    <div className={`${styles.story} + w-[40px] bg-slate-200 h-[40px] rounded-full grid place-items-center`}>
                        <div className={`w-[35px] h-[35px] rounded-full`}>

                        </div>
                    </div>
                </section>

                <section>
                    <h4 className={`body_LargeBold`}>Brian Cir</h4>
                    <p className={`body_Medium`}>Brian Cir</p>
                </section>

            </article>

            <p className={`body_Large mt-[16px]`}>Nature's view, a stunning display of color and beauty that can rejuvenate your soul</p>
        
            <Image className={`max-w-[100%] mt-[24px] h-[330px] object-cover`} src={mainImg} alt='post'  />
        </section>
    )
}

export default NewsFeed