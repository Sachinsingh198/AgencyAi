import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

function Hero() {
  return (
    <motion.div 
      id='hero' 
      className='relative flex flex-col items-center justify-center gap-8 py-32 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden min-h-[90vh]'
      initial="hidden"
      animate="visible"
      // Parent container controls the timing of children (stagger)
      variants={{
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { 
                staggerChildren: 0.2, // Delay between each child element appearing
                delayChildren: 0.3    // Initial delay after page load
            } 
        }
      }}
    >

        {/* Background Gradient Blobs (Kept CSS animation for performance) */}
        <div className="absolute top-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-400/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[35rem] h-[35rem] bg-purple-400/20 rounded-full blur-[100px] -z-10"></div>

        {/* Badge Section */}
        <motion.div 
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            whileHover={{ scale: 1.05 }}
            className='inline-flex items-center gap-3 bg-white border border-gray-200 px-2 pr-5 py-1.5 rounded-full shadow-sm cursor-pointer'
        >
            <img className='w-20' src={assets.group_profile} alt="User profiles" />
            <p className='text-xs sm:text-sm font-semibold text-gray-600 tracking-wide uppercase'>
                Trusted by 10k+ people
            </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[1.1] max-w-5xl mx-auto'
        >
            Turning imagination into <br className='hidden sm:block'/>
            <span className='bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x'>
                digital impact
            </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className='text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'
        >
            Creating meaningful connections and turning big ideas into interactive digital experiences that captivate and inspire.
        </motion.p>

        {/* Hero Image Section */}
        <motion.div 
            className='relative'
            // Custom animation for the image (Scale up + Fade in)
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
            <img src={assets.hero_img} alt="Hero Dashboard" className='w-full max-w-6xl rounded-lg shadow-2xl'/>
            
            {/* Background Decor Image */}
            <motion.img 
                animate={{ rotate: [0, 5, 0] }} // Subtle rotation loop
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src={assets.bgImage1} 
                alt="" 
                className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden'
            />
        </motion.div>
        
    </motion.div>
  )
}

export default Hero