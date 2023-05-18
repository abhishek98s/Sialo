import React from 'react'
import Image from 'next/image'

import LayoutSidebar from '@/Components/LayoutSidebar'
import bg from '../../../public/images/bg.jpg'

import styles from './user.module.scss'

const UserPost = () => {
  return (
    <LayoutSidebar>
      <section className={`pt-[60px]`}>

        <figure className='max-w-[1400px] h-[250px] overflow-hidden rounded-t-[10px]'>
          <Image src={bg} className={`w-[100%]`} alt="sialo.vercel.app" width="400" height="400" />
        </figure>

        <section className={`${styles.userInfo} w-[85%] py-[15px] px-[40px] h-[140px] border mx-auto translate-y-[-60px] rounded-[10px]`}>
          <article className='flex w-[100%] justify-between'>

            <section className='space-y-2'>
              <h4 className={`body_LargeBold`}>Brian Jones</h4>
              <p className={`label_Medium grey_light_hover mt-[2px]`}>Developer At Microsoft</p>
            </section>

            <button className={`label_Medium px-[10px] py-[8px] h-[100%] rounded-[5px] max-sm:hidden `}>Add Friend</button>

          </article>
        </section>

      </section>
    </LayoutSidebar>
  )
}

export default UserPost