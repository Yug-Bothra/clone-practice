import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-32 ml-10">
        {["we create", "eye opening", "presentations"].map((items, index) => (
          <div className="masker flex items-center mb-[1vw]" key={index}>
            {index === 1 && (
              <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 2}}
                className="w-[9vw] h-[5vw] bg-gray-200 rounded-md mr-[1vw]"
                aria-hidden="true"
              ></motion.div>
            )}
            <h1 className="uppercase text-[6vw] leading-[7vw] tracking-tighter font-['Founders_Grotesk_x-Condensed'] font-semibold">
              {items}
            </h1>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20 uppercase">
        {[
          "from the public and private compnie",
          "to the first page of an ipo",
        ].map((items, index) => (
          <p
            key={index}
            className="text-sm font-light tracking-tight leading-none"
          >
            {items}
          </p>
        ))}

        <div className="start flex items-center gap-5 cursor-pointer">
          <div className="px-5 py-2 border-[2px] rounded-3xl border-zinc-500 hover:bg-zinc-100 hover:text-black">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500 hover:bg-zinc-100 duration-200 hover:text-black">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
