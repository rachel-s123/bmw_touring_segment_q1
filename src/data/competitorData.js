// Color scheme for competitors
export const COMPETITOR_COLORS = {
  'BMW Motorrad': '#0066B1',  // BMW Blue
  'Zero Motorcycles': '#2E7D32',
  'Energica': '#1976D2',
  'LiveWire': '#D32F2F',
  'CAKE': '#F57C00',
  'Others': '#757575'
};

const competitorData = {
  'France': {
    shareOfVoice: [
      { name: 'BMW Motorrad', value: 30 },
      { name: 'Zero Motorcycles', value: 25 },
      { name: 'Energica', value: 20 },
      { name: 'LiveWire', value: 15 },
      { name: 'CAKE', value: 5 },
      { name: 'Others', value: 5 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Premium brand reputation',
        'Strong dealer network',
        'Advanced technology integration'
      ],
      'Zero Motorcycles': [
        'Strong dealer network in urban centers',
        'Established brand recognition',
        'Competitive range and performance'
      ],
      'Energica': [
        'Premium positioning',
        'Racing heritage',
        'Advanced technology features'
      ],
      'LiveWire': [
        'Harley-Davidson backing',
        'Strong brand appeal',
        'Urban-focused design'
      ],
      'CAKE': [
        'Unique design language',
        'Sustainability focus',
        'Off-road capabilities'
      ]
    }
  },
  'Italy': {
    shareOfVoice: [
      { name: 'BMW Motorrad', value: 25 },
      { name: 'Energica', value: 35 },
      { name: 'Zero Motorcycles', value: 20 },
      { name: 'LiveWire', value: 15 },
      { name: 'CAKE', value: 3 },
      { name: 'Others', value: 2 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Premium market position',
        'Performance heritage',
        'Quality engineering'
      ],
      'Energica': [
        'Local manufacturer advantage',
        'Strong racing presence',
        'High-performance focus'
      ],
      'Zero Motorcycles': [
        'Established market presence',
        'Wide product range',
        'Strong service network'
      ],
      'LiveWire': [
        'Premium brand positioning',
        'Modern urban appeal',
        'Connected features'
      ],
      'CAKE': [
        'Design-focused approach',
        'Environmental messaging',
        'Lifestyle brand appeal'
      ]
    }
  },
  'Switzerland': {
    shareOfVoice: [
      { name: 'BMW Motorrad', value: 35 },
      { name: 'Zero Motorcycles', value: 25 },
      { name: 'Energica', value: 20 },
      { name: 'LiveWire', value: 15 },
      { name: 'CAKE', value: 3 },
      { name: 'Others', value: 2 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Premium segment leadership',
        'Alpine performance expertise',
        'Comprehensive dealer network'
      ],
      'Zero Motorcycles': [
        'Early market entry',
        'Strong alpine performance',
        'Local service network'
      ],
      'Energica': [
        'Premium market positioning',
        'High-end technology',
        'Performance credentials'
      ],
      'LiveWire': [
        'Luxury segment focus',
        'Brand heritage appeal',
        'Quality perception'
      ],
      'CAKE': [
        'Scandinavian design',
        'Eco-friendly positioning',
        'Urban mobility focus'
      ]
    }
  },
  'CS': {
    shareOfVoice: [
      { name: 'BMW Motorrad', value: 30 },
      { name: 'Zero Motorcycles', value: 25 },
      { name: 'LiveWire', value: 20 },
      { name: 'Energica', value: 15 },
      { name: 'CAKE', value: 7 },
      { name: 'Others', value: 3 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Brand prestige',
        'Technical excellence',
        'Service infrastructure'
      ],
      'Zero Motorcycles': [
        'Market pioneer advantage',
        'Established service network',
        'Range of models'
      ],
      'LiveWire': [
        'Strong brand presence',
        'Urban lifestyle appeal',
        'Premium positioning'
      ],
      'Energica': [
        'Performance focus',
        'Technical innovation',
        'European heritage'
      ],
      'CAKE': [
        'Modern design appeal',
        'Urban mobility solutions',
        'Sustainability focus'
      ]
    }
  },
  'Portugal': {
    shareOfVoice: [
      { name: 'BMW Motorrad', value: 28 },
      { name: 'Zero Motorcycles', value: 25 },
      { name: 'Energica', value: 22 },
      { name: 'LiveWire', value: 15 },
      { name: 'CAKE', value: 7 },
      { name: 'Others', value: 3 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Premium market presence',
        'Urban mobility leadership',
        'Strong dealer support'
      ],
      'Zero Motorcycles': [
        'Market leadership',
        'Urban commuter focus',
        'Dealer support'
      ],
      'Energica': [
        'Performance emphasis',
        'Mediterranean appeal',
        'Tech integration'
      ],
      'LiveWire': [
        'Brand recognition',
        'Urban lifestyle',
        'Premium quality'
      ],
      'CAKE': [
        'Design distinction',
        'Eco-credentials',
        'Urban mobility'
      ]
    }
  },
  'Belgium': {
    shareOfVoice: [
      { name: 'BMW Motorrad', value: 32 },
      { name: 'Zero Motorcycles', value: 25 },
      { name: 'LiveWire', value: 20 },
      { name: 'Energica', value: 15 },
      { name: 'CAKE', value: 5 },
      { name: 'Others', value: 3 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Market leadership',
        'Premium positioning',
        'Extensive service network'
      ],
      'Zero Motorcycles': [
        'Established presence',
        'Urban commuting focus',
        'Service network'
      ],
      'LiveWire': [
        'Premium positioning',
        'Urban lifestyle',
        'Brand heritage'
      ],
      'Energica': [
        'Performance focus',
        'European identity',
        'Tech features'
      ],
      'CAKE': [
        'Design appeal',
        'Environmental focus',
        'Urban solutions'
      ]
    }
  },
  'Nordics': {
    shareOfVoice: [
      { name: 'BMW Motorrad', value: 30 },
      { name: 'CAKE', value: 25 },
      { name: 'Zero Motorcycles', value: 20 },
      { name: 'LiveWire', value: 15 },
      { name: 'Energica', value: 7 },
      { name: 'Others', value: 3 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Premium segment dominance',
        'All-weather capability',
        'Technology leadership'
      ],
      'CAKE': [
        'Local brand advantage',
        'Nordic design appeal',
        'Sustainability focus'
      ],
      'Zero Motorcycles': [
        'Range capabilities',
        'All-weather performance',
        'Dealer network'
      ],
      'LiveWire': [
        'Premium segment',
        'Urban mobility',
        'Brand strength'
      ],
      'Energica': [
        'Performance edge',
        'Tech innovation',
        'Premium quality'
      ]
    }
  },
  'Spain': {
    shareOfVoice: [
      { name: 'BMW Motorrad', value: 28 },
      { name: 'Zero Motorcycles', value: 25 },
      { name: 'Energica', value: 22 },
      { name: 'LiveWire', value: 15 },
      { name: 'CAKE', value: 7 },
      { name: 'Others', value: 3 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Premium brand leadership',
        'Urban mobility expertise',
        'Strong dealer presence'
      ],
      'Zero Motorcycles': [
        'Market presence',
        'Urban mobility focus',
        'Service support'
      ],
      'Energica': [
        'Performance heritage',
        'Mediterranean appeal',
        'Tech features'
      ],
      'LiveWire': [
        'Brand recognition',
        'Urban lifestyle',
        'Premium quality'
      ],
      'CAKE': [
        'Design distinction',
        'Environmental focus',
        'Urban solutions'
      ]
    }
  },
  'UK': {
    shareOfVoice: [
      { name: 'BMW Motorrad', value: 33 },
      { name: 'Zero Motorcycles', value: 25 },
      { name: 'LiveWire', value: 20 },
      { name: 'Energica', value: 15 },
      { name: 'CAKE', value: 5 },
      { name: 'Others', value: 2 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Premium market leader',
        'Technology innovation',
        'Comprehensive service'
      ],
      'Zero Motorcycles': [
        'Market leadership',
        'Urban focus',
        'Dealer network'
      ],
      'LiveWire': [
        'Premium positioning',
        'Brand heritage',
        'Urban appeal'
      ],
      'Energica': [
        'Performance focus',
        'Tech innovation',
        'European quality'
      ],
      'CAKE': [
        'Design appeal',
        'Sustainability focus',
        'Urban mobility'
      ]
    }
  },
  'Netherlands': {
    shareOfVoice: [
      { name: 'BMW Motorrad', value: 30 },
      { name: 'Zero Motorcycles', value: 25 },
      { name: 'LiveWire', value: 20 },
      { name: 'CAKE', value: 15 },
      { name: 'Energica', value: 7 },
      { name: 'Others', value: 3 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Urban mobility leadership',
        'Sustainability focus',
        'Strong dealer network'
      ],
      'Zero Motorcycles': [
        'Urban mobility focus',
        'Range efficiency',
        'Service network'
      ],
      'LiveWire': [
        'Premium segment',
        'Urban lifestyle',
        'Brand strength'
      ],
      'CAKE': [
        'Design innovation',
        'Sustainability focus',
        'Urban solutions'
      ],
      'Energica': [
        'Performance edge',
        'Tech features',
        'European quality'
      ]
    }
  }
};

export const getCompetitorData = (market) => {
  return competitorData[market] || {
    shareOfVoice: [],
    competitorStrengths: {}
  };
}; 