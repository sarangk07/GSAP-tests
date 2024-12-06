'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
// import Image from 'next/image'

function BenTen() {
    const triggerRef = useRef(null)
    // const img1Ref = useRef(null)
    // const img2Ref = useRef(null)
    // const img3Ref = useRef(null)
    // const img4Ref = useRef(null)
    // const img5Ref = useRef(null)
    // const headingRef = useRef(null)
    // const headingRef2 = useRef(null)
    const textCon1 = useRef(null)
    const textCon2 = useRef(null)
    const intro1 = useRef(null)
    const logo = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(logo.current,{
            borderColor:'green',
            repeat:-1,
            ease:'bounce.inOut'
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                pin: true,
                start: "top top",
                end: "+=300%",
                scrub: 1,
                markers:true
            },
            defaults: { 
                ease: "none" 
            }
        })

        tl.to(document.body, {
            backgroundColor: "#f0f0f0",
        }, "start")
        // .to(headingRef.current, {
        //     scale: 5,
        //     x:-1500,
        //     opacity: 0
        // }, "start")
        // .to(headingRef2.current, {
        //     scale: 5,
        //     x:1500,
        //     opacity: 0
        // }, "start")

        .to(logo.current,{
            scale: 15,
            rotate:'10rad',
            opacity: 0,
            
        }, "start")


        


        .to(textCon1.current, {
            scale: 7,
            opacity: 2,
        }, "<")
        .to(textCon1.current, {
            y:-1500,
            ease:'power3.inOut'
        },1)


        .to(textCon2.current,{
            backgroundColor:'green',
            opacity:2,
            paddingLeft:'20px',
            paddingRight:'20px',
            ease:'power4.in',
            scale:4,
        }, "<")
        .to(textCon2.current,{
           scale:17,
           opacity:0,
            ease:'power4.inOut',
        },2)



        .to(intro1.current,{
            backgroundColor:'white',
            opacity:2, 
        },3)


        .to('.scaleableImg', {
            opacity: 0
        })

    }, [])

    return (
        <div className="overflow-hidden">
            <div className="upper-container fixed w-full h-screen flex flex-col items-center justify-center font-light">
                
                {/* <h1 
                    ref={headingRef} 
                    className="px-[50px] text-[80px] leading-tight uppercase"
                >
                   Let
                </h1>
                <h1 
                    ref={headingRef2} 
                    className="px-[50px] text-[80px] leading-tight uppercase"
                >
                   Start
                </h1> */}
                <div ref={logo} className='bg-green-500  backdrop-blur-lg rotate-45 overflow-hidden w-72 h-72 rounded-full flex border-8  border-green-900' >
                    <div className='logoBlack relative border-[6px] border-green-400 top-[53%] w-1/2 h-full right-2  bg-black '/>
                    <div className='logoBlack relative border-[6px] border-green-400 w-1/2 bottom-[53%] left-2 h-full bg-black'/>
                </div>
            </div>

            <div 
                ref={triggerRef} 
                className="imageBoard relative flex items-center justify-center h-screen w-full overflow-hidden"
            >
                <div 
                    ref={textCon1} 
                    className="absolute w-full h-screen flex items-center justify-center text-black font-bold text-[20px] opacity-0"
                >
                    BEN <span className='text-green-600 ml-1'> 10</span>                
                </div>

                <div ref={textCon2}
                    className='absolute w-full h-screen flex flex-col items-center justify-center text-black font-bold  text-[8px] opacity-0'>
                    <p>Ben 10 </p>
                    <p className=' p-5 text-[5px] w-[20%]'>The Ben 10 franchise is a widely popular animated series created by Man of Action and produced by Cartoon Network Studios, first premiering in 2005</p>
                    
                      
                </div>


                <div ref={intro1}
                className='absolute w-full h-screen justify-center text-black items-center flex opacity-0 text-12px'>
                    Bye Bye ... 
                </div>

                
            </div>
        </div>
    )
}

export default BenTen