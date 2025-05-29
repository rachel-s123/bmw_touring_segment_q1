export const marketData = {
  markets: ['Market 1', 'Market 2'],
  attributes: [
    'Performance and Speed',
    'Battery Technology and Range',
    'Charging Infrastructure',
    'Noise Reduction',
    'Affordability and Cost of Ownership',
    'Insurance and Financing Options',
    'Resale Value and Longevity',
    'Government Incentives and Regulations',
    'Advanced Technology Integration',
    'Connectivity and Smart Features',
    'Safety Features',
    'After-Sales Support and Service Network',
    'Education and Awareness',
    'Urban Mobility Solutions',
    'Sustainability and Environmental Impact',
    'Market Segmentation',
    'Brand Heritage and Trust',
    'Community and Culture',
    'Customization and Personalization',
    'Design Innovation'
  ],
  // Raw WRI scores
  scores: {
    'Performance and Speed': {
      'Market 1': 85.0, 'Market 2': 88.0
    },
    'Battery Technology and Range': {
      'Market 1': 92.0, 'Market 2': 95.0
    },
    'Charging Infrastructure': {
      'Market 1': 85.0, 'Market 2': 88.5
    },
    'Noise Reduction': {
      'Market 1': 45.0, 'Market 2': 56.5
    },
    'Affordability and Cost of Ownership': {
      'Market 1': 90.0, 'Market 2': 95.0
    },
    'Insurance and Financing Options': {
      'Market 1': 25.0, 'Market 2': 30.0
    },
    'Resale Value and Longevity': {
      'Market 1': 55.0, 'Market 2': 63.0
    },
    'Government Incentives and Regulations': {
      'Market 1': 65.0, 'Market 2': 62.0
    },
    'Advanced Technology Integration': {
      'Market 1': 70.0, 'Market 2': 76.0
    },
    'Connectivity and Smart Features': {
      'Market 1': 35.0, 'Market 2': 63.0
    },
    'Safety Features': {
      'Market 1': 10.0, 'Market 2': 30.0
    },
    'After-Sales Support and Service Network': {
      'Market 1': 65.0, 'Market 2': 60.0
    },
    'Education and Awareness': {
      'Market 1': 50.0, 'Market 2': 52.0
    },
    'Urban Mobility Solutions': {
      'Market 1': 85.0, 'Market 2': 91.5
    },
    'Sustainability and Environmental Impact': {
      'Market 1': 45.0, 'Market 2': 50.0
    },
    'Market Segmentation': {
      'Market 1': 70.0, 'Market 2': 74.0
    },
    'Brand Heritage and Trust': {
      'Market 1': 70.0, 'Market 2': 72.0
    },
    'Community and Culture': {
      'Market 1': 45.0, 'Market 2': 48.0
    },
    'Customization and Personalization': {
      'Market 1': 20.0, 'Market 2': 22.0
    },
    'Design Innovation': {
      'Market 1': 70.0, 'Market 2': 72.0
    }
  },
  // Calculate deviations from the mean for each attribute-market combination
  get deviations() {
    const deviations = {};
    
    // For each attribute
    for (const attribute of this.attributes) {
      deviations[attribute] = {};
      
      // Calculate mean for this attribute
      const scores = Object.values(this.scores[attribute]);
      const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
      
      // Calculate deviation for each market
      for (const market of this.markets) {
        const score = this.scores[attribute][market];
        deviations[attribute][market] = score - mean;
      }
    }
    
    return deviations;
  },
  topResonance: [
    { 
      attribute: 'Affordability and Cost of Ownership',
      score: 95.0,
      reasoning: 'Most critical factor across markets, primarily acting as a barrier to adoption'
    },
    { 
      attribute: 'Battery Technology and Range',
      score: 94.5,
      reasoning: 'Range anxiety and battery performance are top concerns affecting purchase decisions'
    },
    { 
      attribute: 'Performance and Speed',
      score: 89.4,
      reasoning: 'Key driver of interest and excitement, especially instant torque and acceleration'
    },
    { 
      attribute: 'Urban Mobility Solutions',
      score: 88.6,
      reasoning: 'Defines core use case and value proposition for electric motorcycles'
    },
    { 
      attribute: 'Charging Infrastructure',
      score: 86.3,
      reasoning: 'Critical enabler/barrier for adoption, especially for non-urban use'
    }
  ],
  strategicDirection: {
    positioning: "Position BMW electric motorcycles as premium urban mobility solutions with exceptional performance, emphasizing the CE 04 for city use and upcoming models for broader applications. Focus on overcoming key barriers while highlighting performance advantages.",
    messaging: "Emphasize instant torque and acceleration, premium technology integration, and urban agility. Address range concerns transparently and highlight charging solutions. Build confidence in the established dealer network and after-sales support.",
    opportunities: "Leverage strong performance scores and urban mobility appeal. Create compelling narratives around the community aspect of riding. Develop innovative financing solutions to address the cost barrier.",
    considerations: "Actively address and mitigate concerns about range limitations, charging infrastructure, and high initial costs. Maintain focus on urban use cases while developing solutions for broader applications."
  }
};

// Helper function to calculate market average for an attribute
const getMarketAverage = (attribute) => {
  const markets = Object.values(marketData.deviations[attribute]);
  return markets.reduce((a, b) => a + b, 0) / markets.length;
};

// Calculate deviations from market average
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