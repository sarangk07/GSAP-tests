"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";
// import PoliceCar from "../compo/NightCTY/POlicecar";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const progressBarRef = useRef(null);
  const [pgComp, setPGComp] = useState(0);

  useEffect(() => {
    let sections = gsap.utils.toArray(".section");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        end: "+=" + window.innerWidth * sections.length,
        onUpdate: (self) => {
          let progress = self.progress * 100;
          setPGComp(progress);
        },
      },
    });

    // let tl = gsap.timeline()



    return () => scrollTween.kill();
  }, []);

  return (
    <>
{/* <PoliceCar/> */}
    {/* street lights */}

    <div className="z-20 fixed w-1 h-32 bg-white bottom-10 left-5" >
      <div className="w-7 h-2 rounded-tr-full bg-green-100" />
    </div>
    {/* <div className="z-20 fixed w-1 h-32 bg-white bottom-10 left-28" >
      <div className="w-7 h-2 rounded-tr-full bg-green-400" />
    </div> */}
    <div className="z-20 fixed w-1 h-32 bg-white bottom-10 left-[14rem]" >
      <div className="w-7 h-2 rounded-tr-full bg-green-100" />
    </div>
    {/* <div className="z-20 fixed w-1 h-32 bg-white bottom-10 left-[21rem]" >
      <div className="w-7 h-2 rounded-tr-full bg-green-400" />
    </div> */}
    <div className="z-20 fixed w-1 h-32 bg-white bottom-10 left-[28rem]" >
      <div className="w-7 h-2 rounded-tr-full bg-green-100" />
    </div>
    {/* <div className="z-20 fixed w-1 h-32 bg-white bottom-10 left-[35rem]" >
      <div className="w-7 h-2 rounded-tr-full bg-green-400" />
    </div> */}
    <div className="z-20 fixed w-1 h-32 bg-white bottom-10 left-[42rem]" >
      <div className="w-7 h-2 rounded-tr-full bg-green-100" />
    </div>
    
    <div className="z-20 fixed w-1 h-32 bg-white bottom-10 right-[14rem]" >
      <div className="w-7 h-2 rounded-tr-full bg-green-100" />
    </div>
    {/* <div className="z-20 fixed w-1 h-32 bg-white bottom-10 right-[21rem]" >
      <div className="w-7 h-2 rounded-tr-full bg-green-400" />
    </div> */}
    <div className="z-20 fixed w-1 h-32 bg-white bottom-10 right-[28rem]" >
      <div className="w-7 h-2 rounded-tr-full bg-green-100" />
    </div>
  




    <div ref={triggerRef} className="relative h-screen overflow-hidden">

      {/* Progress Bar */}
      <div className="absolute z-20 bottom-0 left-0 w-full h-10 border-t-4 border-gray-500 bg-gray-800">
        <div
          ref={progressBarRef}
          className="h-full bg-cyan-500 transition-all duration-100"
          style={{ width: `${pgComp}%` }}
        ></div>
      </div>

      {/* Sections */}
      <div ref={containerRef} className="flex w-[400vw] h-full">
        <div className="section w-screen h-full flex items-center flex-col justify-center  text-white text-4xl">
          
          <div className="h-[90%] relative bg-zinc-800 w-full">
            <h1 className="text-4xl">Night City</h1>

            <div className="bg-black z-10 w-16 h-52 p-3 absolute bottom-0 right-10 grid grid-cols-2 justify-items-center items-center">
              <p className="w-3 h-3 bg-white"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-zinc-800 hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white "></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-yellow-300"></p>
            </div>
            <div className="bg-black z-0 opacity-35 w-16 h-72 p-3 absolute bottom-0 right-40 grid grid-cols-2 justify-items-center items-center">
              <p className="w-3 h-3 bg-white"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-zinc-800 hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white "></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-yellow-300"></p>
            </div>

            <div className="bg-black z-10 w-16 h-52 p-3 absolute bottom-0 right-24 grid grid-cols-2 justify-items-center items-center">
              <p className="w-3 h-3 bg-white"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-yellow-300 "></p>
              <p className="w-3 h-3 bg-yellow-300 hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white"></p>
            </div>

            <div className="bg-black z-10 w-16 h-52 p-3 absolute bottom-0 right-52 grid grid-cols-2 justify-items-center items-center">
              <p className="w-3 h-3 bg-white"></p>
              <p className="w-3 h-3 bg-yellow-300 hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-yellow-300 "></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white"></p>
            </div>

            <div className="bg-black z-10 w-24 h-96 p-3 absolute bottom-0 right-80 grid grid-cols-3 justify-items-center items-center">
              <p className="w-3 h-3 bg-white"></p>
              <p className="w-3 h-3 bg-yellow-300 hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white "></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white"></p>
              <p className="w-3 h-3 bg-white"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white "></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
              <p className="w-3 h-3 bg-white"></p>
              <p className="w-3 h-3 bg-white"></p>
              <p className="w-3 h-3 bg-white hover:bg-yellow-300"></p>
            </div>
          </div>

          <div className="h-[10%] bg-black w-full">
          </div>
        
        </div>



        <div className="section w-screen h-full flex flex-col  items-center justify-center  text-white text-4xl">
          <div className="h-[90%] bg-zinc-800 w-full">

          </div>
          <div className="h-[10%] bg-black w-full">

          </div>
        </div>



        <div className="section w-screen h-full flex flex-col  items-center justify-center  text-white text-4xl">
          <div className="h-[90%] bg-green-600 w-full">

          </div>
          <div className="h-[10%] bg-black w-full">

          </div>
        </div>



        <div className="section w-screen h-full flex flex-col  items-center justify-center  text-white text-4xl">
          <div className="h-[90%] bg-yellow-600 w-full">

          </div>
          <div className="h-[10%] bg-black w-full">

          </div>
        </div>



      </div>
    </div>
    </>
  );
};

export default HorizontalScroll;
