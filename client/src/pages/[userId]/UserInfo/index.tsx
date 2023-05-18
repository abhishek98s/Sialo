import React from 'react'
import { Email, Phone, Work } from '../../../../public/SVG'

const UserInfo = ({ styles }: any) => {
    return (
        <>
            <section className={`${styles.userInfoFeed} p-[24px] w-[30%]`}>
                <article className={`${styles.Info} rounded-[10px]`}>
                    <span className={`body_LargeBold`}>Info</span>

                    <div className={`p-[10px] rounded-[10px] mt-[16px]`}>
                        <ul className={`space-y-[16px] label_Medium`}>
                            <li className={`flex gap-[10px] items-center`}><div className={`w-[22px] h-[22px]`}><Phone /></div> +23 696548962</li>
                            <li className={`flex gap-[10px] items-center`}><div className={`w-[22px] h-[22px]`}><Work /></div> Frontend Developer</li>
                            <li className={`flex gap-[10px] items-center`}><div className={`w-[22px] h-[22px]`}><Email /></div> brianjones@gmail.com</li>
                        </ul>
                    </div>
                </article>

                <article className={`${styles.Info} mt-[34px] rounded-[10px]`}>
                    <span className={`body_LargeBold`}>Friend List</span>

                    <div className={`p-[10px] rounded-[10px] mt-[16px]`}>
                        <ul className={`space-y-[16px] label_Medium`}>
                            <li className={`flex gap-[10px] items-center`}> <div className={`w-[22px] h-[22px]`}><Phone /></div> +23 696548962</li>
                            <li className={`flex gap-[10px] items-center`}> <div className={`w-[22px] h-[22px]`}><Work /></div> Frontend Developer</li>
                            <li className={`flex gap-[10px] items-center`}> <div className={`w-[22px] h-[22px]`}><Email /></div> brianjones@gmail.com</li>
                        </ul>
                    </div>
                </article>
            </section>
        </>
    )
}

export default UserInfo