import React, { useState } from 'react'
import styles from "./newsfeed.module.scss"
import Image from 'next/image'
import mainImg from '../../../../../public/images/main bg.jpg'
import { Comments, Heart } from '../../../../../public/SVG'
import profilePic from '../../../../../public/images/profile.jpg'
import { useSelector } from 'react-redux'
import Comment from './Comment'

const NewsFeed = ({ ...postData }: any): JSX.Element => {
    const user = useSelector((state: any) => state.login.user)

    const [value, setValue] = useState({
        comment: "",
        loading: ""
    })


    const inputHandler = (e: any) => {
        let val = e.target.value;
        setValue((value: any) => ({ ...value, comment: val }))
        console.log(value.comment)
    }


    const submit = (e: any) => {
        e.preventDefault();
        


    }

    return (
        <section key={postData._id || 1} className={`${styles.newsFeed_box} + flex flex-col gap-[16px] w-[100%] rounded-[15px] px-[17px] py-[23px] mt-[24px]`}>

            <article className={`flex gap-[16px] items-center`}>

                <section className={`${styles.storys} + mx-[5px]`}>
                    <div className={`${styles.story} + w-[40px] bg-slate-200 h-[40px] rounded-full grid place-items-center`}>
                        <div className={`w-[35px] h-[35px] rounded-full overflow-hidden`}>
                            <Image src={postData.userPicturePath || profilePic} alt="User Picture" width={100} height={100} />
                        </div>
                    </div>
                </section>

                <section>
                    <h4 className={`body_LargeBold`}>{`${postData.firstName || "Zoro"} ${postData.lastName || ""}`}</h4>
                    <p className={`body_Medium grey_light_hover mt-[2px]`}>Brian Cir</p>
                </section>

            </article>

            <p className={`body_Large `}>{(postData.caption) || 'Nature is beautiful!'}</p>


            <div className='w-  mt-[-5px]'>
                <Image className={`w-[100%] h-[100%] object-center `} src={!(postData.img) ? mainImg : postData.img} alt='post' width={400} height={30} />
            </div>

            <form onSubmit={submit} className={`${styles.like_comment} + flex items-center gap-[16px] h-[37px] `}>
                <div className={`${styles.svg} `}><Heart /></div>

                <article className={`flex gap-[8px] w-[100%]  h-[100%] `}>
                    <input className={`bg-transparent grow max-w-[100%]  pl-[11px] px-[21px] rounded-[10px]`} onChange={inputHandler} placeholder='Have something to say?' />
                    <button type='submit' className={`body_Medium ml-auto px-[24px] py-[10px] h-[100%] rounded-[5px] max-sm:hidden `}>Post</button>
                    <button className={`${styles.svg} + body_Medium ml-auto h-[100%] rounded-[5px] hidden max-sm:block  `}><Comments /></button>
                </article>
            </form>


            <section>
                <h3 className={`body_LargeBold`}>Comments:</h3>

                {postData.comments && postData.comments.map((comment: any) => (
                    <Comment styles={styles} comment={comment} />
                ))}
            </section>

        </section>
    )
}

export default NewsFeed