import React from "react";
import { IoMdDownload } from "react-icons/io";

const Home = () => {
  return (
    <div id='Home' className='grid grid-cols-1 pt-20 px-8 mx-auto '>
      <h1 className='flex flex-col justify-center items-center font-serif gap-4 rounded min-h-[32rem] border-b-4 border-gray-300'>
        <span className='sm:text-6xl font-bold text-center text-slate-800 text-lg w-auto'>
          Serve Christ today, don't delay or stray, for time swiftly flies away.
          Only one life to cast, make each moment last.
        </span>
        <span className='italic text-slate-800 mt-6 text-sm'>
          {" "}
          "If you declare with your mouth, 'Jesus is Lord,' and believe in your
          heart that God raised him from the dead, you will be saved." - Romans
          10:9 NIV
        </span>
        <button className='mt-6 font-mono font-semibold bg-black text-white p-4 px-6 rounded-full transition drop-shadow-md hover:text-[#c9c3a7] duration-300 flex gap-2 justify-center items-center'>
          Download
          <IoMdDownload className='animate-bounce' />
        </button>
      </h1>
      {/* <h1>Hello Home</h1> */}
    </div>
  );
};

export default Home;
