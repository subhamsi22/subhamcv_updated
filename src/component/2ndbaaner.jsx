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
    <div id='about' className='w-full min-h-screen py-10 px-5 md:px-10 lg:px-20 overflow-hidden flex flex-col justify-center items-center'>
      <Git />
      
      <div className='flex flex-col lg:flex-row justify-center items-center w-full mt-10 lg:mt-16 gap-10 lg:gap-20'>
        <div className='relative w-full lg:w-1/2 flex justify-center items-center'>
          <video
            className='z-4 shadow-2xl hover:scale-105 duration-300 hover:cursor-pointer rounded-3xl h-64 sm:h-80 md:h-96 w-auto object-cover'
            autoPlay
            loop
            muted
            src={k}
          ></video>
          <span className='absolute bottom-[-10px] right-[10%] md:right-[20%] text-5xl text-[#01303f] hover:scale-110 duration-300 bg-white/50 rounded-full p-2'>
            <FaHtml5 />
          </span>
        </div>

        <div className='w-full lg:w-1/2 flex justify-center items-center'>
          <p className='typing-cursor whitespace-pre-wrap text-base sm:text-lg md:text-xl text-[#01303f] hover:scale-105 duration-300 transition-transform leading-relaxed text-justify md:text-left'>
            I’m Shubham Singh, a BCA student focused on building practical tech solutions. I work with web development, JavaScript, React, and core computer science concepts like networks and microprocessors.

            I focus on creating clean, functional, and scalable projects rather than just theory. I’m also exploring machine learning and modern software development to expand my skill set.

            This site is a collection of my work, experiments, and ongoing learning in technology.
          </p>
        </div>
      </div>
    </div>
  )
}