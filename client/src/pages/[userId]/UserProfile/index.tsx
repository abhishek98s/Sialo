import React from 'react'
import Image from 'next/image'
import Profile from '../../../../public/images/profile.jpg'
import { Plus } from '../../../../public/SVG'

const UserProfile = ({ styles, ...userData }: any) => {

    return (
        <section className={`${styles.userInfo} z-10 relative w-[85%] pt-[15px] px-[40px] border mx-auto  mt-[-60px] rounded-[10px] max-sm:px-[20px] max-sm:min-w-[100%] `}>
            <article className='flex w-[100%] justify-start flex-wrap gap-[5%]'>

                <section className={`${styles.story} + relative bottom-[40px] w-[80px] bg-slate-200 h-[80px] rounded-full grid place-items-center`}>
                    <div className={`w-[70px] h-[70px] rounded-full grid place-items-center overflow-hidden`}>
                        <Image className={`w-[100%] h-[100%] object-cover`} src={userData.img || Profile} alt="sialo.vercel.app" width={500} height={500} />
                    </div>
                </section>


                <section className='space-y-1'>
                    <h4 className={`body_LargeBold`}>{`${userData.firstName} ${userData.lastName}`}</h4>
                    <p className={`label_Medium grey_light_hover`}>Developer At Microsoft</p>
                </section>

                <button className={`ml-auto label_Medium_Bold px-[10px] py-[8px] h-[100%] rounded-[5px] flex items-center gap-[8px] text-base`}>Add Friend <div className={`w-[18px]`}><Plus/></div></button>

            </article>


            <article className={`${styles.navigation}`}>
                <ul className={`flex gap-[16px] label_Medium`}>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Post</a></li>
                    <li><a href="#">Feeds</a></li>
                </ul>
            </article>
        </section>
    )
}

export default UserProfile