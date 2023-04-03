import React from 'react'
import styles from './register.module.scss';
import register_illustration from '../../../public/images/register.png'
import Image from 'next/image';

const Register = () => {
    return (
        <section className={`${styles.register} + flex items-center max-w-[100%] justify-between mx-[4%] max-lg:flex-col`}>
            
            <article className={`${styles.slogen} + w-[582px] flex flex-col max-lg:mt-[64px] max-lg:w-[100%] max-lg:text-center`}>
                <h2 className={`text-[50px] font-bold max-lg:block hidden`}>Sialo</h2>
                <h2 className={`${styles.quickSand} + max-w-[100%] text-[60px] leading-[120%] font-bold max-lg:text-[20px] max-lg:font-medium`}>Connect with the World and Share Your Story</h2>
                <Image className={`self-end relative bottom-[60px] max-lg:hidden`} src={register_illustration} alt="illustration" width={355} height={355} />
            </article>


            <article className={`${styles.register_inputs} +  max-w-[32em] min-w-[25em] mt-[6%] px-[24px] pt-[48px] pb-[24px] rounded-[33px] border-[3px]`}>

                <section className={`${styles.headline} + pb-[16px]`}>
                    <h3 className={`heading_Large mb-[16px]`}>Create your Account</h3>
                    <p className={`body_Large`}>Its's quciker than you think</p>
                </section>

                <section className='space-y-[32px]'>
                    <section className={`inputs flex gap-[16px] mt-[32px]`}>
                        <div className={`flex flex-col gap-[8px]`}>
                            <label className={`titleLarge`}>First Name *</label>
                            <input className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} />
                        </div>

                        <div className={`flex flex-col gap-[8px]`}>
                            <label className={`titleLarge`}>Last Name *</label>
                            <input className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} />
                        </div>
                    </section>


                    <section className={`inputs flex gap-[16px]`}>
                        <div className={`flex flex-col gap-[8px]`}>
                            <label className={`titleLarge`}>Phone Number *</label>
                            <input className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} />
                        </div>

                        <div className={`flex flex-col gap-[8px]`}>
                            <label className={`titleLarge`}>Gender *</label>
                            <input className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} />
                        </div>
                    </section>


                    <div className={`flex flex-col gap-[8px]`}>
                        <label className={`titleLarge`}>Email *</label>
                        <input placeholder="Exapmle@gmail.com" className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} />
                    </div>


                    <div className={`flex flex-col gap-[8px]`}>
                        <label className={`titleLarge`}>Password *</label>
                        <input placeholder="Password" className={`rounded-[5px] w-[100%] h-[51px] p-[16px] bg-transparent`} />
                    </div>


                    <button className={`body_LargeBold w-[100%] rounded-[10px] h-[51px] mt-[24px]`}>Submit</button>

                    <p className={`mt-[24px] body_Large text-right`}>Already have an account?<a className={`${styles.login} + body_LargeBold cursor-pointer`}> Login        </a></p>
                </section>
            </article>
        </section>
    )
}

export default Register