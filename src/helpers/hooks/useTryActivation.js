export const useTryActivation = () => {
  const tryActivation = async (connector) => {

    try {
      connector && (await connector.activate());
    } catch (e) {}
  };

  return {
    tryActivation,
  };
};
