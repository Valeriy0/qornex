import { matrixTokenAbi } from './contractsAbi/token';

export default {
  contractToken:  process.env.CONTRACT_TOKEN,
  allowedChainId: parseInt(process.env.ALLOWED_CHAIN_ID),

  matrixTokenAbi: matrixTokenAbi,
};