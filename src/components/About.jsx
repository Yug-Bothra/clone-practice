import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl '>
        <div className='text-black ml-10'>
           <div className="text-[3vw] font-['Neue_Montreal'] leading-[3.5vw]">
            <h1>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            </div>
            </div>
            <div className='w-fix -mx-20 text-black h-[25vw] flex gap-20 text-[1.2vw] border-t border-b border-black mt-10'>
                <div className='head w-[35vw] h-[20vw] mt-10 ml-20'>
                    <p>What you can expect:</p>
                </div>
                 <div className='pera w-[35vw] h-[20vw] mt-10'>
                    <p >We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
                </p>
                
                <p className='py-20'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                </div>
            </div>
             <div className='flex gap-20 text-black mt-10'>
                <div className='head w-[35vw] h-[20vw] mt-10'>
                    <h2 className='text-[3vw]'>Our approach:</h2>
                    <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-4 px-5 py-2 border-[2px] rounded-3xl border-zinc-500 bg-black text-white">
                <span>Read More</span>
                <div className="w-5 h-5 flex items-center justify-center rounded-full border-[1px] border-zinc-500 ">
                <span className="rotate-[45deg]">
                    <FaArrowUpLong />
                </span>
                </div>
            </div>
            </div>

                </div>
                <div className='w-1/2 h-[31vw] mt-10 rounded-2xl'>
                    <img 
                        src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" 
                        alt="Presentation Example"
                        className="w-full max-w-full rounded"
                        />

                </div>
             </div>
        
    </div>
  )
}

export default About