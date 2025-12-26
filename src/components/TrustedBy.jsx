import React from 'react'
import { company_logos } from '../assets/assets'
import { motion } from "motion/react"

const TrustedBy = () => {
  return (
    <section className='py-16 md:py-24 px-4 sm:px-12 lg:px-24 xl:px-40 w-full bg-white dark:bg-gray-900 transition-colors duration-300'>
        
        <div className='max-w-7xl mx-auto flex flex-col items-center gap-8'>
            
            <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base font-semibold tracking-widest text-gray-500 dark:text-gray-400 uppercase text-center mb-4"
            >
                Trusted By Leading Companies
            </motion.h3>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
                className='flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:gap-x-20 lg:gap-x-24 w-full'
            >
                {
                    company_logos.map((logo, index)=>(
                        <motion.div 
                            key={index} 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            className="group relative flex items-center justify-center"
                        >
                            <img 
                                src={logo} 
                                alt='Company Logo' 
                                className='h-8 sm:h-10 md:h-12 w-auto object-contain 
                                           grayscale opacity-60 hover:grayscale-0 hover:opacity-100 
                                           transition-all duration-500 ease-in-out cursor-pointer
                                           dark:brightness-200' 
                            />
                        </motion.div>
                    ))
                }
            </motion.div>
            
        </div>
    </section>
  )
}

export default TrustedBy