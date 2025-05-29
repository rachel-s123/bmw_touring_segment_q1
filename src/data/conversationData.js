import convJson from '../generated/conversationData.json';

export const getMarketData = (market) => {
  return convJson[market] || { sentimentData: [], themeData: [], insights: [] };
};

export const themeDataByMarket = Object.fromEntries(
  Object.entries(convJson).map(([market, data]) => [market, data.themeData])
);
