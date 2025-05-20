import { motion } from 'framer-motion';
import React, { useState } from 'react';

function Featured() {
  const [hovering, setHovering] = useState({
    salience: false,
    spaceship: false,
    fyde: false,
    vise: false
  });

  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".4" className="py-20 bg-black text-white">
      <div className='ml-10 text-5xl font-["Neue_Montreal"] tracking-tight'>
        <h1>Featured Projects</h1>
      </div>

      <div className="mt-10 border-t border-b border-zinc-700">

        {/* Headings Row 1 */}
        <div className="px-20 flex mt-10 gap-20">
          <div className="cardheading w-full ml-10">
            <h1 className="w-1/2">Salience Labs</h1>
          </div>
          <div className="cardheading w-full ml-10">
            <h1 className="w-1/2">Cardboard Spaceship</h1>
          </div>
        </div>

        {/* Card Row 1 */}
        <div className="px-20">
          <div className="cards w-full flex gap-20 ml-10 mt-10">
            {/* Salience Labs */}
            <div
              onMouseEnter={() => setHovering({ ...hovering, salience: true })}
              onMouseLeave={() => setHovering({ ...hovering, salience: false })}
              className="card h-[34vw] w-1/2 relative"
            >
              <h1 className='absolute flex overflow-hidden text-8xl z-[9] leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"Salience Labs".split('').map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={hovering.salience ? { y: "0" } : { y: "100%" }}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                    className="inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="bg-cover rounded-3xl w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
                alt="Salience Labs"
              />
            </div>

            {/* Cardboard Spaceship */}
            <div
              onMouseEnter={() => setHovering({ ...hovering, spaceship: true })}
              onMouseLeave={() => setHovering({ ...hovering, spaceship: false })}
              className="card h-[34vw] w-1/2 relative"
            >
              <h1 className='absolute flex overflow-hidden text-8xl z-[9] leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"Cardboard Spaceship".split('').map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={hovering.spaceship ? { y: "0" } : { y: "100%" }}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                    className="inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="bg-cover rounded-3xl w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt="Cardboard Spaceship"
              />
            </div>
          </div>
        </div>

        {/* Headings Row 2 */}
        <div className="px-20 flex mt-10 gap-20 mb-10">
          <div className="cardheading w-full ml-10">
            <h1 className="w-1/2">Fyde</h1>
          </div>
          <div className="cardheading w-full ml-10">
            <h1 className="w-1/2">Vise</h1>
          </div>
        </div>

        {/* Card Row 2 */}
        <div className="px-20">
          <div className="cards w-full flex gap-20 ml-10 mt-10 mb-10">
            {/* Fyde */}
            <div
              onMouseEnter={() => setHovering({ ...hovering, fyde: true })}
              onMouseLeave={() => setHovering({ ...hovering, fyde: false })}
              className="card h-[30vw] w-1/2 relative"
            >
              <h1 className='absolute flex overflow-hidden text-8xl z-[9] leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"Fyde".split('').map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={hovering.fyde ? { y: "0" } : { y: "100%" }}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                    className="inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="bg-cover rounded-3xl w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png"
                alt="Fyde"
              />
            </div>

            {/* Vise */}
            <div
              onMouseEnter={() => setHovering({ ...hovering, vise: true })}
              onMouseLeave={() => setHovering({ ...hovering, vise: false })}
              className="card h-[30vw] w-1/2 relative"
            >
              <h1 className='absolute flex overflow-hidden text-8xl z-[9] leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"Vise".split('').map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={hovering.vise ? { y: "0" } : { y: "100%" }}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                    className="inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="bg-cover rounded-3xl w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg"
                alt="Vise"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Featured;
