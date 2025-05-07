// Theme data structure for each market
const themeDataByMarket = {
  'France': [
    { subject: 'Performance', value: 85 },
    { subject: 'Range', value: 75 },
    { subject: 'Design', value: 90 },
    { subject: 'Technology', value: 80 },
    { subject: 'Price', value: 65 },
    { subject: 'Charging', value: 70 }
  ],
  'Italy': [
    { subject: 'Performance', value: 90 },
    { subject: 'Range', value: 70 },
    { subject: 'Design', value: 95 },
    { subject: 'Technology', value: 85 },
    { subject: 'Price', value: 60 },
    { subject: 'Charging', value: 65 }
  ],
  'CS': [
    { subject: 'Performance', value: 88 },
    { subject: 'Range', value: 92 },
    { subject: 'Design', value: 78 },
    { subject: 'Technology', value: 85 },
    { subject: 'Price', value: 65 },
    { subject: 'Charging', value: 80 }
  ],
  'Switzerland': [
    { subject: 'Performance', value: 82 },
    { subject: 'Range', value: 85 },
    { subject: 'Design', value: 88 },
    { subject: 'Technology', value: 90 },
    { subject: 'Price', value: 70 },
    { subject: 'Charging', value: 75 }
  ],
  'Portugal': [
    { subject: 'Performance', value: 82 },
    { subject: 'Range', value: 90 },
    { subject: 'Design', value: 75 },
    { subject: 'Technology', value: 80 },
    { subject: 'Price', value: 68 },
    { subject: 'Charging', value: 72 }
  ],
  'Belgium': [
    { subject: 'Performance', value: 88 },
    { subject: 'Range', value: 89 },
    { subject: 'Design', value: 80 },
    { subject: 'Technology', value: 85 },
    { subject: 'Price', value: 70 },
    { subject: 'Charging', value: 75 }
  ],
  'Nordics': [
    { subject: 'Performance', value: 90 },
    { subject: 'Range', value: 85 },
    { subject: 'Design', value: 82 },
    { subject: 'Technology', value: 88 },
    { subject: 'Price', value: 72 },
    { subject: 'Charging', value: 78 }
  ],
  'Spain': [
    { subject: 'Performance', value: 84 },
    { subject: 'Range', value: 88 },
    { subject: 'Design', value: 79 },
    { subject: 'Technology', value: 83 },
    { subject: 'Price', value: 67 },
    { subject: 'Charging', value: 71 }
  ],
  'UK': [
    { subject: 'Performance', value: 86 },
    { subject: 'Range', value: 87 },
    { subject: 'Design', value: 85 },
    { subject: 'Technology', value: 88 },
    { subject: 'Price', value: 69 },
    { subject: 'Charging', value: 74 }
  ],
  'Netherlands': [
    { subject: 'Performance', value: 85 },
    { subject: 'Range', value: 88 },
    { subject: 'Design', value: 83 },
    { subject: 'Technology', value: 86 },
    { subject: 'Price', value: 71 },
    { subject: 'Charging', value: 77 }
  ]
};

const marketInsights = {
  'France': {
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
  'Italy': {
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
  },
  'CS': {
    sentimentData: [
      { name: 'Positive', value: 25 },
      { name: 'Neutral', value: 35 },
      { name: 'Negative', value: 40 }
    ],
    insights: [
      'Range and battery performance are top priorities',
      'Technical specifications heavily scrutinized',
      'Price sensitivity affects adoption rate',
      'Strong demand for comprehensive service network'
    ]
  },
  'Switzerland': {
    sentimentData: [
      { name: 'Positive', value: 55 },
      { name: 'Neutral', value: 30 },
      { name: 'Negative', value: 15 }
    ],
    insights: [
      'High emphasis on quality and technology',
      'Strong interest in premium features',
      'Environmental considerations important',
      'Performance in alpine conditions crucial'
    ]
  },
  'Portugal': {
    sentimentData: [
      { name: 'Positive', value: 48 },
      { name: 'Neutral', value: 32 },
      { name: 'Negative', value: 20 }
    ],
    insights: [
      'Growing acceptance of electric mobility',
      'Range capabilities crucial for adoption',
      'Price sensitivity significant factor',
      'Urban commuting primary use case'
    ]
  },
  'Belgium': {
    sentimentData: [
      { name: 'Positive', value: 52 },
      { name: 'Neutral', value: 28 },
      { name: 'Negative', value: 20 }
    ],
    insights: [
      'Strong focus on practical features',
      'Urban mobility solutions in demand',
      'Service network coverage important',
      'Growing interest in sustainable transport'
    ]
  },
  'Nordics': {
    sentimentData: [
      { name: 'Positive', value: 58 },
      { name: 'Neutral', value: 27 },
      { name: 'Negative', value: 15 }
    ],
    insights: [
      'High environmental consciousness',
      'All-weather performance crucial',
      'Strong tech adoption mindset',
      'Premium positioning well-received'
    ]
  },
  'Spain': {
    sentimentData: [
      { name: 'Positive', value: 50 },
      { name: 'Neutral', value: 30 },
      { name: 'Negative', value: 20 }
    ],
    insights: [
      'Urban mobility driving adoption',
      'Performance aspects highly valued',
      'Growing charging infrastructure',
      'Price-performance balance key'
    ]
  },
  'UK': {
    sentimentData: [
      { name: 'Positive', value: 55 },
      { name: 'Neutral', value: 25 },
      { name: 'Negative', value: 20 }
    ],
    insights: [
      'Strong urban mobility focus',
      'Premium segment growth',
      'Technology integration important',
      'Weather resistance crucial'
    ]
  },
  'Netherlands': {
    sentimentData: [
      { name: 'Positive', value: 60 },
      { name: 'Neutral', value: 25 },
      { name: 'Negative', value: 15 }
    ],
    insights: [
      'High cycling culture influence',
      'Strong urban mobility adoption',
      'Environmental focus significant',
      'Infrastructure well-developed'
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