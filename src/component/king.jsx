import React, { useEffect, useRef } from 'react'
import { FaCrown } from "react-icons/fa";
import gsap from 'gsap'

const King = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        // Force the initial state to 0
        gsap.set(containerRef.current, { opacity: 0 });
        
        // Animate to full visibility
        gsap.to(containerRef.current, {
            opacity: 1,
            duration: 2,
            ease: "power2.inOut",
            delay: 0.5
        });
    }, []);

    return (
        <div className='w-full mt-5 px-4'>
            <h1 ref={containerRef} className='text-center flex flex-col md:flex-row justify-center items-center gap-2'>
                <p className='text-3xl md:text-5xl'>Hi, I'm </p>
                <div className='flex items-center gap-2'>
                    <p className='text-3xl md:text-5xl uppercase font-bold'>subham singh</p>
                    <FaCrown className='text-3xl md:text-5xl text-yellow-500' />
                </div>
            </h1>
        </div>
    )
}

export default King
