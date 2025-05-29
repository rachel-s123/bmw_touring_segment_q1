// Theme data structure for each market
const themeDataByMarket = {
  'Market 1': [
    { subject: 'Performance', value: 85 },
    { subject: 'Range', value: 75 },
    { subject: 'Design', value: 90 },
    { subject: 'Technology', value: 80 },
    { subject: 'Price', value: 65 },
    { subject: 'Charging', value: 70 }
  ],
  'Market 2': [
    { subject: 'Performance', value: 90 },
    { subject: 'Range', value: 70 },
    { subject: 'Design', value: 95 },
    { subject: 'Technology', value: 85 },
    { subject: 'Price', value: 60 },
    { subject: 'Charging', value: 65 }
  ]
};

const marketInsights = {
  'Market 1': {
    sentimentData: [
      { name: 'Positive', value: 65 },
      { name: 'Neutral', value: 25 },
      { name: 'Negative', value: 10 }
    ],
    insights: [
      'Strong interest in performance and design aspects',
      'Charging infrastructure concerns in rural areas',
      'Price sensitivity higher than expected',
      'Urban riders show strongest adoption intent'
    ]
  },
  'Market 2': {
    sentimentData: [
      { name: 'Positive', value: 70 },
      { name: 'Neutral', value: 20 },
      { name: 'Negative', value: 10 }
    ],
    insights: [
      'Design and aesthetics are primary drivers',
      'Strong racing and performance culture influence',
      'Urban charging infrastructure well-received',
      'Premium positioning resonates with target market'
    ]
  }
};

export const getMarketData = (market) => {
  return {
    themeData: themeDataByMarket[market] || [],
    ...marketInsights[market] || {
      sentimentData: [],
      insights: []
    }
  };
};

export { themeDataByMarket }; 