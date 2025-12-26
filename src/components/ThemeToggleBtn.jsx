import React, { useEffect } from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const ThemeToggleBtn = ({theme, setTheme}) => {

    useEffect(()=>{
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
        setTheme(theme || (prefersDarkMode ? 'dark':'light'));
    },[])

    useEffect(()=>{
        if(theme==='dark'){
            document.documentElement.classList.add('dark');
        }
        else{
          document.documentElement.classList.remove('dark');  
        }
        localStorage.setItem('theme', theme);
    },[theme])

  return (
    <motion.button
        whileTap={{ rotate: 180, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
        {theme === 'dark' ? (
            <img src={assets.sun_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="Light Mode" />
        ): (
            <img src={assets.moon_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="Dark Mode" />
        )}
    </motion.button>
  )
}

export default ThemeToggleBtn