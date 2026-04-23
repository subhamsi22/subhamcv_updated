import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'

const MainText = ({ displayText }) => {
  const textRef = useRef(null)
  const animateref = useRef(null)

  useEffect(() => {
    if (!displayText) return;
    const chars = textRef.current.querySelectorAll('.char')

    // Set initial state to avoid flicker
    gsap.set(chars, { opacity: 0, y: 50 })

    gsap.to(chars, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2
    })
    // gsap.set(animateref, { opacity: 0, y: 50 })

    // gsap.to(animateref, {
    //   rotate: 360,
    //   yoyo: true,
    //   repeat: -1,
    //   duration: 2,
    //   delay: 1

    // })
  }, [displayText])

  return (
    <div className='w-full min-h-[50px] flex justify-center items-center py-10'>
      <h1
        ref={textRef}
        className='hover:text-black text-[#01303f] text-9xl text-center cinzel-decorative-bold flex flex-wrap justify-center'
      >
        {(Array.isArray(displayText) ? displayText : displayText.split("")).map((char, index) => (
          <span
            key={index}
            className="char inline-block"
            style={{ whiteSpace: "pre" }}
          >
            {char}
          </span>
        ))}
      </h1>
      {/* <p ref={animateref} className=' left-[-27%] relative hover:text-black text-[#01303f] text-9xl text-center cinzel-decorative-bold flex flex-wrap justify-center'>o</p> */}
    </div>
  )
}


export default MainText
