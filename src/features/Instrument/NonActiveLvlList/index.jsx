import React from 'react';

export const NonActiveLvlList = () => {
  return (
    <div className="flex flex-col items-center instrument-blocks-bg w-full rounded-large py-9 sm:rounded-2xl sm:px-[14px]">
      <img className="pb-9 sm:pb-5" src="/icons/instrument/levelPrices/star.svg" />
      <button className="h-[62px] w-[351px] bg-lightGray rounded-2xl shadow-wrapper sm:w-full">
        <span className="text-base text-white poppins">Level Price</span>
      </button>
      <span className="text-base text-base text-white opacity-40 pt-6 sm:pt-5">Тут что-то будет</span>
    </div>
  );
};
