import React from 'react'
import { useRouter } from 'next/router'

import { Event, Home, Logout, Market, Market2, Search } from '../../../../public/SVG'
import styles from './sidebar.module.scss'
import { logOut } from '@/redux/counter/loginSlice'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

const Sidebar = () => {
    const dispatch = useDispatch();
    const router = useRouter()

    const ClearSessionStorage = () => {
        dispatch(logOut());
        router.push('/login')
    }

    const { asPath, pathname } = useRouter();

    let hideNavbar = asPath == "/register" || asPath == "/login" ? true : false;

    return (
        <>
            <section className={`${styles.sidebar} ${hideNavbar ? "hidden" : "s"} + max-lg:hidden min-w-[250px] w-[250px] h-[100vh] flex flex-col px-[12px] pt-[56px] sticky left-0 top-0 z-[40]`}>
                <form className={`w-[100%] h-[40px] flex justify-center items-center mt-[28px]`}>
                    <input className={`bg-transparent w-[100%] h-[100%] px-[16px] py-[px]`} placeholder='Search People' />
                    <button className={`px-[10px] py-[px] h-[100%] grid place-items-center`}><div className={`w-[20px] h-[20px]`}><Search /></div></button>
                </form>

                <ul className={`mt-[20px] flex flex-col body_Medium justify-between grow`}>
                    <div className={`space-y-[8px] `}>
                        <Link href='/'><li className={`flex items-center gap-[16px] px-[15px] py-[8px]`}><div className={`w-[24px] h-[24px]`}><Home /></div> Home</li></Link>
                        <li className={`flex items-center gap-[16px] px-[15px] py-[8px]`}><div className={`w-[24px] h-[24px]`}><Market /></div> Marketplace</li>
                        <li className={`flex items-center gap-[16px] px-[15px] py-[8px]`}><div className={`w-[24px] h-[24px]`}><Event /></div> Event</li>
                    </div>

                    <div>
                        <li className={`flex items-center gap-[16px] px-[15px] py-[10px]`} onClick={ClearSessionStorage}><div className={`w-[24px] h-[24px]`}><Logout /></div> Logout</li>
                    </div>
                </ul >
            </section >

            <section className={`${styles.mobile_nav} + fixed bottom-0 left-[50%] translate-x-[-50%] h-[50px] w-[100%]  px-[24px] hidden max-lg:grid`}>
                <ul className={`flex justify-around  items-center`}>
                    <li className={`h-[24px] w-[24px] cursor-pointer`}><Home /> </li>
                    <li className={`h-[24px] w-[24px] cursor-pointer]`}><Market2 /> </li>
                    <li className={`h-[24px] w-[24px] cursor-pointer`}><Event /> </li>
                    <li className={`h-[24px] w-[24px] cursor-pointer`} onClick={ClearSessionStorage}><Logout /> </li>
                </ul>
            </section>
        </>
    )
}

export default Sidebar