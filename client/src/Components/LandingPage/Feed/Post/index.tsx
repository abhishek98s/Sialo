import React, { useState } from 'react'
import styles from './post.module.scss'
import Image from 'next/image'
import { Attach_File, Camera, ImageIcon, Location } from '../../../../../public/SVG'

const Post = () => {
  const [imgs, setImg] = useState();



  function file(e: any) {
    let file = e.target.files[0];
    if (!file) {
      return;
    }
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', (e: any) => {
      // console.log(e.target.result);
      setImg(e.target.result)
    });
    reader.readAsDataURL(file);
  }





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



      { imgs && 

      <div className='relative w-[max-content]'>
        <Image src={imgs!} className={`w-[70px] h-[70px] mt-[16px] rounded-[15px] object-cover opacity-70`} width={500} height={500} alt='asd' />
        <span onClick={() => setImg(null!)} className=' absolute cursor-pointer top-[3px] right-[4px] w-[20px] h-[20px] text-center pt-[3px] text-[10px] rounded-full text-white bg-black'>X</span>
      </div>
      }



      <section className={`${styles.bottom} + flex justify-between items-center mt-[16px]`}>

        <article className={`flex gap-[16px] items-center`}>

          <div className={`${styles.svg} + cursor-not-allowed w-[24px] h-[24px]`}>
            <div className='cursor-not-allowed'>
              <Camera />
            </div>
          </div>

          <div className={`${styles.svg} + cursor-pointer w-[24px] h-[24px]`}>
            <label htmlFor='thumbImg' className='cursor-pointer'>
              <ImageIcon />
            </label>
          </div>

          <div className={`${styles.svg} + w-[24px] h-[24px]`}>
            <div className='cursor-not-allowed'>

              <Attach_File />
            </div>
          </div>

          <div className={`${styles.svg} + w-[24px] h-[24px]`}>
            <div className='cursor-not-allowed'>

              <Location />
            </div>
          </div>

        </article>

        <input className={`hidden`} type='file' id='thumbImg' onChange={file} accept=".jpg, .jpeg, .png" />



        <button className={`body_Medium_Bold px-[24px] py-[10px] h-[100%] rounded-[5px] `}>Post</button>
      </section>
    </form>
  )
}

export default Post