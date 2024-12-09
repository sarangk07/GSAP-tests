'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
// import Image from 'next/image'

function BenTen() {
    const triggerRef = useRef(null)
    
    const textCon1 = useRef(null)
    const textCon2 = useRef(null)
    const intro1 = useRef(null)
    const logo = useRef(null)
    const aliText = useRef(null);
    const Ali1 = useRef(null);
    const Ali2 = useRef(null);
    const Ali3 = useRef(null);
    const Ali4 = useRef(null);
    const Ali5 = useRef(null);
    const Ali6 = useRef(null);
    const Ali7 = useRef(null);
    const Ali8 = useRef(null);
    const Ali9 = useRef(null);
    const Ali10 = useRef(null);

    const logo2 = useRef(null)



    const divRefs = useRef([]);

    
    const addToRefs = (el) => {
        if (el && !divRefs.current.includes(el)) {
            divRefs.current.push(el);
        }
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
//ben10 logo light effect
        gsap.to(logo.current,{
            borderColor:'green',
            repeat:-1,
            ease:'bounce.inOut'
        })

//ben10 logo2  effect
        gsap.to(logo2.current,{
            backgroundColor:'green',
            repeat:-1,
            duration:1,
            borderColor:'#4ade80',
            // rotate:'1.5rad',
            ease:'power2.inOut'
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                pin: true,
                start: "top top",
                end: "+=1900%",
                scrub: 1,
                // markers:true
            },
            defaults: { 
                ease: "none" 
            }
        })

        tl.to(document.body, {
            backgroundColor: "#f0f0f0",
        }, "start")
        
//ben10 logo animation
        .to(logo.current,{
            scale: 15,
            rotate:'10rad',
            opacity: 0,
            
        }, "start")


//green rounded thing animtaion effect
        .to(divRefs.current,{
            opacity:1,
            backgroundColor:'green',
            
        })
        .to(divRefs.current,{
            opacity:0,
            scale:5,
            
            
        },"<")


//BEN 10 text animation
        .to(textCon1.current, {
            scale: 7,
            opacity: 1,
            
        }, "-=1")
        .to(textCon1.current, {
            y:-1500,
            duration: 1.5,
            ease:'power3.inOut'
        },1)


//ben10 [details] component/div animtaion
        .to(textCon2.current,{
            backgroundColor:'green',
            opacity:1,
            paddingLeft:'20px',
            paddingRight:'20px',
            ease:'power4.in',
            scale:4,
        }, "-=0.3")
        .to(textCon2.current,{
            scale:17,
            opacity:0,
            ease:'power4.inOut',
        },"+=1")


//alien intro text
        .from(aliText.current,{
            display:'flex',
            scale: 10,
            opacity: 0,
            duration: 2,
        },"+=0")
        

//alien1  
    .to(logo2.current,{opacity:1,ease: "power2.out",rotate:'405deg' })


        .fromTo(Ali1.current, {
            scale: 0,
            opacity: 0,
            x: 0 
        }, {
            scale: 0.7,
            x: -40,
            opacity: 1,
            duration: 1.5, 
            ease: "power2.out" 
        })
        .fromTo(Ali1.current, {
            scale: 0.7,
            x: -40,
            opacity: 1
        }, {
            scale: 2,
            opacity: 0,
            x: -600,
            duration: 2, 
            ease: "power2.in" 
        }, "+=1") 

//alien2       
        .fromTo(Ali2.current, {
            scale: 0,
            opacity: 0,
            x: 0 
        }, {
            scale: 0.7,
            x: 40,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out" 
        })
        .fromTo(Ali2.current, {
            scale: 0.7,
            x: 40,
            opacity: 1
        }, {
            scale: 2,
            opacity: 0,
            x: 600,
            duration: 2, 
            ease: "power2.in" 
        }, "+=1") 

//alien3      
        .fromTo(Ali3.current, {
            scale: 0,
            opacity: 0,
            x: 0 
        }, {
            scale: 0.7,
            x: -40,
            opacity: 1,
            duration: 1.5, 
            ease: "power2.out" 
        })
        .fromTo(Ali3.current, {
            scale: 0.7,
            x: -40,
            opacity: 1
        }, {
            scale: 2,
            opacity: 0,
            x: -600,
            duration: 2, 
            ease: "power2.in" 
        }, "+=1") 
//alien4     
        .fromTo(Ali4.current, {
            scale: 0,
            opacity: 0,
            x: 0 
        }, {
            scale: 0.7,
            x: 40,
            opacity: 1,
            duration: 1.5, 
            ease: "power2.out" 
        })
        .fromTo(Ali4.current, {
            scale: 0.7,
            x: 40,
            opacity: 1
        }, {
            scale: 2,
            opacity: 0,
            x: 600,
            duration: 2, 
            ease: "power2.in" 
        }, "+=1") 

//alien5      
        .fromTo(Ali5.current, {
            scale: 0,
            opacity: 0,
            x: 0 
        }, {
            scale: 0.7,
            x: -40,
            opacity: 1,
            duration: 1.5, 
            ease: "power2.out" 
        })
        .fromTo(Ali5.current, {
            scale: 0.7,
            x: -40,
            opacity: 1
        }, {
            scale: 2,
            opacity: 0,
            x: -600,
            duration: 2, 
            ease: "power2.in" 
        }, "+=1") 

//alien6       
        .fromTo(Ali6.current, {
            scale: 0,
            opacity: 0,
            x: 0 
        }, {
            scale: 0.7,
            x: 40,
            opacity: 1,
            duration: 1.5, 
            ease: "power2.out" 
        })
        .fromTo(Ali6.current, {
            scale: 0.7,
            x: 40,
            opacity: 1
        }, {
            scale: 2,
            opacity: 0,
            x: 600,
            duration: 2, 
            ease: "power2.in" 
        }, "+=1") 

//alien7      
        .fromTo(Ali7.current, {
            scale: 0,
            opacity: 0,
            x: 0 
        }, {
            scale: 0.7,
            x: -40,
            opacity: 1,
            duration: 1.5, 
            ease: "power2.out" 
        })
        .fromTo(Ali7.current, {
            scale: 0.7,
            x: -40,
            opacity: 1
        }, {
            scale: 2,
            opacity: 0,
            x: -600,
            duration: 2, 
            ease: "power2.in" 
        }, "+=1") 

//alien8    
        .fromTo(Ali8.current, {
            scale: 0,
            opacity: 0,
            x: 0 
        }, {
            scale: 0.7,
            x: 40,
            opacity: 1,
            duration: 1.5, 
            ease: "power2.out" 
        })
        .fromTo(Ali8.current, {
            scale: 0.7,
            x: 40,
            opacity: 1
        }, {
            scale: 2,
            opacity: 0,
            x: 600,
            duration: 2, 
            ease: "power2.in" 
        }, "+=1") 

//alien9       
        .fromTo(Ali9.current, {
            scale: 0,
            opacity: 0,
            x: 0 
        }, {
            scale: 0.7,
            x: -40,
            opacity: 1,
            duration: 1.5, 
            ease: "power2.out" 
        })
        .fromTo(Ali9.current, {
            scale: 0.7,
            x: -40,
            opacity: 1
        }, {
            scale: 2,
            opacity: 0,
            x: -600,
            duration: 2, 
            ease: "power2.in" 
        }, "+=1") 

//alien10      
        .fromTo(Ali10.current, {
            scale: 0,
            opacity: 0,
            x: 0 
        }, {
            scale: 0.7,
            x: 40,
            opacity: 1,
            duration: 1.5, 
            ease: "power2.out" 
        })
        .fromTo(Ali10.current, {
            scale: 0.7,
            x: 40,
            opacity: 1
        }, {
            scale: 2,
            opacity: 0,
            x: 600,
            duration: 2, 
            ease: "power2.in" 
        }, "+=1") 


    .to(logo2.current,{opacity:0,rotate:'180deg'})
//-------------------------------



//final animation text
        .to(intro1.current,{
            backgroundColor:'white',
            opacity:1, 
        },"+=1")

        // .to('.scaleableImg', {
        //     opacity: 0
        // })

    }, [])

    return (
        <div className="overflow-hidden bg-zinc-900">
            <div className="upper-container fixed w-full h-screen flex flex-col items-center justify-center font-light">
                
{/* green roundes----- */}
                <div ref={addToRefs} className='top-44 opacity-0 left-40 w-10 h-10 z-40 rounded-3xl bg-green-400 border-l-4 border-green-300 absolute'/>
                <div ref={addToRefs} className='top-48 opacity-0  w-5 h-5 z-40 rounded-3xl bg-green-400 border-l-4 border-green-300 absolute'/>
                <div ref={addToRefs} className='top-52 opacity-0 right-40 w-3 h-3 z-40 rounded-3xl bg-green-400 border-l-4 border-green-300 absolute'/>
                <div ref={addToRefs} className='opacity-0 right-32 w-8  h-8 z-40 rounded-3xl bg-green-400 border-l-4 border-green-300 absolute'/>
                <div ref={addToRefs} className='bottom-0 opacity-0 w-7 h-7 z-40 rounded-3xl bg-green-400 border-l-4 border-green-300 absolute'/>
                <div ref={addToRefs} className='top-0 opacity-0 w-10 h-10 z-40 rounded-3xl bg-green-400 border-l-4 border-green-300 absolute'/>
                <div ref={addToRefs} className='bottom-42 opacity-0 w-10 h-10 z-40 rounded-3xl bg-green-400 border-l-4 border-green-300 absolute'/>
                <div ref={addToRefs} className='bottom-56 opacity-0 right-40 w-6 h-6 z-40 rounded-3xl bg-green-400 border-l-4 border-green-300 absolute'/>
                <div ref={addToRefs} className='bottom-48 opacity-0  w-5 h-5 z-40 rounded-3xl bg-green-400 border-l-4 border-green-300 absolute'/>
                <div ref={addToRefs} className='bottom-52 opacity-0 left-40 w-10 h-10 z-40 rounded-3xl bg-green-400 border-l-4 border-green-300 absolute'/>
                <div ref={addToRefs} className=' left-[39%] opacity-0 w-5  h-5 z-40 rounded-3xl bg-green-400 border-l-4 border-green-300 absolute'/>
{/* ----- */}


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
                    className="absolute w-full  h-screen  font-sans flex items-center justify-center text-green-600 font-bold  text-[20px] opacity-0"  
                >
                    BEN <span className='text-zinc-200 ml-1 '>10</span>                
                </div>

                <div ref={textCon2}
                    className='absolute w-full h-screen flex flex-col items-center justify-center text-black font-bold  text-[8px] opacity-0'>
                    {/* <p>Ben 10 </p>
                    <p className=' p-5 text-[5px] w-[20%]'>The Ben 10 franchise is a widely popular animated series created by Man of Action and produced by Cartoon Network Studios, first premiering in 2005</p>
                     */}
                <div className='py-7  h-fit flex font-mono flex-col lg:flex-row justify-center  bg-black text-white items-center '>
                    <div className='flex items-center lg:w-1/2 justify-center lg:justify-end'>
                        <img className='w-20 ' src="https://i.pinimg.com/736x/30/26/6f/30266fb72b6ba06968f300be6184ad61.jpg"  alt="" />
                    </div>
                    <div className='flex flex-col  lg:w-1/2 justify-center lg:items-start lg:pl-5 items-center flex-shrink'>
                        <h2 className='font-bold z-10 '>Ben 10 </h2>  
                        <p className='text-wrap z-10 text-[4px] w-[20%]'>The Ben 10 franchise is a widely popular animated series created by Man of Action and produced by Cartoon Network Studios, first premiering in 2005.</p>
                    </div>
                   
                </div>
                      
                </div>


                <div ref={aliText}  className='absolute hidden w-full h-screen  items-center justify-center text-zinc-100 font-bold text-[20px] '>
                    Here is Aliens
                </div>


{/* Aliens------------ */}


                <div ref={Ali1}  className='absolute z-10 flex-col opacity-0 flex w-full h-screen  items-center justify-center text-orange-600 font-bold  '>
                    <div>
                        <img src="./B10/Wildmutt.png" alt="Wildmutt" style={{filter: 'drop-shadow(15px 5px 30px rgb(251 146 60))'}} />
                    </div>
                    <div className='font-mono'>
                        Wildmutt
                    </div>
                </div>

                <div ref={Ali2}  className='absolute z-10 flex-col opacity-0 flex w-full h-screen  items-center justify-center text-red-600 font-bold  '>
                    <div>
                        <img src="./B10/Four_Arms.png" alt="Four_Arms" style={{filter: 'drop-shadow(15px 5px 30px rgb(248 113 113))'}} />
                    </div>
                    {/* <div className='font-mono text-2xl'>
                    Four Arms
                    </div> */}
                </div>

                <div ref={Ali3}  className='absolute z-10 flex-col opacity-0 flex w-full h-screen  items-center justify-center text-gray-500 font-bold  '>
                    <div>
                        <img src="./B10/Grey_Matter.png" alt="Grey_Matter" style={{filter: 'drop-shadow(15px 5px 30px rgb(156 163 175))'}} />
                    </div>
                    {/* <div className='font-mono'>
                    Grey Matter
                    </div> */}
                </div>

                <div ref={Ali4}  className='absolute z-10 flex-col opacity-0 flex w-full h-screen  items-center justify-center text-cyan-500 font-bold  '>
                    <div>
                        <img src="./B10/xlr8.png" alt="XLR8" style={{filter: 'drop-shadow(15px 5px 30px rgb(6 182 212))'}} />
                    </div>
                    {/* <div className='font-mono'>
                    XLR8
                    </div> */}
                </div>

                <div ref={Ali5}  className='absolute z-10 flex-col opacity-0 flex w-full h-screen  items-center justify-center text-green-500 font-bold  '>
                    <div>
                        <img src="./B10/upgrade.png" alt="Upgrade" style={{filter: 'drop-shadow(15px 5px 30px rgb(21 128 61))'}} />
                    </div>
                    {/* <div className='font-mono'>
                    Upgrade
                    </div> */}
                </div>

                <div ref={Ali6}  className='absolute z-10 flex-col opacity-0 flex w-full h-screen  items-center justify-center text-emerald-400 font-bold  '>
                    <div>
                        <img src="./B10/Diamondhead.png" alt="Diamondhead" style={{filter: 'drop-shadow(15px 5px 30px rgb(52 211 153))'}} />
                    </div>
                    {/* <div className='font-mono'>
                    Diamondhead
                    </div> */}
                </div>

                <div ref={Ali7}  className='absolute z-10  flex-col opacity-0 flex w-full h-screen  items-center justify-center text-green-600 font-bold  '>
                    <div>
                        <img src="./B10/Ripjaws.png" alt="Ripjaws" style={{filter: 'drop-shadow(15px 5px 30px rgb(187 247 208))'}} />
                    </div>
                    {/* <div className='font-mono'>
                    Ripjaws
                    </div> */}
                </div>

                <div ref={Ali8}  className='absolute z-10 flex-col opacity-0 flex w-full h-screen  items-center justify-center text-lime-500 font-bold  '>
                    <div>
                        <img src="./B10/Stinkfly.png" alt="Stinkfly" style={{filter: 'drop-shadow(15px 5px 30px rgb(217 249 157))'}} />
                    </div>
                    {/* <div className='font-mono'>
                    Stinkfly
                    </div> */}
                </div>

                <div ref={Ali9}  className='absolute z-10 flex-col opacity-0 flex w-full h-screen  items-center justify-center text-zinc-500 font-bold  '>
                    <div>
                        <img src="./B10/Ghostfreak.png" alt="Ghostfreak" style={{filter: 'drop-shadow(15px 5px 30px rgb(161 161 170))'}} />
                    </div>
                    {/* <div className='font-mono'>
                    Ghostfreak
                    </div> */}
                </div>

                <div ref={Ali10}  className='absolute z-10 flex-col opacity-0 flex w-full h-screen  items-center justify-center text-orange-400 font-bold  '>
                    <div>
                        <img src="./B10/Heatblast.png" alt="Heatblast" style={{filter: 'drop-shadow(15px 5px 30px rgb(251 146 60))'}} />
                    </div>
                    {/* <div className='font-mono'>
                    Heat blast
                    </div> */}
                </div>

                <div ref={logo2} className='bg-green-400 opacity-0 w-[70vh] h-[70vh] rounded-full border-8 border-white'>
                    <div className='w-full z-0 flex overflow-hidden bg-transparent h-full rounded-full border-[20px] border-zinc-900'>
<div className='relative rounded-md top-[55%] w-1/2 h-full right-4  bg-black '/>
<div className='relative rounded-md -top-[52%] w-1/2 h-full left-4  bg-black '/>
                    </div>
                </div>

{/* ------------------- */}



                <div ref={intro1}
                className='absolute w-full h-screen justify-center text-black items-center flex opacity-0 text-12px'>
                    Still  work in progres , See you Later....
                </div> 


                
            </div>
        </div>
    )
}

export default BenTen