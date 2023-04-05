import React from 'react'
import { Plus } from '../../../../../public/SVG'

const Friend = ({styles}: any) => {
    return (
        <div className={`${styles.friend} + flex gap-[32px] items-center rounded-[10px] mnx-w-[247px] px-[15px] py-[10px]`}>

            <section className={`${styles.story} + w-[36px] bg-slate-200 h-[36px] rounded-full grid place-items-center`}>
                <div className={`w-[34px] h-[34px] rounded-full`}>

                </div>
            </section>

            <div className={`w-[149px] flex items-center justify-between`}>

                <div className={`flex flex-col gap-[4px]`}>
                    <p className={`body_LargeBold`}>Danial Nair</p>
                    <p className={`label_Medium`}>Feeling Ok</p>
                </div>

                <div className={`ml-[8px]`}>
                    <Plus />
                </div>

            </div>

        </div>
    )
}

export default Friend