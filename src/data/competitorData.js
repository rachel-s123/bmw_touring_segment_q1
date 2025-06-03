// This file is auto-generated. Do not edit directly.
// Run 'npm run generate-competitor-data' to update.

export const competitorData = {
  "france": {
    "shareOfVoice": [
      {
        "name": "BMW (RT series)",
        "value": 50
      },
      {
        "name": "Honda (Gold Wing)",
        "value": 35
      },
      {
        "name": "Harley-Davidson",
        "value": 10
      },
      {
        "name": "Yamaha (Legacy)",
        "value": 3
      },
      {
        "name": "Others",
        "value": 2
      }
    ],
    "competitorStrengths": {
      "BMW R1300RT": [
        "Segment leader with strong police fleet presence reinforcing reliability image",
        "Most advanced technology package including radar cruise control",
        "Balanced performance combining sport and touring capabilities"
      ],
      "Honda Gold Wing": [
        "Unparalleled comfort with \"Rolls-Royce\" reputation",
        "Strong reliability record with bikes lasting 200,000+ km",
        "Innovative features like DCT automatic transmission and airbag option"
      ],
      "Harley-Davidson Electra Glide": [
        "Iconic brand image and strong emotional connection",
        "Excellent resale value retention",
        "Distinctive V-twin character and American touring style"
      ],
      "Yamaha FJR1300 (Discontinued)": [
        "Proven reliability with bulletproof reputation",
        "Sport-touring balance appealing to performance-oriented riders",
        "Strong value proposition when available"
      ]
    },
    "competitorWeaknesses": {
      "BMW R1300RT": [
        "High entry price (€24,400 base, typically €28-30k equipped)",
        "Weight concerns at 280kg despite improvements",
        "Perception as \"old man's bike\" limiting appeal to younger riders"
      ],
      "Honda Gold Wing": [
        "Heaviest in class at ~380kg limiting maneuverability",
        "Highest price point (€30k-38k) in the segment",
        "Limited ground clearance restricting sporty riding"
      ],
      "Harley-Davidson Electra Glide": [
        "Very heavy (400kg+) with limited agility",
        "Most expensive option with CVO versions reaching €45k",
        "Appeals to narrower audience in French market"
      ],
      "Yamaha FJR1300 (Discontinued)": [
        "No longer in production (Euro5 non-compliance)",
        "Outdated technology by 2025 standards",
        "Absence leaves loyal owners without upgrade path",
        ""
      ]
    },
    "gapsToExploit": [
      {
        "title": "Conquest of Orphaned Riders",
        "description": "With Yamaha FJR1300 and Kawasaki 1400GTR discontinued, thousands of loyal owners need new touring options, presenting a significant conquest opportunity for BMW."
      },
      {
        "title": "Technology Leadership Position",
        "description": "BMW's radar cruise control and advanced electronics provide clear differentiation in a market increasingly valuing high-tech features."
      },
      {
        "title": "Growing Domestic Moto-Tourism",
        "description": "Post-pandemic surge in European touring creates demand for capable long-distance motorcycles, with France as a key touring destination."
      },
      {
        "title": "Police Fleet Visibility",
        "description": "Continued use by French Gendarmerie provides unique marketing advantage reinforcing reliability and performance credentials."
      },
      {
        "title": "Weight Management Innovation",
        "description": "Addressing the primary concern through training programs, technology, or design innovations could significantly expand market appeal."
      }
    ]
  },
  "spain": {
    "shareOfVoice": [
      {
        "name": "BMW R1300RT",
        "value": 65
      },
      {
        "name": "Honda Gold Wing",
        "value": 20
      },
      {
        "name": "Other BMW Models (K1600, R1300GS)",
        "value": 10
      },
      {
        "name": "Former Competitors (Yamaha FJR, etc.)",
        "value": 3
      },
      {
        "name": "Others",
        "value": 2
      }
    ],
    "competitorStrengths": {
      "Honda Gold Wing": [
        "Legendary engine smoothness and comfort (\"sofa on two wheels\")",
        "Advanced features like DCT and airbag availability",
        "Bulletproof reliability reputation"
      ],
      "Honda NT1100": [
        "Much cheaper (€15k) and lighter (240 kg) than premium tourers",
        "Honda DCT option available",
        "Good value proposition for budget-conscious riders"
      ],
      "Kawasaki Ninja 1000SX / Suzuki GSX-S1000GT": [
        "High performance-per-euro ratio",
        "Sporty handling for solo touring",
        "Affordable entry point (€14k)"
      ],
      "BMW K1600 GT/GTL": [
        "Extremely powerful six-cylinder engine",
        "Top luxury features and smoothness",
        "BMW's answer to Gold Wing"
      ]
    },
    "competitorWeaknesses": {
      "Honda Gold Wing": [
        "Very heavy (380 kg) and expensive (€29k+)",
        "Bulky styling despite 2018 redesign",
        "Limited appeal in Spain due to size and practicality"
      ],
      "Honda NT1100": [
        "Not in same luxury class as RT or Gold Wing",
        "Lacks prestige and power of big tourers",
        "Limited features compared to premium segment"
      ],
      "Kawasaki Ninja 1000SX / Suzuki GSX-S1000GT": [
        "Much less comfort than dedicated tourers",
        "Limited features and weather protection",
        "Modest sales in touring segment"
      ],
      "BMW K1600 GT/GTL": [
        "Very rare in Spain due to size and price",
        "Current model lacks some R1300RT tech (radar, ASA)",
        "Potential cannibalization within BMW lineup",
        ""
      ]
    },
    "gapsToExploit": [
      {
        "title": "Capture Riders from Discontinued Models",
        "description": "With Yamaha FJR1300 and Kawasaki GTR discontinued, their owners have limited upgrade options. BMW can actively court these riders through trade-in programs and demo events."
      },
      {
        "title": "Partner with Tour Operators",
        "description": "Guided motorcycle tours in Spain are popular with European tourists. BMW could market the RT for tour operator fleets and establish exclusive partnerships."
      },
      {
        "title": "Develop Entry-Level Touring Model",
        "description": "Create a lighter \"mini-RT\" using the F900 platform to capture younger riders and compete with Honda NT1100 in the crossover-touring segment."
      },
      {
        "title": "Electric Touring Future",
        "description": "Leverage BMW's EV experience (CE-04 scooter) to develop the first viable electric tourer when battery technology allows, securing eco-conscious riders."
      },
      {
        "title": "Financing and Value Packages",
        "description": "Given price sensitivity, develop attractive BMW Select financing options and include maintenance/warranty packages to improve value perception."
      }
    ]
  }
};

export const competitorColors = {
  'BMW Motorrad': '#0066B1',
  'Zero Motorcycles': '#FF6B6B',
  'Energica': '#4CAF50',
  'LiveWire': '#9C27B0',
  'Others': '#757575'
};

export function getCompetitorData(market) {
  const marketKey = market.toLowerCase();
  return competitorData[marketKey] || {
    shareOfVoice: [],
    competitorStrengths: {},
    competitorWeaknesses: {},
    gapsToExploit: []
  };
}

export function getCompetitorColors(market) {
  return competitorColors;
}
