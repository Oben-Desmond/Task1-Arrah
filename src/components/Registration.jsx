import React from 'react'
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import TabsComponent from './TabsComponent'
import { motion } from 'framer-motion'
import task1Background from "../images/task1 background.png"

const Registration = () => {
    return (
        <div className='min-h-screen relative overflow-x-hidden '>
            <div className="h-[50vh] relative w-full from-[#7278E5]  bg-gradient-to-r to-arrah-purple-dark rotate-[0deg]  2xl:rounded-br-[180px]">
                <img className='absolute rotate-2 md:rotate-0 scale-y-100 -bottom-[80px] md:-bottom-[110px] lg:-bottom-[160px] xl:-bottom-[200px]  scale-x-10 md:scale-x-125 md:scale-y-90 xl:scale-x-[1.2] xl:scale-y-75 ' src={task1Background} alt="" />
            </div>
            <div className="absolute top-0 w-full px-4 md:px-20 ">
                <nav className='text-white flex justify-between py-10 '>
                    <motion.img animate={{ scale: [1, 1.3, 0.9, 0.9, 1], borderRadius: [5, 5, 1000, 50, 50, 5], rotate: [0, 0, 360, 360, 0, 0], transition: { duration: 3 } }} className='w-10 object-cover' src="https://cdn.logo.com/hotlink-ok/logo-social.png" />
                    <div className='text-2xl '>Create New Account</div>
                    <div className='text-lg'>Contact Us</div>
                </nav>
                <section className='px-0 lg:px-[10vw] mb-32'>
                    <TabsComponent />
                </section>
            </div>


        </div>
    )
}

export default Registration