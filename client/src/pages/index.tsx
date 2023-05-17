import { useEffect } from 'react'
import Head from "next/head";
import LandingPage from "../Components/LandingPage";
import Navbar from "@/Components/Navbar";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import Sialo from '@/Components/Sialo';
import withAuth from '@/Auth';

const Home = () => {
  const token = useSelector((state: any) => state.login.token);
  const userPosts = useSelector((state: any) => state.posts.posts);
  const router = useRouter();

  // useEffect(() => {
  //   const auth = async () => {
  //     if (!token || !userPosts) {
  //       router.push('/login');
  //     }
  //   };
  //   auth();
  // }, []);

  return (
    <>
      <Head>
        <title>Sialo: Your Personal Social Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {(!token || !userPosts) && <Sialo />}
{/* 
      <Navbar /> */}

      <LandingPage />
    </>
  );
}


export default withAuth(Home);