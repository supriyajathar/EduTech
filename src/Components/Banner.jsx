import React from 'react';


const Banner = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[black] font-bold p-2 text-3xl top-4'>
          Learn with us
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[black]'>
          Grow with us.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[black]'>
            Learn web developement
          </p>
          {/* <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[black]'
            strings={['Data science', 'Web Development', 'Ethical Hacking']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
        </div>
        <button className='bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
    </div>
  );
};

export default Banner;


