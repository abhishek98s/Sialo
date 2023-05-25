import React from 'react'
import styles from './navbar.module.scss'
import { useRouter } from 'next/router';

import { FacebookMessanger, Plus, User } from '../../../public/SVG'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const Navbar = () => {
    const user = useSelector((state: any) => state.login.user)

    const { asPath, pathname } = useRouter();

    let hideNavbar = asPath == "/register" || asPath == "/login" ? true : false;

    return (
        <nav className={`${styles.nav} ${hideNavbar ? "hidden" : "s"} + h-[60px] flex items-center justify-between px-[4%] fixed w-[100%] top-0 z-50`}>
            <Link href='/' className={`${styles.quickSand} + text-[30px] font-bold leading-[40px]`}>Sialo</Link>

            <section className={`flex gap-[18px]`}>

                <div className={`${styles.svg} + w-[32px] h-[32px] cursor-pointer grid place-items-center rounded-full`}>
                    <div className={`w-[20px] h-[20px]`}><FacebookMessanger /></div>
                </div>

                <div className={`${styles.svg}  w-[32px] h-[32px] cursor-pointer grid place-items-center rounded-full `}>
                    <div className={`overflow-hidden justify-self-center w-[28px] h-[28px] rounded-full`}><Image src={user.img || ""}  width={200} height={200} alt="profile" /></div>
                    <div className='w-[15px] h-[15px] relative translate-x-[10px] translate-y-[-10px] rounded-full bg-black'><Plus /></div>
                </div>
            </section>
        </nav>
    )
}

export default Navbar