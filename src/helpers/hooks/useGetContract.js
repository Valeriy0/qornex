import { useWeb3React } from '@web3-react/core';
import { Contract } from '@ethersproject/contracts';

import config from '../config';
import { ContractNames } from '../constants';

export const useGetContract = () => {
  const { account, provider } = useWeb3React();

  const types = {
    [ContractNames.TOKEN]: [config.contractToken, config.matrixTokenAbi],
  };

  const getContract = (type) => {
    return new Promise(function (resolve, rejected) {
      if (types[type] && provider) {
        const contract = new Contract(...types[type], provider?.getSigner(account).connectUnchecked() || provider);

        resolve(contract);
      } else {
        rejected('error init contract: ' + type);
      }
    });
  };

  return {
    getContract,
  };
};
