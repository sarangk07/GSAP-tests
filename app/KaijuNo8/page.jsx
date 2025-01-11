'use client'

import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function Kaiju() {
    const introTextRef = useRef(null);
    const se1imgRef = useRef(null);
    const se2imgRef = useRef(null);
    const se1imgDivRef = useRef(null);
    const se2imgDivRef = useRef(null);
    const triggerRef = useRef(null);
    const letterDivRef = useRef(null);
    const discriptionRef = useRef(null);
    const se1letterRefs = useRef([]);

    const flipContainerref = useRef(null);



    
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

        // gsap.to(flipContainerref.current,{
        //     flexDirection:'row',
        //     repeat:-1,
        //     yoyo:true
        // })




        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                pin: true,
                start: "top top",
                end: "+=1800%",
                scrub: 1,
                ease:'power2.inOut'
                // markers:true
            },
            defaults: { 
                ease: "none" 
            }
        })
        .to(introTextRef.current,{
            scale:100,
            duration:2,
            opacity:0
        },"start")
        .to(letterDivRef.current,{
            display:'flex'
        })
        .from(se1letterRefs.current, {
            y: -1500,
            opacity: 0,
            
            stagger: 0.2,
            ease: 'power3.out'
        },">")
        
        .to(se1imgDivRef.current,{
            scale:1,
            display:"flex",
            duration:1,
            opacity: 100,
            ease: 'power3.out'
        },"<")
        .to(se1imgDivRef.current,{
            scale:10,
            opacity:0,
            display:'none'
        },"+=1")
        .to(se1letterRefs.current,{
            y: 1500,
            opacity: 0,
            duration: 2,
            stagger: 0.2,
            display:'none',
            ease: 'power3.in'
        },"-=1")
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
        .to(discriptionRef.current,{
            opacity:0,
            duration:1,
            display:'none',
            ease: 'power1.out'
        })
        .to(se2imgDivRef.current,{
            opacity:0,
            display:'none',
            duration:1,
            ease: 'power2.out'
        },"<")
        .to(flipContainerref.current, {
            opacity: 100,
            display: 'block',
            duration: 1,
            onStart: () => {
                gsap.from(flipContainerref.current.children[0].children, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.8,
                    stagger: {
                        amount: 1,
                        grid: [2, 4],
                        from: "random"
                    },
                    ease: "back.out(1.7)"
                });
            }
        })



        
    },[]) 

    const letters = ['K', 'I', 'J', 'U', '.', 'No', '8'];
    // const jpletters = ['怪', '獣', '8', '号'];



  return (
    <div ref={triggerRef} className='bg-gradient-to-br  relative from-blue-700 to-black flex flex-row w-full h-screen'>

    {/* intro */}
    <h2 ref={introTextRef} className='absolute w-full h-screen font-godzillasofuro text-4xl flex justify-center items-center'>Kaiju No 8</h2>
    {/* page1 contents*/}
        
            <div ref={letterDivRef} className='hidden w-1/2 flex-col justify-center font-robotaur md:flex-row justify-left text-6xl items-center pl-2 '>
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
            
            <div ref={se1imgDivRef} className='relative opacity-0 scale-150  h-full w-1/2  hidden items-end justify-center'>
                <img 
                    ref={se1imgRef}
                    src="./Kaiju/Kaijupg1img2.png" 
                    alt="Kaiju" 
                    className='w-auto h-[98%] object-contain' 
                    style={{filter: 'drop-shadow(8px 6px 2px rgb(37 99 235))'}}
                />
            </div>


    {/* page2  contents*/}
            <p ref={discriptionRef} className='opacity-0 hidden w-full  absolute  text-wrap font-mono z-10 backdrop-blur-sm lg:backdrop-blur-0  backdrop-brightness-50 text-lg  h-screen  lg:h-full items-center justify-center p-5'>"Kaiju No. 8" is a dynamic manga series created by Naoya Matsumoto, set in a world where colossal monsters known as kaiju frequently threaten humanity. The narrative centers on Kafka Hibino, a 32-year-old man who aspires to join the Japanese Anti-Kaiju Defense Force (JAKDF), an elite group tasked with combating these monstrous threats.</p>
            <div ref={se2imgDivRef} className='opacity-0 hidden w-screen h-full  relative items-end justify-center'>
                <img 
                    ref={se2imgRef}
                    src="./Kaiju/K1.png" 
                    alt="Kaiju" 
                    className='w-screen h-[90%] object-contain' 
                    style={{filter: 'drop-shadow(15px 10px 2px rgb(255 255 255))'}}
                />
            </div>
      
    {/* page3 for testing flip animation */}
        <div ref={flipContainerref} className='opacity-0 hidden text-white w-full h-full absolute p-4 overflow-hidden'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full min-h-full place-items-center pb-20'>
                <div className='hover:scale-125  hover:transition-transform bg-blue-800 relative w-full max-w-[8rem] md:max-w-[12rem] lg:max-w-[14rem] aspect-square'>
                    <img src="https://i.pinimg.com/736x/ef/cb/93/efcb9355e5d6b3790ff5cbab2bc9c757.jpg" alt="Kafka Hibino" className='w-full h-full object-cover' />
                    <p className='absolute bottom-0 w-full text-center bg-black/50 p-2 text-sm md:text-base'>Kafka Hibino</p> 
                </div>
                <div className='hover:scale-125 hover:transition-transform bg-zinc-800 relative w-full max-w-[8rem] md:max-w-[12rem] lg:max-w-[14rem] aspect-square'>
                    <img src="https://i.pinimg.com/736x/35/2c/dc/352cdcad3ab0e459c45d39ac341499f9.jpg" alt="Reno Ichikawa" className='w-full h-full object-cover' />
                    <p className='absolute bottom-0 w-full text-center bg-black/50 p-2 text-sm md:text-base'>Reno Ichikawa</p>
                </div>
                <div className='hover:scale-125 hover:transition-transform bg-green-800 relative w-full max-w-[8rem] md:max-w-[12rem] lg:max-w-[14rem] aspect-square'>
                    <img src="https://i.pinimg.com/736x/19/52/55/195255685599ae29f2ac1db5e99348f6.jpg" alt="Mina Ashiro" className='w-full h-full object-cover' />
                    <p className='absolute bottom-0 w-full text-center bg-black/50 p-2 text-sm md:text-base'>Mina Ashiro</p>
                </div>
                <div className='hover:scale-125 hover:transition-transform bg-yellow-800 relative w-full max-w-[8rem] md:max-w-[12rem] lg:max-w-[14rem] aspect-square'>
                    <img src="https://i.pinimg.com/736x/02/98/18/029818f15cc34986cd450232ce14bb5d.jpg" alt="Kikoru Shinomiya" className='w-full h-full object-cover' />
                    <p className='absolute bottom-0 w-full text-center bg-black/50 p-2 text-sm md:text-base'>Kikoru Shinomiya</p>
                </div>
                <div className='hover:scale-125 hover:transition-transform bg-yellow-800 relative w-full max-w-[8rem] md:max-w-[12rem] lg:max-w-[14rem] aspect-square'>
                    <img src="https://i.pinimg.com/736x/47/4d/32/474d3292e76de637a9a158bcb355727f.jpg" alt="Soshiro Hoshina" className='w-full h-full object-cover' />
                    <p className='absolute bottom-0 w-full text-center bg-black/50 p-2 text-sm md:text-base'>Soshiro Hoshina</p>
                </div>
                <div className='hover:scale-125 hover:transition-transform bg-yellow-800 relative w-full max-w-[8rem] md:max-w-[12rem] lg:max-w-[14rem] aspect-square'>
                    <img src="https://i.pinimg.com/736x/bc/84/a7/bc84a72827f9e6919344b7d90a0d0236.jpg" alt="Gen Narumi" className='w-full h-full object-cover' />
                    <p className='absolute bottom-0 w-full text-center bg-black/50 p-2 text-sm md:text-base'>Gen Narumi</p>
                </div>
                <div className='hover:scale-125 hover:transition-transform bg-yellow-800 relative w-full max-w-[8rem] md:max-w-[12rem] lg:max-w-[14rem] aspect-square'>
                    <img src="https://i.pinimg.com/736x/c2/ac/50/c2ac50bba9de621887eb4e6dd3ca3922.jpg" alt="Iharu Furuhashi" className='w-full h-full object-cover' />
                    <p className='absolute bottom-0 w-full text-center bg-black/50 p-2 text-sm md:text-base'>Iharu Furuhashi</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Kaiju
