import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import h from '../pics/h.png'

export default function Pic() {
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
        <div className='flex justify-center items-center '>
            <img
                ref={imgref}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
                src={h}
                alt="profile"
                className='w-64 h-64 o cursor-pointer absolute z-5 top-[65%]'
            />
        </div>
    )
}



