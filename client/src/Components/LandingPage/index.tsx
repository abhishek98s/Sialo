import React from 'react'
import { Event, Home, Logout, Market, Market2, Search } from '../../../public/SVG'
import styles from './landingpage.module.scss'
import Sidebar from './Sidebar'
import Feeds from './Feed'
import { Friendlist } from './Friendlist'
import LayoutSidebar from '../LayoutSidebar'

const LandingPage = () => {

  return (
    <main className={`flex gap-[128px] max-w-[1600px] mx-auto justify-between max-md:mx-[2%] `}>

      <LayoutSidebar>
        <Feeds />
        <Friendlist />
      </LayoutSidebar>

    </main>
  )
}

export default LandingPage  