import React, { useEffect, useRef } from 'react'
import Nav from './component/nav'
import King from './component/king'
import MainText from './component/main_text'
import And from './component/and'
import Pic from './component/pic'
import { FaReact } from "react-icons/fa";
import { GiLongLeggedSpider } from "react-icons/gi";
import gsap from 'gsap'
import { GiSpiderWeb } from "react-icons/gi";
import { IoLogoHtml5 } from "react-icons/io";


import './App.css'


export default function Starting() {
    const opref = useRef(null)
    const hhref = useRef(null)
    const opreff = useRef(null)

    function mouse(e) {
        document.getElementById("move").style.left = e.x + "px"
        document.getElementById("move").style.top = e.y + "px"
    }

    window.addEventListener("mousemove", mouse)


    useEffect(() => {
        gsap.set(opref.current, { opacity: 0, y: 50 })
        gsap.to(opref.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.inOut",

        })




        gsap.to(opref.current, {
            skewX: "10deg",
            skewY: "10deg",
            repeat: -1,
            yoyo: true,
            duration: 1

        })
        gsap.to(hhref.current, {
            rotate: 360,
            repeat: -1,
            yoyo: true,
            duration: 10,
            delay: 0.01,
        })
 gsap.set(opreff.current, { opacity: 0, y: 50 })
        gsap.to(opreff.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.inOut",

        })


    }, [])




    return (
        <div>
            <span id="move" ><FaReact />
            </span>

            <Nav />
            <Pic />
            <King />
            <MainText displayText="web designer" />
            <span ref={opref} className='text-8xl absolute left-[65%] top-[40%] text-[#01303f] hover:scale-110  ' id="move2"  ><GiLongLeggedSpider />
            </span>
            <And />
            <span ref={opreff} className='text-8xl absolute left-[15%] top-[65%] text-[#E34F26] hover:scale-110  ' id="move2"  ><IoLogoHtml5 />
            </span>
            <MainText
                displayText={[
                    "w", "e", "b", " ",

                    "D", "E", "V", "e", "L", <GiSpiderWeb key="icon" ref={hhref} />, "p", "e", "r"
                ]}
            />

        </div>
    )
}
