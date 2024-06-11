import Head from 'next/head'
import React from 'react'

import LayoutSidebar from '@/Components/LayoutSidebar'
import styles from './setting.module.scss'

const Setting = () => {
  return (
    <>
      <LayoutSidebar>
        <Head>
          <title>Sialo: Setting</title>
        </Head>

        <section className={`pt-[60px] max-w-[1400px] w-[100%] px-[8px]`}>
          <h3 className='heading_Small mb-[24px]'>Security</h3>

          <form className={`${styles.password_box} p-[24px] rounded-[20px] mb-[24px]`}>
            <h4 className={`body_LargeBold mb-[24px]`}>Change Password</h4>

            <section className='space-y-[16px]'>

              <div className='space-y-[8px]'>
                <h6 className='body_Large'>Current Password</h6>
                <input type='text' className='body_Medium' />
              </div>

              <div className='space-y-[8px]'>
                <h6 className='body_Large'>New Password</h6>
                <input type='text' className='body_Medium' />
              </div>

              <div className='space-y-[8px]'>
                <h6 className='body_Large'>Confirm Password</h6>
                <input type='text' className='body_Medium'/>
              </div>

              <div className={`space-x-[16px]`}>
                <button className={`${styles.saveBtn} body_Large p-[20px_8px]`}>Save</button>
                <button className={`${styles.resetBtn} body_Large p-[20px_8px]`}>Reset</button>
              </div>
            </section>

          </form>

          <div className={`${styles.delete_box} p-[24px] rounded-[20px]`}>
            <h4 className={`body_LargeBold mb-[16px]`}>Delete Account</h4>
            <p className='body_Medium mb-[32px]'>Deleting the account will delete all the data from the platform and access to the services. Account Deletion is final. There is no way to restore the account.</p>


            <button className='body_Large'>Delete</button>
          </div>
        </section>
      </LayoutSidebar >
    </>
  )
}

export default Setting