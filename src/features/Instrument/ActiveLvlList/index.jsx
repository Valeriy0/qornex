import React from 'react';

export const ActiveLvlList = () => {
  return (
    <div className="p-[36px] sm:p-0 sm:py-6 sm:px-3">
      <div className="flex flex-col space-y-10 sm:space-y-4">
        <div className="flex items-center justify-between w-full sm:flex-col sm:space-y-4 sm:items-start">
          <div className="flex items-center justify-between space-x-4 ">
            <div className=" flex items-center justify-center">
              <img className="sm:w-[60px] sm:h-[60px]" src="/icons/instrument/star.svg" />
              <span className="absolute z-[1] text-black text-lg poppins font-medium sm:text-base">1 Lvl</span>
            </div>
            <div className="flex flex-col">
              <span className="text-h2 text-white font-medium sm:text-xl ">$ 265</span>
              <div className="flex items-center space-x-2">
                <span className="text-white-500 sm:text-base">Cycle x3</span>
                <div className="border border-[1px] border-white-500 h-[20px] " />
                <span className="text-white-500 sm:text-base">7 days left</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 sm:flex-col sm:space-x-0 sm:space-y-3 sm:w-full">
            <div className="flex items-center justify-center bg-lightGray rounded-2xl space-x-2 px-6 py-3 shadow-wrapper sm:w-full">
              <span className="text-base text-white poppins font-medium">1X</span>
              <div className="flex items-center jsutify-center bg-lightGray rounded-full px-3 py-2">
                <span className="text-xs text-white opacity-50 font-medium">14 days</span>
              </div>
              <div className="flex items-center jsutify-center bg-primary-500 rounded-full px-3 py-2">
                <span className="text-xs text-black">10 USDT</span>
              </div>
            </div>
            <button className="flex items-center justify-center bg-lightGray rounded-2xl space-x-2 px-6 py-3 shadow-wrapper">
              <span className="text-base text-white poppins font-medium">Buy more</span>
            </button>
          </div>
        </div>
        <div className="flex justify-between partners-block-bg w-full rounded-3xl sm:rounded-2xl  px-9 py-8 shadow-wrapper sm:px-3 sm:py-4  ">
          <div className="flex justify-between w-full  sm:grid sm:gap-y-6 sm:gap-x-9 sm:grid-cols-3 sm:m-auto sm:w-fit ">
            <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-lightGray border-[1px] border-[#EBFF29] sm:w-[60px] sm:h-[60px]">
              <img src="/icons/instrument/yellowUserIcon.svg" />
            </div>
            <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-lightGray border-[1px] border-[#EBFF29] sm:w-[60px] sm:h-[60px]">
              <img src="/icons/instrument/grayUserIcon.svg" />
            </div>
            <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-lightGray border-[1px] border-secondary-500 sm:w-[60px] sm:h-[60px]">
              <img src="/icons/instrument/purpleRecycleIcon.png" />
            </div>
            <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-lightGray border-[1px] border-[#EBFF29] sm:w-[60px] sm:h-[60px]">
              <img src="/icons/instrument/yellowUserIcon.svg" />
            </div>
            <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-lightGray border-[1px] border-[#EBFF29] sm:w-[60px] sm:h-[60px]">
              <img src="/icons/instrument/grayUserIcon.svg" />
            </div>
            <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-lightGray border-[1px] border-secondary-500 sm:w-[60px] sm:h-[60px]">
              <img src="/icons/instrument/purpleRecycleIcon.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
