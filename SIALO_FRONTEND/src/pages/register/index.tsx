import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './register.module.scss';
import register_illustration from '../../../public/images/register.png'
import { AddImage, Plus, User } from '../../../public/SVG';
import Loading from './Loading';
import { loggedInAuth } from '@/Auth/loginedUser';

const Register = () => {
    const [imgs, setImg] = useState();
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

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

    const { firstName, lastName, phoneNo, gender, email, password } = value;

    const router = useRouter();

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
                break;

            case "image":
                setFile(e.target.files[0])

                let file = e.target.files[0];
                if (!file) {
                    return;
                }
                if (file.type && !file.type.startsWith('image/')) {
                    console.log('File is not an image.', file.type, file);
                    return;
                }

                const reader = new FileReader();
                reader.addEventListener('load', (e: any) => {
                    // console.log(e.target.result);
                    setImg(e.target.result)
                });
                reader.readAsDataURL(file);

            default:
                break;
        }
    }

    const submit = async (e: any) => {
        e.preventDefault();
        let isEmptyValues = Object.values(value).every((value) => value === '');
        let isEmptyErrors = Object.values(error).every((error) => error === '');

        if (!isEmptyErrors) {
            toast("Please fill the field correctly", {
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
        if (isEmptyValues) {
            toast("Please fill out all the field", {
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

        if (isEmptyErrors && !isEmptyValues) {
            setLoading(true);
            const formData = new FormData();
            formData.append("firstName", firstName)
            formData.append("lastName", lastName!)
            formData.append("phoneNo", phoneNo!)
            formData.append("gender", gender!)
            formData.append("email", email!)
            formData.append("password", password!)

            formData.append("image", file!)

            try {
                const response = await axios({
                    method: "post",
                    url: "https://sialo-backend.vercel.app/api/register",
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                });

                if (response) {
                    setLoading(false);
                }
                router.push('/login');

                toast("Registered", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <form onSubmit={submit} className={`${styles.register} + max-w-[1300px] mx-auto flex items-center h-[max-content] justify-between max-lg:flex-col my-[64px]`}>

            <article className={`${styles.slogen} +  w-[582px] flex flex-col max-lg:mt-[64px] max-lg:w-[100%] max-lg:text-center`}>
                <h2 className={`text-[50px] font-bold max-lg:block hidden`}>Sialo</h2>
                <h2 className={`${styles.quickSand} + max-w-[100%] text-[57px] leading-[120%] font-bold max-lg:text-[20px] max-lg:font-medium`}>Connect with the World and Share Your Story</h2>
                <Image className={`self-end relative bottom-[60px] max-lg:hidden`} src={register_illustration} alt="illustration" width={355} height={355} />
            </article>

            <article className={`${styles.register_inputs} + relative self-center sm:mt-[80px]  max-w-[420px] mt-[6%] px-[24px] pt-[80px] pb-[24px] rounded-[33px] border-[3px]`}>

                <section className={`${styles.headline} + pb-[16px]`}>
                    <h3 className={`heading_Large mb-[16px]`}>Create your Account</h3>
                    <p className={`body_Large`}>Its's quicker than you think</p>
                </section>

                <section className='space-y-[16px]'>
                    <section className={`inputs flex gap-[16px] mt-[32px]`}>
                        <div className={`flex flex-col gap-[8px]`}>
                            <label className={`label_Large`}>First Name *</label>
                            <input className={`rounded-[5px] w-[100%] h-[44px] p-[16px] bg-transparent`} onChange={inputHandler} value={value.firstName} name='firstName' />
                        </div>

                        <div className={`flex flex-col gap-[8px]`}>
                            <label className={`label_Large`}>Last Name *</label>
                            <input className={`rounded-[5px] w-[100%] h-[44px] p-[16px] bg-transparent`} onChange={inputHandler} value={value.lastName} name='lastName' />
                        </div>
                    </section>

                    <section className={`inputs flex gap-[16px]`}>
                        <div className={`flex flex-col gap-[8px]`}>
                            <label className={`label_Large`}>Phone Number *</label>
                            <input className={`rounded-[5px] w-[100%] h-[44px] p-[16px] bg-transparent`} onChange={inputHandler} value={value.phoneNo} name='phoneNo' />
                        </div>

                        <div className={`flex flex-col gap-[8px]`}>
                            <label className={`label_Large`}>Gender *</label>
                            <input className={`rounded-[5px] w-[100%] h-[44px] p-[16px] bg-transparent`} onChange={inputHandler} value={value.gender} name='gender' />
                        </div>
                    </section>

                    <div className={`hidden`}><ToastContainer /></div>
                    <div className={`flex flex-col gap-[8px]`}>
                        <label className={`label_Large`}>Email *</label>
                        <input placeholder="Exapmle@gmail.com" onChange={inputHandler} name='email' value={value.email} className={`rounded-[5px] w-[100%] h-[44px] p-[16px] bg-transparent`} />
                        <span className={`${styles.error}`}>{error.email}</span>
                    </div>

                    <div className={`flex flex-col gap-[8px]`}>
                        <label className={`label_Large`}>Password *</label>
                        <input placeholder="Password" onChange={inputHandler} name='password' value={value.password} className={`rounded-[5px] w-[100%] h-[44px] p-[16px] bg-transparent`} />
                        <span className={`${styles.error}`}>{error.password}</span>

                    </div>

                    {!imgs && <div className={`flex flex-col gap-[8px]`}>
                        <label className={`label_Large`}>Select Photo</label>
                        <input onChange={inputHandler} name='image' id='chooseImg' accept=".jpg, .jpeg, .png" className='hidden' type='file' />
                        <label htmlFor='chooseImg' className={`${styles.label} + cursor-pointer flex justify-center items-center gap-[10px] rounded-[5px] w-[100%]  p-[16px] py-[40px] bg-transparent`} >
                            <div className='w-[48px]'><AddImage /></div>
                            <p className={`body_LargeBold`}>Add Image</p>
                        </label>

                    </div>}

                    <button className={`body_LargeBold w-[100%] rounded-[10px] h-[44px] mt-[24px]`} type='submit'>
                        {!loading && "Submit"}
                        {loading && <div className={'w-[24px] h-[24px] mx-auto'}><Loading /></div>}
                    </button>

                    <p className={`mt-[24px] body_Large text-right`}>Already have an account?

                        <Link href="/login" legacyBehavior><a className={`${styles.login} + body_LargeBold cursor-pointer`}> Login</a></Link></p>
                </section>

                <section className={`${styles.storys} + absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]`}>
                    <div className={`${styles.story} + relative w-[126px] h-[126px] rounded-full grid place-items-center`}>
                        <div className={`w-[115px] h-[115px] rounded-full  grid place-items-center`}>
                            {imgs && <Image src={imgs!} alt='profile' width={400} height={400} className='object-cover rounded-full w-[100%] h-[100%]' />}
                            <figure className={`w-[48px]`}>{!imgs && <User />}</figure>
                        </div>

                        {imgs && <span onClick={() => setImg(null!)} className=' absolute cursor-pointer bottom-[0px] right-[0px] w-[30px] h-[30px] text-center pt-[3px] text-[15px] rounded-full text-white bg-[#6E3CBC]'>x</span>}
                    </div>
                </section>
            </article>
        </form>
    )
}

export default loggedInAuth(Register)