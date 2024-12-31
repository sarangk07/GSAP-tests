'use client'

import React, { useEffect } from 'react'
import { useRef } from 'react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function Kaiju() {
    const se1imgRef = useRef(null);
    const se2imgRef = useRef(null);
    const triggerRef = useRef(null);
    const page1Ref = useRef(null);
    const page2Ref = useRef(null);
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
        tl.to(page1Ref.current,{
            opacity:100,
            duration:2

        },'start')
        .from(se1letterRefs.current, {
            y: -1500,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        },"start")
        .to(page1Ref.current,{
            x:-1000,
            opacity:0
        },"+=1")
        .to(page2Ref.current,{
            opacity:100,

        },">")





    },[]) 

    const letters = ['K', 'I', 'J', 'U', '.', 'No', '8'];
    // const jpletters = ['怪', '獣', '8', '号'];
     

  return (
    <div ref={triggerRef}>


    {/* page1 */}
        <div ref={page1Ref} className='1st opacity-0 absolute  flex justify-center items-center w-full h-screen bg-gradient-to-br from-blue-700 to-black'>
            <div className='flex flex-col font-robotaur md:flex-row justify-left text-6xl items-center pl-2 '>
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
            
            <div className='relative h-full w-full flex items-end justify-end'>
                <img 
                    ref={se1imgRef}
                    src="./Kaiju/Kaijupg1img1.png" 
                    alt="Kaiju" 
                    className='w-auto h-[90%] object-contain' 
                    style={{filter: 'drop-shadow(8px 6px 2px rgb(37 99 235))'}}
                />
            </div>
        </div>




    {/* page2 */}
      <div ref={page2Ref} className='2nd opacity-0 flex absolute  flex-col lg:flex-row-reverse w-full h-screen bg-gradient-to-br from-black to-cyan-600'>
            <p className='flex text-wrap font-mono z-10 backdrop-blur-sm lg:backdrop-blur-0 lg:backdrop-brightness-100 backdrop-brightness-50 text-lg  h-screen lg:w-3/5 lg:h-full items-center justify-center p-5'>"Kaiju No. 8" is a dynamic manga series created by Naoya Matsumoto, set in a world where colossal monsters known as kaiju frequently threaten humanity. The narrative centers on Kafka Hibino, a 32-year-old man who aspires to join the Japanese Anti-Kaiju Defense Force (JAKDF), an elite group tasked with combating these monstrous threats.</p>
            <div className='h-full absolute lg:relative lg:w-3/5 lg:h-full flex items-end justify-end'>
                <img 
                    ref={se2imgRef}
                    src="./Kaiju/K2.png" 
                    alt="Kaiju" 
                    className='w-auto h-[90%] lg:h-[90%] object-contain' 
                    style={{filter: 'drop-shadow(15px 10px 2px rgb(255 255 255))'}}
                />
               
            </div>
      </div>



    </div>
  )
}

export default Kaiju
