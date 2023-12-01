import React from 'react';

export const BreadCrumbs = ({ title, children }) => {
  return (
    <div className="flex items-center space-x-6 sm:flex-col sm:space-x-0 sm:space-y-4 sm:items-start">
      <h1 className="text-white font-semibold sm:text-4xl ">{title}</h1>
      {children}
    </div>
  );
};
