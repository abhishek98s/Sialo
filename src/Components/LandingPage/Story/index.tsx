import React from 'react'

const Story = ({ styles }: any) => {
    return (
        <section className={`${styles.storys}`}>

            <div className={`${styles.story} + w-[68px] bg-slate-200 h-[68px] rounded-full grid place-items-center`}>
                <div className={`w-[60px] h-[60px] rounded-full`}>

                </div>
            </div>

        </section>
    )
}

export default Story