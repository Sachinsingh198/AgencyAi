import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'
import { motion } from "motion/react"

const Teams = () => {
  return (
    <section id='team' className='w-full py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-gray-900 transition-colors duration-300'>
        <Title title={"Meet the team"} desc={"A passionate team of digital experts dedicated to your brand's success."} />
        
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-10'
        >
            { teamData.map((team, index)=>(
                <motion.div 
                    key={index} 
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className='group relative flex items-center gap-5 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden'
                >
                    <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <div className='relative'>
                        <img src={team.image} className='w-14 h-14 rounded-full object-cover border-2 border-gray-100 dark:border-gray-600 group-hover:border-blue-500 transition-colors duration-300' alt={team.name} />
                    </div>
                    <div className='flex-1 min-w-0'>
                        <h3 className='font-bold text-gray-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate'>{team.name}</h3>
                        <p className='text-sm text-gray-500 dark:text-gray-400 font-medium truncate'>{team.title}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </section>
  )
}
export default Teams