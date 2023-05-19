import React from 'react'
import { Event, Home, Logout, Market, Market2, Search } from '../../../public/SVG'
import styles from './landingpage.module.scss'
import Sidebar from './Sidebar'
import Feeds from './Feed'
import { Friendlist } from './Friendlist'
import LayoutSidebar from '../LayoutSidebar'

const LandingPage = () => {

  return (
    <main className={`flex max-w-[1600px] w-[100%] mx-auto justify-between pr-[2%]  `}>
      <Sidebar />
      <Feeds />
      <Friendlist />

    </main>
  )
}

export default LandingPage  