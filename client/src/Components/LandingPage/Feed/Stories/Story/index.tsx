import React from 'react'
import styles from './story.module.scss'
import Image from 'next/image'



const Story = ({ ...story }) => {
    return (
        <section className={`${styles.storys} + mx-[1px] w-[100px] h-[150px] brightness-[90%] flex-shrink-0 snap-start`}>
            <div className={`w-[100%] h-[100%] rounded-[8px] overflow-hidden`}>
                <Image src={story.img} alt="story" width={400} height={500} />
            </div>
        </section>
    )
}

export default Story