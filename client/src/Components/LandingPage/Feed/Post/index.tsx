import React from 'react'
import styles from './post.module.scss'
import { Attach_File, Camera, Image, Location } from '../../../../../public/SVG'

const Post = () => {
  return (

    <form className={`${styles.post_box} +  mt-[24px] rounded-[10px] p-[24px]`}>

      <article className={`flex gap-[16px]`}>

        <section className={`${styles.storys}`}>
          <div className={`${styles.story} + w-[40px] bg-slate-200 h-[40px] rounded-full grid place-items-center`}>
            <div className={`w-[35px] h-[35px] rounded-full`}>

            </div>
          </div>
        </section>

        <input className={` ${styles.input} + grow rounded-[15px] px-[16px] py-[21px] bg-transparent h-[46px]`} placeholder='Mind writing something' />

      </article>


      <section className={`${styles.bottom} + flex justify-between items-center mt-[16px]`}>

        <article className={`flex gap-[16px] items-center`}>

          <div className={`${styles.svg} + w-[24px] h-[24px]`}>
            <Camera />
          </div>

          <div className={`${styles.svg} + w-[24px] h-[24px]`}>
            <Image />
          </div>

          <div className={`${styles.svg} + w-[24px] h-[24px]`}>
            <Attach_File />
          </div>

          <div className={`${styles.svg} + w-[24px] h-[24px]`}>
            <Location />
          </div>

        </article>



        <button className={`body_Medium_Bold px-[24px] py-[10px] h-[100%] rounded-[5px] `}>Post</button>
      </section>
    </form>
  )
}

export default Post