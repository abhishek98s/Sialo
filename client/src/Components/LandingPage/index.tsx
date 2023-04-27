import React from 'react'
import { Event, Home, Logout, Market, Market2, Search } from '../../../public/SVG'
import styles from './landingpage.module.scss'
import Sidebar from './Sidebar'
import Feeds from './Feed'
import { Friendlist } from './Friendlist'

const LandingPage = () => {

  return (
    <main className={`flex gap-[32px] justify-between max-md:mx-[2%] lg:mr-[24px]`}>
      <Sidebar />

      <Feeds />

      <Friendlist />

      <section className={`${styles.mobile_nav} + fixed bottom-0 left-[50%] translate-x-[-50%] h-[50px] w-[100%]  px-[24px] hidden max-lg:grid`}>
        <ul className={`flex justify-around  items-center`}>
          <li className={`h-[max-content] cursor-pointer`}><Home /> </li>
          <li className={`h-[max-content cursor-pointer]`}><Market2 /> </li>
          <li className={`h-[max-content] cursor-pointer`}><Event /> </li>
          <li className={`h-[max-content] cursor-pointer`}><Logout /> </li>
        </ul>
      </section>
    </main>
  )
}

export default LandingPage