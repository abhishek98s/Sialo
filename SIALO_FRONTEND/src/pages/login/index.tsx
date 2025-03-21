import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import styles from './login.module.scss';
import Loading from '../register/Loading';
import { setLogin } from '@/redux/counter/loginSlice';
import { loggedInAuth } from '@/Auth/loginedUser';

const Login = () => {

  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState({
    email: "",
    password: ""
  });
  const { email, password } = value;

  const router = useRouter();
  const dispatch = useDispatch();

  const inputHandler = (e: any) => {
    let val = e.target.value;
    setValue((value) => ({ ...value, [e.target.name]: val }))
  }

  const submit = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      toast("Please enter the email and password", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      return;
    }

    try {
      setLoading(true)
      const credentials = {
        email: email,
        password: password
      }

      const response = await axios.post('https://sialo-backend.vercel.app/api/login', credentials)

      if (!response.data.token) {
        toast.error("Invalid crediantials.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        return;
      }
      if (response.data.token) {
        setLoading(false)

        dispatch(
          setLogin({
            user: response.data.user,
            token: response.data.token,
          })
        );

        toast("Logged in", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })

        router.push('/');
      }
    } catch (err) {
      toast.error("Invalid crediantials.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setLoading(false)
    }
  }

  return (
    <>
      <section className={`${styles.login_box} + h-[100vh] max-w-[100%] flex justify-center items-center mx-auto px-[4%] max-lg:mx-[4%]`}>
        <article className={`flex flex-col gap-[16px] max-lg:text-center max-lg:gap-[16px]`}>
          <h2 className={`${styles.quickSand} + text-[60px] leading-[40px] font-bold max-lg:text-[50px]`}>Sialo</h2>
          <p className={`${styles.quickSand} + ${styles.subHeadLine} text-[32px] leading-[40px] font-medium max-w-[537px] max-lg:text-[28px] max-lg:leading-6`}>Experience a New Way of Connecting</p>
        </article>

        <ToastContainer />

        <form onSubmit={submit} className={`${styles.login} + max-w-[32.25em] min-w-[25em] px-[20px] py-[40px] pb-[24px] rounded-[15px]`}>
          <div className={`flex flex-col gap-[16px]`}>

            <div className={`flex flex-col gap-[8px]`}>
              <label className={`title_Large`}>Email *</label>
              <input placeholder="Exapmle@gmail.com" className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} name='email' onChange={inputHandler} />
            </div>

            <div className={`flex flex-col gap-[8px]`}>
              <label className={`title_Large`}>Password *</label>
              <input placeholder="Password" className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} name='password' onChange={inputHandler} />
            </div>
          </div>

          <button className={`body_LargeBold w-[100%] h-[51px] mt-[24px]`} type='submit' disabled={loading}>
            {!loading && "Log in"}
            {loading && <div className={'w-[24px] h-[24px] mx-auto'}><Loading /></div>}
          </button>

          <p className={`mt-[24px] body_Large text-right`}>Dont have an account?
            <Link href="/register" legacyBehavior><a className={`${styles.register} + body_LargeBold cursor-pointer`}> Register</a></Link>
          </p>
        </form>
      </section>
    </>
  )
}

export default loggedInAuth(Login)
