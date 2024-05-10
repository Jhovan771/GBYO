import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <>
      <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#e0ebe5] transition'>
        <ul className='text-center text-xl p-20'>
          <li className='my-4 py-4 border-b border-[#b19b68] hover:border-[#807a6a] hover:rounded  font-serif'>
            <ScrollLink
              to='Home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}>
              Home
            </ScrollLink>
          </li>
          <li className='my-4 py-4 border-b border-[#b19b68] hover:border-[#807a6a] hover:rounded  font-serif'>
            <ScrollLink
              to='About'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}>
              About
            </ScrollLink>
          </li>
          <li className='my-4 py-4 border-b border-[#b19b68] hover:border-[#807a6a] hover:rounded  font-serif'>
            <ScrollLink
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}>
              Contact Us
            </ScrollLink>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <nav className='fixed top-0 z-50 w-full bg-[#e0ebe5] drop-shadow-md'>
      <div className='h-16 flex justify-between items-center px-20 text-[#242424] lg:py-5'>
        <span className='text-xl font-serif'>GBYO</span>
        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              <li className='hover:text-[#c9c3a7] transition border-b-2 border-[#b19b68] hover:border-[#807a6a] cursor-pointer  font-serif'>
                <ScrollLink
                  to='Home'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Home
                </ScrollLink>
              </li>
              <li className='hover:text-[#c9c3a7] transition border-b-2 border-[#b19b68] hover:border-[#807a6a] cursor-pointer  font-serif'>
                <ScrollLink
                  to='About'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  About
                </ScrollLink>
              </li>
              <li className='hover:text-[#c9c3a7] transition border-b-2 border-[#b19b68] hover:border-[#807a6a] cursor-pointer  font-serif'>
                <ScrollLink
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className='block sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
