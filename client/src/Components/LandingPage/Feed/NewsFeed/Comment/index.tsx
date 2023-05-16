import Image from 'next/image'
import React, { useState } from 'react'

const Comment = ({ styles, comment }: any): JSX.Element => {
    return (
        <section className={`p-[8px] mt-[8px]`}>
            <article className={`flex gap-[8px] items-center`}>

                <section className={`${styles.storys} + mx-[5px]`}>
                    <div className={`${styles.story} + w-[34px] bg-slate-200 h-[34px] rounded-full grid place-items-center`}>
                        <div className={`w-[30px] h-[30px] rounded-full overflow-hidden`}>
                            <Image src={comment.userImg} alt="sialo.vercel.app" width={100} height={100} />
                        </div>
                    </div>
                </section>

                <h4 className={`label_Large`}>{comment.firstName} {comment.lastName}</h4>
            </article>

            <article className={` ${styles.comment} + mt-[8px] rounded-[10px] p-[16px]`}>
                <p className={`label_Large`}>{comment.comment}</p>
            </article>
        </section>
    )
}

export default Comment