import React from 'react'
import styles from './story.module.scss'
import Image from 'next/image'



const Story = ({ ...story }) => {
    return (
        <section className={`${styles.storys} + mx-[5px] w-[max-content] flex-shrink-0 snap-start`}>

            <div className={`${styles.story} + w-[100px] p-[4px] bg-slate-200 h-[150px] rounded-[8px] grid place-items-center`}>
                <div className={`w-[100%] h-[100%] rounded-[8px] brightness-[90%] overflow-hidden`}>
                    <Image src={story.img} alt="story" width={400} height={500} />
                </div>
            </div>

        </section>
    )
}

export default Story