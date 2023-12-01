import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { Provider as ReduxProvider } from 'react-redux';

import { metaMask, metaMaskHooks, walletConnectV2Hooks, walletConnectV2 } from './connectors/wallets';
import { RoutesFind } from './RoutesFind';
import { ManageProvider } from './layouts/ManageProvider';
import { getOrCreateStore } from './store';

const CONNECTORS = [
  [metaMask, metaMaskHooks],
  [walletConnectV2, walletConnectV2Hooks],
];

function App({ initialReduxState }) {
  const store = getOrCreateStore(initialReduxState);

  return (
    <Web3ReactProvider connectors={CONNECTORS}>
      <ReduxProvider store={store}>
        <ManageProvider>
          <RoutesFind />
        </ManageProvider>
      </ReduxProvider>
    </Web3ReactProvider>
  );
}

export default App;
