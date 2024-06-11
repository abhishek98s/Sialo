import React from 'react'
import { Plus } from '../../../../../public/SVG'
import Image from 'next/image'

const Friend = ({ styles, ...friend }: any,) => {
    return (
        <div className={`${styles.friend} + flex gap-[16px] items-center rounded-[10px] max-w-[240px] py-[8px]`}>

            <section className={`${styles.story} + w-[28px] bg-slate-200 h-[28px] rounded-full grid place-items-center`}>
                <div className={`w-[24px] h-[24px] rounded-full overflow-hidden`}>
                    <Image src={friend.img} alt='friend' width={400} height={500} />
                </div>
            </section>

            <div className={`w-[170px] flex items-center justify-between`}>

                <div className={`flex flex-col`}>
                    <p className={`body_Medium`}>{friend.name}</p>
                </div>

                <div className={`ml-[8px] w-[16px]`}>
                    <Plus />
                </div>

            </div>

        </div>
    )
}

export default Friend