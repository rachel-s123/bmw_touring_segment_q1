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
      { name: 'BMW Motorrad', value: 45 },
      { name: 'Zero Motorcycles', value: 28 },
      { name: 'Energica', value: 12 },
      { name: 'LiveWire', value: 10 },
      { name: 'Others', value: 5 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Dominant market presence with 40-50% share of voice',
        'Strong urban EV focus with CE 04 success',
        'Extensive dealer network and brand trust',
        'Premium build quality and innovation',
        'Strong real-world usage cases in cities like Paris and Lyon'
      ],
      'Zero Motorcycles': [
        'Growing presence with positive user testimonials',
        'Strong grassroots content and community engagement',
        'New model launches (XE/XB) generating buzz',
        'Competitive advantage in EU-US trade tariff situation',
        'Active user groups sharing real-world experiences'
      ],
      'Energica': [
        'Credibility through police and gendarmerie contracts',
        'Performance-focused positioning',
        'Strong charging infrastructure compatibility',
        'Positive sentiment from traditional motorcycle enthusiasts',
        'Success in long-distance events (Dutch 1000)'
      ],
      'LiveWire': [
        'Premium brand positioning',
        'New model launches (S2 Alpinista) generating interest',
        'Modern urban-focused design',
        'Strong media coverage and launch events'
      ]
    },
    competitorWeaknesses: {
      'BMW Motorrad': [
        'Limited to urban EV segment (no high-performance electric motorcycles)',
        'Leadership comments creating skepticism about EV commitment',
        'Higher price point than competitors',
        'Perceived as less innovative by younger riders',
        'Limited model range in electric segment'
      ],
      'Zero Motorcycles': [
        'Lack of DC fast-charging capability',
        'Limited brand awareness outside urban centers',
        'Mixed reviews on long-term reliability',
        'Resale value concerns',
        'Higher maintenance costs compared to traditional bikes'
      ],
      'Energica': [
        'High purchase cost (€25k+)',
        'Limited dealer/service network in France',
        'Niche market appeal',
        'Smaller market presence compared to competitors',
        'Limited model range'
      ],
      'LiveWire': [
        'Significantly impacted by EU-US trade tariffs',
        'Poor sales performance (612 units worldwide in 2024)',
        'High price for performance offered',
        'Limited charging infrastructure compatibility',
        'Uncertain long-term brand commitment'
      ]
    },
    gapsToExploit: [
      {
        title: 'Mid-Range Electric Motorcycle',
        description: 'Opportunity to introduce a mid-range electric motorcycle between the CE 04 scooter and high-performance models to satisfy riders looking beyond urban mobility.'
      },
      {
        title: 'Enhanced Charging Infrastructure',
        description: 'Develop partnerships with French charging networks to improve charging experience and address range anxiety concerns.'
      },
      {
        title: 'Youth Market Focus',
        description: 'Create targeted campaigns and products for younger riders, addressing the perception of being less innovative and capturing the growing interest in electric mobility.'
      },
      {
        title: 'Performance EV Leadership',
        description: 'Leverage BMW\'s engineering expertise to develop high-performance electric motorcycles, countering the current perception of limited commitment to the segment.'
      },
      {
        title: 'Second-Hand Market Development',
        description: 'Create a certified pre-owned program for electric motorcycles to address resale value concerns and make the technology more accessible.'
      }
    ]
  },
  'Italy': {
    shareOfVoice: [
      { name: 'BMW Motorrad', value: 45 },
      { name: 'Zero Motorcycles', value: 28 },
      { name: 'Energica', value: 17 },
      { name: 'LiveWire', value: 7 },
      { name: 'Others', value: 3 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Dominant share of voice and market presence (40-50%)',
        'CE 04 and CE 02 praised for performance, innovation, and urban mobility',
        'Strong dealer network and brand heritage in Italy',
        'High build quality and reliability ratings from most owners',
        'Proactive marketing and incentives (e.g. CE 02 eco-bonus for young riders)'
      ],
      'Zero Motorcycles': [
        'Strong enthusiast following and active community',
        'Praised for instant torque, acceleration, and riding experience',
        'New affordable models (XE/XB) generating buzz',
        'Positive reviews for performance and value in city/commuter use',
        'Adoption by public institutions (e.g. police) boosting credibility'
      ],
      'Energica': [
        'Italian engineering and national pride',
        'Premium performance and racing heritage (MotoE supplier)',
        'Positive sentiment from long-distance and sport riders',
        'Attractive design and high-tech features',
        'Credibility in the high-end electric segment'
      ],
      'LiveWire': [
        'Premium brand positioning and Harley-Davidson heritage',
        'High performance and modern design',
        'Niche appeal among tech-forward and urban riders',
        'Strong media coverage and global brand recognition'
      ]
    },
    competitorWeaknesses: {
      'BMW Motorrad': [
        'High purchase price compared to petrol bikes',
        'Range limitations for touring and long-distance use',
        'Polarizing design (CE 04) among traditionalists',
        'Isolated reliability issues reported by some owners',
        'Skepticism from some traditional riders about electric shift'
      ],
      'Zero Motorcycles': [
        'High purchase cost for flagship models',
        'Limited dealer/service network compared to BMW',
        'Range anxiety and charging infrastructure concerns',
        'Battery longevity and resale value questions',
        'Mixed reviews on build quality (utilitarian in some areas)'
      ],
      'Energica': [
        'Very high purchase price (premium segment)',
        'Limited dealer/service network in Italy',
        'Niche market appeal and low sales volume',
        'Concerns about battery range and charging times',
        'Recent technical/recall issues affecting perception'
      ],
      'LiveWire': [
        'Extremely high price for performance offered',
        'Minimal dealer presence and low sales in Italy',
        'Brand identity confusion after Harley-Davidson spin-off',
        'Limited charging infrastructure compatibility',
        'Unclear long-term support and availability in Italy'
      ]
    },
    gapsToExploit: [
      {
        title: 'Affordable Electric Motorcycle Segment',
        description: 'Opportunity to introduce more affordable electric models to address price sensitivity and expand the market beyond early adopters.'
      },
      {
        title: 'Range & Charging Infrastructure',
        description: 'Invest in next-generation battery technology and expand fast-charging infrastructure to address range anxiety and enable longer trips.'
      },
      {
        title: 'Dealer & Service Network Expansion',
        description: 'Expand dealer and service networks across Italy to improve accessibility and trust, especially in smaller cities and southern regions.'
      },
      {
        title: 'Urban Mobility & Youth Focus',
        description: 'Develop and promote practical, commuter-friendly electric motorcycles and scooters for city use, leveraging positive sentiment and incentives for young riders.'
      },
      {
        title: 'Education & Test Ride Campaigns',
        description: 'Launch educational and test ride campaigns to address skepticism, increase awareness, and convert traditional riders by showcasing real-world benefits.'
      }
    ]
  },
  'Switzerland': {
    shareOfVoice: [
      { name: 'BMW Motorrad', value: 50 },
      { name: 'Zero Motorcycles', value: 40 },
      { name: 'Energica', value: 5 },
      { name: 'LiveWire', value: 3 },
      { name: 'Others', value: 2 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Leading share of voice and strong brand recognition',
        'CE 04 praised for futuristic design and urban mobility',
        'Global leadership in >11kW electric segment (70% share)',
        'Positive media coverage and owner experiences',
        'Growing dealer network and brand trust in Switzerland'
      ],
      'Zero Motorcycles': [
        'Very active owner community and strong online presence',
        'Broad model range and early mover advantage',
        'Praised for instant torque, acceleration, and ride experience',
        'Positive reviews for reliability and low running costs',
        'Local distributor and dedicated service in Romandie'
      ],
      'Energica': [
        'Premium performance and Italian design',
        'Credibility among sportbike and tech enthusiasts',
        'Innovative battery and range technology',
        'Positive reviews for acceleration and handling',
        'Niche appeal for high-end segment'
      ],
      'LiveWire': [
        'Harley-Davidson heritage and premium positioning',
        'Modern design and high performance',
        'Appeal to tech-forward and urban riders',
        'Strong media coverage and global brand recognition'
      ]
    },
    competitorWeaknesses: {
      'BMW Motorrad': [
        'Limited to urban EV segment (mainly CE 04 scooter)',
        'High purchase price compared to petrol bikes',
        'Polarizing design among traditionalists',
        'Limited model range in electric segment',
        'Skepticism about long-term EV commitment'
      ],
      'Zero Motorcycles': [
        'High purchase cost compared to ICE bikes',
        'Range anxiety and charging infrastructure concerns',
        'Limited DC fast-charging on some models',
        'Mixed reviews on reliability and battery longevity',
        'Limited dealer/service network outside Romandie'
      ],
      'Energica': [
        'Very high purchase price (premium segment)',
        'Extremely limited sales and dealer/service network',
        'Niche market appeal and low sales volume',
        'Uncertainty about long-term parts and support',
        'Limited awareness outside enthusiast circles'
      ],
      'LiveWire': [
        'Extremely high price (CHF 36,500) for performance offered',
        'Minimal dealer presence and low sales in Switzerland',
        'Brand identity confusion after Harley-Davidson spin-off',
        'Limited charging infrastructure compatibility',
        'Unclear long-term support and availability'
      ]
    },
    gapsToExploit: [
      {
        title: 'Affordable Electric Motorcycle Segment',
        description: 'Opportunity to introduce more affordable electric models to address price sensitivity and expand the market beyond early adopters, especially given the high price concerns and lack of incentives in Switzerland.'
      },
      {
        title: 'Range & Charging Infrastructure',
        description: 'Invest in next-generation battery technology and expand fast-charging infrastructure to address range anxiety concerns, particularly for longer trips and touring use.'
      },
      {
        title: 'After-Sales & Service Network',
        description: 'Expand dealer and service networks across Switzerland to improve accessibility and trust, especially outside major cities and in German-speaking regions.'
      },
      {
        title: 'Urban Mobility & Commuter Focus',
        description: 'Develop and promote practical, commuter-friendly electric motorcycles and scooters for city use, leveraging positive sentiment around daily urban mobility and the success of the CE 04.'
      },
      {
        title: 'Education & Test Ride Campaigns',
        description: 'Launch educational and test ride campaigns to address skepticism, increase awareness, and convert traditional riders by showcasing real-world benefits and addressing concerns about battery life and reliability.'
      },
      {
        title: 'Second-Hand Market Development',
        description: 'Create a certified pre-owned program for electric motorcycles to address resale value concerns and make the technology more accessible to a broader market.'
      }
    ]
  },
  'CS': {
    shareOfVoice: [
      { name: 'BMW Motorrad', value: 50 },
      { name: 'Zero Motorcycles', value: 25 },
      { name: 'Energica', value: 13 },
      { name: 'LiveWire', value: 10 },
      { name: 'Others', value: 2 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Dominant share of voice across the region, especially in Poland, Greece, and Austria',
        'CE 04 and CE 02 praised for innovative design and urban mobility',
        'Strong dealer network and brand recognition in most CS countries',
        'Positive real-world user experiences and growing acceptance',
        'Leading the conversation in both mainstream and enthusiast communities'
      ],
      'Zero Motorcycles': [
        'Second-highest share of voice, especially strong in Czechia/Slovakia',
        'Praised for performance, instant torque, and ride experience',
        'Aggressive pricing and new model launches (All Access program) generating buzz',
        'Active community and positive user testimonials',
        'Presence at regional events and proactive marketing'
      ],
      'Energica': [
        'Premium performance and racing heritage (MotoE supplier)',
        'Positive sentiment from long-distance and endurance riders',
        'Innovative battery and range technology',
        'Distinctive Italian design and engineering',
        'Credibility among sportbike and tech enthusiasts'
      ],
      'LiveWire': [
        'Premium brand positioning and Harley-Davidson heritage',
        'High performance and modern design',
        'Niche appeal among tech-forward and urban riders',
        'Strong media coverage and brand recognition'
      ]
    },
    competitorWeaknesses: {
      'BMW Motorrad': [
        'Limited electric model range (mainly CE 04/CE 02)',
        'Perceived as expensive compared to ICE and some competitors',
        'Skepticism from traditional riders about "real motorcycle feel"',
        'Mixed sentiment in Czechia/Slovakia due to price and design',
        'Slow rollout of high-performance electric models'
      ],
      'Zero Motorcycles': [
        'High purchase cost compared to ICE bikes',
        'Limited dealer/service network in some CS countries',
        'Range anxiety and lack of fast-charging on some models',
        'Mixed reviews on reliability and battery longevity',
        'Brand awareness lower outside enthusiast circles'
      ],
      'Energica': [
        'Very high purchase price (premium segment)',
        'Company instability after shutdown news in late 2024',
        'Limited dealer/service network in the region',
        'Niche market appeal and low sales volume',
        'Uncertainty about long-term parts and support availability'
      ],
      'LiveWire': [
        'Extremely high price for performance offered',
        'Minimal dealer presence and low sales in CS region',
        'Brand identity confusion after Harley-Davidson spin-off',
        'Limited charging infrastructure compatibility',
        'Unclear EU model availability and support'
      ]
    },
    gapsToExploit: [
      {
        title: 'Affordable Electric Motorcycle Segment',
        description: 'Opportunity to introduce more affordable electric models to address price sensitivity and expand the market beyond early adopters, especially in price-sensitive CS countries.'
      },
      {
        title: 'Range & Fast-Charging Solutions',
        description: 'Invest in next-generation battery technology and fast-charging infrastructure to address range anxiety and attract touring riders.'
      },
      {
        title: 'Dealer & Service Network Expansion',
        description: 'Expand dealer and service networks across the region to improve accessibility and trust, especially in smaller or emerging markets.'
      },
      {
        title: 'Urban Mobility & Commuter Focus',
        description: 'Develop and promote practical, commuter-friendly electric motorcycles and scooters for city use, leveraging positive sentiment around daily urban mobility.'
      },
      {
        title: 'Education & Test Ride Campaigns',
        description: 'Launch educational and test ride campaigns to address skepticism, increase awareness, and convert traditional riders by showcasing real-world benefits.'
      }
    ]
  },
  'Portugal': {
    shareOfVoice: [
      { name: 'Zero Motorcycles', value: 40 },
      { name: 'BMW Motorrad', value: 30 },
      { name: 'LiveWire', value: 15 },
      { name: 'Energica', value: 10 },
      { name: 'Others', value: 5 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Strong brand legacy and premium positioning',
        'CE 04 praised for futuristic design and urban mobility',
        'Growing dealer network and brand trust',
        '62% EV sales growth in 2024',
        'Positive real-world user experiences in Portuguese cities'
      ],
      'Zero Motorcycles': [
        'Market leadership with largest share of voice',
        'Strong performance and range capabilities (>200km per charge)',
        'Active community presence and positive user testimonials',
        'Broad model range and early mover advantage',
        'Positive reviews for reliability and low running costs'
      ],
      'Energica': [
        'Premium performance and racing heritage',
        'Strong acceleration and handling praised in reviews',
        'Innovative battery and range technology',
        'Distinctive Italian design and engineering',
        'Credibility among sportbike enthusiasts'
      ],
      'LiveWire': [
        'Premium brand positioning and Harley-Davidson heritage',
        'Modern design and high performance',
        'Growing interest in S2 Del Mar model',
        'Strong media coverage and test ride events',
        'Appeal to tech-forward and urban riders'
      ]
    },
    competitorWeaknesses: {
      'BMW Motorrad': [
        'Limited to urban EV segment (mainly CE 04 scooter)',
        'High purchase price compared to petrol bikes',
        'Polarizing design among traditionalists',
        'Limited model range in electric segment',
        'Skepticism about long-term EV commitment'
      ],
      'Zero Motorcycles': [
        'High purchase cost compared to ICE bikes',
        'Range anxiety and charging infrastructure concerns',
        'Limited DC fast-charging on some models',
        'Mixed reviews on reliability and battery longevity',
        'Brand awareness lower outside enthusiast circles'
      ],
      'Energica': [
        'Very high purchase price (premium segment)',
        'Company instability after financial troubles',
        'Limited dealer/service network in Portugal',
        'Niche market appeal and low sales volume',
        'Uncertainty about long-term parts and support'
      ],
      'LiveWire': [
        'Extremely high price (€34,500) for performance offered',
        'Minimal dealer presence and low sales in Portugal',
        'Brand identity confusion after Harley-Davidson spin-off',
        'Limited charging infrastructure compatibility',
        'Unclear long-term support and availability'
      ]
    },
    gapsToExploit: [
      {
        title: 'Affordable Electric Motorcycle Segment',
        description: 'Opportunity to introduce more affordable electric models to address price sensitivity and expand the market beyond early adopters, especially given the high price concerns mentioned in discussions.'
      },
      {
        title: 'Range & Charging Infrastructure',
        description: 'Invest in next-generation battery technology and expand fast-charging infrastructure to address range anxiety concerns, particularly for longer trips and touring use.'
      },
      {
        title: 'Urban Mobility & Commuter Focus',
        description: 'Develop and promote practical, commuter-friendly electric motorcycles and scooters for city use, leveraging positive sentiment around daily urban mobility and the success of the CE 04.'
      },
      {
        title: 'Education & Test Ride Campaigns',
        description: 'Launch educational and test ride campaigns to address skepticism, increase awareness, and convert traditional riders by showcasing real-world benefits and addressing concerns about battery life and reliability.'
      },
      {
        title: 'Second-Hand Market Development',
        description: 'Create a certified pre-owned program for electric motorcycles to address resale value concerns and make the technology more accessible to a broader market.'
      }
    ]
  },
  'Belgium': {
    shareOfVoice: [
      { name: 'Zero Motorcycles', value: 40 },
      { name: 'BMW Motorrad', value: 30 },
      { name: 'Energica', value: 13 },
      { name: 'LiveWire', value: 10 },
      { name: 'Others', value: 7 }
    ],
    competitorStrengths: {
      'Zero Motorcycles': [
        'Market leader in Belgium with the largest dealer network (10 dealers)',
        'Strong performance and ride experience praised by owners',
        'Active community presence and positive user testimonials',
        'Innovative new models and All Access program generating excitement',
        'Proactive communications and presence at major events (Brussels Motor Show)'
      ],
      'BMW Motorrad': [
        'Rapidly growing share of voice despite late entry',
        'CE 04 praised for urban commuting and daily use',
        'Strong brand trust and robust build quality',
        'Positive real-world user experiences in Belgian cities',
        'Integration of electric models into mainstream dealer activities'
      ],
      'Energica': [
        'Premium performance and adventure-touring credentials',
        'Credibility from racing heritage (MotoE supplier)',
        'Positive sentiment from long-distance and endurance riders',
        'Innovative battery and range technology',
        'Distinctive design and Italian engineering'
      ],
      'LiveWire': [
        'Premium brand positioning and Harley-Davidson heritage',
        'High performance and modern design',
        'Niche appeal among tech-forward riders',
        'Strong media coverage and brand recognition'
      ]
    },
    competitorWeaknesses: {
      'Zero Motorcycles': [
        'High purchase cost compared to ICE bikes',
        'Reliability and after-sales support issues reported by some owners',
        'Lack of DC fast-charging on older models',
        'Resale value concerns and battery longevity questions',
        'Mixed reviews on warranty service in Benelux'
      ],
      'BMW Motorrad': [
        'Limited electric model range (mainly CE 04 scooter)',
        'Late entry to the electric segment',
        'Perceived as less innovative compared to startups',
        'Higher price point than some competitors',
        'Skepticism about long-term EV commitment from leadership'
      ],
      'Energica': [
        'Very high purchase price (premium segment)',
        'Limited dealer/service network in Belgium',
        'Concerns about company stability after bankruptcy news',
        'Niche market appeal and low sales volume',
        'Uncertainty about long-term parts and support availability'
      ],
      'LiveWire': [
        'Extremely high price for performance offered',
        'Minimal dealer presence and low sales in Belgium',
        'Brand identity confusion after Harley-Davidson spin-off',
        'Limited charging infrastructure compatibility',
        'Unclear EU model availability and support'
      ]
    },
    gapsToExploit: [
      {
        title: 'Affordable Electric Motorcycle Segment',
        description: 'Opportunity to introduce more affordable electric models to address price sensitivity and expand the market beyond early adopters.'
      },
      {
        title: 'Enhanced After-Sales Support',
        description: 'Develop a robust after-sales and warranty support program to address reliability and service concerns, especially for Zero and Energica owners.'
      },
      {
        title: 'Commuter-Focused Urban EVs',
        description: 'Expand the range of practical, commuter-friendly electric motorcycles and scooters for Belgian cities, leveraging positive sentiment around daily use.'
      },
      {
        title: 'Dealer Network Expansion',
        description: 'Increase the number of dealers and service points for electric models to improve accessibility and trust, especially outside major cities.'
      },
      {
        title: 'Battery & Range Innovation',
        description: 'Invest in next-generation battery technology and fast-charging solutions to address range anxiety and attract touring riders.'
      }
    ]
  },
  'Nordics': {
    shareOfVoice: [
      { name: 'BMW Motorrad', value: 30 },
      { name: 'Zero Motorcycles', value: 25 },
      { name: 'LiveWire', value: 20 },
      { name: 'Energica', value: 15 },
      { name: 'CAKE', value: 5 },
      { name: 'Others', value: 5 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Strong brand recognition and premium positioning',
        'CE 04 electric scooter success in urban markets',
        'Extensive dealer network across Nordic countries',
        'Positive media coverage and test ride events',
        'Strong environmental alignment with Nordic values'
      ],
      'Zero Motorcycles': [
        'Early market entry and established presence',
        'Strong performance and ride experience praised by owners',
        'Active community presence and positive user testimonials',
        'Good dealer network in Norway and Sweden',
        'Positive reviews for reliability and low running costs'
      ],
      'LiveWire': [
        'Premium brand positioning and Harley-Davidson heritage',
        'High performance and modern design',
        'Strong media coverage and test ride events',
        'Appeal to tech-forward and urban riders',
        'Growing interest in upcoming S2 Del Mar model'
      ],
      'Energica': [
        'High-performance models attract enthusiast interest',
        'Strong acceleration and handling praised in reviews',
        'Credibility from racing heritage and MotoE involvement',
        'Distinctive design and Italian engineering',
        'Active in long-distance and touring discussions'
      ],
      'CAKE': [
        'Local Nordic brand advantage',
        'Strong environmental and sustainability focus',
        'Unique design and urban mobility solutions',
        'Appeal to younger, eco-conscious riders',
        'Innovative business model and community engagement'
      ]
    },
    competitorWeaknesses: {
      'BMW Motorrad': [
        'Limited to urban EV segment (mainly CE 04 scooter)',
        'Higher price point than competitors',
        'Polarizing design of CE 04 among traditionalists',
        'Limited model range in electric segment',
        'Skepticism about long-term EV commitment'
      ],
      'Zero Motorcycles': [
        'High purchase cost compared to ICE bikes',
        'Range anxiety in Nordic climate conditions',
        'Limited DC fast-charging on some models',
        'Mixed reviews on cold weather performance',
        'Dealer network gaps in some Nordic countries'
      ],
      'LiveWire': [
        'Extremely high price for performance offered',
        'Limited dealer presence in Nordic countries',
        'Brand identity confusion after Harley-Davidson spin-off',
        'Limited charging infrastructure compatibility',
        'Unclear long-term support and availability'
      ],
      'Energica': [
        'Very high purchase price (premium segment)',
        'Limited dealer/service network in Nordics',
        'Company instability after financial troubles',
        'Niche market appeal and low sales volume',
        'Uncertainty about long-term parts and support'
      ],
      'CAKE': [
        'Recent financial struggles and restructuring',
        'Limited model range and high price point',
        'Niche appeal primarily in urban markets',
        'Limited dealer network outside Sweden',
        'Uncertainty about company future'
      ]
    },
    gapsToExploit: [
      {
        title: 'Cold Weather Performance',
        description: 'Develop and promote cold weather capabilities and battery management systems specifically for Nordic conditions.'
      },
      {
        title: 'Range & Charging Solutions',
        description: 'Invest in next-generation battery technology and expand fast-charging infrastructure to address range anxiety in sparse Nordic regions.'
      },
      {
        title: 'Dealer Network Expansion',
        description: 'Expand dealer and service networks across Nordic countries to improve accessibility and trust, especially in rural areas.'
      },
      {
        title: 'Urban Mobility & Commuter Focus',
        description: 'Develop and promote practical, commuter-friendly electric motorcycles and scooters for Nordic cities, leveraging positive sentiment around daily urban mobility.'
      },
      {
        title: 'Environmental Leadership',
        description: 'Leverage strong environmental values in Nordic markets to position electric motorcycles as a key part of sustainable mobility solutions.'
      }
    ]
  },
  'Spain': {
    shareOfVoice: [
      { name: 'Zero Motorcycles', value: 30 },
      { name: 'BMW Motorrad', value: 25 },
      { name: 'LiveWire', value: 15 },
      { name: 'Energica', value: 10 },
      { name: 'Others', value: 20 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Strong brand presence and premium positioning',
        'CE 04 praised for urban mobility and futuristic design',
        'Growing dealer network and brand trust',
        'Active community engagement on BMWMotos forum',
        'Positive real-world user experiences in Spanish cities'
      ],
      'Zero Motorcycles': [
        'Market leadership with largest share of voice',
        'Early mover advantage and broad model range',
        'Strong performance capabilities and range',
        'Active community presence and user testimonials',
        'Positive reviews for acceleration and handling'
      ],
      'Energica': [
        'Premium performance and racing heritage',
        'Strong acceleration and handling praised in reviews',
        'Innovative battery technology (400km city range)',
        'Distinctive Italian design and engineering',
        'Credibility among sportbike enthusiasts'
      ],
      'LiveWire': [
        'Premium brand positioning and Harley-Davidson heritage',
        'Modern design and high performance',
        'Growing interest in S2 Del Mar model',
        'Strong media coverage and test ride events',
        'Appeal to tech-forward and urban riders'
      ]
    },
    competitorWeaknesses: {
      'BMW Motorrad': [
        'Limited to urban EV segment (mainly CE 04 scooter)',
        'High purchase price compared to petrol bikes',
        'Polarizing design among traditionalists',
        'Limited model range in electric segment',
        'Skepticism about long-term EV commitment'
      ],
      'Zero Motorcycles': [
        'High purchase cost compared to ICE bikes',
        'Range anxiety and charging infrastructure concerns',
        'Limited DC fast-charging on some models',
        'Mixed reviews on reliability and battery longevity',
        'Brand awareness lower outside enthusiast circles'
      ],
      'Energica': [
        'Very high purchase price (premium segment)',
        'Company instability after financial troubles',
        'Limited dealer/service network in Spain',
        'Niche market appeal and low sales volume',
        'Uncertainty about long-term parts and support'
      ],
      'LiveWire': [
        'Extremely high price (€34,500) for performance offered',
        'Minimal dealer presence and low sales in Spain',
        'Brand identity confusion after Harley-Davidson spin-off',
        'Limited charging infrastructure compatibility',
        'Unclear long-term support and availability'
      ]
    },
    gapsToExploit: [
      {
        title: 'Affordable Electric Motorcycle Segment',
        description: 'Opportunity to introduce more affordable electric models to address price sensitivity and expand the market beyond early adopters, especially given the high price concerns mentioned in discussions.'
      },
      {
        title: 'Range & Charging Infrastructure',
        description: 'Invest in next-generation battery technology and expand fast-charging infrastructure to address range anxiety concerns, particularly for longer trips and touring use.'
      },
      {
        title: 'Urban Mobility & Commuter Focus',
        description: 'Develop and promote practical, commuter-friendly electric motorcycles and scooters for city use, leveraging positive sentiment around daily urban mobility and the success of the CE 04.'
      },
      {
        title: 'Education & Test Ride Campaigns',
        description: 'Launch educational and test ride campaigns to address skepticism, increase awareness, and convert traditional riders by showcasing real-world benefits and addressing concerns about battery life and reliability.'
      },
      {
        title: 'Second-Hand Market Development',
        description: 'Create a certified pre-owned program for electric motorcycles to address resale value concerns and make the technology more accessible to a broader market.'
      }
    ]
  },
  'UK': {
    shareOfVoice: [
      { name: 'Zero Motorcycles', value: 30 },
      { name: 'LiveWire', value: 20 },
      { name: 'BMW Motorrad', value: 15 },
      { name: 'Energica', value: 10 },
      { name: 'Others', value: 25 }
    ],
    competitorStrengths: {
      'BMW Motorrad': [
        'Strong brand trust and established dealer network',
        'CE 04 praised for futuristic design and urban mobility',
        'Positive media coverage and owner experiences',
        'Premium build quality and engineering',
        'First-mover advantage in premium electric scooter segment'
      ],
      'Zero Motorcycles': [
        'Market leadership and active UK owner community',
        'Broad model range and early mover advantage',
        'Praised for instant torque, acceleration, and ride experience',
        'Positive reviews for reliability and low running costs',
        'Regular updates and strong presence in enthusiast forums'
      ],
      'LiveWire': [
        'Harley-Davidson heritage and premium positioning',
        'Modern design and high performance',
        'S2 Del Mar model winning awards and media praise',
        'Strong media coverage and demo events',
        'Appeal to tech-forward and urban riders'
      ],
      'Energica': [
        'Premium performance and Italian design',
        'Credibility among sportbike and tech enthusiasts',
        'Innovative battery and range technology',
        'Standard DC fast charging for touring use',
        'Niche appeal for high-end segment'
      ]
    },
    competitorWeaknesses: {
      'BMW Motorrad': [
        'Limited to urban EV segment (mainly CE 04 scooter)',
        'High purchase price compared to petrol bikes',
        'Polarizing design among traditionalists',
        'Limited model range in electric segment',
        'Skepticism about long-term EV commitment'
      ],
      'Zero Motorcycles': [
        'High purchase cost compared to ICE bikes',
        'Range anxiety and charging infrastructure concerns',
        'Limited DC fast-charging on most models',
        'Mixed reviews on reliability and after-sales support',
        'Limited dealer/service network in the UK'
      ],
      'LiveWire': [
        'Extremely high price (£28,000 for original, £17,000 for Del Mar)',
        'Minimal dealer presence and low sales in the UK',
        'Brand identity confusion after Harley-Davidson spin-off',
        'Limited charging infrastructure compatibility',
        'Unclear long-term support and availability'
      ],
      'Energica': [
        'Very high purchase price (premium segment)',
        'Company instability after financial troubles',
        'Limited dealer/service network in the UK',
        'Niche market appeal and low sales volume',
        'Uncertainty about long-term parts and support'
      ]
    },
    gapsToExploit: [
      {
        title: 'Affordable Electric Motorcycle Segment',
        description: 'Opportunity to introduce more affordable electric models to address price sensitivity and expand the market beyond early adopters, especially given the high price concerns and lack of incentives in the UK.'
      },
      {
        title: 'Range & Charging Infrastructure',
        description: 'Invest in next-generation battery technology and expand fast-charging infrastructure to address range anxiety concerns, particularly for longer trips and touring use.'
      },
      {
        title: 'After-Sales & Service Network',
        description: 'Expand dealer and service networks across the UK to improve accessibility and trust, especially outside major cities.'
      },
      {
        title: 'Urban Mobility & Commuter Focus',
        description: 'Develop and promote practical, commuter-friendly electric motorcycles and scooters for city use, leveraging positive sentiment around daily urban mobility and the success of the CE 04.'
      },
      {
        title: 'Education & Test Ride Campaigns',
        description: 'Launch educational and test ride campaigns to address skepticism, increase awareness, and convert traditional riders by showcasing real-world benefits and addressing concerns about battery life and reliability.'
      },
      {
        title: 'Second-Hand Market Development',
        description: 'Create a certified pre-owned program for electric motorcycles to address resale value concerns and make the technology more accessible to a broader market.'
      }
    ]
  },
  'Netherlands': {
    shareOfVoice: [
      { name: 'Zero Motorcycles', value: 35 },
      { name: 'Energica', value: 22 },
      { name: 'BMW Motorrad', value: 15 },
      { name: 'LiveWire', value: 13 },
      { name: 'Others', value: 15 }
    ],
    competitorStrengths: {
      'Zero Motorcycles': [
        'Market leader in Dutch electric motorcycle conversations (30-40% share)',
        'Strong owner community and active forum presence (Motor-Forum.nl)',
        'Praised for instant torque, performance, and ride experience',
        'Broad model range and early mover advantage',
        'Positive reviews for reliability and low running costs'
      ],
      'Energica': [
        'High-performance models (Ego, Experia) attract enthusiast interest',
        'Strong acceleration and handling praised in professional and user reviews',
        'Credibility from racing heritage and MotoE involvement',
        'Distinctive design and Italian engineering',
        'Active in long-distance and touring discussions'
      ],
      'BMW Motorrad': [
        'Strong brand trust and recognition in the Netherlands',
        'CE 04 praised for urban commuting and low running costs',
        'Positive sentiment for build quality and reliability',
        'Dealer network and after-sales support',
        'Appeal to sustainability-focused riders'
      ],
      'LiveWire': [
        'Premium brand positioning and Harley-Davidson heritage',
        'Modern design and high performance',
        'Niche appeal among tech-forward and urban riders',
        'Positive media coverage and test ride events'
      ]
    },
    competitorWeaknesses: {
      'Zero Motorcycles': [
        'High purchase cost, especially after new BPM tax',
        'Range anxiety remains a concern for touring riders',
        'Limited DC fast-charging on some models',
        'Resale value and battery longevity questions',
        'Mixed reviews on warranty and after-sales support'
      ],
      'Energica': [
        'Very high purchase price (premium segment)',
        'Limited dealer/service network in the Netherlands',
        'Concerns about company stability after bankruptcy rumors',
        'Niche market appeal and low sales volume',
        'Charging infrastructure compatibility issues reported by some owners'
      ],
      'BMW Motorrad': [
        'Limited electric model range (mainly CE 04 scooter)',
        'Lower share of voice compared to dedicated EV brands',
        'Perceived as less innovative and slow to expand EV lineup',
        'High price for a scooter compared to petrol alternatives',
        'Skepticism about long-term EV commitment from leadership'
      ],
      'LiveWire': [
        'Extremely high price for performance offered',
        'Minimal dealer presence and low sales in the Netherlands',
        'Brand identity confusion after Harley-Davidson spin-off',
        'Limited charging infrastructure compatibility',
        'Unclear EU model availability and support'
      ]
    },
    gapsToExploit: [
      {
        title: 'Affordable Electric Motorcycle Segment',
        description: 'Opportunity to introduce more affordable electric models to address price sensitivity, especially after the removal of tax incentives and the introduction of BPM tax.'
      },
      {
        title: 'Range & Charging Solutions',
        description: 'Invest in next-generation battery technology and expand fast-charging infrastructure to address range anxiety and enable longer trips.'
      },
      {
        title: 'Dealer & Service Network Expansion',
        description: 'Expand dealer and service networks across the Netherlands to improve accessibility and trust, especially outside major cities.'
      },
      {
        title: 'Urban Mobility & Commuter Focus',
        description: 'Develop and promote practical, commuter-friendly electric motorcycles and scooters for city use, leveraging positive sentiment around daily urban mobility.'
      },
      {
        title: 'Education & Test Ride Campaigns',
        description: 'Launch educational and test ride campaigns to address skepticism, increase awareness, and convert traditional riders by showcasing real-world benefits.'
      }
    ]
  }
};

export const getCompetitorData = (market) => {
  const data = competitorData[market] || {
    shareOfVoice: [],
    competitorStrengths: {}
  };
  return {
    ...data,
    competitorWeaknesses: data.competitorWeaknesses || {},
    gapsToExploit: data.gapsToExploit || []
  };
}; 