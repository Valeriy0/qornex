import React from 'react';

export const LeftBar = () => {
  const menuItem = [
    {
      title: 'Dashboard',
      href: '/',
    },
    {
      title: 'Instrument',
      href: '/instrument',
    },
    {
      title: 'Info',
      href: '',
    },
    {
      title: 'Analytics',
      href: '',
    },
    {
      title: 'Perfomance',
      href: '',
    },
    {
      title: 'Settings',
      href: '',
    },
  ];

  const shadowBg = { backgroundImage: `url('/images/leftBar/shadow.png')`, backgroundSize: 'cover' };
  return (
    <div
      style={shadowBg}
      className="flex flex-col justify-between items-end left_bar_size bg-white-50 h-screen px-6 pt-10 pb-9 sm:hidden sticky top-0 "
    >
      <div className="flex flex-col space-y-11 w-[180px] ">
        <img className="h-[50px]" src="/images/header/QornexLogo.svg" />
        <div className="flex flex-col items-start ">
          {menuItem?.map((item, itemIndex) => {
            return (
              <a href={item.href} className="py-3.5" key={itemIndex}>
                <span className="text-white text-base font-light">{item.title}</span>
              </a>
            );
          })}
        </div>
      </div>
      <button className="flex space-x-6 w-[180px]">
        <img src="/icons/leftbar/logOutIcon.svg" />
        <span className="text-[#747474]">Log out</span>
      </button>
      <img className="absolute right-0 bottom-0" src="/images/leftBar/bottomShadow.png" />
    </div>
  );
};
