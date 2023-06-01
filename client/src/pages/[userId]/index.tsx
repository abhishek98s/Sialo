import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import LayoutSidebar from '@/Components/LayoutSidebar'
import bg from '../../../public/images/bg.jpg'

import styles from './user.module.scss'
import UserProfile from './UserProfile'
import { Email, Phone, Work } from '../../../public/SVG'
import Post from '@/Components/LandingPage/Feed/Post'
import UserInfo from './UserInfo'
import NewsFeed from '@/Components/LandingPage/Feed/NewsFeed'



export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://sialo-backend.vercel.app/api/user`);
  const users = await res.json();

  const paths = users.users.map((user: any) => ({
    params: { userId: user._id },
  }));

  return {
    paths,
    fallback: false, // false or "blocking"
  };
};


export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await fetch(`https://sialo-backend.vercel.app/api/user/${params.userId}`);  // get the data of the user
  const json = await res.json();
  const userData = json.user

  const resPosts = await fetch(`https://sialo-backend.vercel.app/api/post/${params.userId}`);  // get the posts of the user aqccording to the userId
  const jsonPosts = await resPosts.json();
  const randUserPosts = jsonPosts.data

  return { props: { userData, randUserPosts } };
}


const UserPost = ({ userData, randUserPosts }: any) => {
  console.log(randUserPosts)
  const userPosts = useSelector((state: any) => state.posts.posts);
  const user = useSelector((state: any) => state.login.user)

  const router = useRouter();

  if (!user) {
    router.push('/login')
    return;
  }

  return (
    <LayoutSidebar>
      <section className={`pt-[60px] max-w-[1400px] w-[100%]`}>

        <figure className='z-[-1] w-[100%] h-[250px] overflow-hidden rounded-t-[10px]'>
          <Image src={bg} className={`w-[100%] object-cover object-top`} alt="sialo.vercel.app" width="400" height="400" />
        </figure>

        <UserProfile styles={styles} {...userData} />

        <section className={`w-[85%] mx-auto mt-[24px] flex items-start gap-[24px] max-sm:w-[100%]`}>

          <div className='min-w-[250px] max-md:hidden'><UserInfo styles={styles} {...userData} /></div>

          <section className={`grow`}>
            <Post />

            <article className={`max-w-[600px] min-h-[500px]`}>

              {randUserPosts && randUserPosts.map((data: any, index: number) => (
                <NewsFeed key={index} {...data} />
              ))}
            </article>
          </section>


        </section>

      </section>
    </LayoutSidebar>
  )
}

export default (UserPost);