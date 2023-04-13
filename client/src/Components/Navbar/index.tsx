import React from 'react'
import styles from './navbar.module.scss'
import { FacebookMessanger, User } from '../../../public/SVG'

const Navbar = () => {
    return (
        <nav className={`${styles.nav} + h-[60px] flex items-center justify-between px-[4%] fixed w-[100%] top-0 z-50`}>
            <h1 className={`${styles.quickSand} + text-[30px] font-bold leading-[40px]`}>Sialo</h1>

            <section className={`flex gap-[18px]`}>


                <div className={`${styles.svg} + w-[32px] h-[32px] cursor-pointer grid place-items-center rounded-full`}>
                    <User />
                </div>

                <div className={`${styles.svg} + w-[32px] h-[32px] cursor-pointer grid place-items-center rounded-full`}>
                    <FacebookMessanger />
                </div>
            </section>
        </nav>
    )
}

export default Navbar