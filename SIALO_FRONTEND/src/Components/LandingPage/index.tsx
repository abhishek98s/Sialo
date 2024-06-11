import React from 'react'
import { Event, Home, Logout, Market, Market2, Search } from '../../../public/SVG'
import styles from './landingpage.module.scss'
import Sidebar from './Sidebar'
import Feeds from './Feed'
import { Friendlist } from './Friendlist'
import LayoutSidebar from '../LayoutSidebar'

const LandingPage = () => {

  return (
    <main className={`flex mx-auto justify-between md:pr-[2%]  `}>
      <Sidebar />
      <Feeds />
      <Friendlist />

    </main>
  )
}

export default LandingPage  