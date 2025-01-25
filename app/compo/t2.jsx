'use client'

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';



function T2() {
    const div1 = useRef(null);
    const div2 = useRef(null);
    const imgRef = useRef(null);
    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);
    const imgRef4 = useRef(null);
    const text1 = useRef(null);

    useEffect(() => {
        
        const tl = gsap.timeline();

        
        tl
            .to(div2.current, { 
                x: '100vw', 
                border: '2px', 
                borderRight: 'white', 
                duration: 5, 
                display: 'none', 
                ease: 'power1.in'
            }, 0)
            .to(div1.current, { 
                x: '-100vw', 
                border: '2px', 
                borderLeft: 'white', 
                duration: 5, 
                display: 'none', 
                ease: 'power1.in'
            }, 0) 

            
            .from(text1.current, {
                y: '50vh', 
                x: '30vw', 
                duration: 4, 
                ease: 'power1.in'
            }, 0) 

           
            .to(imgRef.current, {
                filter: 'drop-shadow(10px 10px 20px rgb(6, 182, 212))',
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
                duration: 1
            }, 0)

        
            .to(imgRef.current, {
                scale:2, 
                duration: 5,
                onComplete: () => {
                    gsap.to(imgRef.current, {
                        display: 'none'
                    });
                }
            }, 3);

        
    }, []);

    return (
        <>
        <img src="./vemonText.png" alt="" className='absolute z-40 w-48  ' ref={text1}/>
         <div className='absolute w-1/2 z-30 bg-black h-screen right-0' ref={div2}/>
         <div className='absolute w-1/2 z-30 bg-black h-screen left-0' ref={div1}/>
        <div className='w-full flex justify-center items-center h-screen  overflow-hidden'>

           <img src="./venom1.png" alt="" style={{filter: 'drop-shadow(10px 10px 20px rgb(239 68 68))'}} ref={imgRef}/>
           <img ref={imgRef2} src="./venom2.png" className='hidden' alt="" style={{filter: 'drop-shadow(10px 10px 20px rgb(239 68 68))'}} />
           <img ref={imgRef3} src="./venom3.png" className='hidden' alt="" style={{filter: 'drop-shadow(10px 10px 20px rgb(239 68 68))'}} />
           <img ref={imgRef4} src="./venom4.png" className='hidden' alt="" style={{filter: 'drop-shadow(10px 10px 20px rgb(239 68 68))'}} />
        
        </div>
        </>
    );
}

export default T2;