
import { useEffect, useRef } from "react"
import { gsap } from 'gsap'



function Newsvg() {
    const strref = useRef(null);
    const pathref = useRef(null);
    useEffect(() => {
        const strel = strref.current;
        const pathel = pathref.current;
        const deffaultpath = "M 1 80 Q 1330 80 1380 80 ";
        const handleMouseMove = (e) => {

            const newpt = `M 1 80 Q ${e.clientX} ${e.clientY} 1380 80`;
            gsap.to(pathel, {
                duration: 0.5,
                attr: { d: newpt },
                ease: "power2.out"
            })
        };
        const handleMouseLeave = () => {
            gsap.to(pathel, {
                duration: 1,
                attr: { d: deffaultpath },
                ease: "elastic.out(1,0.3)",
            });
        };
        strel.addEventListener("mousemove", handleMouseMove);
        strel.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            strel.removeEventListener("mousemove", handleMouseMove);
            strel.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (

        <div id="string2" ref={strref}>

            <svg className="w-screen  bg-white text-black/80" width="1400" height="340" xmlns="http://www.w3.org/2000/svg">
                <path
                    ref={pathref}
                    d="M 1 80 Q 1330 80 1200 80 " stroke="black" fill="transparent" />
            </svg>
        </div>


    );
}
export default Newsvg;