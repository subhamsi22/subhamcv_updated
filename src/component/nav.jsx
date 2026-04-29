import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import '../App.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = () => {
    const fullText = "subham singh";
    const [text, setText] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className='w-full h-16 flex items-center justify-between px-5 md:px-10 relative z-50'>
            <h1 id='dns' onMouseEnter={handleChange} className='text-2xl dancing-script typing-cursor cursor-default z-50'>
                {text}
            </h1>

            {/* Desktop Menu */}
            <ul className='hidden md:flex items-center gap-8 z-50'>
                <li className='hover:text-[#2965bf] cursor-pointer text-[#2965bf] font-extrabold uppercase'><a href="#home">Home</a></li>
                <li className='hover:text-[#2965bf] cursor-pointer uppercase font-extrabold'><a href="#about">About Me</a></li>
                <li className='hover:text-[#2965bf] cursor-pointer uppercase font-extrabold'><a href="#slider">Projects</a></li>
                <li className='hover:text-white cursor-pointer font-extrabold bg-black text-white px-6 py-2 uppercase rounded-sm transition-all hover:bg-[#2965bf]'>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            {/* Hamburger Icon */}
            <div className='md:hidden z-50 text-2xl cursor-pointer text-[#01303f]' onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#f4f7d5] flex flex-col items-center justify-center transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} z-40 shadow-2xl`}>
                <ul className='flex flex-col items-center gap-10 text-xl'>
                    <li className='hover:text-[#2965bf] cursor-pointer text-[#2965bf] font-extrabold uppercase' onClick={toggleMenu}><a href="#home">Home</a></li>
                    <li className='hover:text-[#2965bf] cursor-pointer uppercase font-extrabold' onClick={toggleMenu}><a href="#about">About Me</a></li>
                    <li className='hover:text-[#2965bf] cursor-pointer uppercase font-extrabold' onClick={toggleMenu}><a href="#slider">Projects</a></li>
                    <li className='hover:text-white cursor-pointer font-extrabold bg-[#01303f] text-white px-8 py-3 uppercase rounded-full transition-all hover:bg-[#2965bf] shadow-lg' onClick={toggleMenu}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
