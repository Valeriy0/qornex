import React from 'react';

export const Header = () => {
  const bgShadow = {
    backgroundImage: `url('/images/header/shadow.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'round',
  };
  return (
    <div style={bgShadow} className="hidden sm:flex items-center px-4 bg-vlack h-[72px] rounded-b-3xl  top-0 w-screen">
      <img className="h-[30px]" src="/images/header/QornexLogo.svg" />
    </div>
  );
};
