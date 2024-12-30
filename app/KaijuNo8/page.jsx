'use client'

import React, { useEffect } from 'react'
import { useRef } from 'react';
import gsap from 'gsap'

function Kaiju() {
    const se1imgRef = useRef(null);
    const se1letterRefs = useRef([]);
    
    const addToRefs = (el) => {
        if (el && !se1letterRefs.current.includes(el)) {
            se1letterRefs.current.push(el);
        }
    };

    useEffect(()=>{
        gsap.to(se1imgRef.current,{
            filter:'drop-shadow(7px 6px 2px rgb(103 232 249))',
            repeat:-1,
            duration:0.8,
            yoyo:true,
            ease:'power3.inOut'
        })
        gsap.from(se1letterRefs.current, {
            y: -1000,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });  
    },[]) 

    const letters = ['K', 'I', 'J', 'U', '.', 'No', '8'];

  return (
    <>
        <div className='1st   flex justify-center items-center w-full h-screen bg-gradient-to-br from-blue-700 to-black'>
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

      {/* <div>

      </div> */}
    </>
  )
}

export default Kaiju
