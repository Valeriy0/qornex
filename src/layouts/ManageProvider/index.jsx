import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useDispatch } from 'react-redux';

import { useBalance } from '../../helpers/hooks/useBalance';
import config from '../../helpers/config';
import { metaMask } from '../../connectors/wallets';
import { getProfile } from '../../store/userSlice/asyncActions';
import { useModal } from '../../helpers/hooks/useModal';
import { ActivateModal } from '../../components/Modals/ActivateModal';

const addChainEthsParams = {
  56: {
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com'],
  },
  97: {
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://data-seed-prebsc-2-s3.binance.org:8545'],
    blockExplorerUrls: ['https://testnet.bscscan.com'],
  },
};

export const ManageProvider = ({ children }) => {
  const { account, provider, chainId } = useWeb3React();
  const { openedModal, onOpen, onClose } = useModal();
  const [chosenWallet, setChosenWallet] = useState(null);

  const onConnectWalletClick = () => {
    if (account) {
      if (chosenWallet.connector?.deactivate) {
        void chosenWallet.connector.deactivate();
      } else {
        void chosenWallet.connector.resetState();
      }
    } else {
      onOpen();
    }
  };

  const { fetchBalance } = useBalance();
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoaded(true);
    }
  }, []);

  const onSwitchChain = async () => {
    if (chainId !== config.allowedChainId && !!account) {
      const chainIntoHex = '0x' + config.allowedChainId.toString(16);
      try {
        await provider?.send('wallet_switchEthereumChain', [{ chainId: chainIntoHex }, account]);
      } catch (e) {
        if (e.code === 4902) {
          provider?.send('wallet_addEthereumChain', [
            {
              chainId: chainIntoHex,
              ...addChainEthsParams[config.allowedChainId],
            },
          ]);
        }
      }
    }
  };

  useEffect(() => {
    onSwitchChain();
  }, [provider, chainId, account]);

  useEffect(() => {
    if (!!account && !!provider) {
      fetchBalance();
    }
  }, [account, provider, chainId]);
  //
  useEffect(() => {
    if (account) {
      account && dispatch(getProfile(account));
    }
  }, [account]);

  useEffect(() => {
    metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask');
    });
    setLoaded(true);
  }, []);

  if (loaded) {
    return (
      <>
        <div
          className="z-[99999] cursor-pointer absolute w-[120px] h-[60px] right-0 top-[20px] bg-white flex items-center justify-center"
          onClick={onConnectWalletClick}
        >
          {account ? 'Disconnect' : 'Connect Wallet'}
        </div>
        {children}
        <ActivateModal handleCloseModal={onClose} openedModal={openedModal} setChosenWallet={setChosenWallet} />
      </>
    );
  }
  return null;
};
