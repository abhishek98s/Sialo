import React from 'react'
import { Event, Home, Logout, Market, Search } from '../../../../public/SVG'
import styles from './sidebar.module.scss'

const Sidebar = () => {
    return (
        <section className={`${styles.sidebar} + w-[265px] h-[100vh] flex flex-col px-[14px] pb-[24px] pt-[56px] sticky left-0 top-0`}>

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
                    <li className={`flex gap-[16px] px-[15px] py-[10px]`}><Logout /> Logout</li>
                </div>
            </ul>

        </section>
    )
}

export default Sidebar