import React, { useEffect, useState } from 'react'
import styles from './friendlist.module.scss'
import { Plus } from '../../../../public/SVG'
import Friend from './Friend'

import themeSetting from "../../theme"
import { useSelector } from 'react-redux'

export const Friendlist = () => {
    const mode = useSelector((state: any) => state.theme.mode)
    const theme = themeSetting(mode)

    const color = {
        color: theme.theme.bg,
    };

    const friends = [
        {
            name: "Olive Yew",
            img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Aida Bugg",
            img: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Teri Dactyl",
            img: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Peg Legge",
            img: "https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Allie Grater",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
    ]
    return (
        <section className={`${styles.friend_list} max-w-[300px] h-[max-content] mt-[80px] rounded-[15px] px-[12px] py-[24px] pb-[12px] max-xl:hidden`}>
            <h2 className={`heading_Small text-center`}>Friend List</h2>
            <div className={`${styles.heading} + w-[100%] h-[2px] my-[12px] rounded-[5px]`} />

            <article className={`flex flex-col gap-[10px]`}>

                {friends.map((friend: any, index: number) => (
                    <Friend key={index} styles={styles} {...friend} />
                ))}

            </article>
        </section>
    )
}
