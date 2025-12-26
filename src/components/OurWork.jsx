import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

const OurWork = () => {
    const workData = [
        { title: "Mobile App Marketing", description: "We turn bold ideas into powerful digital solutions that connect, engage, and convert.", image: assets.work_mobile_app },
        { title: "Dashboard Management", description: "We help you to execute your plan and deliver results through data visualization.", image: assets.work_dashboard_management },
        { title: "Fitness App Promotion", description: "We help you create a marketing strategy that drives results and user retention.", image: assets.work_fitness_app },
    ]

    return (
        <section id='our-work' className='w-full py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gray-50 dark:bg-gray-900 transition-colors duration-300'>
            <Title title={'Our latest work'} desc={'Check out our latest projects and see how we bring ideas to life.'} />

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full max-w-6xl mx-auto mt-10'
            >
                { workData.map((work, index) => (
                    <motion.div 
                        key={index} 
                        variants={{
                            hidden: { opacity: 0, y: 40, scale: 0.95 },
                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        className='group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden'
                    >
                        <div className='relative w-full h-64 overflow-hidden'>
                            <img src={work.image} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out' alt={work.title} />
                            <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </div>

                        <div className='p-6'>
                            <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>{work.title}</h3>
                            <p className='text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4'>{work.description}</p>
                            <div className='flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                View Project
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <div className='flex justify-center mt-16'>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-8 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300'
                >
                    Show more projects
                </motion.button>
            </div>
        </section>
    )
}
export default OurWork