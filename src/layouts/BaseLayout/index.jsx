import React from 'react';
import { LeftBar, Header } from 'components';

export const BaseLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full bg-[#0B0B0B]">
      <LeftBar />
      <div className="flex flex-col sm:space-y-6 w-full h-full">
        <Header />
        <div className="flex flex-col px-12 py-10 z-[1] w-full max-w-[1250px] sm:px-4 sm:py-0 h-full">{children}</div>
      </div>
    </div>
  );
};
