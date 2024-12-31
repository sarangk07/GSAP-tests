'use client'

import React, { useEffect } from 'react'
import { useRef } from 'react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function Kaiju() {
    const se1imgRef = useRef(null);
    const se2imgRef = useRef(null);
    const se1imgDivRef = useRef(null);
    const se2imgDivRef = useRef(null);
    const triggerRef = useRef(null);
    const letterDivRef = useRef(null);
    const discriptionRef = useRef(null);
    const se1letterRefs = useRef([]);
    
    const addToRefs = (el) => {
        if (el && !se1letterRefs.current.includes(el)) {
            se1letterRefs.current.push(el);
        }
    };

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(se1imgRef.current,{
            filter:'drop-shadow(7px 6px 2px rgb(103 232 249))',
            repeat:-1,
            duration:0.8,
            yoyo:true,
            ease:'power3.inOut'
        })
        gsap.to(se2imgRef.current,{
            filter:'drop-shadow(7px 6px 2px rgb(103 232 249))',
            repeat:-1,
            duration:0.8,
            yoyo:true,
            ease:'power3.inOut'
        })
        // gsap.from(se1letterRefs.current, {
        //     y: -1000,
        //     opacity: 0,
        //     duration: 1,
        //     stagger: 0.2,
        //     ease: 'power3.out'
        // });  

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                pin: true,
                start: "top top",
                end: "+=2800%",
                scrub: 1,
                ease:'power2.inOut'
                // markers:true
            },
            defaults: { 
                ease: "none" 
            }
        })
        .from(se1letterRefs.current, {
            y: -1500,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        },"start")
        .to(se1imgDivRef.current,{
            x:-1000,
            opacity:0,
            display:'none'
        },"+=1")
        .to(se1letterRefs.current,{
            y: -1500,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            display:'none',
            ease: 'power3.out'
        },"+=0")
        .to(letterDivRef.current,{
            display:'none',ease: 'power3.out'
        },"-=1")
        .fromTo(se2imgDivRef.current,{
            x:-1500,
        },{
            x:0,
            opacity:100,
            display:'flex',
        })
        .to(discriptionRef.current,{
            opacity:100,
            display:"flex",
        })
        





    },[]) 

    const letters = ['K', 'I', 'J', 'U', '.', 'No', '8'];
    // const jpletters = ['怪', '獣', '8', '号'];
     

  return (
    <div ref={triggerRef} className='bg-gradient-to-br relative from-blue-700 to-black flex flex-row w-full h-screen'>


    {/* page1 contents*/}
        
            <div ref={letterDivRef} className='flex w-1/2 flex-col justify-center font-robotaur md:flex-row justify-left text-6xl items-center pl-2 '>
                {letters.map((letter, index) => (
                    <p
                        key={index}
                        ref={addToRefs}
                        className={`
                            ${letter === '.' ? 'hidden md:flex' : ''}
                            ${letter === 'U' ? 'pb-8 md:p-0' : ''}
                        `}
                    >
                        {letter}
                    </p>
                ))}
            </div>
            
            <div ref={se1imgDivRef} className='relative h-full w-1/2  flex items-end justify-center'>
                <img 
                    ref={se1imgRef}
                    src="./Kaiju/Kaijupg1img1.png" 
                    alt="Kaiju" 
                    className='w-auto h-[90%] object-contain' 
                    style={{filter: 'drop-shadow(8px 6px 2px rgb(37 99 235))'}}
                />
            </div>
        




    {/* page2  contents*/}
            <p ref={discriptionRef} className='opacity-0 hidden w-full  absolute  text-wrap font-mono z-10 backdrop-blur-sm lg:backdrop-blur-0  backdrop-brightness-50 text-lg  h-screen  lg:h-full items-center justify-center p-5'>"Kaiju No. 8" is a dynamic manga series created by Naoya Matsumoto, set in a world where colossal monsters known as kaiju frequently threaten humanity. The narrative centers on Kafka Hibino, a 32-year-old man who aspires to join the Japanese Anti-Kaiju Defense Force (JAKDF), an elite group tasked with combating these monstrous threats.</p>
            <div ref={se2imgDivRef} className='opacity-0 hidden w-full h-full  absolute lg:relative  lg:h-full items-end justify-center'>
                <img 
                    ref={se2imgRef}
                    src="./Kaiju/K2.png" 
                    alt="Kaiju" 
                    className='w-auto  h-[90%] lg:h-[90%] object-contain' 
                    style={{filter: 'drop-shadow(15px 10px 2px rgb(255 255 255))'}}
                />
               
            </div>
      



    </div>
  )
}

export default Kaiju
