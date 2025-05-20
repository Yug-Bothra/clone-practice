import React from 'react'
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full rounded-tl-3xl rounded-tr-3xl py-20 bg-[#004D43] overflow-hidden'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-10'>

        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration:10 }}
          className='text-[22vw] leading-none font-["Founders_Grotesk_x-Condensed"] uppercase font-semibold mb-5'>
          we create super web clones
        </motion.h1>
      
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className='text-[22vw] leading-none font-["Founders_Grotesk_x-Condensed"] uppercase font-semibold mb-5'>
          we create super web clones
        </motion.h1>
        
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration:10 }}
          className='text-[22vw] leading-none font-["Founders_Grotesk_x-Condensed"] uppercase font-semibold mb-5' >
          we create super web clones
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
