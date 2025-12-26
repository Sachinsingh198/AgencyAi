import React, { useState, useRef } from 'react'
import { motion } from "motion/react"

const ServiceCard = ({ service, variants }) => { // Accept variants props

  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div 
        variants={variants} // Apply animation variants
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl dark:shadow-black/50 transition-shadow duration-300 group cursor-default'
    >
        {/* Spotlight Effect */}
        <div 
            className='pointer-events-none absolute -inset-px transition-opacity duration-300'
            style={{
                opacity,
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`
            }}
        />

        <div className='relative z-10 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6'>
            <div className='w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300'>
                <img src={service.icon} alt={service.title} className='w-8 h-8 object-contain dark:invert' />
            </div>

            <div className='flex-1'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>
                    {service.title}
                </h3>
                <p className='text-gray-500 dark:text-gray-400 text-sm leading-relaxed'>
                    {service.description}
                </p>
            </div>
            
            <div className='absolute top-6 right-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300'>
                 <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
        </div>    
    </motion.div>
  )
}

export default ServiceCard