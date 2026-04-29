import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import h from '../pics/h.png'
import '../App.css'


export default function Pic() {

    const [nme, setnme] = useState("are you worried for your project")
    const [but, setbut] = useState("click me")
    const imgref = useRef(null);

    useEffect(() => {
        // Entry animation
        gsap.from(imgref.current, {
            y: 50,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            onComplete: () => {
                // Floating animation after entry
                gsap.to(imgref.current, {
                    y: 20,
                    duration: 2,


                    ease: "sine.inOut"
                })
            }
        })
    }, [])

    const handleHover = () => {
        gsap.to(imgref.current, { scale: 1.1, duration: 0.3 })
    }

    const handleHoverExit = () => {
        gsap.to(imgref.current, { scale: 1, duration: 0.3 })
    }

    return (
        <div className='w-full flex justify-center items-center relative z-10 px-5'>
            <div className='w-full max-w-5xl flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-4 mt-[-50px] md:mt-[-100px]'>
                
                {/* Left Text */}
                <h1 className='capitalize text-xl md:text-2xl dynapuff text-center order-2 md:order-1 flex-1'>
                    {nme}
                </h1>
                
                {/* Center Image */}
                <img
                    ref={imgref}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverExit}
                    src={h}
                    alt="profile"
                    className='w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 cursor-pointer order-1 md:order-2 object-cover rounded-full shadow-2xl z-20'
                />
                
                {/* Right Button */}
                <div className='flex-1 flex justify-center order-3'>
                    <button id="ss" className='hover:scale-110 bg-[#01303f] text-[#f4f7d5] rounded-full px-6 py-3 md:px-8 md:py-4 capitalize text-lg md:text-xl dynapuff transition-transform shadow-lg'>
                        <a href="#contact">{but}</a>
                    </button>
                </div>
                
            </div>
        </div>
    )
}



