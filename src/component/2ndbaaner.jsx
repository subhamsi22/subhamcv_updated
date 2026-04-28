import React, { useEffect, useRef } from 'react'
import k from '../pics/k.mp4'
import Git from './git'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaHtml5 } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger)

export default function Baaner() {
  const hjjref = useRef(null)



  return (
    <div id='about' className='   w-full mt-[-10%] h-100 overflow-hidden'>
      <Git />
      <span>
        <FaHtml5 />
      </span>


      <video
        className=' z-4  mt-[-310px] shadow-2xl hover:scale-110 duration-300 hover:cursor-pointer rounded-3xl ml-50 h-90 m-10'
        autoPlay
        loop
        muted
        src={k}
      ></video>

      <p

        className='typing-cursor whitespace-pre-wrap w-100 relative left-[55%] top-[-80%] text-[#01303f] hover:scale-110'
      >
        I’m Shubham Singh, a BCA student focused on building practical tech solutions. I work with web development, JavaScript, React, and core computer science concepts like networks and microprocessors.

        I focus on creating clean, functional, and scalable projects rather than just theory. I’m also exploring machine learning and modern software development to expand my skill set.

        This site is a collection of my work, experiments, and ongoing learning in technology.
      </p>
    </div>
  )
}