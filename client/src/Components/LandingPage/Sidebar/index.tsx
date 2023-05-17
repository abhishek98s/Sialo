import React from 'react'
import { Event, Home, Logout, Market, Market2, Search } from '../../../../public/SVG'
import styles from './sidebar.module.scss'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const router = useRouter()
    const ClearSessionStorage = () => {
        sessionStorage.clear();
        router.push('/login')
    }

    return (
        <>
            <section className={`${styles.sidebar} + max-lg:hidden min-w-[300px] w-[300px] h-[100vh] flex flex-col px-[14px] pb-[24px] pt-[56px] sticky left-0 top-0 z-[40]`}>

                <form className={`w-[100%] h-[45px] flex justify-center items-center mt-[24px]`}>
                    <input className={`bg-transparent w-[100%] h-[100%] px-[16px] py-[21px]`} placeholder='Search People' />
                    <button className={`px-[10px] py-[9px] grid place-items-center`}><Search /></button>
                </form>

                <ul className={`mt-[16px] flex flex-col justify-between  grow`}>
                    <div className={`space-y-[8px]`}>
                        <li className={`flex gap-[16px] px-[15px] py-[10px]`}><Home /> Home</li>
                        <li className={`flex gap-[16px] px-[15px] py-[10px]`}><Market /> Marketplace</li>
                        <li className={`flex gap-[16px] px-[15px] py-[10px]`}><Event /> Event</li>
                    </div>

                    <div>
                        <li className={`flex gap-[16px] px-[15px] py-[10px]`} onClick={ClearSessionStorage}><Logout /> Logout</li>
                    </div>
                </ul>

            </section>

            <section className={`${styles.mobile_nav} + fixed bottom-0 left-[50%] translate-x-[-50%] h-[50px] w-[100%]  px-[24px] hidden max-lg:grid`}>
                <ul className={`flex justify-around  items-center`}>
                    <li className={`h-[max-content] cursor-pointer`}><Home /> </li>
                    <li className={`h-[max-content cursor-pointer]`}><Market2 /> </li>
                    <li className={`h-[max-content] cursor-pointer`}><Event /> </li>
                    <li className={`h-[max-content] cursor-pointer`} onClick={ClearSessionStorage}><Logout /> </li>
                </ul>
            </section>
        </>
    )
}

export default Sidebar