import { useWeb3React } from '@web3-react/core';
import { useDispatch, useSelector } from 'react-redux';

import { useGetContract } from './useGetContract';
import { ContractNames } from '../constants';

import { setBalance } from '../../store/userSlice';
import { getAccountBalance } from '../../store/userSlice/selectors';

export const useBalance = (props) => {
  const { withoutFixed = false } = props ?? {};

  const { account, provider } = useWeb3React();
  const { getContract } = useGetContract();
  const dispatch = useDispatch();
  const { balanceBnb, balanceBusd, isFirstLoaded } = useSelector(getAccountBalance);

  const fetchBalance = async () => {
    try {
      const resultBnb = await provider.getBalance(account);
      const balanceBnb = parseInt(resultBnb) / 1e18;
      const contract = await getContract(ContractNames.TOKEN);
      const resultBalanceBusd = await contract?.balanceOf(account);
      const balanceBusd = parseInt(resultBalanceBusd) / 1e18;

      dispatch(
        setBalance({
          balanceBnb,
          balanceBusd,
          isFirstLoaded: true,
        }),
      );
    } catch (e) {
      // callNotification({ type: 'error', message: parseErrorToUserReadableMessage(e) });
    }
  };

  return {
    balanceBusd: withoutFixed ? balanceBusd ?? 0 : parseFloat(balanceBusd ?? 0).toFixed(2),
    balanceBnb: withoutFixed ? balanceBnb ?? 0 : parseFloat(balanceBnb ?? 0).toFixed(3),
    isFirstLoaded,
    fetchBalance,
  };
};
