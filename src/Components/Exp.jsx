import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Exp = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>LEARN FROM EXPERTS:</p>
          <p>
          "Unlock your full potential with our expert-led courses. Our distinguished team of professionals brings decades of industry experience to guide you through comprehensive learning journeys. Acquire valuable skills and knowledge in a dynamic, interactive environment. Elevate your expertise with courses crafted by the best in the field. Join us on a transformative learning experience." 
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Exp;
