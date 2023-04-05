import React from 'react'
import styles from './friendlist.module.scss'
import { Plus } from '../../../../public/SVG'
import Friend from './Friend'

export const Friendlist = () => {
    return (
        <section className={`${styles.friend_list} max-w-[280px] h-[max-content] mt-[80px] rounded-[15px] px-[14px] pt-[32px] pb-[16px]`}>
            <h2 className={`heading_Small mb-[12.5px] text-center`}>Friend List</h2>
            <div className={`${styles.heading} + w-[100%] h-[4px] rounded-[5px]`} />

            <article className={`mt-[16px] flex flex-col gap-[10px]`}>

                <Friend styles={styles}/>
                <Friend styles={styles}/>
                <Friend styles={styles}/>

            </article>
        </section>
    )
}
