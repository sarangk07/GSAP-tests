'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Observer from 'gsap/Observer'

function TheDailyProphet() {
    const page1ref = useRef(null)
    const pLetterReff = useRef(null)
    const firstImgReff = useRef(null)
    const newS1ref = useRef(null)

    const page2ref = useRef(null)
    const page3ref = useRef(null)

    const defetedTextRef = useRef(null)

    useEffect(()=>{

        gsap.registerPlugin(Observer)

        gsap.to(defetedTextRef.current,{
            backgroundColor:'black',
            repeat:-1,
            duration:1,
            yoyo:true,
            ease:'elastic.in'
        })

        const observerN1 = Observer.create({
            target:newS1ref.current,
            type:"wheel,touch,pointer",

            onChange: (self) => {
                console.log("Velocity X:", self.velocityX);
                console.log("Delta Y:", self.deltaY);
            },
            onHover:()=>{
                gsap.to(newS1ref.current,{
                    backgroundColor:'#d4d4d8',
                    scaleY:1.1
                })
            },
            onHoverEnd:()=>{
                gsap.to(newS1ref.current,{
                     backgroundColor:'#a1a1aa',
                     scaleY:1
                })
            },
            // onDown:()=>{
            //     gsap.to(firstImgReff.current,{
            //         scale:1.5
            //     })
            // }
        })

        return () => {
            observerN1.kill();
        };
    },[])





  return (
    <>

{/* page1 */}
    <div className='w-full cursor-default p-1 font-dualityregular text-zinc-800 bg-zinc-300 absolute overflow-x-hidden'>
        <div className='h-1/6 bg-zinc-200 flex flex-col justify-center items-center'>
            <h4 className='h-1/4 flex items-center text-xs font-dualityregular'>the</h4>
            <h1 className='h-3/4 text-3xl lg:text-6xl font-serif font-extrabold m-0 p-0'>DAILY <span ref={pLetterReff} className='text-yellow-500'>P</span>ROPHET</h1>
            <p className='text-[8px] lg:text-xs'>★ THE WIZARD WORLD'S BEGUILNG BROADSHEET OF CHOICE ★</p>
        </div>

        <div className='h-5/6 '>
            <div className='h-1/6 mb-1 bg-zinc-300 font-serif flex items-top justify-around'>
                {/* <div className='text-xs px-2 py-3 '>A LIST OF KNOWN DEATH EATERS WILL BE DRLIVERED TO ALL WIZARDING HOMES</div> */}
                <div className='text-[7px] lg:text-base font-bold  py-2'>
                    <h3>National Weather</h3>
                    <p>south - sunny period 11c</p>
                    <p>north - cloudy & rain 9C</p>
                    <p>central - sunny period 10c</p>
                    <p>London - cloudy & rain 14C</p>
                </div>
                <div className='text-[8px] font-dualityregular lg:text-base  py-2'>
                    <h3>Zodiac ★ Aspects</h3>
                    <p>ta- virgo luna opp-</p>
                    <p>in- aries - com t</p>
                    <p>s sizio ne pi ★ sees</p>
                </div>
                <div className='text-[8px] lg:text-base rounded-sm bg-zinc-600 text-zinc-100 px-2  py-2'>
                    <h2>FIRST-SECOND EDITION</h2>
                    <p>D* 978999-London - UK</p>
                    <p>TODAY in Scorpio</p>
                    <p></p>
                </div>
                <div className='text-[8px] lg:text-base font-bold  py-2'>
                    <p className=''>
                        A LIST OF
                    </p>
                    <p className=''>
                        KNOWN DEATH
                    </p>
                    <p className=''>
                        EATERS WILL BE
                    </p>
                    <p className=''>
                        DELIVERED TO ALL
                    </p>
                    <p>
                        WIZARDING HOMES
                    </p>
                </div>
            </div>
            <div className='flex  flex-col lg:flex-row items-center justify-center h-5/6 bg-zinc-200 border border-zinc-900'>
                <div className='font-serif text-7xl  lg:text-[9rem] first-letter:flex flex-col justify-start items-start  px-3'>
                    THE DARK LORD <span ref={defetedTextRef} className='text-7xl bg-zinc-800 text-zinc-200 '>DEFEATED</span>
                </div>
                <div className='px-3  py-2 relative'>
                    <div className='items-center'>
                        <img ref={firstImgReff} className='px-3 w-52 h-48 lg:w-80 lg:h-64 float-left' src="./HarryPotter/H0Lz.gif" alt="" />
                        <p className='text-wrap lg:text-2xl px-3'>
                            <span className='font-bold text-4xl'>I</span>n a historic turn of events, the wizarding world rejoices as the notorious Dark Lord has been vanquished once and for all. This monumental victory comes after a fierce battle at Hogwarts School of Witchcraft and Wizardry, where brave witches and wizards united to confront the greatest threat to the magical community.   As we reflect on this victory, we remember those who sacrificed their lives for peace and justice.
                            The defeat of the Dark Lord marks a new dawn for wizards and witches everywhere. Celebrations are erupting across the globe, with magical communities hosting feasts, fireworks, and jubilant gatherings. The Ministry of Magic has declared a national holiday to honor the fallen heroes who fought valiantly in the battle.
                        </p>
                    </div>
                    <div ref={newS1ref} className='bg-zinc-400 '>
                        <div className='flex lg:text-1xl px-3 border-l border-b border-zinc-400'>
                            
                            <div className='text-xl font-bold float-start'>
                                <p>T</p>
                                <p>H</p>
                                <p>E</p>
                                <p>R</p>
                                <p>E</p>
                            </div>

                            <div className='pl-2'>
                                <p className='text-lg font-bold'>
                                    IS NOTHING TO FEAR
                                </p>
                                <p>As we reflect on this victory, we remember those who sacrificed their lives for peace and justice. The legacy of their bravery will live on in our hearts and history books. Hogwarts will forever stand as a symbol of resilience against darkness, reminding us that even in our darkest hours, hope can prevail.</p>
                            </div>
                            
                        </div>
                    </div>                
                </div>
                
            </div>
            <div className='pb-5 px-3 bg-zinc-300 border border-zinc-600'>
                <p className='w-fit font-serif lg:text-2xl text-lg font-extrabold'>MUGGLE-BORN STUDENTS DISCOVER THE ART OF MUGGLE DANCE</p>
                <img className=' w-32 h-32 md:w-24 md:h-24 float-right grayscale' src="./HarryPotter/8qqx.gif" alt="" />
                <p className='  w-fit font-light lg:text-xl '><span className='font-bold text-xl'>I</span>n an effort to bridge the gap between magical and non-magical cultures, a group of Muggle-born students at Hogwarts has started a dance club featuring popular Muggle dance styles. From the Electric Slide to the Macarena, students are embracing these new moves with enthusiasm—and a fair bit of clumsiness. Professor Flitwick has even offered extra credit for those who can master the Moonwalk without tripping over their own feet!</p>
            </div>
        </div>

    </div>



{/* page2 */}
    <div className='w-full h-screen bg-zinc-300 hidden absolute'>


    </div>



{/* page3 */}
    <div className='w-full h-screen bg-zinc-300 hidden absolute'>


    </div>


    </>
  )
}

export default TheDailyProphet
