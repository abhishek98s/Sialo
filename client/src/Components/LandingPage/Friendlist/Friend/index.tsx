import React from 'react'
import { Plus } from '../../../../../public/SVG'
import Image from 'next/image'

const Friend = ({ styles, ...friend }: any,) => {
    return (
        <div className={`${styles.friend} + flex gap-[16px] items-center rounded-[10px] mnx-w-[240px]  px-[12px] py-[4px]`}>

            <section className={`${styles.story} + w-[36px] bg-slate-200 h-[36px] rounded-full grid place-items-center`}>
                <div className={`w-[34px] h-[34px] rounded-full overflow-hidden`}>
                    <Image src={friend.img} alt='friend' width={400} height={500} />
                </div>
            </section>

            <div className={`w-[170px] flex items-center justify-between`}>

                <div className={`flex flex-col`}>
                    <p className={`body_Medium`}>{friend.name}</p>
                </div>

                <div className={`ml-[8px]`}>
                    <Plus />
                </div>

            </div>

        </div>
    )
}

export default Friend