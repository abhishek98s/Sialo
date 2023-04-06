import React, { useState } from 'react';
import styles from './login.module.scss';
import Link from 'next/link';


// import { isEmail } from 'validator';

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });


  const inputHandler = (e:any) => {
    let val = e.target.value;


    switch (e.target.name) {
      case "email":
        if(!val){
          setErrors((error) => ({...error, email: "Email is required"}))
        }
        break;
    
      default:
        break;
    }
  }




  return (
    <>
      <section className={`${styles.login_box} + h-[100vh] max-w-[100%] flex justify-center items-center mx-auto px-[4%] max-lg:mx-[4%]`}>

        <article className={`flex flex-col gap-[16px] max-lg:text-center max-lg:gap-[16px]`}>
          <h2 className={`${styles.quickSand} + text-[60px] leading-[40px] font-bold max-lg:text-[50px]`}>Sialo</h2>
          <p className={`${styles.quickSand} + ${styles.subHeadLine} text-[32px] leading-[40px] font-medium max-w-[537px] max-lg:text-[28px] max-lg:leading-6`}>Experience a New Way of Connecting</p>
        </article>



        <article className={`${styles.login} + max-w-[32.25em] min-w-[25em] px-[32px] py-[42px] rounded-[33px] border-[#34353E] border-[3px]`}>
          <div className={`flex flex-col gap-[16px]`}>

            <div className={`flex flex-col gap-[8px]`}>
              <label className={`titleLarge`}>Email *</label>
              <input placeholder="exapmle@gmail.com" className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} />
              <span className={`${styles.error}`}></span>
            </div>

            <div className={`flex flex-col gap-[8px]`}>
              <label className={`titleLarge`}>Password *</label>
              <input placeholder="Password" className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} />
            </div>
         
          </div>

          <button className={`body_LargeBold w-[100%] h-[51px] mt-[24px]`}>Log in</button>

          <p className={`mt-[24px] body_Large text-right`}>Dont have an account?
          <Link href="/register" legacyBehavior><a className={`${styles.register} + body_LargeBold cursor-pointer`}> Register</a></Link>
          </p>
        </article>
      </section>
    </>
  )
}

export default Login
