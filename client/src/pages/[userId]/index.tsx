import React from 'react'
import Image from 'next/image'

import LayoutSidebar from '@/Components/LayoutSidebar'
import bg from '../../../public/images/bg.jpg'

import styles from './user.module.scss'
import UserProfile from './UserProfile'
import { Email, Phone, Work } from '../../../public/SVG'
import Post from '@/Components/LandingPage/Feed/Post'
import UserInfo from './UserInfo'
import NewsFeed from '@/Components/LandingPage/Feed/NewsFeed'
import { useSelector } from 'react-redux'

const UserPost = () => {
  const userPosts = useSelector((state: any) => state.posts.posts);

  return (
    <LayoutSidebar>
      <section className={`pt-[60px] max-w-[1400px] w-[100%]`}>

        <figure className='z-[-1] w-[100%] h-[250px] overflow-hidden rounded-t-[10px]'>
          <Image src={bg} className={`w-[100%] object-cover object-top`} alt="sialo.vercel.app" width="400" height="400" />
        </figure>

        <UserProfile styles={styles} />

        <section className={`w-[85%] mx-auto mt-[24px] flex items-start gap-[24px] max-sm:w-[100%]`}>

          <div className='min-w-[250px] max-md:hidden'><UserInfo styles={styles} /></div>

          <section className={`grow`}>
            <Post />

            <article className={`max-w-[600px] min-h-[500px]`}>

              {userPosts && userPosts.map((data: any, index: number) => (
                <NewsFeed key={index} {...data} />
              ))}
            </article>
          </section>


        </section>

      </section>
    </LayoutSidebar>
  )
}

export default UserPost