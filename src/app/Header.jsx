'use client'
import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col items-start h-[22%] w-[70%] font-light tracking-wider pb-2.5 bg-[#E1D8D5] mt-20 sm:w-[50%]">
      <div className="text-[30px] mb-2.5 sm:text-[48px]">Sohum Dalal.</div>
      <div className="text-[18px] mb-2.5 sm:text-[24px]">engineer +</div>
        <div className="flex flex-col items-start text-[18px] overflow-hidden h-[24px] sm:text-[24px]">
          <div className="relative animate-rotate">
            <div className="h-[24px] leading-[24px] ">craftsman</div>
            <div className="h-[24px] leading-[24px]">chef</div>
            <div className="h-[24px] leading-[24px]">baker</div>
            <div className="h-[24px] leading-[24px]">barista</div>
            <div className="h-[24px] leading-[24px]">farmer</div>
            <div className="h-[24px] leading-[24px]">craftsman</div> {/* Repeat first element */}
          </div>
        </div>
    </div>
  );
}

export default Header;
