import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-20 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left Column: Headline */}
        <div>
          <h2 className="text-5xl font-bold leading-none text-white">
            EYE-<br />OPENING
          </h2>
        </div>

        {/* Middle Column: Social, Locations, Email */}
        <div className="flex flex-col gap-8 text-sm text-gray-300">
          {/* Social */}
          <div>
            <h4 className="font-semibold mb-2 text-white">S:</h4>
            <ul className="space-y-1">
              <li><a href="#" className="underline hover:text-white">Instagram</a></li>
              <li><a href="#" className="underline hover:text-white">Behance</a></li>
              <li><a href="#" className="underline hover:text-white">Facebook</a></li>
              <li><a href="#" className="underline hover:text-white">Linkedin</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-2 text-white">L:</h4>
            <ul className="space-y-1">
              <li><a href="#" className="underline hover:text-white">202-1965 W 4th Ave</a></li>
              <li><a href="#" className="underline hover:text-white">Vancouver, Canada</a></li>
              <li><a href="#" className="underline hover:text-white">30 Chukarina St</a></li>
              <li><a href="#" className="underline hover:text-white">Lviv, Ukraine</a></li>
            </ul>
          </div>

          {/* Email */}
          <div>
            <h4 className="font-semibold mb-2 text-white">E:</h4>
            <a href="mailto:hello@ochi.design" className="underline hover:text-white">hello@ochi.design</a>
          </div>
        </div>

        {/* Right Column: Menu */}
        <div className="text-sm text-gray-300">
          <h4 className="font-semibold mb-2 text-white">M:</h4>
          <ul className="space-y-1">
            <li><a href="#" className="underline hover:text-white">Home</a></li>
            <li><a href="#" className="underline hover:text-white">Services</a></li>
            <li><a href="#" className="underline hover:text-white">Our work</a></li>
            <li><a href="#" className="underline hover:text-white">About us</a></li>
            <li><a href="#" className="underline hover:text-white">Insights</a></li>
            <li><a href="#" className="underline hover:text-white">Contact us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <span>© ochi design 2025. <a href="#" className="underline hover:text-white">Legal Terms</a></span>
        <span className="mt-2 md:mt-0">Website by Obys</span>
      </div>
    </footer>
  );
};

export default Footer;
