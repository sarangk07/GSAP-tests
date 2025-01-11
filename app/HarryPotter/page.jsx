'use client'

import React, { useRef } from 'react'

function TheDailyProphet() {
    const page1ref = useRef(null)
    const page2ref = useRef(null)
    const page3ref = useRef(null)





  return (
    <>

{/* page1 */}
    <div className='w-full p-1  text-zinc-800 bg-zinc-300 absolute'>
        <div className='h-1/6 bg-zinc-200 flex flex-col justify-center items-center'>
            <h4 className='h-1/4 flex items-center text-xs'>the</h4>
            <h1 className='h-3/4 text-3xl lg:text-6xl font-serif font-extrabold m-0 p-0'>DAILY <span className='text-yellow-500'>P</span>ROPHET</h1>
        </div>

        <div className='h-5/6 bg-zinc-500'>
            <div className='h-1/6 mb-1 bg-yellow-400 flex items-center justify-between'>
                <div className='text-xs px-2 py-3 '>A LIST OF KNOWN DEATH EATERS WILL BE DRLIVERED TO ALL WIZARDING HOMES</div>
                <div className='text-xs px-2 py-3'>Evening Weather</div>
                <div className='text-xs px-2 py-3'>Zodiac * Aspecia</div>
                <div className='text-xs px-2 py-3'>Rita Skeelers</div>
                <div className='text-xs px-2 py-3'>Dates Events etc...</div>
            </div>
            <div className='flex bg-red-400  flex-col lg:flex-row items-center justify-center h-5/6 border border-zinc-900'>
                <div className='text-7xl bg-blue-400  lg:text-[9rem] first-letter:flex flex-col justify-start items-start  px-3'>
                    THE DARK LORD <span className='text-7xl bg-zinc-800 text-zinc-200'>DEFEATED</span>
                </div>
                <div className='px-3 bg-green-400  py-2 relative'>
                    <div className='  bg-yellow-400 items-center'>
                        <img className='px-3 w-52 h-48 lg:w-80 lg:h-64 float-left' src="./HarryPotter/H0Lz.gif" alt="" />
                            {/* <iframe className='cursor-none' src="https://gifer.com/embed/H0Lz"></iframe> */}
                        <p className='text-wrap lg:text-2xl px-3'>
                             <span className='font-bold inline-flex'>In</span> a historic turn of events, the wizarding world rejoices as the notorious Dark Lord has been vanquished once and for all. This monumental victory comes after a fierce battle at Hogwarts School of Witchcraft and Wizardry, where brave witches and wizards united to confront the greatest threat to the magical community.   As we reflect on this victory, we remember those who sacrificed their lives for peace and justice.
                             The defeat of the Dark Lord marks a new dawn for wizards and witches everywhere. Celebrations are erupting across the globe, with magical communities hosting feasts, fireworks, and jubilant gatherings. The Ministry of Magic has declared a national holiday to honor the fallen heroes who fought valiantly in the battle.
                             </p>
                    </div>
                    <div className='bg-pink-400 '>
                        <div className='flex lg:text-1xl px-3 border-l border-b border-zinc-400'>
                            
                            <div className='text-xl font-bold'>
                                <p>W</p>
                                <p>O</p>
                                <p>R</p>
                                <p>K</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>                
                </div>
                
            </div>
            <div className='pb-2 px-3 bg-cyan-700'>
                <p className='w-fit lg:text-lg text-lg font-bold'>MUGGLE-BORN STUDENTS DISCOVER THE ART OF MUGGLE DANCE</p>
                <img className=' w-32 h-32 float-right' src="./HarryPotter/8qqx.gif" alt="" />
                <p className=' bg-red-600 w-fit '>In an effort to bridge the gap between magical and non-magical cultures, a group of Muggle-born students at Hogwarts has started a dance club featuring popular Muggle dance styles. From the Electric Slide to the Macarena, students are embracing these new moves with enthusiasm—and a fair bit of clumsiness. Professor Flitwick has even offered extra credit for those who can master the Moonwalk without tripping over their own feet!</p>
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
