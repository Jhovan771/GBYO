import React from "react";
import { MdEmail } from "react-icons/md";
import { MdSubject } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { TbSend2 } from "react-icons/tb";

const Contact = () => {
  return (
    <div id='contact' className='mt-24 px-8 mx-auto'>
      <h1 className='font-serif text-4xl font-bold border-b-4 w-52 pl-4 text-slate-800'>
        CONTACT
      </h1>
      <form action='https://formspree.io/f/xjvneypn' method='POST'>
        <div className='grid p-2'>
          <div className='flex justify-center items-center'>
            <h1 className='font-serif font-bold text-3xl text-slate-800'>
              SEND US AN EMAIL
            </h1>
          </div>
          <div className='flex justify-evenly items-center p-2 rounded'>
            <span className='w-auto flex items-center'>
              <MdEmail className='h-12 w-10' />
            </span>
            <input
              className='w-full p-4 font-serif font-semibold h-8 border-2 text-slate-700 border-slate-300 rounded text-center'
              type='email'
              name='email'
              placeholder='email123@gmail.com'
            />
          </div>
          <div className='flex justify-evenly items-center p-2 rounded'>
            <span className='w-auto flex items-center'>
              <MdSubject className='h-12 w-10' />
            </span>
            <input
              className='w-full p-4 font-serif font-semibold h-8 border-2 text-slate-700 border-slate-300 rounded text-center'
              type='text'
              name='subject'
              placeholder='Subject'
            />
          </div>
          <div className='flex p-2 bg-slate-100'>
            <span className='w-auto flex items-start'>
              <TbMessages className='h-12 w-10' />
            </span>
            <div className='border-2 border-slate-300 rounded w-full'>
              <textarea
                name='message'
                id='message'
                cols='4'
                rows='5'
                className='w-full p-4 font-serif font-semibold border text-slate-700 border-slate-300 rounded'
                placeholder='Write your message here...'></textarea>
            </div>
          </div>
          <div className='flex justify-start mb-5'>
            <button
              type='submit'
              className='bg-blue-700 text-white mt-6 w-32 h-12 flex justify-center items-center font-serif font-bold rounded-md shadow-md hover:bg-blue-900 duration-300'>
              Submit{" "}
              <span className='flex items-center justify-center w-8 h-8'>
                <TbSend2 />
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
