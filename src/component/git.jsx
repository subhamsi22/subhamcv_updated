import React from 'react'
import fg from '../pics/fg.pdf'

export default function Git() {
    function download() {
        var a = document.createElement("a")
        a.href = "fg.pdf";
        a.download = "subham_cv.pdf";
        a.click()
    }
    return (
        <div>
            <h1 className=' capitalize text-3xl relative left-[5%] top-[55%] text-[#01303f] hover:scale-110  ' id="move2"  > about me</h1>
            <button onClick={download} className=' bg-[#01303f] text-[#f4f7d5] hover:bg-[#f4f7d5] hover:text-[#01303f] cursor-pointer p-3 rounded-full left-[80%]  mt-[20%] relative uppercase ' > download cv </button>
        </div>
    )
}
