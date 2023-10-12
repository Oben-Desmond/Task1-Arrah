import React from 'react'
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import TabsComponent from './TabsComponent'
import { motion } from 'framer-motion'
import task1Background from "../images/task1 background.png"

const Registration = () => {
    return (
        <div className='min-h-screen relative overflow-x-hidden'>
            <div className="h-[50vh] relative w-full from-[#7278E5]  bg-gradient-to-r to-arrah-purple-dark rounded-br-[100px]">
                <img className='absolute scale-y-100 -bottom-[80px] md:-bottom-[110px] lg:-bottom-[160px] xl:-bottom-[180px]  scale-x-150 md:scale-x-125 md:scale-y-90 xl:scale-x-125 xl:scale-y-50 ' src={task1Background} alt="" />
            </div>
            <div className="absolute top-0 w-full px-4 md:px-20">
                <nav className='text-white flex justify-between py-10 '>
                    <motion.img animate={{ scale: [1, 1.3, 0.9, 0.9, 1], borderRadius: [5, 5, 1000, 50, 50, 5], rotate: [0, 0, 360, 360, 0, 0], transition: { duration: 3 } }} className='w-10 object-cover' src="https://cdn.logo.com/hotlink-ok/logo-social.png" />
                    <div className='text-2xl '>Create New Account</div>
                    <div className='text-lg'>Contact Us</div>
                </nav>
                <section className='px-0 lg:px-[10vw]'>
                    <TabsComponent />
                </section>

            </div>


        </div>
    )
}

export default Registration