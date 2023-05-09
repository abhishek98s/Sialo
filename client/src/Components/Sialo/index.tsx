import React from 'react'
import styles from './sialo.module.scss'

const Sialo = () => {
  return (
    <section className={`${styles.sialo_box} + relative z-[9999999] top-0 w-[100%] flex justify-center items-center h-[100vh]`}>

      <h3 className='${styles.logo} + text-[100px] font-bold animate-bounce animate-pulse'>Sialo</h3>
    </section>
  )
}

export default Sialo