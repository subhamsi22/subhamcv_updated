import React from 'react'
import fg from '../pics/fg.pdf'

export default function Git() {
    function download() {
        var a = document.createElement("a")
        a.href = fg;
        a.download = "subham_cv.pdf";
        a.click()
    }
    return (
        <div className='flex justify-between items-center px-5 md:px-10 py-5 w-full'>
            <h1 className='capitalize text-3xl md:text-5xl text-[#01303f] hover:scale-110 transition-transform duration-300 font-bold' id="move2">About Me</h1>
            <button onClick={download} className='font-bold bg-[#01303f] text-[#f4f7d5] hover:bg-[#f4f7d5] hover:text-[#01303f] cursor-pointer px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full uppercase transition-all duration-300 shadow-lg hover:shadow-xl'> Download CV </button>
        </div>
    )
}
