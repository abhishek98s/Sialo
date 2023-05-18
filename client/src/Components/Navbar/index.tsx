import React from 'react'
import styles from './navbar.module.scss'
import { useRouter } from 'next/router';

import { FacebookMessanger, User } from '../../../public/SVG'

const Navbar = () => {

    const { asPath, pathname } = useRouter();

    let hideNavbar = asPath == "/register" || asPath == "/login" ? true : false;

    return (
        <nav className={`${styles.nav} ${hideNavbar ? "hidden" : "s"} + h-[60px] flex items-center justify-between px-[4%] fixed w-[100%] top-0 z-50`}>
            <h1 className={`${styles.quickSand} + text-[30px] font-bold leading-[40px]`}>Sialo</h1>

            <section className={`flex gap-[18px]`}>


                <div className={`${styles.svg} + w-[32px] h-[32px] cursor-pointer grid place-items-center rounded-full`}>
                    <div className={`w-[20px] h-[20px]`}><User /></div>
                </div>

                <div className={`${styles.svg} + w-[32px] h-[32px] cursor-pointer grid place-items-center rounded-full`}>
                    <div className={`w-[20px] h-[20px]`}><FacebookMessanger /></div>
                </div>
            </section>
        </nav>
    )
}

export default Navbar