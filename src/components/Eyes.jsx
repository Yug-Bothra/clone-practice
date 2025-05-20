import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function Eyes() {
    const [rotate, setRotate]= useState(0);
    useEffect(()=> {
        window.addEventListener("mousemove",(e)=>{
            let MouseX = e.clientX 
            let MouseY = e.clientY
            let deltaX = MouseX - window.innerWidth/2; 
            let deltaY = MouseY - window.innerHeight/2;
            
            var angle = Math.atan2 (deltaY, deltaX) * (180/Math.PI);
            setRotate(angle - 180)
    })
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden'>

      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center rounded-tl-3xl rounded-tr-3xl'
           style={{ backgroundImage: 'url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)' }}>
        <div className="absolute flex gap-10 h-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className='w-[12vw] h-[12vw] rounded-full bg-zinc-100 flex items-center justify-center'>
                <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                    <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8 ">
                        <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                    </div>
                    </div>

            </div>
            <div className='w-[12vw] h-[12vw] rounded-full bg-zinc-100 flex items-center justify-center '>
                <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8 ">
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
            </div>
            </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
