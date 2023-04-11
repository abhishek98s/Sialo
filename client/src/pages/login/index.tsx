import React, { useEffect, useState } from 'react';
import styles from './login.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import { isEmail } from 'validator';

const Login = () => {
  const [data, setData] = useState({
    img: ''
  });

  // useEffect(() => {

  //   const makeAPICall = async () => {
  //     try {
  //       // const response = await fetch('http://localhost:8080/api/contacts', { mode: 'cors' });
  //       // const data = await response.json();
  //       // setData(data.data )

  //       fetch('http://localhost:8080/api/contacts')
  //         .then((res) => res.json())
  //         .then((data) => {
  //           var base64Flag = 'data:image/jpeg;base64,';
            
  //           var imageStr = arrayBufferToBase64(data.data[1].img.data.data);
  //           setData({ img: base64Flag + imageStr })
  //         })

  //     }
  //     catch (e) {
  //       console.log(e)
  //     }
  //   }
  //   makeAPICall();

  //   console.log(data.img)

  // }, [])



  const [value, setValue] = useState({
    email: "",
    password: ""
  });

  const router = useRouter();

  const inputHandler = (e: any) => {
    let val = e.target.value;
    setValue((value) => ({ ...value, [e.target.name]: val }))
  }


  const submit = () => {
    let isEmptyValues = Object.values(value).every((value) => value === "");

    if (isEmptyValues) {
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
      return
    }

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

  const arrayBufferToBase64 = (buffer: any) => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  return (
    <>
      <section className={`${styles.login_box} + h-[100vh] max-w-[100%] flex justify-center items-center mx-auto px-[4%] max-lg:mx-[4%]`}>
      
        <article className={`flex flex-col gap-[16px] max-lg:text-center max-lg:gap-[16px]`}>
          <h2 className={`${styles.quickSand} + text-[60px] leading-[40px] font-bold max-lg:text-[50px]`}>Sialo</h2>
          <p className={`${styles.quickSand} + ${styles.subHeadLine} text-[32px] leading-[40px] font-medium max-w-[537px] max-lg:text-[28px] max-lg:leading-6`}>Experience a New Way of Connecting</p>
        </article>

        <ToastContainer />


        <article className={`${styles.login} + max-w-[32.25em] min-w-[25em] px-[32px] py-[42px] rounded-[33px] border-[#34353E] border-[3px]`}>
          <div className={`flex flex-col gap-[16px]`}>

            <div className={`flex flex-col gap-[8px]`}>
              <label className={`titleLarge`}>Email *</label>
              <input placeholder="exapmle@gmail.com" className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} name='email' onChange={inputHandler} />
            </div>

            <div className={`flex flex-col gap-[8px]`}>
              <label className={`titleLarge`}>Password *</label>
              <input placeholder="Password" className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} name='password' onChange={inputHandler} />
            </div>

          </div>

          <button className={`body_LargeBold w-[100%] h-[51px] mt-[24px]`} onClick={submit}>Log in</button>

          <p className={`mt-[24px] body_Large text-right`}>Dont have an account?
            <Link href="/register" legacyBehavior><a className={`${styles.register} + body_LargeBold cursor-pointer`}> Register</a></Link>
          </p>
        </article>
      </section>
    </>
  )
}

export default Login
