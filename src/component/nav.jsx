import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import '../App.css'

const Nav = () => {
    const fullText = "subham singh";
    const [text, setText] = useState("");

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index >= fullText.length) {
                clearInterval(timer);
            }
        }, 150);
        return () => clearInterval(timer);
    }, []);

    const handleChange = () => {
        // Kill any existing animations on this element to prevent stacking
        gsap.killTweensOf("#dns");
        gsap.to("#dns", {
            y: 10,
            duration: 1,
            repeat: -1,
            yoyo: true
        })
    }

    return (
        <nav className='w-full h-16 flex items-center justify-between px-10'>
            <h1 id='dns' onMouseEnter={handleChange} className='text-2xl dancing-script typing-cursor cursor-default'>
                {text}
            </h1>
            <ul className='flex items-center gap-8'>
                <li className='hover:text-[#2965bf] cursor-pointer text-[#2965bf] font-extrabold uppercase'>Home</li>
                <li className='hover:text-[#2965bf] cursor-pointer uppercase font-extrabold'>About Me</li>
                <li className='hover:text-[#2965bf] cursor-pointer uppercase font-extrabold'>Projects</li>
                <li className='hover:text-[#2965bf] cursor-pointer font-extrabold bg-black text-white px-6 py-2 uppercase rounded-sm transition-all hover:bg-[#2965bf]'>
                    Contact
                </li>
            </ul>
        </nav>
    )
}


export default Nav