import React from 'react';

export const UserInfo = () => {
  return (
    <div className="flex flex-col max-w-[340px] row-span-2 rounded-3xl purple-gradient-wrapper px-6 pt-8 pb-6 sm:px-4 sm:pt-6 sm:pb-4 shadow-wrapper sm:max-w-full sm:order-first sm:row-span-1 sm:col-span-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-black w-[60px] h-[60px] rounded-full" />
          <div className="flex flex-col">
            <span className="text-lg text-white font-semibold poppins">Samanta Lucia</span>
            <span className="text-white-500">ID 5345435345</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-4 h-[106px] bg-lightGray rounded-2xl">
        <div className="flex bg-primary-400 rounded-2xl h-[64px] p-3 space-x-3">
          <button className="w-10 h-10 rounded-xl bg-white flex items-cener justify-center p-2">
            <img src="/icons/dashboard/userInfo/copy_icon.svg" />
          </button>
          <div className="flex flex-col">
            <span className="text-base font-semibold text-black poppins">Referral link</span>
            <span className="text-sm opacity-50">poly.gon/98736467657</span>
          </div>
        </div>
        <span className="px-3 py-2 text-white opacity-50">+ 7 Partners</span>
      </div>
      <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:w-full sm:space-x-2 ">
        <div className="flex items-start justify-start bg-lightGray rounded-2xl h-[64px] p-3 space-x-3 sm:w-full  ">
          <img src="/icons/dashboard/userInfo/matic_icon.svg" />
          <div className="flex flex-col">
            <span className="text-base font-semibold poppins text-white">Matic</span>
            <span className="text-sm poppins text-white opacity-50">3205.09</span>
          </div>
        </div>
        <div className="flex items-start justify-start bg-lightGray rounded-2xl h-[64px] p-3 space-x-3 sm:w-full  ">
          <img src="/icons/dashboard/userInfo/usdt_icon.svg" />
          <div className="flex flex-col">
            <span className="text-base font-semibold poppins text-white">USDT</span>
            <span className="text-sm poppins text-white opacity-50">3205.09</span>
          </div>
        </div>
      </div>
    </div>
  );
};
