import React from 'react'
import { Event, Home, Logout, Market, Market2, Search } from '../../../public/SVG'
import styles from './landingpage.module.scss'
import Sidebar from './Sidebar'
import Feeds from './Feed'
import { Friendlist } from './Friendlist'

const LandingPage = () => {

  return (
    <main className={`flex gap-[32px] justify-between max-md:mx-[4%] lg:mr-[24px]`}>
      <Sidebar />

      <Feeds />

      <Friendlist />

      <section className={`${styles.mobile_nav} + fixed bottom-[20px] left-[50%] translate-x-[-50%] h-[max-content] w-[250px] rounded-[10px] p-[8px]`}>
        <ul className={`flex justify-evenly items-center`}>
          <li className={`h-[max-content]`}><Home /> </li>
          <li className={`h-[max-content]`}><Market2 /> </li>
          <li className={`h-[max-content]`}><Event /> </li>
        </ul>
      </section>
    </main>
  )
}

export default LandingPage