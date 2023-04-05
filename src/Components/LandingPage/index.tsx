import React from 'react'
import { Event, Home, Logout, Market, Search } from '../../../public/SVG'
import styles from './landingpage.module.scss'
import Sidebar from './Sidebar'
import Feeds from './Feed'
import { Friendlist } from './Friendlist'

const LandingPage = () => {
  
  return (
    <main className={`flex gap-[32px]`}>
      <Sidebar />

      <Feeds />

      <Friendlist />
    </main>
  )
}

export default LandingPage