import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from "motion/react"

const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "6304fbee-e015-4305-97c8-93d9386aeb69");
        try {
            const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
            const data = await response.json();
            if (data.success) {
                toast.success("Thank you for your submission!");
                event.target.reset();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <section id='contact-us' className='relative w-full py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden'>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50 -z-0 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10">
                <Title title={"Reach out to us"} desc={"From strategy to execution, we craft digital solutions that move your business forward."} />

                <motion.form 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    onSubmit={onSubmit} 
                    className='max-w-3xl mx-auto grid sm:grid-cols-2 gap-6 p-8 sm:p-12 rounded-3xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-black/30'
                >
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1'>Your Name</label>
                        <div className='group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all duration-300'>
                            <img src={assets.person_icon} alt="" className='w-5 opacity-50 dark:invert' />
                            <input name='name' type="text" placeholder='Enter your name' className='flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 text-sm' required />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1'>Email Address</label>
                        <div className='group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all duration-300'>
                            <img src={assets.email_icon} alt="" className='w-5 opacity-50 dark:invert' />
                            <input name='email' type="email" placeholder='Enter your email' className='flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 text-sm' required />
                        </div>
                    </div>

                    <div className='sm:col-span-2 flex flex-col gap-2'>
                        <label className='text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1'>Your Message</label>
                        <textarea name="message" rows={6} placeholder='Tell us about your project...' className='w-full px-5 py-4 text-sm rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 outline-none text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none' required />
                    </div>

                    <div className='sm:col-span-2 mt-4'>
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type='submit' 
                            className='group w-full sm:w-auto flex items-center justify-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300'
                        >
                            Send Message 
                            <img src={assets.arrow_icon} alt='' className='w-3 invert dark:invert-0 group-hover:translate-x-1 transition-transform duration-300' />
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </section>
    )
}
export default ContactUs