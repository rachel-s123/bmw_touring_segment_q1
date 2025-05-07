// Market insights extracted from conversation reports
export const marketInsights = {
  belgium: {
    sentiment: {
      overall: "Mixed but improving - 40% positive, 40% neutral, 20% negative",
      positives: [
        "Early adopters praise performance and experience",
        "Commuters report high satisfaction with CE 04",
        "Instant torque and smooth acceleration highly rated",
        "Growing belief in practicality for daily use"
      ],
      negatives: [
        "High purchase costs remain a concern",
        "Range anxiety for touring riders",
        "Some reliability and support issues reported",
        "Cultural resistance from traditionalist bikers"
      ]
    },
    topics: {
      performance: {
        key_points: [
          "Acceleration and handling highly praised",
          "Instant throttle response appreciated",
          "Highway performance impacts battery life",
          "New performance models generating interest"
        ],
        sentiment: "Largely positive"
      },
      design: {
        key_points: [
          "CE 04's futuristic styling draws attention",
          "Split between modern and traditional preferences",
          "Ergonomics and practicality well-received",
          "Storage solutions praised (e.g. CE 04 helmet compartment)"
        ],
        sentiment: "Mixed but trending positive"
      },
      competition: {
        key_points: [
          "Zero leads market share (~50% of active fleet)",
          "BMW gaining ground with CE 04",
          "Energica and LiveWire remain niche",
          "Traditional vs new brand dynamics evident"
        ],
        sentiment: "Evolving landscape with growing respect for new players"
      }
    }
  },
  france: {
    sentiment: {
      overall: "Mixed but leaning positive - 40% positive, 35% neutral, 25% negative",
      positives: [
        "Strong enthusiasm for performance and instant torque",
        "Appreciation for innovative designs, especially BMW CE 04",
        "Growing acceptance for urban mobility use cases",
        "Environmental benefits and lower running costs",
        "Positive real-world experiences from early adopters"
      ],
      negatives: [
        "Range anxiety and charging infrastructure concerns",
        "High purchase costs, especially after eco-bonus removal",
        "Missing traditional motorcycle character (sound, vibration)",
        "Limited model availability and dealer support",
        "Concerns about battery longevity"
      ]
    },
    marketPosition: {
      overview: "Growing but niche market with active online community",
      keyMetrics: [
        "3,000-5,000 online mentions in Q1 2025",
        "8% market share of new two-wheeler sales",
        "BMW CE 04 leads electric segment sales",
        "Growing second-hand market (+25% in Q1 2025)"
      ],
      brandPresence: [
        "BMW dominates with 40-50% share of voice",
        "Zero Motorcycles second with 25-30% share",
        "Energica and LiveWire each ~10% or less",
        "Emerging interest in Japanese manufacturers' plans"
      ]
    },
    performance: {
      sentiment: "Very positive, especially for urban use",
      keyPoints: [
        "Instant acceleration highly praised",
        "Smooth and quiet operation appreciated",
        "Top speed limitations accepted",
        "Real-world range experiences widely shared",
        "Cold weather impact on performance noted"
      ]
    },
    urbanMobility: {
      sentiment: "Strong positive for city use",
      keyPoints: [
        "Perfect for daily commuting",
        "Zero emissions advantage in cities",
        "Easy maneuverability in traffic",
        "Charging infrastructure improving in urban areas",
        "Growing acceptance among younger riders"
      ]
    },
    marketTrends: {
      sentiment: "Cautiously optimistic",
      keyPoints: [
        "Impact of eco-bonus removal affecting sales",
        "Growing interest in second-hand market",
        "Increasing competition from new entrants",
        "Price sensitivity driving purchase decisions",
        "EU-US trade tariffs affecting market dynamics"
      ]
    }
  },
  italy: {
    sentiment: {
      overall: "Strongly positive - 65% positive, 25% neutral, 10% negative",
      positives: [
        "High enthusiasm for performance and innovation",
        "Strong appreciation for instant torque and acceleration",
        "Positive reception of futuristic designs",
        "Pride in local brand Energica's engineering"
      ],
      negatives: [
        "Range and charging infrastructure limitations",
        "High purchase prices compared to petrol bikes",
        "Some reliability concerns with early models",
        "Traditional riders missing engine character"
      ]
    },
    topics: {
      performance: {
        key_points: [
          "Acceleration and torque highly praised",
          "Silent operation viewed positively in urban settings",
          "Performance matches or exceeds petrol equivalents",
          "Range vs performance trade-off noted"
        ],
        sentiment: "Very positive, dominant theme in discussions"
      },
      design: {
        key_points: [
          "CE 04 design polarizing but trend-setting",
          "Strong opinions on futuristic vs traditional styling",
          "Build quality generally praised",
          "Brand identity important in design perception"
        ],
        sentiment: "Mixed but leaning positive"
      },
      market_evolution: {
        key_points: [
          "BMW leads with ~77% market share in electric segment",
          "Growing acceptance among younger riders",
          "Increasing interest in affordable models",
          "Strong community engagement and knowledge sharing"
        ],
        sentiment: "Optimistic about future growth"
      }
    }
  },
  netherlands: {
    sentiment: {
      overall: "Mixed with slight positive lean - 45% positive, 25% neutral, 30% negative",
      positives: [
        "Strong enthusiasm for performance and instant torque",
        "Appreciation for low maintenance and running costs",
        "Growing acceptance for urban commuting",
        "Environmental benefits resonate with some riders"
      ],
      negatives: [
        "Range anxiety remains primary concern",
        "High purchase costs amplified by new BPM tax",
        "Missing traditional motorcycle experience",
        "Charging infrastructure concerns"
      ]
    },
    topics: {
      market_position: {
        key_points: [
          "Zero leads with 30-40% share of voice",
          "BMW CE 04 generates ~15% of discussions",
          "New tax policy impacting market growth",
          "Growing second-hand market emerging"
        ],
        sentiment: "Cautiously optimistic despite policy challenges"
      },
      performance: {
        key_points: [
          "Instant torque and acceleration highly praised",
          "Smooth power delivery appreciated",
          "Some miss traditional gear shifting",
          "Battery weight affects low-speed handling"
        ],
        sentiment: "Very positive for performance aspects"
      },
      cost_analysis: {
        key_points: [
          "New BPM tax adding 19.4% to purchase price",
          "Low running costs (~€0.25 per 100km) highlighted",
          "Minimal maintenance costs appreciated",
          "Resale value concerns due to battery life"
        ],
        sentiment: "Mixed - high upfront costs vs long-term savings"
      }
    }
  },
  nordics: {
    sentiment: {
      overall: "Mixed but leaning positive - 40% positive, 35% neutral, 25% negative",
      positives: [
        "Strong EV culture, especially in Norway",
        "Enthusiasm for performance and innovation",
        "Environmental benefits align with Nordic values",
        "Growing acceptance in urban areas"
      ],
      negatives: [
        "Range concerns amplified by long distances",
        "Winter weather impact on battery performance",
        "Limited dealer network and support",
        "High purchase costs in some markets"
      ]
    },
    topics: {
      market_dynamics: {
        key_points: [
          "Sweden leads with highest conversation volume (~40%)",
          "Norway shows strong per-capita interest (~30%)",
          "Finland and Denmark each ~15% of discussions",
          "BMW and Zero dominate share of voice"
        ],
        sentiment: "Growing interest with regional variations"
      },
      seasonal_factors: {
        key_points: [
          "Winter performance major concern",
          "Significant range reduction in cold weather",
          "Storage solutions for winter months",
          "Seasonal usage patterns affect adoption"
        ],
        sentiment: "Challenging but manageable with proper planning"
      },
      infrastructure: {
        key_points: [
          "Strong charging network in Norwegian cities",
          "Sweden expanding public charging",
          "Limited rural infrastructure across region",
          "Need for motorcycle-specific charging solutions"
        ],
        sentiment: "Improving in urban areas, gaps in rural regions"
      }
    },
    country_specific: {
      sweden: {
        key_points: [
          "Largest conversation volume in Nordics",
          "Strong interest in BMW CE 04",
          "Focus on urban mobility solutions",
          "Environmental benefits resonate strongly"
        ],
        sentiment: "Most positive among Nordic countries"
      },
      norway: {
        key_points: [
          "Highest EV adoption culture",
          "Strong Zero Motorcycles presence",
          "Seeking government incentives for e-motorcycles",
          "Winter range concerns prominent"
        ],
        sentiment: "Positive but practical concerns remain"
      },
      finland: {
        key_points: [
          "Small but growing interest",
          "Pride in local Verge startup",
          "Technical discussions dominate",
          "Winter adaptation critical focus"
        ],
        sentiment: "Neutral to positive, technically focused"
      },
      denmark: {
        key_points: [
          "Limited dealer network (one Zero dealer)",
          "Urban commuting potential highlighted",
          "High vehicle taxes affect adoption",
          "Competition from e-bikes and mopeds"
        ],
        sentiment: "Most skeptical among Nordic countries"
      }
    }
  },
  spain: {
    sentiment: {
      overall: "Mixed but positive-leaning - 40% positive, 30% neutral, 30% negative",
      positives: [
        "Strong enthusiasm for performance and instant torque",
        "Appreciation for low maintenance and running costs",
        "Environmental benefits resonate with urban riders",
        "Growing acceptance of innovative designs"
      ],
      negatives: [
        "High purchase costs seen as major barrier",
        "Range anxiety and charging infrastructure concerns",
        "Some reliability and service issues reported",
        "Traditional riders miss 'motorcycle soul'"
      ]
    },
    topics: {
      market_trends: {
        key_points: [
          "1,704 electric two-wheelers registered in Q1 (up 12.3% YoY)",
          "Zero and BMW dominate enthusiast discussions",
          "New government incentives driving interest",
          "Growing focus on urban mobility solutions"
        ],
        sentiment: "Cautiously optimistic with growing momentum"
      },
      performance: {
        key_points: [
          "Instant torque highly praised across brands",
          "Top speed limitations noted but accepted",
          "Smooth power delivery appreciated",
          "Regenerative braking takes adjustment"
        ],
        sentiment: "Very positive, especially for urban use"
      },
      reliability: {
        key_points: [
          "Some concerns with early Zero models",
          "BMW seen as more reliable option",
          "Limited service network highlighted",
          "Battery longevity questions persist"
        ],
        sentiment: "Mixed, with preference for established brands"
      }
    }
  },
  switzerland: {
    sentiment: {
      overall: "Mixed but trending positive - 60% positive, 25% neutral, 15% negative",
      positives: [
        "Strong enthusiasm for performance and instant torque",
        "Appreciation for smooth, quiet operation",
        "Growing acceptance in urban areas",
        "Low maintenance and running costs"
      ],
      negatives: [
        "Range anxiety, especially for touring",
        "High purchase costs without government incentives",
        "Charging infrastructure concerns",
        "Traditional riders miss engine character"
      ]
    },
    topics: {
      market_position: {
        key_points: [
          "BMW and Zero dominate share of voice (50% and 40% respectively)",
          "Limited but growing market - 4,034 electric two-wheelers registered in 2023",
          "BMW sold 88 electric scooters vs Zero's 70 bikes in 2023",
          "Dense charging network but limited motorcycle-specific stations"
        ],
        sentiment: "Cautiously optimistic with focus on urban use"
      },
      performance: {
        key_points: [
          "Instant torque and acceleration highly praised",
          "Smooth power delivery and handling appreciated",
          "Silent operation viewed positively by many",
          "Real-world range varies significantly with riding style"
        ],
        sentiment: "Very positive, especially for acceleration and ride quality"
      },
      infrastructure: {
        key_points: [
          "First motorcycle-specific charging stations installed in Bevaix",
          "Dense general charging network but often car-focused",
          "Home charging preferred for convenience",
          "Range anxiety remains for touring use"
        ],
        sentiment: "Mixed but improving with new initiatives"
      }
    }
  },
  uk: {
    sentiment: {
      overall: "Mixed with balanced distribution - 40% positive, 40% negative, 20% neutral",
      positives: [
        "Strong enthusiasm for performance and instant torque",
        "Low running costs and minimal maintenance",
        "Environmental benefits and ULEZ compliance",
        "Growing acceptance of innovative designs"
      ],
      negatives: [
        "Range anxiety and charging infrastructure concerns",
        "High purchase costs without government incentives",
        "Limited model availability and dealer support",
        "Traditional riders miss engine character and sound"
      ]
    },
    topics: {
      market_position: {
        key_points: [
          "Limited but growing market - 3,750 electric two-wheelers registered in 2024",
          "Zero and LiveWire dominate share of voice",
          "Japanese manufacturers entering the market",
          "BMW seen as trusted but conservative player"
        ],
        sentiment: "Cautiously optimistic with focus on mainstream adoption"
      },
      performance: {
        key_points: [
          "Instant torque and acceleration highly praised",
          "Smooth power delivery appreciated",
          "Silent operation viewed positively by many",
          "Weight concerns partially offset by low center of gravity"
        ],
        sentiment: "Very positive, especially for urban use and commuting"
      },
      infrastructure: {
        key_points: [
          "Charging infrastructure growing but car-focused",
          "Home charging challenging for urban residents",
          "Fast charging not universal across brands",
          "Range varies significantly with riding style"
        ],
        sentiment: "Mixed but improving with new initiatives"
      }
    }
  },
  portugal: {
    sentiment: {
      overall: "Mixed but leaning positive - 50% positive, 30% neutral, 20% negative",
      positives: [
        "Strong enthusiasm for performance and instant torque",
        "Appreciation for innovative designs",
        "Environmental benefits resonate with urban riders",
        "Growing acceptance of electric mobility"
      ],
      negatives: [
        "High purchase costs and limited incentives",
        "Range anxiety for longer trips",
        "Charging infrastructure concerns",
        "Battery longevity uncertainties"
      ]
    },
    topics: {
      market_position: {
        key_points: [
          "Limited but growing market - 109 electric motorcycles registered in Q1 2025",
          "BMW and Zero dominate share of voice (70% combined)",
          "BMW's electric sales grew 62% in 2024",
          "New government incentives launched in March 2025"
        ],
        sentiment: "Cautiously optimistic with growing momentum"
      },
      performance: {
        key_points: [
          "Instant torque and acceleration highly praised",
          "Real-world range experiences shared extensively",
          "Charging technology and infrastructure discussed",
          "Silent operation viewed positively"
        ],
        sentiment: "Very positive, especially for urban use"
      },
      design: {
        key_points: [
          "BMW CE 04's futuristic design widely discussed",
          "Brand heritage vs innovation debated",
          "Strong interest in upcoming models",
          "Design crucial for purchase decisions"
        ],
        sentiment: "Mixed but trending positive for innovative designs"
      }
    }
  },
  csRegion: {
    sentiment: {
      overall: "Mixed but leaning negative-neutral - 25% positive, 35% neutral, 40% negative",
      positives: [
        "Strong enthusiasm for performance and instant torque among early adopters",
        "Growing acceptance in urban areas, especially for commuting",
        "Appreciation for innovative designs, particularly BMW CE 04",
        "Environmental benefits resonate with younger riders",
        "Low maintenance costs appeal to practical riders"
      ],
      negatives: [
        "High purchase costs, particularly significant in lower-income markets",
        "Range anxiety, especially for touring and cold weather",
        "Limited charging infrastructure across the region",
        "Traditional riders miss engine character and sound",
        "Skepticism about battery longevity and resale value"
      ]
    },
    marketPosition: {
      overview: "Moderate but growing market with significant variations by country",
      keyMetrics: [
        "Poland leads with ~30% of regional conversation volume",
        "Greece contributes ~15-20% of discussions",
        "Czech/Slovak markets ~10-15% combined",
        "Smaller markets (Hungary, Romania, Bulgaria, Slovenia) each under 10%"
      ],
      brandPresence: [
        "BMW dominates with ~50% share of voice",
        "Zero Motorcycles second with ~25% share",
        "Energica and LiveWire each ~10-15% share",
        "Emerging presence of Asian manufacturers in some markets"
      ]
    },
    performance: {
      sentiment: "Generally positive, especially for urban use",
      keyPoints: [
        "Instant torque and acceleration highly praised",
        "Real-world range experiences widely shared",
        "Cold weather impact on battery performance noted",
        "Urban commuting seen as ideal use case",
        "Top speed limitations accepted for city use"
      ]
    },
    countrySpecifics: {
      czechSlovakia: {
        sentiment: "Most skeptical in region, strong technical focus",
        keyTopics: [
          "Detailed technical analysis and comparisons",
          "Cost-benefit calculations",
          "Range concerns for touring",
          "Environmental regulations impact"
        ]
      },
      poland: {
        sentiment: "Divided but growing interest",
        keyTopics: [
          "Urban mobility solutions",
          "Performance comparisons",
          "Price sensitivity",
          "Real-world user experiences"
        ]
      },
      greece: {
        sentiment: "Mixed-positive, strong urban focus",
        keyTopics: [
          "Urban commuting benefits",
          "Design appreciation",
          "Charging infrastructure",
          "Warm weather advantages"
        ]
      },
      austria: {
        sentiment: "Neutral-to-positive, tech-oriented",
        keyTopics: [
          "Alpine performance",
          "Environmental incentives",
          "Charging network",
          "Innovation focus"
        ]
      }
    },
    emergingTrends: [
      "Increasing firsthand user experiences shared",
      "Growing price competition with new promotions",
      "Integration into mainstream motorcycle discussions",
      "Rising interest in Japanese manufacturers' plans",
      "Shift from novelty to practical consideration"
    ]
  },
  // Additional markets will be added here as reports are processed
}; 