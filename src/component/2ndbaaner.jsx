import React, { useEffect, useRef } from 'react'
import k from '../pics/k.mp4'
import Git from './git'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Baaner() {
  const hjjref = useRef(null)
  useEffect(() => {
    if (!hjjref.current) return;

    const fullText = hjjref.current.textContent;
    hjjref.current.textContent = ""; // Start empty

    const obj = { prop: 0 };
    gsap.to(obj, {
      prop: fullText.length,
      ease: "none",

      scrollTrigger: {
        trigger: hjjref.current,
        start: "top 90%",
        end: "top 40%",
        scrub: 1,
      },
      onUpdate: () => {
        if (hjjref.current) {
          hjjref.current.textContent = fullText.slice(0, Math.floor(obj.prop));
        }
      }
    })
  }, [])




  return (
    <div className='w-full h-100 bg-[#f4f7d5] overflow-hidden '>
      <Git />
      <video className=' mt-[-310px] shadow-2xl hover:scale-110 duration-300 hover:cursor-pointer rounded-3xl ml-2 h-90 m-5' autoPlay loop muted src={k} ></video>
      <p ref={hjjref} className='typing-cursor whitespace-pre-wrap w-100 relative left-[55%] top-[-80%] text-[#01303f] hover:scale-110  ' >
        I’m Shubham Singh, a BCA student focused on building practical tech solutions. I work with web development, JavaScript, React, and core computer science concepts like networks and microprocessors.

        I focus on creating clean, functional, and scalable projects rather than just theory. I’m also exploring machine learning and modern software development to expand my skill set.

        This site is a collection of my work, experiments, and ongoing learning in technology.
      </p>
    </div>
  )
}
