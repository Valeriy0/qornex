import React from 'react';
import { BreadCrumbs, LeftBar, LevelsStatus, Header } from 'components';
import { LevelActivating, ActiveLvlList, NonActiveLvlList } from 'features/Instrument';
import { BaseLayout } from 'layouts';

export const Instrument = () => {
  return (
    <BaseLayout>
      <div className="flex items-center space-x-6 sm:flex-col sm:space-x-0 sm:space-y-4 sm:items-start">
        <BreadCrumbs title="Instrument" />
        <LevelsStatus />
      </div>
      <div className="flex flex-col bg-black w-full instrument-blocks-bg rounded-large sm:rounded-3xl">
        <ActiveLvlList />
        <LevelActivating />
      </div>
      <NonActiveLvlList />
    </BaseLayout>
  );
};
