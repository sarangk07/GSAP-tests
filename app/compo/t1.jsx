'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function T1() {
  const red = useRef(null);
  const blue = useRef(null);
  const round = useRef(null);


  useEffect(() => {
    // Run animations after hydration
    gsap.to(red.current, { y: -62, duration: 5,backgroundColor:'red' },2);
    gsap.to(blue.current, { y: 50, duration: 5,backgroundColor:'green' },2);
    gsap.to(round.current, {x:160, y:-10 , duration:4 },2);
    gsap.to(round.current, {rotate:'60rad',repeat:-1,ease:'power1' },2);
    
  }, []);

  return (
    <div className='flex justify-center items-center w-full h-screen bg-zinc-700'>
      <div className='flex flex-col w-[60vh] h-[40vh] bg-white 'style={{ boxShadow: '20px 20px 60px #00000041, inset -20px -20px 60px #ffffff40' }}> 
        <div ref={round} className='w-20 flex justify-center z-10 items-center h-20 rounded-full bg-transparent border-2 border-blue-500 absolute top-[19rem]'>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[10deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[20deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[30deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[40deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[50deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[60deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[70deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[80deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[90deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[100deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[110deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[120deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[130deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[140deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[150deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[160deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[170deg]'></div>
            <div className='h-20 w-[2px] absolute bg-blue-400 rotate-[180deg]'></div>    
        </div>
        <div className='h-1/2 w-full bg-red-950 z-20' ref={red}></div>
        <div className='h-1/2 w-full bg-blue-950 z-20' ref={blue}></div>
      </div>
    </div>
  );
}

export default T1;
