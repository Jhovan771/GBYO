import React from "react";
import { IoSettingsOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div id='footer'>
      <div className='bg-slate-900 flex justify-center items-center h-12'>
        <h1 className='text-white font-serif text-xl flex'>
          Under Development{" "}
          <span className='flex justify-center items-center pl-4'>
            <IoSettingsOutline className='animate-spin' />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
