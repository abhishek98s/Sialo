import React, { useState } from 'react'
import styles from './register.module.scss';
import register_illustration from '../../../public/images/register.png'
import Image from 'next/image';
import Link from 'next/link';
import validator from 'validator';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [error, setError] = useState({
        email: "",
        password: ""
    })

    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        phoneNo: "",
        gender: "",
        email: "",
        password: ""
    })

    const inputHandler = (e: any) => {
        let val = e.target.value;
        setValue((value) => ({ ...value, [e.target.name]: val }))


        switch (e.target.name) {
            case "email":
                if (!val) {
                    setError((errors) => ({ ...errors, email: "Email is required" }))
                } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val))) {
                    setError((errors) => ({ ...errors, email: "Email is invalid" }))
                } else {
                    setError((errors) => ({ ...errors, email: "" }))
                }
                break;

            case "password":

                if (!val) {
                    setError((errors) => ({ ...errors, password: "Password is required" }))
                } else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/.test(val))) {
                    setError((errors) => ({ ...errors, password: "Password must contain 8 character, one uppercase lettter, one special letter, one digits and one lowsercase character" }))
                } else {
                    setError((errors) => ({ ...errors, password: "" }))
                }
            default:
                break;
        }
    }



    const sumbit = () => {
        //erroes empty
        //vale not empty

        let isEmptyValues = Object.values(value).every((value) => value === '');
        let isEmptyErrors = Object.values(error).every((error) => error === '');
        // let isEveryErrorsEmpty = Object.values(error).some((error) => error !== '') 

        if (!isEmptyErrors) {
            toast("Please fill the field correctly", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            return;
        }
        if (isEmptyValues) {
            toast("Please fill out all the field", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }

        toast("Logged In", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })

    }

    return (
        <section className={`${styles.register} + flex items-center max-w-[100%] justify-between mx-[4%] max-lg:flex-col`}>

            <article className={`${styles.slogen} + w-[582px] flex flex-col max-lg:mt-[64px] max-lg:w-[100%] max-lg:text-center`}>
                <h2 className={`text-[50px] font-bold max-lg:block hidden`}>Sialo</h2>
                <h2 className={`${styles.quickSand} + max-w-[100%] text-[57px] leading-[120%] font-bold max-lg:text-[20px] max-lg:font-medium`}>Connect with the World and Share Your Story</h2>
                <Image className={`self-end relative bottom-[60px] max-lg:hidden`} src={register_illustration} alt="illustration" width={355} height={355} />
            </article>


            <article className={`${styles.register_inputs} +  max-w-[32em] min-w-[25em] mt-[6%] px-[24px] pt-[48px] pb-[24px] rounded-[33px] border-[3px]`}>

                <section className={`${styles.headline} + pb-[16px]`}>
                    <h3 className={`heading_Large mb-[16px]`}>Create your Account</h3>
                    <p className={`body_Large`}>Its's quicker than you think</p>
                </section>

                <section className='space-y-[32px]'>
                    <section className={`inputs flex gap-[16px] mt-[32px]`}>
                        <div className={`flex flex-col gap-[8px]`}>
                            <label className={`titleLarge`}>First Name *</label>
                            <input className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} onChange={inputHandler} value={value.firstName} name='firstName' />
                        </div>

                        <div className={`flex flex-col gap-[8px]`}>
                            <label className={`titleLarge`}>Last Name *</label>
                            <input className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} onChange={inputHandler} value={value.lastName} name='lastName' />
                        </div>
                    </section>


                    <section className={`inputs flex gap-[16px]`}>
                        <div className={`flex flex-col gap-[8px]`}>
                            <label className={`titleLarge`}>Phone Number *</label>
                            <input className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} onChange={inputHandler} value={value.phoneNo} name='phoneNo' />
                        </div>

                        <div className={`flex flex-col gap-[8px]`}>
                            <label className={`titleLarge`}>Gender *</label>
                            <input className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} onChange={inputHandler} value={value.gender} name='gender' />
                        </div>
                    </section>




                    <ToastContainer />
                    <div className={`flex flex-col gap-[8px]`}>
                        <label className={`titleLarge`}>Email *</label>
                        <input placeholder="Exapmle@gmail.com" onChange={inputHandler} name='email' value={value.email} className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} />
                        <span className={`${styles.error}`}>{error.email}</span>
                    </div>


                    <div className={`flex flex-col gap-[8px]`}>
                        <label className={`titleLarge`}>Password *</label>
                        <input placeholder="Password" onChange={inputHandler} name='password' value={value.password} className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} />
                        <span className={`${styles.error}`}>{error.password}</span>

                    </div>


                    <button className={`body_LargeBold w-[100%] rounded-[10px] h-[51px] mt-[24px]`} onClick={sumbit}>Submit</button>

                    <p className={`mt-[24px] body_Large text-right`}>Already have an account?

                        <Link href="/login" legacyBehavior><a className={`${styles.login} + body_LargeBold cursor-pointer`}> Register</a></Link></p>
                </section>
            </article>
        </section>
    )
}

export default Register