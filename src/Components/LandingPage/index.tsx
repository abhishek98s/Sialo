import React from 'react'
import { Event, Home, Logout, Market, Search } from '../../../public/SVG'
import styles from './landingpage.module.scss'
import Sidebar from './Sidebar'
import Story from './Story'

const LandingPage = () => {
  return (
    <main className={`flex`}>
      <Sidebar />

      <section className={`mt-[26px] ml-[265px]`}>

        <section className={`w-[100%]  gap-[16px] overflow-scroll`}>
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
          <Story styles={styles} />
        </section>

      </section>

    </main>
  )
}

export default LandingPage