import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {

  const servicesData = [
    { title: "Advertising", description: "We turn bold ideas into powerful digital solutions that connect, engage, and convert.", icon: assets.ads_icon },
    { title: "Content Marketing", description: "We help you execute your plan and deliver results through strategic storytelling.", icon: assets.marketing_icon },
    { title: "Content Writing", description: "We help you create a marketing strategy that drives results and resonates.", icon: assets.content_icon },
    { title: "Social Media", description: "We help you build a strong social media presence and engage your audience.", icon: assets.social_icon },
  ]

  return (
    <section id='services' className='relative w-full py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300'>
        
        <img src={assets.bgImage2} alt="" className='absolute -top-[20%] -left-[10%] w-[50%] opacity-40 -z-0 pointer-events-none dark:hidden animate-pulse-slow' />

        <div className="relative z-10">
            <Title title='How can we help you?' desc='We help you create a marketing strategy that drives results.' />

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
                className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10'
            >
                {servicesData.map((service, index)=>(
                    <ServiceCard 
                        key={index} 
                        service={service} 
                        variants={{ // Pass the variants down
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                        }} 
                    />
                ))}
            </motion.div>
        </div>
    </section>
  )
}

export default Services