import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

function Footer({ theme }) {
  return (
    <footer className='w-full bg-slate-50 dark:bg-gray-900 px-4 sm:px-12 lg:px-24 xl:px-40 py-16 mt-0 transition-colors duration-300 font-medium'>
        
        <div className='flex justify-between lg:items-start max-lg:flex-col gap-12 lg:gap-20 mb-12'>
            <div className='flex-1 space-y-6 text-gray-600 dark:text-gray-400'>
                <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="Logo" className='w-32 sm:w-40 cursor-pointer hover:opacity-90 transition-opacity' />
                <p className='max-w-md text-sm leading-relaxed'>From strategy to execution, we craft digital solutions that move your business forward.</p>

                <ul className='flex flex-wrap gap-6 sm:gap-8 text-sm font-semibold text-gray-800 dark:text-gray-200'>
                    {['Home', 'Services', 'Our Work', 'Contact Us'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase().replace(' ', '-')}`} className='hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group'>
                                {item}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='w-full lg:w-1/3 text-gray-700 dark:text-gray-300'>
                <h3 className='font-bold text-lg text-gray-900 dark:text-white'>Subscribe to our newsletter</h3>
                <p className='text-sm mt-2 mb-6 opacity-80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row gap-3'>
                    <input type="email" placeholder='Enter your email' className='w-full px-4 py-3 text-sm outline-none rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all' required />
                    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className='bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap'>
                        Subscribe
                    </motion.button>
                </form>
            </div>
        </div>

        <hr className='border-gray-200 dark:border-gray-800 my-8'/>

        <div className='flex flex-col-reverse sm:flex-row justify-between items-center gap-6 text-sm text-gray-500 dark:text-gray-400'>
            <p className='text-center sm:text-left'>© {new Date().getFullYear()} Agency.io Sactus - All Rights Reserved.</p>
            <div className='flex items-center gap-5'>
                {[assets.facebook_icon, assets.twitter_icon, assets.instagram_icon, assets.linkedin_icon].map((icon, index) => (
                    <motion.a key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#" className='group'>
                        <img src={icon} alt="Social" className='w-5 h-5 opacity-70 group-hover:opacity-100 dark:invert transition-all duration-300' />
                    </motion.a>
                ))}
            </div>
        </div>
    </footer>
  )
}
export default Footer