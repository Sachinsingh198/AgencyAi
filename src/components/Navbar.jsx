import React, { useState, useEffect } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion, AnimatePresence } from "motion/react"

const Navbar = ({ theme, setTheme }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [sidebarOpen]);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className='w-full fixed top-0 right-0 z-50 flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 backdrop-blur-lg bg-white/80 dark:bg-gray-900/90 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300'
    >

      {/* Logo with Scale Animation */}
      <motion.img 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        src={theme === 'dark' ? assets.logo_dark : assets.logo} 
        className='w-28 sm:w-36 cursor-pointer hover:opacity-90 transition-opacity' 
        alt='Logo' 
      />

      {/* Navigation Links Container */}
      {/* Note: Mixing tailwind classes for mobile logic with Motion requires care. 
          We keep the CSS transition for the width/layout, but animate content inside. */}
      <div className={`flex items-center gap-6 lg:gap-8 font-medium transition-all duration-500 ease-in-out
          ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-64 max-sm:px-8'} 
          text-gray-600 dark:text-gray-300 sm:text-base
          max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:right-0 max-sm:z-50 
          max-sm:h-screen max-sm:flex-col max-sm:justify-center max-sm:items-start
          max-sm:bg-white dark:max-sm:bg-gray-900 max-sm:shadow-2xl`}
      >
        
        {/* Close Icon (Mobile Only) */}
        <img 
          src={theme === 'dark' ? assets.close_icon : assets.close_icon} 
          alt='Close' 
          className={`w-6 absolute right-6 top-6 cursor-pointer sm:hidden ${theme === 'dark' ? 'invert' : ''}`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Menu Items */}
        {['Home', 'Services', 'Our Work', 'Contact Us'].map((item, index) => (
           <motion.a 
             key={item}
             // Staggered animation for Mobile Only (Desktop shows immediately)
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.1 * index, duration: 0.3 }}
             
             onClick={() => setSidebarOpen(false)} 
             href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`} 
             className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group'
           >
             {item}
             {/* Desktop Underline Effect */}
             <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full hidden sm:block'></span>
           </motion.a>
        ))}

      </div>

      {/* Right Side Actions */}
      <div className='flex items-center gap-3 sm:gap-4'>
        
        {/* Theme Toggle with Rotation on Click */}
        <motion.div whileTap={{ rotate: 180, scale: 0.9 }}>
            <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        </motion.div>

        {/* Hamburger Menu (Mobile Only) */}
        <button className='sm:hidden p-2' onClick={() => setSidebarOpen(true)}>
            <img 
              src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} 
              alt="Menu" 
              className='w-7' 
            />
        </button>

        {/* Connect Button (Desktop Only) */}
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact-us" 
          className='hidden lg:flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 dark:bg-white dark:text-black'
        >
            Connect 
            <img 
              src={assets.arrow_icon} 
              className='w-3 invert dark:invert-0' 
              alt=''
            />
        </motion.a>
      </div>

    </motion.nav>
  )
}

export default Navbar