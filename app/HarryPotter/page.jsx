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

        <div className='h-5/6 bg-zinc-300'>
            <div className='h-1/6 mb-1 bg-zinc-400 flex items-center justify-between'>
                <div className='text-xs px-2 py-3 '>A LIST OF KNOWN DEATH EATERS WILL BE DRLIVERED TO ALL WIZARDING HOMES</div>
                <div className='text-xs px-2 py-3'>Evening Weather</div>
                <div className='text-xs px-2 py-3'>Zodiac * Aspecia</div>
                <div className='text-xs px-2 py-3'>Rita Skeelers</div>
                <div className='text-xs px-2 py-3'>Dates Events etc...</div>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center h-5/6 border border-zinc-900'>
                <div className='text-7xl lg:text-[9rem] first-letter:flex flex-col justify-start items-start  px-3'>
                    THE DARK LORD <span className='text-7xl bg-zinc-800 text-zinc-200'>DEFEATED</span>
                </div>
                <div className='px-3 py-2 relative'>
                    <div className='flex flex-row justify-between'>
                        <img className='px-3 w-52 h-48 lg:w-80 lg:h-64' src="./HarryPotter/H0Lz.gif" alt="" />
                            {/* <iframe className='cursor-none' src="https://gifer.com/embed/H0Lz"></iframe> */}



                        
                        <p className='text-wrap lg:text-2xl px-3'>In a historic turn of events, the wizarding world rejoices as the notorious Dark Lord has been vanquished once and for all. This monumental victory comes after a fierce battle at Hogwarts School of Witchcraft and Wizardry, where brave witches and wizards united to confront the greatest threat to the magical community.</p>
                    </div>
                    <div>
                        <p className='text-wrap lg:text-2xl px-3 border-l border-b border-zinc-400'>
                            Witnesses report that the final showdown was nothing short of spectacular, with spells flying and courage on full display. The Boy Who Lived, Harry Potter, played a pivotal role in this triumph, leading his friends and allies against overwhelming odds. In a climactic moment, Potter faced the Dark Lord directly, employing not just his formidable magical skills but also the strength derived from love and friendship.
                            The defeat of the Dark Lord marks a new dawn for wizards and witches everywhere. Celebrations are erupting across the globe, with magical communities hosting feasts, fireworks, and jubilant gatherings. The Ministry of Magic has declared a national holiday to honor the fallen heroes who fought valiantly in the battle.
                            As we reflect on this victory, we remember those who sacrificed their lives for peace and justice. The legacy of their bravery will live on in our hearts and history books. Hogwarts will forever stand as a symbol of resilience against darkness, reminding us that even in our darkest hours, hope can prevail.
                            Stay tuned for more updates as we cover the aftermath of this historic event and explore what lies ahead for our beloved wizarding world.
                            In a historic turn of events, the wizarding world rejoices as the notorious Dark Lord has been vanquished once and for all. This monumental victory comes after a fierce battle at Hogwarts School of Witchcraft and Wizardry, where brave witches and wizards united to confront the greatest threat to the magical community.
                        </p>
                    </div>

                    
                    
                    
                </div>
                {/* <div className='absolute bottom-0-0'>
                        <img src="./HarryPotter/H0Lz.gif" alt="" />
                        <p className='relative bg-red-600 w-fit m-5'> hellllllllllllllllllllllllllloloooo</p>
                    </div> */}
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
