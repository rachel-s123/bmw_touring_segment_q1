// This file is auto-generated. Do not edit directly.
// Run 'npm run generate-competitor-data' to update.

export const competitorData = {
  "france": {
    "shareOfVoice": [
      {
        "name": "BMW Motorrad",
        "value": 45
      },
      {
        "name": "Zero Motorcycles",
        "value": 28
      },
      {
        "name": "Energica",
        "value": 12
      },
      {
        "name": "LiveWire",
        "value": 10
      },
      {
        "name": "Others",
        "value": 5
      }
    ],
    "competitorStrengths": {
      "BMW Motorrad": [
        "Strong brand recognition",
        "Leading urban EV model (CE 04)",
        "Extensive dealer network"
      ],
      "Zero Motorcycles": [
        "Active community engagement",
        "Good value for city riders",
        "New models generating buzz"
      ],
      "Energica": [
        "Performance focus",
        "Racing heritage",
        "Good charging compatibility"
      ],
      "LiveWire": [
        "Premium brand positioning",
        "Modern design",
        "Strong media coverage"
      ]
    },
    "competitorWeaknesses": {
      "BMW Motorrad": [
        "Limited high-performance EV options",
        "Higher price point",
        "Perceived as less innovative by some"
      ],
      "Zero Motorcycles": [
        "Limited fast-charging",
        "Lower brand awareness",
        "Mixed reviews on reliability"
      ],
      "Energica": [
        "High purchase cost",
        "Niche appeal",
        "Limited dealer network"
      ],
      "LiveWire": [
        "High price",
        "Limited charging infrastructure",
        "Uncertain long-term support",
        ""
      ]
    },
    "gapsToExploit": [
      {
        "title": "Mid-Range Electric Motorcycle",
        "description": "Opportunity to introduce a mid-range electric motorcycle between the CE 04 scooter and high-performance models."
      },
      {
        "title": "Enhanced Charging Infrastructure",
        "description": "Develop partnerships with French charging networks to improve charging experience."
      },
      {
        "title": "Youth Market Focus",
        "description": "Create targeted campaigns and products for younger riders."
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
