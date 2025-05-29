import wriJson from '../generated/wriData.json';

export const marketData = {
  markets: wriJson.markets,
  attributes: wriJson.attributes,
  scores: wriJson.scores,
  get deviations() {
    const deviations = {};
    for (const attribute of this.attributes) {
      deviations[attribute] = {};
      const scores = Object.values(this.scores[attribute] || {});
      const mean = scores.reduce((a, b) => a + b, 0) / (scores.length || 1);
      for (const market of this.markets) {
        const score = (this.scores[attribute] || {})[market] || 0;
        deviations[attribute][market] = score - mean;
      }
    }
    return deviations;
  },
  topResonance: [],
  strategicDirection: {}
};

const getMarketAverage = (attribute) => {
  const markets = Object.values(marketData.deviations[attribute]);
  return markets.reduce((a, b) => a + b, 0) / markets.length;
};

export const getHighestDeviations = () => {
  const deviations = [];
  Object.entries(marketData.deviations).forEach(([attribute, markets]) => {
    const avg = getMarketAverage(attribute);
    Object.entries(markets).forEach(([market, value]) => {
      deviations.push({
        attribute,
        market,
        value: value - avg,
        absoluteValue: Math.abs(value - avg)
      });
    });
  });
  return deviations
    .sort((a, b) => b.absoluteValue - a.absoluteValue)
    .slice(0, 5);
};

export const getLowestDeviations = () => {
  const deviations = [];
  Object.entries(marketData.deviations).forEach(([attribute, markets]) => {
    const avg = getMarketAverage(attribute);
    Object.entries(markets).forEach(([market, value]) => {
      deviations.push({
        attribute,
        market,
        value: value - avg,
        absoluteValue: Math.abs(value - avg)
      });
    });
  });
  return deviations
    .sort((a, b) => a.absoluteValue - b.absoluteValue)
    .slice(0, 5);
};
