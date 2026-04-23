import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function And() {
    const desref = useRef(null);
    
    useEffect(() => {
        gsap.set(desref.current, { y: 50, opacity: 0 })
        
        gsap.to(desref.current, {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.inOut",
            delay: 0.5
        })
    }, [])

    return (
        <div className='text-9xl cinzel-decorative-bold text-center'>
            <h1 ref={desref}>&</h1>
        </div>
    )
}

