import React from 'react'
import Image from 'next/image'

import LayoutSidebar from '@/Components/LayoutSidebar'
import bg from '../../../public/images/bg.jpg'

import styles from './user.module.scss'
import UserProfile from './UserProfile'
import { Email, Phone, Work } from '../../../public/SVG'
import Post from '@/Components/LandingPage/Feed/Post'
import UserInfo from './UserInfo'

const UserPost = () => {
  return (
    <LayoutSidebar>
      <section className={`pt-[60px]`}>

        <figure className='z-[-1] max-w-[1400px] h-[250px] overflow-hidden rounded-t-[10px]'>
          <Image src={bg} className={`w-[100%]`} alt="sialo.vercel.app" width="400" height="400" />
        </figure>

        <UserProfile styles={styles} />

        <section className={`w-[85%] mx-auto mt-[24px] flex items-start gap-[24px]`}>

          <UserInfo styles={styles} />

          <Post />

          
        </section>

      </section>
    </LayoutSidebar>
  )
}

export default UserPost