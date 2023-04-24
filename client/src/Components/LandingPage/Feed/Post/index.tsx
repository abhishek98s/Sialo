import React, { useState } from 'react'
import styles from './post.module.scss'
import Image from 'next/image'
import { Attach_File, Camera, ImageIcon, Location } from '../../../../../public/SVG'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '@/pages/register/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { addPosts } from '@/redux/counter/postSlice';
import axios from 'axios';

const Post = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    caption: "",
    imgs: "",
    thumbnail: "",
    imgFile: "",
    loading: ""
  })

  const { caption, imgs, thumbnail, imgFile, loading } = value;

  function inputHandler(e: any) {
    switch (e.target.name) {
      case "imgFile":
        let file = e.target.files[0];

        //if no file 
        if (!file) {
          return;
        }

        //if there is file
        if (file.type && !file.type.startsWith('image/')) {
          console.log('File is not an image.', file.type, file);
          return;
        }

        // setting yhr file
        setValue((value) => ({ ...value, [e.target.name]: file }));

        // setting the thubnail img
        const reader = new FileReader();

        reader.addEventListener('load', (e: any) => {
          setValue((value) => ({ ...value, thumbnail: e.target.result }));
        });

        reader.readAsDataURL(file);
        break;

      case "caption":
        let val = e.target.value;
        setValue((value) => ({ ...value, [e.target.name]: val }))
        break;

      default:
        break;
    }

  }


  // const captionHandler = (e: any) => {
  //   let val = e.target.value;
  //   setValue((value) => ({ ...value, [e.target.name]: val }))
  // }



  const submit = async (e: any) => {
    e.preventDefault();

    if (!caption || !imgFile) {
      toast("Please add the caption and image to post", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      return
    }

    setValue((value: any) => ({ ...value, loading: true }));
    // setLoading(true);
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("image", imgFile!)



    try {
      const response = await fetch("https://sialo-backend.vercel.app/api/post", {
        method: "POST",
        body: formData,
      });
      const posts = await response.json();


      if (response) {
        setValue((value: any) => ({ ...value, loading: false }));
        dispatch(addPosts({ post: posts.data }));

        toast("Posted successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })

        setValue((value: any) => ({ ...value, thumbnail: null }));
        setValue((value) => ({ ...value, caption: "" }))

        return;
      } else {
        toast("Posted failed", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (

    <form onSubmit={submit} className={`${styles.post_box} +  mt-[24px] rounded-[10px] p-[24px]`}>

      <article className={`flex gap-[16px]`}>

        <section className={`${styles.storys}`}>
          <div className={`${styles.story} + w-[40px] bg-slate-200 h-[40px] rounded-full grid place-items-center`}>
            <div className={`w-[35px] h-[35px] rounded-full`}>

            </div>
          </div>
        </section>

        <input className={` ${styles.input} + grow rounded-[15px] px-[16px] py-[21px] bg-transparent h-[46px]`} placeholder='Mind writing something' name='caption' onChange={inputHandler} />

      </article>



      {thumbnail &&

        <div className='relative w-[max-content]'>
          <Image src={thumbnail!} className={`w-[70px] h-[70px] mt-[16px] rounded-[15px] object-cover opacity-70`} width={500} height={500} alt='asd' />
          <span
            onClick={() => setValue((value: any) => ({ ...value, thumbnail: null }))}
            className=' absolute cursor-pointer top-[3px] right-[4px] w-[20px] h-[20px] text-center pt-[3px] text-[10px] rounded-full text-white bg-black'>X
          </span>
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

        <input className={`hidden`} type='file' id='thumbImg' onChange={inputHandler} name="imgFile" accept=".jpg, .jpeg, .png" />



        <button type='submit' className={`body_Medium_Bold px-[24px] py-[10px] h-[42px] rounded-[5px] `}>
          {!loading && "Post"}
          {loading &&

            <div className='flex items-center'>
              <Loading />
            </div>
          }
        </button>
      </section>

      <ToastContainer />
    </form>
  )
}

export default Post