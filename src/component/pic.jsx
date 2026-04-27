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
        <div  >
            <img
                ref={imgref}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
                src={h}
                alt="profile"
                className='w-64 h-64 relative  cursor-pointer left-[40%]  z-5 mt-[-200px] '
            />
            <h1 className='relative left-[15%]  mt-[-5%]  capitalize  text-2xl dynapuff '>
                {nme}
            </h1>
            <button id="ss" className=' hover:scale-110 relative  mt-[-18%]  left-[58%] bg-black text-white rounded  capitalize  text-2xl dynapuff'>{but} </button>

        </div>

    )
}



