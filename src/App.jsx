import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // REFS for Custom Cursor
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  // 1. THEME LOGIC: Actually toggle the 'dark' class on the HTML tag
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // 2. CURSOR ANIMATION LOGIC
// 2. CURSOR ANIMATION LOGIC
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // INCREASED SPEED: Changed 0.15 to 0.35
      // Higher number (0.35) = Snappier/Faster circle
      // Lower number (0.1) = Slower/Floaty circle
      const speed = 0.35; 

      position.current.x += (mouse.current.x - position.current.x) * speed;
      position.current.y += (mouse.current.y - position.current.y) * speed;

      if (dotRef.current && outlineRef.current) {
        // Dot moves instantly (No lag)
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 4}px, ${mouse.current.y - 4}px, 0)`;
        
        // Ring follows smoothly
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    }

    const animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    }
  }, []);

  
  return (
    // overflow-x-hidden prevents unwanted scrollbars from animations
    <div className='bg-white dark:bg-black relative w-full overflow-x-hidden transition-colors duration-300'>
      
      <Toaster position="bottom-center" reverseOrder={false} />
      
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />

      {/* --- CUSTOM CURSOR --- */}
      {/* Hidden on mobile/touch devices (pointer: fine) to prevent UX issues */}
      <div className='hidden md:block pointer-events-none fixed inset-0 z-[9999] mix-blend-difference'>
          
          {/* Outer Ring */}
          <div 
            ref={outlineRef} 
            className='absolute top-0 left-0 w-10 h-10 border-2 border-white rounded-full opacity-60 transition-opacity duration-300'
          ></div>

          {/* Inner Dot */}
          <div 
             ref={dotRef} 
             className='absolute top-0 left-0 w-2 h-2 bg-white rounded-full'
          ></div>

      </div>

    </div>
  )
}

export default App;