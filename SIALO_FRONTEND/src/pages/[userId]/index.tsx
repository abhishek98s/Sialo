import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Head from 'next/head'

import LayoutSidebar from '@/Components/LayoutSidebar'
import bg from '../../../public/images/bg.jpg'

import styles from './user.module.scss'
import UserProfile from './UserProfile'
import Post from '@/Components/LandingPage/Feed/Post'
import UserInfo from './UserInfo'
import NewsFeed from '@/Components/LandingPage/Feed/NewsFeed'
import { fetchData } from '@/service/fetch'

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await fetchData(`https://sialo-backend.vercel.app/api/user`);

  const paths = users.data.map((user: any) => ({
    params: { userId: user._id },
  }));

  return {
    paths,
    fallback: false, // false or "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const userData = await fetchData('https://sialo-backend.vercel.app/api/user', params.userId)
  const randUserPosts = await fetchData('https://sialo-backend.vercel.app/api/post', params.userId)

  return { props: { userData, randUserPosts, id: params.userId } };
}

const UserPost = ({ userData, randUserPosts, id }: any) => {
  const user = useSelector((state: any) => state.login.user)
  const router = useRouter();

  const showPost = user._id === id ? true : false;

  if (!user) {
    router.push('/login')
    return;
  }

  return (
    <LayoutSidebar>
      <Head>
        <title>{userData.firstName} {userData.lastName}</title>
      </Head>
      <section className={`pt-[60px] max-w-[1400px] w-[100%]`}>

        <figure className='z-[-1] w-[100%] h-[250px] overflow-hidden rounded-t-[10px]'>
          <Image src={bg} className={`w-[100%] object-cover object-top`} alt="sialo.vercel.app" width="400" height="400" />
        </figure>

        <div className='max-w-[1000px] mx-auto'>

          <UserProfile styles={styles} {...userData} />

          <section className={`w-[85%] mx-auto mt-[24px] flex items-start gap-[24px] max-sm:w-[100%]`}>

            <div className='min-w-[250px] max-md:hidden'><UserInfo styles={styles} {...userData} /></div>

            <section className={`grow`}>
              {showPost && <Post />}

              <article className={`max-w-[600px] min-h-[500px] `}>
                {randUserPosts && randUserPosts.map((data: any, index: number) => (
                  <NewsFeed key={index} {...data} />
                ))}
              </article>
            </section>
          </section>
        </div>
      </section>
    </LayoutSidebar >
  )
}

export default (UserPost);