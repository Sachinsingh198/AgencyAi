import React from 'react'
import { motion } from "motion/react"

const Title = ({ title, desc }) => {
  return (
    <div className='flex flex-col items-center gap-4 mb-16 max-w-2xl mx-auto text-center z-10 relative'>
      
      {/* Decorative Line: Grows from center */}
      <motion.span 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "4rem", opacity: 1 }} // 4rem = w-16
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className='inline-block h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-2'
      ></motion.span>
      
      {/* Main Title: Slides up */}
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight'
      >
        {title}
      </motion.h2>

      {/* Description: Fades in */}
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className='text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed'
      >
        {desc}
      </motion.p>
    </div>
  )
}

export default Title