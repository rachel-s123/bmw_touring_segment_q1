export const marketInsights = {
  'UK': {
    keyDrivers: {
      high: [
        {
          attribute: 'Battery Technology and Range',
          score: 95.0,
          insight: 'The absolute top concern, dictating usability and limiting market appeal.'
        },
        {
          attribute: 'Affordability and Cost of Ownership',
          score: 95.0,
          insight: 'Tied for most critical; the high upfront price is the biggest barrier to entry.'
        },
        {
          attribute: 'Charging Infrastructure',
          score: 88.5,
          insight: 'Practical charging limitations are a major hurdle for many potential UK buyers.'
        },
        {
          attribute: 'Performance and Speed',
          score: 88.5,
          insight: 'A key positive driver, generating excitement and showcasing EV capabilities.'
        },
        {
          attribute: 'Urban Mobility Solutions',
          score: 85.0,
          insight: 'Defines the primary successful use case in the current UK market.'
        }
      ],
      low: [
        {
          attribute: 'Education and Awareness',
          score: 55.0,
          insight: 'Market is learning, but core product issues are more critical.'
        },
        {
          attribute: 'Noise Reduction',
          score: 53.5,
          insight: 'A noticeable feature but not decisive.'
        },
        {
          attribute: 'Sustainability and Environmental Impact',
          score: 50.0,
          insight: 'A secondary benefit for most.'
        },
        {
          attribute: 'Insurance and Financing Options',
          score: 36.0,
          insight: 'Practical details, less discussed.'
        },
        {
          attribute: 'Safety Features',
          score: 28.5,
          insight: 'Assumed or not a focus of discussion.'
        }
      ]
    },
    resonanceFactors: {
      high: [
        'An established brand trust and robust support network give comfort to UK buyers, mitigating worries about new technology',
        'The allure of cutting-edge tech and design aligns with UK consumer expectations for innovation in the premium segment',
        'Performance advantages and urban utility provide both emotional and practical appeals'
      ],
      low: [
        'Cultural or community influences are muted in purchasing decisions',
        'Customization is off the radar for most, overshadowed by concerns like price, battery range, and maintenance support',
        'Environmental benefits remain secondary considerations compared to practical factors'
      ]
    },
    marketInsights: [
      'Core Barriers Dominate: Similar to Italy and France, the UK market conversation is overwhelmingly focused on the fundamental challenges: Range, Cost, and Charging.',
      'Performance is the Hook: Despite the barriers, the impressive performance (torque, acceleration) is a consistent positive theme that captures rider interest.',
      'Urban Niche: The primary viable market currently is urban commuting, where range is less critical and low running costs/ULEZ compliance are advantageous.',
      'Lack of Incentives Hurts: The absence of significant government grants for electric motorcycles in the UK is clearly felt and discussed as a factor amplifying the cost barrier.',
      'Reliability & Support Matter: Concerns about the reliability of newer technology and the stability/support of manufacturers are growing, making established networks an asset.',
      'Brand Heritage is Valuable: BMW\'s established reputation and legacy provide a significant advantage in the UK market.',
      'Cultural Barriers Minimal: Unlike some markets, the UK shows little cultural resistance to electric motorcycles, with riders focused on practical concerns rather than identity issues.'
    ],
    attributeInsights: {
      'Performance and Speed': {
        score: 88.5,
        rationale: 'Very high importance scores (Social 90, Market 85, Review 90, Expert 90). Instant torque and acceleration are key positive drivers frequently highlighted in owner and expert reviews.',
        consumerInsight: 'Performance is a major factor driving excitement and interest, often cited as a key reason to consider an EV despite other drawbacks.'
      },
      'Battery Technology and Range': {
        score: 95.0,
        rationale: 'Highest importance scores across all components (95). Range limitations and anxiety are described as the "most discussed theme" and a primary reason for low UK sales figures.',
        consumerInsight: 'Real-world range versus advertised figures is a constant debate. Range anxiety is often the deciding factor against purchasing an EV motorcycle in the UK.'
      },
      'Brand Heritage and Trust': {
        score: 75.0,
        rationale: 'High importance. Brand positioning, heritage, and the contrast of established players vs start-ups shape UK market discussions.',
        consumerInsight: 'UK riders actively compare brands based on image and origin (legacy vs startup); BMW\'s long-standing reputation and extensive dealer network foster trust, especially in contrast to niche brands with limited support.'
      },
      'Urban Mobility Solutions': {
        score: 85.0,
        rationale: 'Very high importance scores (Social 85, Market 85, Review 85, Expert 85). Commuting is identified as the main viable use case, aligning with models like the CE 04 and driving interest.',
        consumerInsight: 'Suitability for city use (low running costs, ease of use, ULEZ compliance) is a highly important factor, making EVs attractive as second bikes or commuter tools.'
      }
    },
    strategicRecommendations: [
      {
        title: 'Address Core Barriers',
        details: 'Focus on the trinity of Range, Cost, and Charging. Communicate realistic range figures, justify premium pricing through TCO arguments, and provide clear charging solutions.'
      },
      {
        title: 'Leverage Performance Appeal',
        details: 'Emphasize instant torque and acceleration in marketing and test rides to capture enthusiast interest and counter negative perceptions.'
      },
      {
        title: 'Own Urban Mobility',
        details: 'Position CE 04 and CE 02 as ideal urban solutions, highlighting style, practicality, and ULEZ compliance.'
      },
      {
        title: 'Build Trust Through Heritage',
        details: 'Continue marketing BMW\'s reliability alongside innovative features to reassure and excite UK consumers.'
      }
    ],
    attributesAnalysis: {
      'Performance and Speed': {
        score: 88.5,
        insight: "Very high importance. Performance is a major factor driving excitement and interest, often cited as a key reason to consider an EV despite other drawbacks.",
        recommendation: "Emphasize instant torque and acceleration in marketing and test rides. Use performance metrics to counter skepticism about EV capabilities."
      },
      'Battery Technology and Range': {
        score: 95.0,
        insight: "Highest importance. Range anxiety and real-world range versus advertised figures are constant debate points and primary barriers to adoption.",
        recommendation: "Focus R&D on range improvements. Provide transparent real-world range data and tools for range planning. Consider range-extended variants for touring."
      },
      'Charging Infrastructure': {
        score: 88.5,
        insight: "Critical enabler/barrier. Charging availability and speed significantly impact practicality and appeal.",
        recommendation: "Partner with charging networks, develop bike-specific charging solutions, integrate charging planning tools in navigation systems."
      },
      'Noise Reduction': {
        score: 53.5,
        insight: "Mixed reactions. Some appreciate the quiet ride, others miss traditional engine sound.",
        recommendation: "Position quiet operation as a premium feature for urban environments. Consider optional sound enhancement for those who prefer feedback."
      },
      'Affordability and Cost of Ownership': {
        score: 95.0,
        insight: "Highest importance. High upfront price is the biggest barrier to entry, though TCO benefits are recognized.",
        recommendation: "Develop creative financing options. Emphasize TCO benefits including fuel savings, maintenance, and residual value."
      },
      'Insurance and Financing Options': {
        score: 36.0,
        insight: "Low importance. Practical details that are considered later in the purchase journey.",
        recommendation: "Ensure competitive options are available but focus marketing on more critical factors."
      },
      'Resale Value and Longevity': {
        score: 69.5,
        insight: "Growing concern about battery life and future value, especially given rapid tech evolution.",
        recommendation: "Offer battery warranties, provide transparency about battery health monitoring, establish strong residual value programs."
      },
      'Government Incentives and Regulations': {
        score: 76.5,
        insight: "High importance. Policy changes directly impact market dynamics and purchase decisions.",
        recommendation: "Advocate for EV-friendly policies, develop market-specific strategies to address incentive gaps."
      },
      'Advanced Technology Integration': {
        score: 63.0,
        insight: "Moderate importance. Tech features contribute to premium positioning but are secondary to core attributes.",
        recommendation: "Continue innovation but prioritize tech that enhances core functionality (range, charging, performance)."
      },
      'Connectivity and Smart Features': {
        score: 37.5,
        insight: "Low-moderate importance. Nice-to-have features that don't drive purchase decisions.",
        recommendation: "Include competitive connectivity features but avoid over-investing in non-essential smart features."
      },
      'Safety Features': {
        score: 28.5,
        insight: "Low importance. Safety is assumed rather than actively discussed.",
        recommendation: "Maintain high safety standards but focus marketing on more differentiating factors."
      },
      'After-Sales Support and Service Network': {
        score: 68.5,
        insight: "Moderate-high importance. Quality support network provides reassurance for new technology.",
        recommendation: "Leverage and promote BMWs established service network as a competitive advantage."
      },
      'Education and Awareness': {
        score: 55.0,
        insight: "Moderate importance. Market is learning but core product issues are more critical.",
        recommendation: "Focus educational efforts on addressing specific concerns about range, charging, and TCO."
      },
      'Urban Mobility Solutions': {
        score: 85.0,
        insight: "Very high importance. Urban use case is a key driver of interest and adoption.",
        recommendation: "Continue urban-focused product development. Position CE 04 and CE 02 as premium urban mobility solutions."
      },
      'Sustainability and Environmental Impact': {
        score: 50.0,
        insight: "Moderate importance. Environmental benefits are appreciated but secondary to practical factors.",
        recommendation: "Include sustainability messaging as supporting point but focus on practical benefits."
      },
      'Brand Heritage and Trust': {
        score: 75.0,
        insight: "High importance. BMWs engineering reputation and established presence provide significant advantage.",
        recommendation: "Leverage brand heritage in marketing. Emphasize BMWs history of innovation and quality."
      },
      'Community and Culture': {
        score: 50.0,
        insight: "Moderate importance. Some cultural resistance but practical factors dominate decisions.",
        recommendation: "Build EV-specific community through events and owner groups while respecting traditional motorcycle culture."
      },
      'Customization and Personalization': {
        score: 15.0,
        insight: "Very low importance. Not a significant factor in current market.",
        recommendation: "Maintain basic customization options but prioritize investment in core attributes."
      },
      'Design Innovation': {
        score: 63.0,
        insight: "Moderate importance. Innovative design contributes to premium positioning and differentiation.",
        recommendation: "Continue distinctive design language while ensuring it supports practical functionality."
      },
      'Market Segmentation': {
        score: 85.0,
        insight: "High importance. Clear market positioning and competitive differentiation are crucial.",
        recommendation: "Maintain clear segmentation between urban mobility and performance models. Target specific use cases and user groups."
      }
    }
  },
  'Switzerland': {
    keyDrivers: {
      high: [
        {
          attribute: 'Battery Technology and Range',
          score: 95.0,
          insight: 'Critical factor with real-world range varying 100-180km. Range anxiety and charging planning are dominant concerns.'
        },
        {
          attribute: 'Affordability and Cost of Ownership',
          score: 91.0,
          insight: 'High upfront cost is a major barrier, though lower running costs and maintenance savings offset.'
        },
        {
          attribute: 'Performance and Speed',
          score: 88.5,
          insight: 'Instant torque and smooth acceleration highly praised. Performance drives enthusiast interest.'
        },
        {
          attribute: 'Charging Infrastructure',
          score: 88.5,
          insight: 'Dense network but bike-unfriendly stations. First bike-specific station in Bevaix shows progress.'
        },
        {
          attribute: 'Brand Heritage and Trust',
          score: 85.0,
          insight: 'BMW\'s engineering heritage and quality reputation significantly influence buyer confidence.'
        }
      ],
      low: [
        {
          attribute: 'Customization and Personalization',
          score: 15.0,
          insight: 'Virtually no mention of tailoring or personalizing bikes in discussions.'
        },
        {
          attribute: 'Insurance and Financing Options',
          score: 14.5,
          insight: 'Not a significant factor in market discussions or decisions.'
        },
        {
          attribute: 'Safety Features',
          score: 10.0,
          insight: 'Not identified as a key market factor.'
        },
        {
          attribute: 'Connectivity and Smart Features',
          score: 37.5,
          insight: 'Nice to have but not decisive.'
        },
        {
          attribute: 'Sustainability and Environmental Impact',
          score: 49.5,
          insight: 'Secondary to practical factors.'
        }
      ]
    },
    resonanceFactors: {
      high: [
        'BMW\'s strong brand heritage and proven track record instill trust in the niche Swiss market',
        'Sense that BMW offers cutting-edge innovation within a reliable brand framework amplifies appeal',
        'Performance advantages create excitement while urban mobility benefits provide practical justification'
      ],
      low: [
        'Broader motorcycle culture has minimal sway on Swiss EV decisions beyond brand fan groups',
        'Customization is absent from consumer priorities',
        'Environmental factors and connectivity features remain secondary considerations'
      ]
    },
    marketInsights: [
      'Core Barriers Dominate: Range anxiety, charging infrastructure limitations, and high costs are the primary market challenges.',
      'Performance Drives Interest: Instant torque and smooth acceleration generate significant positive buzz and enthusiasm.',
      'Urban Focus Critical: Strong emphasis on urban mobility solutions, particularly for commuting with models like CE 04.',
      'Brand Trust Matters: BMW\'s engineering heritage and quality reputation significantly influence buyer confidence.',
      'Limited Cultural Resistance: Swiss riders focus more on practical concerns than cultural factors.',
      'Market Leadership Clear: BMW (~50% SoV) and Zero (~40% SoV) dominate the market.',
      'Incentives Gap Impact: Lack of national incentives significantly affects market dynamics.'
    ],
    attributeInsights: {
      'Performance and Speed': {
        score: 88.5,
        rationale: 'Very high importance scores (Social 90, Market 85, Review 90, Expert 90). Instant torque and acceleration are key positive drivers frequently highlighted in owner and expert reviews.',
        consumerInsight: 'Performance is a major factor driving excitement and interest, often cited as a key reason to consider an EV despite other drawbacks.'
      },
      'Battery Technology and Range': {
        score: 95.0,
        rationale: 'Highest importance across all dimensions. Range anxiety and charging planning are dominant topics in user discussions.',
        consumerInsight: 'Real-world range experiences vary significantly (100-180km), making range a critical factor in purchase decisions.'
      },
      'Affordability and Cost of Ownership': {
        score: 91.0,
        rationale: 'Very high importance. High upfront cost (CE 04 CHF 12.7k+, Zero SR/F CHF ~22k) is a major barrier, though running costs are lower.',
        consumerInsight: 'Price barrier significant but offset by lower running costs (charging ~2 CHF) and maintenance savings.'
      },
      'Performance and Speed': {
        score: 88.5,
        rationale: 'Very high importance in social discussions and expert reviews. Consistently praised feature generating excitement.',
        consumerInsight: 'Instant torque and smooth acceleration are major positive drivers, though balanced against range concerns.'
      }
    },
    strategicRecommendations: [
      {
        title: 'Address Range & Charging',
        details: 'Continue investing in battery technology, partner with charging networks, and provide clear guidance on real-world range expectations.'
      },
      {
        title: 'Tackle Value Perception',
        details: 'Clearly articulate TCO benefits, highlight fuel savings and low maintenance. Consider Swiss-specific financing options.'
      },
      {
        title: 'Leverage Urban Strengths',
        details: 'Continue emphasizing exhilarating performance and unique riding experience, particularly for CE 04 in urban contexts.'
      },
      {
        title: 'Build Trust & Support',
        details: 'Strengthen after-sales support messaging, address reliability concerns, and highlight warranty terms.'
      }
    ],
    attributesAnalysis: {
      'Battery Technology and Range': {
        score: 95.0,
        insight: "Critical factor with real-world range varying 100-180km. Range anxiety and charging planning are dominant concerns.",
        recommendation: "Invest in battery technology, provide transparent range data, develop charging partnerships."
      },
      'Affordability and Cost of Ownership': {
        score: 91.0,
        insight: "High upfront cost is a major barrier, though lower running costs and maintenance savings offset.",
        recommendation: "Emphasize TCO benefits, consider Swiss-specific financing options, highlight fuel and maintenance savings."
      },
      'Performance and Speed': {
        score: 88.5,
        insight: "Instant torque and smooth acceleration highly praised. Performance drives enthusiast interest.",
        recommendation: "Continue emphasizing performance advantages, use test rides to showcase acceleration and handling."
      },
      'Charging Infrastructure': {
        score: 88.5,
        insight: "Dense network but bike-unfriendly stations. Progress with first bike-specific station in Bevaix.",
        recommendation: "Partner with charging networks, promote bike-specific charging solutions, provide charging guidance."
      },
      'Brand Heritage and Trust': {
        score: 85.0,
        insight: "BMW's engineering heritage and quality reputation significantly influence buyer confidence.",
        recommendation: "Leverage brand heritage in marketing, emphasize engineering excellence and proven track record."
      },
      'Market Segmentation': {
        score: 85.0,
        insight: "BMW (~50% SoV) and Zero (~40% SoV) dominate market share, with clear positioning.",
        recommendation: "Maintain premium positioning while addressing specific Swiss market needs."
      },
      'Urban Mobility Solutions': {
        score: 78.5,
        insight: "Strong emphasis on urban mobility solutions, particularly for commuting.",
        recommendation: "Position CE 04 as premium urban mobility solution for Swiss cities."
      },
      'Government Incentives and Regulations': {
        score: 76.5,
        insight: "Lack of national incentives significantly affects market dynamics.",
        recommendation: "Advocate for incentives while developing strategies independent of policy support."
      },
      'Education and Awareness': {
        score: 73.5,
        insight: "Market is very niche, indicating need for awareness building.",
        recommendation: "Focus education on practical concerns and real-world usage examples."
      },
      'After-Sales Support and Service Network': {
        score: 68.5,
        insight: "Service network quality and reliability are key differentiators.",
        recommendation: "Leverage BMW's established Swiss service network as competitive advantage."
      },
      'Resale Value and Longevity': {
        score: 69.5,
        insight: "Concerns about battery degradation and uncertain long-term value due to rapid tech evolution.",
        recommendation: "Offer strong battery warranties, provide transparency about battery health monitoring."
      },
      'Advanced Technology Integration': {
        score: 63.0,
        insight: "Tech features noted but secondary to core practicalities.",
        recommendation: "Include competitive features but prioritize investment in fundamental capabilities."
      },
      'Design Innovation': {
        score: 63.0,
        insight: "Innovation in design and tech is acknowledged but not top priority.",
        recommendation: "Continue distinctive design language while ensuring practical functionality."
      },
      'Noise Reduction': {
        score: 51.0,
        insight: "Mixed reactions to quiet operation, some miss traditional sound.",
        recommendation: "Position quiet operation positively while acknowledging traditional preferences."
      },
      'Sustainability and Environmental Impact': {
        score: 49.5,
        insight: "Environmental benefits remain secondary to practical factors.",
        recommendation: "Include environmental messaging as supporting point rather than primary focus."
      },
      'Community and Culture': {
        score: 50.0,
        insight: "No significant cultural opposition is evident.",
        recommendation: "Focus on practical benefits rather than cultural messaging."
      },
      'Connectivity and Smart Features': {
        score: 37.5,
        insight: "Nice-to-have features but not critical to purchase decisions.",
        recommendation: "Maintain basic features but invest resources in core attributes."
      },
      'Insurance and Financing Options': {
        score: 14.5,
        insight: "Not a significant factor in market discussions or decisions.",
        recommendation: "Maintain competitive options but focus marketing elsewhere."
      },
      'Customization and Personalization': {
        score: 15.0,
        insight: "Virtually no mention of tailoring or personalizing bikes in discussions.",
        recommendation: "Maintain basic options but prioritize investment in core attributes."
      },
      'Safety Features': {
        score: 10.0,
        insight: "Not mentioned as a significant discussion point.",
        recommendation: "Maintain high standards but focus marketing on more differentiating factors."
      }
    }
  },
  'France': {
    keyDrivers: {
      high: [
        {
          attribute: 'Battery Technology and Range',
          score: 95.0,
          insight: "The most critical technical attribute, with current limitations being a major concern."
        },
        {
          attribute: 'Affordability and Cost of Ownership',
          score: 95.0,
          insight: "Tied for most critical, amplified by removal of government bonus."
        },
        {
          attribute: 'Urban Mobility Solutions',
          score: 91.5,
          insight: "Defines the core successful use case and value proposition."
        },
        {
          attribute: 'Charging Infrastructure',
          score: 88.5,
          insight: "A fundamental enabler; perceived inadequacy impacts purchase decisions."
        },
        {
          attribute: 'Performance and Speed',
          score: 88.0,
          insight: "Key driver of interest and desire, crucial for product appeal."
        }
      ],
      low: [
        {
          attribute: 'Customization and Personalization',
          score: 30.0,
          insight: "Not a significant focus for French consumers."
        },
        {
          attribute: 'Insurance and Financing Options',
          score: 30.0,
          insight: "Practical details, less discussed."
        },
        {
          attribute: 'Safety Features',
          score: 30.0,
          insight: "Assumed or less discussed."
        },
        {
          attribute: 'Sustainability and Environmental Impact',
          score: 49.0,
          insight: "A secondary consideration."
        },
        {
          attribute: 'Community and Culture',
          score: 50.0,
          insight: "Cultural preferences exist but do not heavily influence decisions."
        }
      ]
    },
    resonanceFactors: {
      high: [
        "Premium brand image and heritage create trust and interest",
        "An expectation of advanced innovation means BMWs tech-forward approach resonates positively",
        "Performance advantages and urban utility provide both emotional and practical appeals"
      ],
      low: [
        "The traditional motorcycling feel (engine noise/character) is missed by some but is not a deal-breaker",
        "Personalization is largely overlooked as consumers focus on fundamentals",
        "Environmental benefits remain secondary to practical factors"
      ]
    },
    marketInsights: [
      "Pragmatism Dominates: The most important factors remain the fundamental needs: Range, Affordability, Urban Suitability, Charging, and Performance.",
      "Policy Impact: The removal of the bonus écologique clearly amplified the importance and negative perception of Affordability in France.",
      "Urban Focus is Key: BMWs strategic focus on urban mobility aligns perfectly with a high-importance attribute where it holds a strong position.",
      "Infrastructure & Charging Speed: Concerns about charging infrastructure are high, with specific pain points like Zeros lack of DC fast charging noted.",
      "Brand and Innovation Matter: While not as critical as the top factors, brand heritage and innovative design are significant differentiators.",
      "Cultural Factors are Secondary: While some French riders express mixed feelings about the quiet nature of electric motorcycles, these preferences do not significantly impact decisions.",
      "Performance Drives Interest: Despite practical barriers, the impressive performance characteristics generate excitement and consideration."
    ],
    attributeInsights: {
      'Performance and Speed': {
        score: 88.0,
        rationale: 'Very high importance scores (social 90, market 85, reviews 90, expert 85). Performance is a major factor driving excitement and interest.',
        consumerInsight: 'Performance is a key driver of interest, especially comparing electric capabilities to traditional petrol bikes.'
      },
      'Battery Technology and Range': {
        score: 95.0,
        rationale: 'Highest importance scores across all components (95). Range limitations are the dominant concern.',
        consumerInsight: 'Real-world range ("autonomie réelle") is a top-of-mind concern and major decision factor, significantly impacting perceived usability.'
      },
      'Urban Mobility Solutions': {
        score: 91.5,
        rationale: 'Very high importance scores (social 90, market 95, reviews 90, expert 90). Defines the primary use case where BMW excels.',
        consumerInsight: 'Suitability for city commuting is a highly important factor, driving significant interest in models like the CE 04.'
      }
    },
    strategicRecommendations: [
      {
        title: 'Aggressively Tackle Top Barriers',
        details: 'Address range, affordability, and infrastructure through R&D, transparent TCO communication, and charging partnerships.'
      },
      {
        title: 'Leverage Urban Mobility Leadership',
        details: 'Continue to dominate urban segment with CE 04/CE 02, emphasizing convenience, style, and performance in city context.'
      },
      {
        title: 'Address Post-Incentive Market',
        details: 'Develop strategies to address affordability concerns following removal of bonus écologique, including creative financing and TCO focus.'
      },
      {
        title: 'Build on Brand Strength',
        details: 'Leverage BMWs engineering reputation and premium positioning while emphasizing electric innovation leadership.'
      }
    ],
    attributesAnalysis: {
      'Performance and Speed': {
        score: 88.0,
        insight: "Very high importance. Performance drives excitement and interest, especially in comparison to traditional motorcycles.",
        recommendation: "Showcase acceleration and torque in marketing and test rides, emphasizing electric performance advantages."
      },
      'Battery Technology and Range': {
        score: 95.0,
        insight: "Highest importance. Range anxiety and real-world performance are primary concerns.",
        recommendation: "Focus on range improvements and transparent communication about real-world range in French conditions."
      },
      'Charging Infrastructure': {
        score: 88.5,
        insight: "Very high importance. Infrastructure availability and charging speed are critical enablers.",
        recommendation: "Partner with French charging networks, emphasize fast-charging capabilities where available."
      },
      'Noise Reduction': {
        score: 56.5,
        insight: "Moderate importance. Mixed reactions to quiet operation, some cultural preference for traditional sound.",
        recommendation: "Position quiet operation as modern and urban-friendly while acknowledging traditional preferences."
      },
      'Affordability and Cost of Ownership': {
        score: 95.0,
        insight: "Highest importance. Recent removal of incentives has amplified price sensitivity.",
        recommendation: "Develop French market-specific financing options, emphasize long-term value and running cost benefits."
      },
      'Insurance and Financing Options': {
        score: 30.0,
        insight: "Low importance. Practical considerations addressed later in purchase journey.",
        recommendation: "Maintain competitive options but focus marketing on more critical factors."
      },
      'Resale Value and Longevity': {
        score: 63.0,
        insight: "Moderate importance. Growing relevance with emergence of used market.",
        recommendation: "Provide strong warranty coverage and emphasize long-term value retention."
      },
      'Government Incentives and Regulations': {
        score: 72.0,
        insight: "High importance. Removal of bonus écologique has significantly impacted market.",
        recommendation: "Advocate for new incentives while developing strategies to address their absence."
      },
      'Advanced Technology Integration': {
        score: 76.0,
        insight: "High importance. French consumers expect advanced tech in premium EVs.",
        recommendation: "Highlight technological innovation while ensuring it enhances core functionality."
      },
      'Connectivity and Smart Features': {
        score: 63.0,
        insight: "Moderate importance. Desirable but less critical than core attributes.",
        recommendation: "Include competitive features but prioritize investment in fundamental capabilities."
      },
      'Safety Features': {
        score: 30.0,
        insight: "Low importance. Not a major discussion point in French market.",
        recommendation: "Maintain high standards but focus marketing elsewhere."
      },
      'After-Sales Support and Service Network': {
        score: 60.0,
        insight: "Moderate importance. Quality support network provides reassurance.",
        recommendation: "Leverage BMWs established French service network as competitive advantage."
      },
      'Education and Awareness': {
        score: 52.0,
        insight: "Moderate importance. Growing awareness but fundamental issues more critical.",
        recommendation: "Focus education on addressing core concerns and practical benefits."
      },
      'Urban Mobility Solutions': {
        score: 91.5,
        insight: "Very high importance. Urban use case is primary driver of interest and adoption.",
        recommendation: "Continue urban-focused development and marketing, emphasizing CE 04 advantages."
      },
      'Sustainability and Environmental Impact': {
        score: 49.0,
        insight: "Moderate importance. Environmental benefits appeal to subset but secondary to practical factors.",
        recommendation: "Include environmental messaging as supporting point rather than primary focus."
      },
      'Brand Heritage and Trust': {
        score: 74.0,
        insight: "High importance. BMWs reputation provides significant advantage in French market.",
        recommendation: "Leverage brand heritage while emphasizing commitment to electric innovation."
      },
      'Community and Culture': {
        score: 50.0,
        insight: "Moderate importance. Some cultural resistance but practical factors dominate.",
        recommendation: "Acknowledge traditional preferences while emphasizing modern benefits."
      },
      'Customization and Personalization': {
        score: 30.0,
        insight: "Low importance. Not a significant focus in current market phase.",
        recommendation: "Maintain basic options but prioritize investment in core attributes."
      },
      'Design Innovation': {
        score: 76.0,
        insight: "High importance. French consumers value cutting-edge design and innovation.",
        recommendation: "Continue distinctive design language while ensuring practical functionality."
      },
      'Market Segmentation': {
        score: 74.0,
        insight: "High importance. Brand positioning and competition shape market perception.",
        recommendation: "Maintain clear premium positioning while addressing French market needs."
      }
    }
  },
  'Italy': {
    keyDrivers: {
      high: [
        {
          attribute: 'Affordability and Cost of Ownership',
          score: 95.0,
          insight: "The most critical factor influencing purchase decisions, primarily acting as a barrier."
        },
        {
          attribute: 'Performance and Speed',
          score: 93.0,
          insight: "A key driver of interest and desire, crucial for product appeal."
        },
        {
          attribute: 'Battery Technology and Range',
          score: 93.0,
          insight: "Equally critical, with current limitations being a major concern and decision factor."
        },
        {
          attribute: 'Urban Mobility Solutions',
          score: 91.5,
          insight: "Defines the core use case and value proposition for a large part of the market."
        },
        {
          attribute: 'Charging Infrastructure',
          score: 83.0,
          insight: "A fundamental enabler whose perceived inadequacy significantly impacts purchase decisions."
        }
      ],
      low: [
        {
          attribute: 'Insurance and Financing Options',
          score: 30.0,
          insight: "Practical aspects considered later in purchase process."
        },
        {
          attribute: 'Safety Features',
          score: 30.0,
          insight: "Not highlighted as major discussion points or differentiators."
        },
        {
          attribute: 'Customization and Personalization',
          score: 30.0,
          insight: "Limited discussion, overshadowed by performance and cost considerations."
        },
        {
          attribute: 'Community and Culture',
          score: 45.0,
          insight: "Little cultural resistance to EVs in the Italian market."
        },
        {
          attribute: 'Education and Awareness',
          score: 54.5,
          insight: "Important for market growth but less for individual product choice."
        }
      ]
    },
    resonanceFactors: {
      high: [
        "Strong brand image and reliability draw Italian interest",
        "Visible innovation and advanced engineering meet consumer expectations for premium products",
        "Performance and urban utility remain the strongest differentiators in the market"
      ],
      low: [
        "Little emphasis on rider community or cultural debates in EV adoption",
        "Virtually no demand for customization as buyers focus on core performance",
        "Environmental benefits remain secondary to practical factors"
      ]
    },
    marketInsights: [
      "Fundamental Needs Dominate: The most important attributes remain core practicalities: Affordability, Performance, Range, Urban Mobility, and Charging Infrastructure.",
      "Importance vs. Sentiment: Attributes may have high importance despite negative sentiment (e.g., Affordability).",
      "Pragmatic Approach: Italian consumers show a notably practical approach to EV adoption, with minimal cultural resistance.",
      "After-Sales as Mid-Tier: While not a top-5 driver, poor service can become a significant detractor.",
      "Performance Drives Interest: Despite practical barriers, impressive performance characteristics generate excitement.",
      "Urban Focus Critical: Suitability for city use defines core value proposition for many models.",
      "Brand Heritage Matters: BMW's engineering legacy reinforces trust and premium positioning."
    ],
    attributeInsights: {
      'Performance and Speed': {
        score: 93.0,
        rationale: 'Very high importance scores across social (95), market (90), reviews (95), and expert analysis (90). Performance is a key topic and differentiator.',
        consumerInsight: 'Performance characteristics (acceleration, torque, fun factor) are extremely important drivers of interest and purchase consideration, especially for enthusiasts.'
      },
      'Battery Technology and Range': {
        score: 93.0,
        rationale: 'Very high importance scores across social (95), market (90), reviews (95), and expert analysis (90). Range is a dominant and critical concern.',
        consumerInsight: 'Range limitations and battery performance are top-of-mind concerns and major factors in the decision-making process, heavily influencing perceived usability.'
      },
      'Urban Mobility Solutions': {
        score: 91.5,
        rationale: 'Very high importance scores across social (90), market (95), reviews (90), and expert analysis (90). The primary use case for many models.',
        consumerInsight: 'The suitability for city commuting is a highly important factor, defining the core value proposition for models like the CE 04 and driving significant market interest.'
      }
    },
    strategicRecommendations: [
      {
        title: 'Prioritize Top Importance Barriers',
        details: 'Aggressively address affordability through cost reduction and value-focused communication. Continue R&D for better batteries and charging solutions.'
      },
      {
        title: 'Leverage Performance Leadership',
        details: 'Emphasize unique performance characteristics in marketing and test rides, highlighting acceleration and torque figures prominently.'
      },
      {
        title: 'Dominate Urban Mobility',
        details: 'Position CE 04 as the superior urban solution, highlighting convenience, agility, and cost savings in city context.'
      },
      {
        title: 'Build on Brand Heritage',
        details: 'Emphasize BMW\'s engineering legacy to reinforce trust and premium positioning while connecting electric innovations with brand history.'
      }
    ],
    attributesAnalysis: {
      'Performance and Speed': {
        score: 93.0,
        insight: "Very high importance. Performance is a key topic and differentiator, especially for enthusiasts.",
        recommendation: "Emphasize acceleration and torque in marketing, showcase performance advantages in test rides."
      },
      'Battery Technology and Range': {
        score: 93.0,
        insight: "Equally critical to performance. Range limitations are a dominant concern affecting usability perception.",
        recommendation: "Focus R&D on range improvements, provide transparent real-world range data for Italian conditions."
      },
      'Charging Infrastructure': {
        score: 83.0,
        insight: "High importance. Infrastructure availability directly impacts practicality and appeal.",
        recommendation: "Partner with Italian charging networks, develop bike-specific charging solutions."
      },
      'Noise Reduction': {
        score: 58.0,
        insight: "Moderate importance. Appreciated but not critical to purchase decisions.",
        recommendation: "Position quiet operation as a premium feature while acknowledging traditional preferences."
      },
      'Affordability and Cost of Ownership': {
        score: 95.0,
        insight: "Highest importance. Primary barrier to adoption despite TCO benefits.",
        recommendation: "Develop Italian market-specific financing options, emphasize long-term value proposition."
      },
      'Insurance and Financing Options': {
        score: 30.0,
        insight: "Low importance. Considered later in purchase journey.",
        recommendation: "Maintain competitive options but focus marketing elsewhere."
      },
      'Resale Value and Longevity': {
        score: 64.5,
        insight: "Moderate-high importance. Concerns about long-term value and battery life.",
        recommendation: "Offer strong battery warranties, provide transparency about battery health monitoring."
      },
      'Government Incentives and Regulations': {
        score: 59.0,
        insight: "Moderate importance. Influences affordability but not primary driver.",
        recommendation: "Monitor and advocate for incentives while developing strategies independent of them."
      },
      'Advanced Technology Integration': {
        score: 78.5,
        insight: "High importance. Technology is a significant differentiator in premium segment.",
        recommendation: "Highlight technological innovation while ensuring it enhances core functionality."
      },
      'Connectivity and Smart Features': {
        score: 68.5,
        insight: "Moderate-high importance. Expected in premium vehicles but secondary to core attributes.",
        recommendation: "Include competitive features but prioritize investment in fundamental capabilities."
      },
      'Safety Features': {
        score: 30.0,
        insight: "Low importance. Not a major discussion point.",
        recommendation: "Maintain high standards but focus marketing on more differentiating factors."
      },
      'After-Sales Support and Service Network': {
        score: 59.5,
        insight: "Moderate importance. Quality support network provides reassurance.",
        recommendation: "Leverage BMW's established Italian service network as competitive advantage."
      },
      'Education and Awareness': {
        score: 54.5,
        insight: "Moderate importance. Market understanding growing but core product issues more critical.",
        recommendation: "Focus education on addressing core concerns and practical benefits."
      },
      'Urban Mobility Solutions': {
        score: 91.5,
        insight: "Very high importance. Defines core use case and value proposition.",
        recommendation: "Continue urban-focused development and marketing, emphasizing CE 04 advantages."
      },
      'Sustainability and Environmental Impact': {
        score: 51.0,
        insight: "Moderate importance. Secondary to practical factors.",
        recommendation: "Include environmental messaging as supporting point rather than primary focus."
      },
      'Brand Heritage and Trust': {
        score: 77.0,
        insight: "High importance. BMW's reputation provides significant advantage.",
        recommendation: "Leverage brand heritage while emphasizing commitment to electric innovation."
      },
      'Community and Culture': {
        score: 45.0,
        insight: "Low-moderate importance. Minimal cultural resistance to EVs.",
        recommendation: "Focus on practical benefits rather than cultural messaging."
      },
      'Customization and Personalization': {
        score: 30.0,
        insight: "Low importance. Not a significant focus in current market phase.",
        recommendation: "Maintain basic options but prioritize investment in core attributes."
      },
      'Design Innovation': {
        score: 78.5,
        insight: "High importance. Modern technology and innovative design expected from premium EVs.",
        recommendation: "Continue distinctive design language while ensuring practical functionality."
      },
      'Market Segmentation': {
        score: 77.0,
        insight: "High importance. Brand positioning shapes market perception.",
        recommendation: "Maintain clear premium positioning while addressing Italian market needs."
      }
    }
  },
  'Belgium': {
    keyDrivers: {
      high: [
        {
          attribute: 'Battery Technology and Range',
          score: 92.0,
          insight: "Highest importance. Range anxiety and real-world range experiences dominate discussions."
        },
        {
          attribute: 'Affordability and Cost of Ownership',
          score: 91.0,
          insight: "Very high importance. High purchase price is a major barrier despite TCO benefits."
        },
        {
          attribute: 'Performance and Speed',
          score: 84.0,
          insight: "High importance. Instant torque and acceleration consistently drive enthusiast interest."
        },
        {
          attribute: 'Charging Infrastructure',
          score: 82.0,
          insight: "High importance. Practical charging challenges significantly impact usability."
        },
        {
          attribute: 'After-Sales Support and Service Network',
          score: 81.5,
          insight: "High importance. Service network and reliability are critical differentiators."
        }
      ],
      low: [
        {
          attribute: 'Safety Features',
          score: 18.0,
          insight: "Lowest importance. Not a focus of discussion in Belgian market."
        },
        {
          attribute: 'Customization and Personalization',
          score: 25.0,
          insight: "Very low importance. Riders focus on core issues over personalization."
        },
        {
          attribute: 'Insurance and Financing Options',
          score: 30.0,
          insight: "Low importance. Mentioned briefly but not a major factor."
        },
        {
          attribute: 'Connectivity and Smart Features',
          score: 33.0,
          insight: "Low importance. Not a significant focus in discussions."
        },
        {
          attribute: 'Sustainability and Environmental Impact',
          score: 45.0,
          insight: "Low-Moderate importance. Secondary to practical and economic factors."
        }
      ]
    },
    resonanceFactors: {
      high: [
        "Strong brand heritage and extensive service network provide significant trust advantage",
        "Performance characteristics, especially acceleration, drive enthusiast interest",
        "Practical urban mobility benefits resonate with commuter segment"
      ],
      low: [
        "Limited EV community influence due to small market size",
        "Minimal focus on customization as practicality dominates decisions",
        "Environmental benefits secondary to practical considerations"
      ]
    },
    marketInsights: [
      "Core Practicalities Reign Supreme: Range, cost, and charging are the top concerns and barriers.",
      "Performance is a Major Draw: The thrill of electric acceleration is a key positive driver.",
      "Brand Reputation Matters: Strong brand heritage and trust give BMW an edge.",
      "After-Sales is Crucial: Reliability concerns make service network a key differentiator.",
      "Market is Small but Engaged: Low sales volume but high discussion volume per owner.",
      "Urban Use Case is Strong: Commuting is a significant driver, particularly for CE 04.",
      "Zero Leads Mindshare: Zero Motorcycles is the benchmark competitor in discussions.",
      "Limited Community Influence: Small EV market size means limited cultural push in decisions."
    ],
    attributeInsights: {
      'Performance and Speed': {
        score: 84.0,
        rationale: 'High importance scores across social (70), market (90), reviews (95), and expert analysis (80). Performance consistently drives enthusiasm.',
        consumerInsight: 'Instant torque and acceleration are consistently praised, driving enthusiast interest despite practical barriers.'
      },
      'Battery Technology and Range': {
        score: 92.0,
        rationale: 'Very high importance scores across social (95), market (90), reviews (90), and expert analysis (95). Range is the dominant concern.',
        consumerInsight: 'Range anxiety and real-world range experiences (commuting vs. touring) are primary decision factors.'
      },
      'After-Sales Support and Service Network': {
        score: 81.5,
        rationale: 'High importance scores across social (80), market (80), reviews (85), and expert analysis (85). Service network is a key differentiator.',
        consumerInsight: 'Reliability concerns and limited competitor networks make after-sales support crucial; BMW\'s network is a significant advantage.'
      }
    },
    strategicRecommendations: [
      {
        title: 'Tackle Core Barriers',
        details: 'Focus on realistic range expectations, charging solutions, and TCO benefits. Leverage federal tax reduction in messaging.'
      },
      {
        title: 'Highlight Service Network',
        details: 'Position BMW\'s established dealer network and service reliability as key advantages over competitors with smaller footprints.'
      },
      {
        title: 'Target Urban Commuters',
        details: 'Capitalize on CE 04/CE 02 success for urban mobility, emphasizing practical benefits for daily commuting.'
      },
      {
        title: 'Increase Visibility vs. Zero',
        details: 'Develop strategies to increase share-of-voice and position effectively against Zero, the current market perception leader.'
      }
    ],
    attributesAnalysis: {
      'Performance and Speed': {
        score: 84.0,
        insight: "High importance. Instant torque and acceleration consistently praised as key advantages.",
        recommendation: "Continue emphasizing instant torque and acceleration in marketing and test rides."
      },
      'Battery Technology and Range': {
        score: 92.0,
        insight: "Highest importance. Range anxiety and real-world performance are primary concerns.",
        recommendation: "Focus on range improvements and transparent communication about real-world range in Belgian conditions."
      },
      'Charging Infrastructure': {
        score: 82.0,
        insight: "High importance. Charging challenges significantly impact usability perception.",
        recommendation: "Partner with charging networks, address home charging convenience."
      },
      'Noise Reduction': {
        score: 49.0,
        insight: "Low-to-moderate importance. Discussed mainly regarding loss of traditional character.",
        recommendation: "Position quiet operation positively while acknowledging traditional preferences."
      },
      'Affordability and Cost of Ownership': {
        score: 91.0,
        insight: "Very high importance. Purchase price is major barrier despite TCO benefits.",
        recommendation: "Emphasize TCO advantages, tax benefits, and develop market-specific financing options."
      },
      'Insurance and Financing Options': {
        score: 30.0,
        insight: "Low importance. Not a significant discussion point.",
        recommendation: "Maintain competitive options but focus marketing elsewhere."
      },
      'Resale Value and Longevity': {
        score: 58.0,
        insight: "Moderate importance. Battery degradation concerns factor into TCO calculations.",
        recommendation: "Offer strong battery warranties, provide transparency about battery health monitoring."
      },
      'Government Incentives and Regulations': {
        score: 70.5,
        insight: "High importance. Federal tax reduction influences affordability perception.",
        recommendation: "Leverage existing incentives in marketing, advocate for stronger support."
      },
      'Advanced Technology Integration': {
        score: 52.5,
        insight: "Moderate importance. Tech features noted but secondary to core practicalities.",
        recommendation: "Include competitive tech but prioritize fundamental capabilities."
      },
      'Connectivity and Smart Features': {
        score: 42.0,
        insight: "Low importance. Nice-to-have features but not critical to purchase decisions.",
        recommendation: "Maintain basic features but invest resources in core attributes."
      },
      'Safety Features': {
        score: 18.0,
        insight: "Lowest importance. Not a focus of discussion.",
        recommendation: "Maintain high standards but focus marketing on more critical factors."
      },
      'After-Sales Support and Service Network': {
        score: 81.5,
        insight: "High importance. Service network and reliability are key differentiators.",
        recommendation: "Leverage BMW's established network as competitive advantage."
      },
      'Education and Awareness': {
        score: 53.5,
        insight: "Moderate importance. Many still learning about EVs, seeking practical information.",
        recommendation: "Focus education on practical concerns and real-world experiences."
      },
      'Urban Mobility Solutions': {
        score: 74.0,
        insight: "High importance. Commuting seen as most practical use case.",
        recommendation: "Position CE 04/02 strongly for urban use, emphasize commuting benefits."
      },
      'Sustainability and Environmental Impact': {
        score: 49.0,
        insight: "Low-to-moderate importance. Secondary to economic and practical factors.",
        recommendation: "Include environmental benefits as supporting message only."
      },
      'Brand Heritage and Trust': {
        score: 73.0,
        insight: "High importance. Brand comparisons and trust shape market perception.",
        recommendation: "Leverage BMW's reliability record and established presence."
      },
      'Community and Culture': {
        score: 40.0,
        insight: "Low importance. No explicit culture clash in Belgian EV motorcycle scene.",
        recommendation: "Focus on practical benefits rather than cultural messaging."
      },
      'Customization and Personalization': {
        score: 25.0,
        insight: "Very low importance. Belgian consumers focused on practical barriers.",
        recommendation: "Maintain basic options but prioritize core attributes."
      },
      'Design Innovation': {
        score: 62.5,
        insight: "Moderate importance. Technical innovations noted but secondary to core concerns.",
        recommendation: "Ensure design innovations support practical functionality."
      },
      'Market Segmentation': {
        score: 73.0,
        insight: "High importance. Brand comparisons and competitive dynamics shape perception.",
        recommendation: "Maintain clear positioning while addressing Belgian market needs."
      }
    }
  },
  'CS Europe': {
    keyDrivers: {
      high: [
        {
          attribute: 'Battery Technology and Range',
          score: 95.0,
          insight: "Highest importance. Range anxiety is the most prominent concern affecting purchase decisions."
        },
        {
          attribute: 'Affordability and Cost of Ownership',
          score: 95.0,
          insight: "Equally critical. Price is the primary barrier to adoption, with high upfront costs drawing frequent criticism."
        },
        {
          attribute: 'Urban Mobility Solutions',
          score: 91.5,
          insight: "Urban mobility is the defining use-case, particularly strong in congested cities."
        },
        {
          attribute: 'Performance and Speed',
          score: 88.0,
          insight: "Performance is a major positive driver, with instant torque and acceleration exceeding expectations."
        },
        {
          attribute: 'Charging Infrastructure',
          score: 88.5,
          insight: "Critical enabler. Charging access and time are inseparable from range concerns."
        }
      ],
      low: [
        {
          attribute: 'Safety Features',
          score: 30.0,
          insight: "Lowest importance. Safety features are now standard expectations."
        },
        {
          attribute: 'Insurance and Financing Options',
          score: 30.0,
          insight: "Very low importance. Not frequently discussed in public forums."
        },
        {
          attribute: 'Customization and Personalization',
          score: 30.0,
          insight: "Low importance. Aside from niche examples, personalization received little attention."
        },
        {
          attribute: 'Community and Culture',
          score: 52.0,
          insight: "Moderate importance. A subtle culture war exists between traditional and EV enthusiasts."
        },
        {
          attribute: 'Sustainability and Environmental Impact',
          score: 50.0,
          insight: "Moderate/low importance. Environmental benefits remain a secondary motivator."
        }
      ]
    },
    resonanceFactors: {
      high: [
        "BMW's reputation and dealer network presence dominate roughly half of regional EV discussions",
        "The sense that BMW offers cutting-edge innovation within a reliable brand framework",
        "Performance advantages and urban utility provide both emotional and practical appeals"
      ],
      low: [
        "A subtle culture war exists between traditional petrol riders and new EV enthusiasts",
        "Customization is largely overlooked as consumers focus on fundamentals",
        "Environmental benefits remain secondary to practical factors"
      ]
    },
    marketInsights: [
      "Core Barriers Dominate: Range, cost, and charging are the undisputed top concerns across the Nordics.",
      "Performance is the Key Positive: The excitement around instant torque and acceleration is a consistent positive driver.",
      "Policy Matters: The lack of strong, motorcycle-specific incentives is a significant factor limiting the market.",
      "Service Network is a Vulnerability: The limited dealer and service network for niche electric brands is a practical concern.",
      "Brand Trust is Significant: In a small market evaluating multiple options, BMW's established reputation provides advantage.",
      "Market Remains Highly Niche: Conversation volume is low, reflecting very small adoption numbers.",
      "Cultural Barriers Minimal: Unlike some markets, the Nordics show little cultural resistance to electric motorcycles."
    ],
    attributeInsights: {
      'Performance and Speed': {
        score: 88.0,
        rationale: 'High importance scores across social (75), market (85), reviews (90), and expert analysis (80). Performance is a key positive driver.',
        consumerInsight: 'Performance characteristics (acceleration, torque) are consistently praised and highlighted as key advantages.'
      },
      'Battery Technology and Range': {
        score: 95.0,
        rationale: 'Highest importance scores across all components (95). Range anxiety is the dominant theme.',
        consumerInsight: 'Range limitations and battery performance are top-of-mind concerns, heavily influencing perceived usability.'
      },
      'Brand Heritage and Trust': {
        score: 75.0,
        rationale: 'High importance. Brand positioning and heritage shape market discussions.',
        consumerInsight: 'Nordic consumers actively compare brands based on reputation and reliability; BMW\'s established presence provides significant advantage.'
      }
    },
    strategicRecommendations: [
      {
        title: 'Address Core Barriers Directly',
        details: 'Focus communication and product strategy on mitigating range anxiety and justifying the cost (TCO benefits, potential financing).'
      },
      {
        title: 'Leverage Performance Excitement',
        details: 'Continue highlighting the unique performance characteristics of electric drive as a key selling point for enthusiasts.'
      },
      {
        title: 'Advocate for Policy Support',
        details: 'Where appropriate, engage with policymakers to highlight the potential of electric motorcycles and advocate for incentives.'
      },
      {
        title: 'Strengthen Service & Support',
        details: 'Emphasize BMW\'s established network and reliability compared to smaller players to build owner confidence.'
      }
    ],
    attributesAnalysis: {
      'Performance and Speed': {
        score: 88.0,
        insight: "High importance. Performance drives excitement and interest, especially in comparison to traditional motorcycles.",
        recommendation: "Continue emphasizing instant torque and acceleration in marketing and test rides."
      },
      'Battery Technology and Range': {
        score: 95.0,
        insight: "Highest importance. Range anxiety and real-world performance are primary concerns.",
        recommendation: "Focus on range improvements and transparent communication about real-world range in Nordic conditions."
      },
      'Charging Infrastructure': {
        score: 88.5,
        insight: "Very high importance. Infrastructure availability and charging speed are critical enablers.",
        recommendation: "Partner with Nordic charging networks, develop bike-specific charging solutions."
      },
      'Noise Reduction': {
        score: 50.5,
        insight: "Moderate importance. The subjective debate around sound vs. silence is present but not decisive.",
        recommendation: "Position quiet operation as modern feature while acknowledging traditional preferences."
      },
      'Affordability and Cost of Ownership': {
        score: 91.5,
        insight: "Very high importance. High purchase price is a major barrier across the region.",
        recommendation: "Develop Nordic-specific financing options, emphasize TCO benefits."
      },
      'Insurance and Financing Options': {
        score: 30.0,
        insight: "Low importance. Not a significant discussion point regionally.",
        recommendation: "Maintain competitive options but focus marketing elsewhere."
      },
      'Resale Value and Longevity': {
        score: 59.5,
        insight: "Moderate importance. Concerns about battery degradation and uncertain long-term value.",
        recommendation: "Offer strong battery warranties, provide transparency about battery health monitoring."
      },
      'Government Incentives and Regulations': {
        score: 78.0,
        insight: "High importance. Lack of strong motorcycle-specific incentives impacts market significantly.",
        recommendation: "Advocate for incentives while developing strategies independent of policy support."
      },
      'Advanced Technology Integration': {
        score: 63.0,
        insight: "Moderate importance. Tech features noted but secondary to core practicalities.",
        recommendation: "Include competitive features but prioritize investment in fundamental capabilities."
      },
      'Connectivity and Smart Features': {
        score: 41.5,
        insight: "Low importance. Not a significant focus in regional discussions.",
        recommendation: "Maintain basic features but invest resources in core attributes."
      },
      'Safety Features': {
        score: 22.0,
        insight: "Very low importance. Not a focus of discussion in regional report.",
        recommendation: "Maintain high standards but focus marketing on more differentiating factors."
      },
      'After-Sales Support and Service Network': {
        score: 72.5,
        insight: "High importance. Service network and reliability are key differentiators.",
        recommendation: "Leverage BMW's established Nordic service network as competitive advantage."
      },
      'Education and Awareness': {
        score: 52.0,
        insight: "Moderate importance. Market is niche, indicating ongoing need for education.",
        recommendation: "Focus education on addressing specific concerns about range, charging, and TCO."
      },
      'Urban Mobility Solutions': {
        score: 70.5,
        insight: "High importance. Commuting is seen as a key practical use case.",
        recommendation: "Position CE 04/02 as premium urban mobility solutions for Nordic cities."
      },
      'Sustainability and Environmental Impact': {
        score: 63.0,
        insight: "Moderate importance. Aligns with strong Nordic environmental values.",
        recommendation: "Include environmental messaging as supporting point rather than primary focus."
      },
      'Brand Heritage and Trust': {
        score: 75.0,
        insight: "High importance. BMW's reputation provides significant advantage in Nordic market.",
        recommendation: "Leverage brand heritage while emphasizing commitment to electric innovation."
      },
      'Community and Culture': {
        score: 45.0,
        insight: "Low-moderate importance. No significant cultural opposition is evident.",
        recommendation: "Focus on practical benefits rather than cultural messaging."
      },
      'Customization and Personalization': {
        score: 20.0,
        insight: "Very low importance. Not a significant focus in current market phase.",
        recommendation: "Maintain basic options but prioritize investment in core attributes."
      },
      'Design Innovation': {
        score: 63.0,
        insight: "Moderate importance. Innovation in design and tech is acknowledged but not top priority.",
        recommendation: "Continue distinctive design language while ensuring practical functionality."
      },
      'Market Segmentation': {
        score: 75.0,
        insight: "High importance. Brand comparisons and competitive positioning shape market perception.",
        recommendation: "Maintain clear premium positioning while addressing Nordic market needs."
      }
    }
  },
  'Netherlands': {
    keyDrivers: {
      high: [
        {
          attribute: 'Battery Technology and Range',
          score: 95.0,
          insight: "The dominant concern, defining usability limits and heavily influencing purchase decisions."
        },
        {
          attribute: 'Affordability and Cost of Ownership',
          score: 95.0,
          insight: "Critical barrier amplified by new BPM tax introduction in Q1 2025."
        },
        {
          attribute: 'Government Incentives and Regulations',
          score: 92.0,
          insight: "Very high importance due to BPM tax exemption removal, significantly impacting market."
        },
        {
          attribute: 'Performance and Speed',
          score: 83.5,
          insight: "High importance, generating excitement among Dutch enthusiasts."
        },
        {
          attribute: 'Charging Infrastructure',
          score: 83.0,
          insight: "Major practical concern impacting viability of electric motorcycles."
        }
      ],
      low: [
        {
          attribute: 'Safety Features',
          score: 23.5,
          insight: "Lowest importance. Assumed adequate or less critical compared to core challenges."
        },
        {
          attribute: 'Insurance and Financing Options',
          score: 25.0,
          insight: "Very low importance. Not a significant discussion point."
        },
        {
          attribute: 'Customization and Personalization',
          score: 25.0,
          insight: "Very low importance. Focus remains on overcoming practical barriers."
        },
        {
          attribute: 'Community and Culture',
          score: 40.0,
          insight: "Low importance. Almost no explicit culture clash in Dutch EV motorcycle scene."
        },
        {
          attribute: 'Connectivity and Smart Features',
          score: 42.0,
          insight: "Low importance. Nice-to-have features but not critical compared to core needs."
        }
      ]
    },
    resonanceFactors: {
      high: [
        "Trust in well-known brands and scrutiny of competitive landscape drive Dutch interest",
        "Government policy changes heavily influence priorities and brand trust importance",
        "Performance and urban utility provide practical appeal in highly pragmatic market"
      ],
      low: [
        "Almost no focus on rider culture or community influences - Dutch buyers approach EVs pragmatically",
        "Personalization is a non-factor given dominance of cost and practicality concerns",
        "Environmental benefits remain secondary to practical and economic factors"
      ]
    },
    marketInsights: [
      "Tax Policy Impact is Paramount: BPM tax introduction in January 2025 is the defining market factor, significantly increasing costs.",
      "Core Barriers Persist: Range anxiety and charging convenience remain fundamental challenges.",
      "Cost is King: Affordability was already major issue, BPM tax makes it even more critical.",
      "Performance is Main Draw: The primary positive driver remains exciting performance characteristics.",
      "Market Remains Niche: Small market dominated by Zero/Energica in conversations, BMW has low share-of-voice.",
      "Brand Trust Matters: BMW's heritage and reliability record provide competitive advantage.",
      "Practical, Not Cultural: Dutch consumers approach electric motorcycles from highly pragmatic perspective."
    ],
    attributeInsights: {
      'Performance and Speed': {
        score: 83.5,
        rationale: 'High importance scores across social (75), market (85), reviews (90), and expert analysis (80). Performance is a key positive driver.',
        consumerInsight: 'Performance characteristics (acceleration, torque) are consistently praised and highlighted as key advantages.'
      },
      'Battery Technology and Range': {
        score: 95.0,
        rationale: 'Highest importance scores across all components (95). Range anxiety is the dominant theme.',
        consumerInsight: 'Range limitations and battery performance are top-of-mind concerns, heavily influencing perceived usability.'
      },
      'Urban Mobility Solutions': {
        score: 80.0,
        rationale: 'High importance across all dimensions (80). Commuting seen as most practical use case.',
        consumerInsight: 'Suitability for city use (costs, ease, potential ZEZ compliance) highly important for Dutch riders.'
      }
    },
    strategicRecommendations: [
      {
        title: 'Address BPM Tax Head-On',
        details: 'Acknowledge cost increase, focus on TCO benefits over longer period. Explore financing options to mitigate initial price shock.'
      },
      {
        title: 'Reinforce Urban Use Case',
        details: 'Position CE 04/CE 02 strongly for urban commuting, where range is less critical. Be transparent about realistic range.'
      },
      {
        title: 'Highlight Performance Advantage',
        details: 'Continue leveraging strong positive sentiment around electric performance as key differentiator.'
      },
      {
        title: 'Build Confidence in Reliability',
        details: 'Emphasize BMW\'s brand reputation, warranty, and established service network to build long-term confidence.'
      }
    ],
    attributesAnalysis: {
      'Performance and Speed': {
        score: 83.5,
        insight: "High importance. Instant torque and acceleration frequently praised as key advantages.",
        recommendation: "Emphasize performance characteristics in marketing and test rides."
      },
      'Battery Technology and Range': {
        score: 95.0,
        insight: "Highest importance. Range anxiety and real-world performance are primary concerns.",
        recommendation: "Focus on range improvements and transparent communication about real-world range in Dutch conditions."
      },
      'Charging Infrastructure': {
        score: 83.0,
        insight: "High importance. Infrastructure availability and charging speed are critical enablers.",
        recommendation: "Partner with Dutch charging networks, develop bike-specific charging solutions."
      },
      'Noise Reduction': {
        score: 49.0,
        insight: "Low-to-moderate importance. Discussed mainly regarding loss of traditional character.",
        recommendation: "Position quiet operation positively while acknowledging traditional preferences."
      },
      'Affordability and Cost of Ownership': {
        score: 95.0,
        insight: "Very high importance. BPM tax introduction dramatically amplifies cost barrier.",
        recommendation: "Develop strategies to address increased costs, emphasize long-term TCO benefits."
      },
      'Insurance and Financing Options': {
        score: 25.0,
        insight: "Low importance. Not a significant discussion point.",
        recommendation: "Maintain competitive options but focus marketing elsewhere."
      },
      'Resale Value and Longevity': {
        score: 58.0,
        insight: "Moderate importance. Battery degradation concerns factor into TCO calculations.",
        recommendation: "Offer strong battery warranties, provide transparency about battery health monitoring."
      },
      'Government Incentives and Regulations': {
        score: 92.0,
        insight: "Very high importance. BPM tax removal dominates Q1 discussions.",
        recommendation: "Address tax impact through TCO focus and potential financing solutions."
      },
      'Advanced Technology Integration': {
        score: 62.5,
        insight: "Moderate importance. Tech features noted but secondary to core practicalities.",
        recommendation: "Include competitive features but prioritize investment in fundamental capabilities."
      },
      'Connectivity and Smart Features': {
        score: 42.0,
        insight: "Low importance. Nice-to-have features but not critical to purchase decisions.",
        recommendation: "Maintain basic features but invest resources in core attributes."
      },
      'Safety Features': {
        score: 23.5,
        insight: "Lowest importance. Not a focus of discussion.",
        recommendation: "Maintain high standards but focus marketing on more differentiating factors."
      },
      'After-Sales Support and Service Network': {
        score: 72.5,
        insight: "High importance. Service network and reliability are key differentiators.",
        recommendation: "Leverage BMW's established network as competitive advantage."
      },
      'Education and Awareness': {
        score: 52.0,
        insight: "Moderate importance. Market is niche, indicating ongoing need for education.",
        recommendation: "Focus education on addressing specific concerns about range, charging, and TCO."
      },
      'Urban Mobility Solutions': {
        score: 80.0,
        insight: "High importance. Commuting seen as most practical use case.",
        recommendation: "Position CE 04/02 as premium urban mobility solutions for Dutch cities."
      },
      'Sustainability and Environmental Impact': {
        score: 63.0,
        insight: "Moderate importance. Aligns with strong Dutch environmental values.",
        recommendation: "Include environmental messaging as supporting point rather than primary focus."
      },
      'Brand Heritage and Trust': {
        score: 75.0,
        insight: "High importance. BMW's reputation provides significant advantage in Dutch market.",
        recommendation: "Leverage brand heritage while emphasizing commitment to electric innovation."
      },
      'Community and Culture': {
        score: 40.0,
        insight: "Low-moderate importance. No significant cultural opposition is evident.",
        recommendation: "Focus on practical benefits rather than cultural messaging."
      },
      'Customization and Personalization': {
        score: 25.0,
        insight: "Very low importance. Not a significant focus in current market phase.",
        recommendation: "Maintain basic options but prioritize investment in core attributes."
      },
      'Design Innovation': {
        score: 62.5,
        insight: "Moderate importance. Innovation in design and tech is acknowledged but not top priority.",
        recommendation: "Continue distinctive design language while ensuring practical functionality."
      },
      'Market Segmentation': {
        score: 75.0,
        insight: "High importance. Brand comparisons and competitive positioning shape market perception.",
        recommendation: "Maintain clear premium positioning while addressing Dutch market needs."
      }
    }
  },
  'Nordics': {
    keyDrivers: {
      high: [
        {
          attribute: 'Battery Technology and Range',
          score: 95.0,
          insight: "Highest importance regionally. Range anxiety is the dominant theme, limiting perceived usability."
        },
        {
          attribute: 'Affordability and Cost of Ownership',
          score: 91.5,
          insight: "Very high importance. High purchase price is a major barrier across the region."
        },
        {
          attribute: 'Charging Infrastructure',
          score: 85.0,
          insight: "Very high importance. Practical charging challenges are frequently discussed hurdles."
        },
        {
          attribute: 'Performance and Speed',
          score: 82.5,
          insight: "High importance. Instant torque and acceleration consistently drive enthusiast interest."
        },
        {
          attribute: 'Government Incentives and Regulations',
          score: 78.0,
          insight: "High importance. Lack of strong motorcycle-specific incentives significantly influences market."
        }
      ],
      low: [
        {
          attribute: 'Customization and Personalization',
          score: 20.0,
          insight: "Very low importance. Personalization did not come up as a notable factor."
        },
        {
          attribute: 'Safety Features',
          score: 22.0,
          insight: "Very low importance. Not a focus of discussion in regional report."
        },
        {
          attribute: 'Insurance and Financing Options',
          score: 23.5,
          insight: "Very low importance. Not a significant discussion point regionally."
        },
        {
          attribute: 'Connectivity and Smart Features',
          score: 41.5,
          insight: "Low importance. Not a significant focus in regional discussions."
        },
        {
          attribute: 'Community and Culture',
          score: 45.0,
          insight: "Low-moderate importance. No significant cultural opposition evident."
        }
      ]
    },
    resonanceFactors: {
      high: [
        "A trusted brand reputation and proven quality matter in a niche market (BMW's pedigree provides reassurance)",
        "Strong government incentives and environmental ethos keep attention on practical aspects",
        "Performance advantages and urban utility provide both emotional and practical appeals"
      ],
      low: [
        "A very small EV rider community means cultural influence on buying decisions is limited",
        "Customization is virtually irrelevant when discussions center on making EVs practical",
        "Environmental benefits remain secondary to practical factors"
      ]
    },
    marketInsights: [
      "Core Practicalities Dominate: Range, cost, and charging are the undisputed top concerns across the Nordics.",
      "Performance is the Key Positive: The excitement around instant torque and acceleration is a consistent positive driver.",
      "Policy Matters: The lack of strong, motorcycle-specific incentives is a significant factor limiting the market.",
      "Service Network is a Vulnerability: The limited dealer and service network for niche electric brands is a practical concern.",
      "Brand Trust is Significant: In a small market evaluating multiple options, BMW's established reputation provides advantage.",
      "Market Remains Highly Niche: Conversation volume is low, reflecting very small adoption numbers.",
      "Cultural Barriers Minimal: Unlike some markets, the Nordics show little cultural resistance to electric motorcycles."
    ],
    attributeInsights: {
      'Performance and Speed': {
        score: 82.5,
        rationale: 'High importance scores across social (75), market (85), reviews (90), and expert analysis (80). Performance is a key positive driver.',
        consumerInsight: 'Performance characteristics (acceleration, torque) are consistently praised and highlighted as key advantages.'
      },
      'Battery Technology and Range': {
        score: 95.0,
        rationale: 'Highest importance scores across all components (95). Range anxiety is the dominant theme.',
        consumerInsight: 'Range limitations and battery performance are top-of-mind concerns, heavily influencing perceived usability.'
      },
      'Brand Heritage and Trust': {
        score: 75.0,
        rationale: 'High importance. Brand positioning and heritage shape market discussions.',
        consumerInsight: 'Nordic consumers actively compare brands based on reputation and reliability; BMW\'s established presence provides significant advantage.'
      }
    },
    strategicRecommendations: [
      {
        title: 'Address Core Barriers Directly',
        details: 'Focus communication and product strategy on mitigating range anxiety and justifying the cost (TCO benefits, potential financing).'
      },
      {
        title: 'Leverage Performance Excitement',
        details: 'Continue highlighting the unique performance characteristics of electric drive as a key selling point for enthusiasts.'
      },
      {
        title: 'Advocate for Policy Support',
        details: 'Where appropriate, engage with policymakers to highlight the potential of electric motorcycles and advocate for incentives.'
      },
      {
        title: 'Strengthen Service & Support',
        details: 'Emphasize BMW\'s established network and reliability compared to smaller players to build owner confidence.'
      }
    ],
    attributesAnalysis: {
      'Performance and Speed': {
        score: 82.5,
        insight: "High importance. Performance drives excitement and interest, especially in comparison to traditional motorcycles.",
        recommendation: "Continue emphasizing instant torque and acceleration in marketing and test rides."
      },
      'Battery Technology and Range': {
        score: 95.0,
        insight: "Highest importance. Range anxiety and real-world performance are primary concerns.",
        recommendation: "Focus on range improvements and transparent communication about real-world range in Nordic conditions."
      },
      'Charging Infrastructure': {
        score: 85.0,
        insight: "Very high importance. Infrastructure availability and charging speed are critical enablers.",
        recommendation: "Partner with Nordic charging networks, develop bike-specific charging solutions."
      },
      'Noise Reduction': {
        score: 49.0,
        insight: "Low-to-moderate importance. Discussed mainly regarding loss of traditional character.",
        recommendation: "Position quiet operation positively while acknowledging traditional preferences."
      },
      'Affordability and Cost of Ownership': {
        score: 91.5,
        insight: "Very high importance. BPM tax introduction dramatically amplifies cost barrier.",
        recommendation: "Develop strategies to address increased costs, emphasize long-term TCO benefits."
      },
      'Insurance and Financing Options': {
        score: 23.5,
        insight: "Very low importance. Not a significant discussion point regionally.",
        recommendation: "Maintain competitive options but focus marketing elsewhere."
      },
      'Resale Value and Longevity': {
        score: 58.0,
        score: 73.0,
        insight: "High importance. Brand comparisons and competitive dynamics shape perception.",
        recommendation: "Maintain clear positioning while addressing Dutch market needs."
      }
    }
  },
  'Portugal': {
    keyDrivers: {
      high: [
        {
          attribute: 'Battery Technology and Range',
          score: 95.0,
          insight: "Highest importance. Range anxiety and real-world range experiences dominate discussions."
        },
        {
          attribute: 'Affordability and Cost of Ownership',
          score: 93.0,
          insight: "Very high importance. High purchase price is a major barrier despite TCO benefits."
        },
        {
          attribute: 'Government Incentives and Regulations',
          score: 87.0,
          insight: "Very high importance. Q1 incentives are critical for offsetting high costs."
        },
        {
          attribute: 'Charging Infrastructure',
          score: 87.0,
          insight: "Very high importance. Infrastructure scarcity outside urban areas is a major concern."
        },
        {
          attribute: 'Performance and Speed',
          score: 83.0,
          insight: "High importance. Instant torque and acceleration consistently drive enthusiast interest."
        }
      ],
      low: [
        {
          attribute: 'Safety Features',
          score: 13.0,
          insight: "Lowest importance. Not a focus of discussion in Portuguese market."
        },
        {
          attribute: 'Insurance and Financing Options',
          score: 20.0,
          insight: "Very low importance. Not a major factor in discussions."
        },
        {
          attribute: 'Customization and Personalization',
          score: 20.0,
          insight: "Very low importance. Riders focus on core issues over personalization."
        },
        {
          attribute: 'Connectivity and Smart Features',
          score: 28.0,
          insight: "Low importance. Not a significant focus in discussions."
        },
        {
          attribute: 'Community and Culture',
          score: 45.0,
          insight: "Low-moderate importance. Little community-driven influence in buying decisions."
        }
      ]
    },
    resonanceFactors: {
      high: [
        "Comparisons with competitors highlight BMW's trusted brand heritage (helping it stand out against rivals)",
        "Generous government incentives in Q1 2025 put a spotlight on cost, underscoring the value of a reliable brand",
        "Performance advantages and urban utility provide both emotional and practical appeals"
      ],
      low: [
        "Little community-driven influence or cultural debate in buying decisions",
        "Virtually no demand for customization, as consumers are preoccupied with affordability and charging support",
        "Environmental benefits remain secondary to practical factors"
      ]
    },
    marketInsights: [
      "Extreme Price Sensitivity & Incentive Dependence: Cost is paramount, and the market heavily relies on government incentives to be viable.",
      "Range & Infrastructure are Critical Barriers: Limited range and sparse charging infrastructure outside cities severely restrict adoption.",
      "Performance is a Key Positive: The thrill of electric acceleration remains a strong draw for enthusiasts.",
      "Brand Trust is Significant: In an emerging market, BMW's established reputation provides a competitive advantage in consumer confidence.",
      "Market is Nascent but Growing: Very low market share (1%) but showing growth (+9% Q1 YoY, BMW +62% in 2024).",
      "Zero Leads Mindshare: Zero Motorcycles is the benchmark competitor in discussions and perceived market leadership.",
      "Urban Focus is Relevant: Commuting and city use are primary practical applications.",
      "Cultural Factors are Minimal: Unlike some markets, Portugal shows little cultural resistance to electric motorcycles."
    ],
    attributesAnalysis: {
      'Battery Technology and Range': {
        score: 95.0,
        rationale: 'Very high importance. Primary concern affecting adoption and usability perceptions.',
        consumerInsight: 'Range anxiety is a dominant concern, with practical range requirements being a key decision factor.'
      },
      'Performance and Speed': {
        score: 83.0,
        rationale: 'High importance. Performance characteristics are significant drivers of interest.',
        consumerInsight: 'Performance is viewed positively but secondary to practical concerns like range and cost.'
      },
      'Charging Infrastructure': {
        score: 87.0,
        rationale: 'Very high importance. Infrastructure development is critical for market viability.',
        consumerInsight: 'Charging network development and bike-specific solutions are key concerns.'
      },
      'Noise Reduction': {
        score: 42.5,
        rationale: 'Low-moderate importance. Sound vs silence debate present but not decisive.',
        consumerInsight: 'Quiet operation is seen as a premium feature while acknowledging traditional preferences.'
      },
      'Affordability and Cost of Ownership': {
        score: 93.0,
        rationale: 'Very high importance. Primary barrier to adoption despite TCO benefits.',
        consumerInsight: 'Cost is a critical factor, with financing options and long-term value proposition being key considerations.'
      },
      'Insurance and Financing Options': {
        score: 20.0,
        rationale: 'Very low importance. Not a major factor in discussions.',
        consumerInsight: 'Financing options are secondary to core product attributes.'
      },
      'Resale Value and Longevity': {
        score: 64.5,
        rationale: 'Moderate-high importance. Concerns about battery degradation and uncertain long-term value.',
        consumerInsight: 'Battery longevity and resale value uncertainty affect purchase decisions.'
      },
      'Government Incentives and Regulations': {
        score: 87.0,
        rationale: 'Very high importance. Q1 incentives are critical for market viability.',
        consumerInsight: 'Government support through incentives is a major factor in purchase decisions.'
      },
      'Advanced Technology Integration': {
        score: 56.0,
        rationale: 'Moderate importance. Tech features noted but secondary to core practicalities.',
        consumerInsight: 'Technology features are appreciated but not primary decision factors.'
      },
      'Connectivity and Smart Features': {
        score: 28.0,
        rationale: 'Low importance. Not a significant focus in discussions.',
        consumerInsight: 'Smart features are not a priority for Portuguese consumers.'
      },
      'Safety Features': {
        score: 13.0,
        rationale: 'Lowest importance. Not a focus of discussion.',
        consumerInsight: 'Safety features are not a significant consideration in purchase decisions.'
      },
      'After-Sales Support and Service Network': {
        score: 62.5,
        rationale: 'Moderate-high importance. Service network and reliability are key differentiators.',
        consumerInsight: 'Reliable service network is seen as a competitive advantage.'
      },
      'Education and Awareness': {
        score: 67.5,
        rationale: 'Moderate-high importance. Very niche market status indicates need for awareness building.',
        consumerInsight: 'Market education focused on practical concerns and real-world experiences is needed.'
      },
      'Urban Mobility Solutions': {
        score: 74.5,
        rationale: 'High importance. Commuting and city use are primary practical applications.',
        consumerInsight: 'Urban use case is a strong driver for electric motorcycle adoption.'
      },
      'Sustainability and Environmental Impact': {
        score: 42.5,
        rationale: 'Low-moderate importance. Secondary to economic and practical factors.',
        consumerInsight: 'Environmental benefits are appreciated but not primary purchase drivers.'
      },
      'Brand Heritage and Trust': {
        score: 78.0,
        rationale: 'High importance. Brand comparisons and trust shape market perception.',
        consumerInsight: 'Brand reputation and reliability record significantly influence purchase decisions.'
      },
      'Community and Culture': {
        score: 45.0,
        rationale: 'Low-moderate importance. Little cultural resistance to EVs.',
        consumerInsight: 'Cultural factors have minimal impact on EV adoption decisions.'
      },
      'Customization and Personalization': {
        score: 20.0,
        rationale: 'Very low importance. Portuguese consumers focused on practical barriers.',
        consumerInsight: 'Customization options are not a priority for consumers.'
      },
      'Design Innovation': {
        score: 56.0,
        rationale: 'Moderate importance. Innovation in design and tech is acknowledged but not top priority.',
        consumerInsight: 'Design innovation is appreciated while ensuring practical functionality.'
      },
      'Market Segmentation': {
        score: 78.0,
        rationale: 'High importance. Brand positioning and competitive dynamics shape perception.',
        consumerInsight: 'Clear market positioning while addressing local needs is important.'
      }
    },
    strategicRecommendations: [
      {
        title: 'Maximize Incentive Communication',
        details: 'Heavily promote the availability and impact of government incentives to directly address the primary cost barrier.'
      },
      {
        title: 'Focus on TCO & Running Costs',
        details: 'Emphasize long-term savings on fuel and maintenance to justify the higher upfront price, especially in the context of incentives.'
      },
      {
        title: 'Manage Range Expectations',
        details: 'Be realistic about range, focus on urban use cases, and provide clear guidance on charging strategies and infrastructure availability.'
      },
      {
        title: 'Build Brand Visibility vs. Zero',
        details: 'Increase marketing efforts and potentially expand the dealer network to challenge Zero\'s dominant share-of-voice.'
      }
    ]
  },
  'Spain': {
    keyDrivers: {
      high: [
        {
          attribute: 'Battery Technology and Range',
          score: 95.0,
          insight: "Highest importance. Range anxiety is a dominant concern affecting usability perceptions."
        },
        {
          attribute: 'Affordability and Cost of Ownership',
          score: 95.0,
          insight: "Equally critical. High price ('barbaridad') is a primary barrier, heavily influenced by Plan MOVES incentives."
        },
        {
          attribute: 'Performance and Speed',
          score: 88.0,
          insight: "Very high importance. Performance is a key topic and differentiator, especially for enthusiasts."
        },
        {
          attribute: 'Urban Mobility Solutions',
          score: 86.5,
          insight: "Very high importance. Urban commuting is the primary viable use case, driving significant interest."
        },
        {
          attribute: 'Charging Infrastructure',
          score: 85.0,
          insight: "High importance. Practical charging challenges significantly impact usability perceptions."
        }
      ],
      low: [
        {
          attribute: 'Safety Features',
          score: 23.5,
          insight: "Lowest importance. Not a focus of discussion in Spanish market."
        },
        {
          attribute: 'Insurance and Financing Options',
          score: 31.0,
          insight: "Very low importance. Practical detail likely addressed later."
        },
        {
          attribute: 'Customization and Personalization',
          score: 25.0,
          insight: "Very low importance. Early market focused on core functionality."
        },
        {
          attribute: 'Community and Culture',
          score: 45.0,
          insight: "Low-moderate importance. No major cultural resistance to EV bikes."
        },
        {
          attribute: 'Noise Reduction',
          score: 48.5,
          insight: "Low-moderate importance. Mixed reactions to quiet operation."
        }
      ]
    },
    resonanceFactors: {
      high: [
        "Strong brand reputation and competitive comparisons drive interest (BMW is seen as a dependable choice amid new players)",
        "Enthusiasm for cutting-edge design and technology adds to the appeal of BMW's offerings, complementing its brand strength in Spain",
        "Performance advantages and urban utility provide both emotional and practical appeals"
      ],
      low: [
        "Rider community or cultural sentiment has little impact on purchasing (no significant 'traditional vs electric' narrative in Spain's EV uptake)",
        "Customization is virtually a non-factor, as consumers are fixated on getting value and performance rather than tailoring the bike's look or features",
        "Environmental benefits remain secondary to practical factors"
      ]
    },
    marketInsights: [
      "Core Practicalities Dominate: Similar to other markets, the Spanish conversation is dominated by Range, Cost, and Charging challenges.",
      "Incentive Sensitivity: The Spanish market appears highly sensitive to government incentives (Plan MOVES), which significantly impact affordability perceptions and sales.",
      "Urban Focus is Key: The success of urban scooters (Silence/Seat MÓ) and the positioning of the CE 04 highlight that the primary viable market is currently urban mobility.",
      "Reliability & Service Crucial: Negative experiences reported with niche brands (Zero) make reliability and trustworthy after-sales support highly important factors.",
      "Performance Excites: Despite practical concerns, the instant torque and acceleration of electric bikes are consistently highlighted as major positive attributes.",
      "Brand Trust Matters: In a market comparing multiple options, BMW's established reputation provides a notable advantage against newer competitors.",
      "Cultural Barriers Minimal: Unlike some markets, Spain shows little cultural resistance to electric motorcycles, with riders focused on practical rather than ideological concerns."
    ],
    attributeInsights: {
      'Performance and Speed': {
        score: 88.0,
        rationale: 'Very high importance scores (Social 90, Market 85, Review 90, Expert 85). Performance is a key topic and differentiator.',
        consumerInsight: 'Performance characteristics (acceleration, torque, fun factor) are extremely important drivers of interest and purchase consideration, especially for enthusiasts.'
      },
      'Battery Technology and Range': {
        score: 95.0,
        rationale: 'Highest importance scores across all components (95). Range is a dominant and critical concern.',
        consumerInsight: 'Real-world range ("¿Cuántos kilómetros reales hace?") is a constant question. Range anxiety is the top factor preventing wider adoption in Spain.'
      },
      'Brand Heritage and Trust': {
        score: 75.0,
        rationale: 'High importance. Brand comparisons and competitive dynamics (BMW vs Zero vs local brand Silence) shape Spanish market perceptions.',
        consumerInsight: 'Spanish riders frequently compare brands based on image and reliability; BMW\'s legacy as a quality manufacturer lends it credibility against upstart EV competitors.'
      }
    },
    strategicRecommendations: [
      {
        title: 'Leverage Plan MOVES & Address Cost',
        details: 'Actively communicate how Plan MOVES subsidies impact the final price of BMW electric models. Emphasize TCO benefits (fuel/maintenance savings) to counter the high initial cost perception.'
      },
      {
        title: 'Tackle Range & Charging Perceptions',
        details: 'Communicate realistic range transparently, focusing on urban suitability. Provide clear guidance on home charging solutions and highlight fast-charging capabilities where applicable.'
      },
      {
        title: 'Highlight Performance & Urban Prowess',
        details: 'Continue marketing efforts focused on the exciting performance (acceleration) and the suitability of models like the CE 04 and CE 02 for Spanish city environments.'
      },
      {
        title: 'Emphasize Reliability & Service Network',
        details: 'Use BMW\'s brand reputation for quality and its established dealer network as key selling points to build confidence and address reliability concerns.'
      }
    ],
    attributesAnalysis: {
      'Performance and Speed': {
        score: 88.0,
        insight: "Very high importance. Performance is a key topic and differentiator, especially for enthusiasts.",
        recommendation: "Emphasize acceleration and torque in marketing, showcase performance advantages in test rides."
      },
      'Battery Technology and Range': {
        score: 95.0,
        insight: "Highest importance. Range anxiety and real-world range are primary concerns affecting usability.",
        recommendation: "Focus on range improvements and transparent communication about real-world range in Spanish conditions."
      },
      'Charging Infrastructure': {
        score: 85.0,
        insight: "High importance. Practical charging limitations significantly impact usability.",
        recommendation: "Partner with charging networks, provide clear guidance on home charging solutions."
      },
      'Noise Reduction': {
        score: 48.5,
        insight: "Low-moderate importance. Mixed reactions to quiet operation, some miss traditional sound.",
        recommendation: "Position quiet operation as modern feature while acknowledging traditional preferences."
      },
      'Affordability and Cost of Ownership': {
        score: 95.0,
        insight: "Highest importance. High price is a major barrier, heavily influenced by Plan MOVES incentives.",
        recommendation: "Develop Spanish market-specific financing options, emphasize TCO benefits with incentives."
      },
      'Insurance and Financing Options': {
        score: 31.0,
        insight: "Low importance. Practical details considered later in purchase journey.",
        recommendation: "Maintain competitive options but focus marketing on more critical factors."
      },
      'Resale Value and Longevity': {
        score: 58.0,
        insight: "Moderate importance. Battery life and future value factor into TCO considerations.",
        recommendation: "Offer strong battery warranties, provide transparency about battery health monitoring."
      },
      'Government Incentives and Regulations': {
        score: 84.0,
        insight: "Very high importance. Plan MOVES subsidies directly influence demand and sales.",
        recommendation: "Actively promote available incentives, advocate for continued support."
      },
      'Advanced Technology Integration': {
        score: 71.5,
        insight: "High importance. Tech features noted but core practicalities dominate.",
        recommendation: "Include competitive features while ensuring they enhance core functionality."
      },
      'Connectivity and Smart Features': {
        score: 52.0,
        insight: "Moderate importance. Desirable but not essential compared to core attributes.",
        recommendation: "Maintain competitive features but prioritize investment in fundamentals."
      },
      'Safety Features': {
        score: 23.5,
        insight: "Lowest importance. Not a significant focus of discussion.",
        recommendation: "Maintain high standards but focus marketing on more differentiating factors."
      },
      'After-Sales Support and Service Network': {
        score: 81.0,
        insight: "Very high importance. Service network quality is a key differentiator.",
        recommendation: "Leverage BMW's established Spanish service network as competitive advantage."
      },
      'Education and Awareness': {
        score: 55.5,
        insight: "Moderate importance. Market still learning, requiring ongoing education.",
        recommendation: "Focus education on addressing specific concerns about range, charging, and TCO."
      },
      'Urban Mobility Solutions': {
        score: 86.5,
        insight: "Very high importance. Urban use case drives significant market interest.",
        recommendation: "Position CE 04/02 strongly for urban use, emphasize commuting benefits."
      },
      'Sustainability and Environmental Impact': {
        score: 51.5,
        insight: "Moderate importance. Environmental benefits appreciated but secondary to practical factors.",
        recommendation: "Include environmental messaging as supporting point rather than primary focus."
      },
      'Brand Heritage and Trust': {
        score: 75.0,
        insight: "High importance. BMW's reputation provides significant advantage in Spanish market.",
        recommendation: "Leverage brand heritage while emphasizing commitment to electric innovation."
      },
      'Community and Culture': {
        score: 45.0,
        insight: "Low-moderate importance. No major cultural resistance to EVs.",
        recommendation: "Focus on practical benefits rather than cultural messaging."
      },
      'Customization and Personalization': {
        score: 25.0,
        insight: "Very low importance. Early market focused on core functionality.",
        recommendation: "Maintain basic options but prioritize investment in core attributes."
      },
      'Design Innovation': {
        score: 71.5,
        insight: "High importance. Modern design and innovation contribute to premium positioning.",
        recommendation: "Continue distinctive design language while ensuring practical functionality."
      },
      'Market Segmentation': {
        score: 75.0,
        insight: "High importance. Clear positioning and competitive differentiation are crucial.",
        recommendation: "Maintain clear premium positioning while addressing Spanish market needs."
      }
    }
  }
  // Additional markets will be added here
};

// Helper function to get attribute insights for a specific market and attribute
export const getAttributeInsights = (market, attribute) => {
  if (!marketInsights[market] || !marketInsights[market].attributeInsights[attribute]) {
    return null;
  }
  return marketInsights[market].attributeInsights[attribute];
};

// Helper function to get key drivers for a market
export const getKeyDrivers = (market) => {
  if (!marketInsights[market]) {
    return { high: [], low: [] };
  }
  return marketInsights[market].keyDrivers;
};

// Helper function to get strategic recommendations for a market
export const getStrategicRecommendations = (market) => {
  if (!marketInsights[market]) {
    return [];
  }
  return marketInsights[market].strategicRecommendations;
};

export const attributeInsights = {
  'SWITZERLAND': {
    'Battery Technology and Range': {
      score: 95.0,
      consumerInsight: "Real-world range experiences vary significantly (100-180km), making range a critical factor in purchase decisions."
    },
    'Affordability and Cost of Ownership': {
      score: 91.0,
      consumerInsight: "Price barrier significant but offset by lower running costs (charging ~2 CHF) and maintenance savings."
    },
    'Performance and Speed': {
      score: 88.5,
      consumerInsight: "Instant torque and smooth acceleration are major positive drivers, though balanced against range concerns."
    },
    'Charging Infrastructure': {
      score: 88.5,
      consumerInsight: "Dense network but bike-unfriendly stations. First bike-specific station in Bevaix shows progress."
    },
    'Brand Heritage and Trust': {
      score: 85.0,
      consumerInsight: "BMW's engineering heritage and quality reputation significantly influence buyer confidence in Swiss market."
    },
    'Urban Mobility Solutions': {
      score: 78.5,
      consumerInsight: "Strong focus on commuting and city use, particularly for CE 04 model. Urban practicality drives adoption."
    },
    'Government Incentives and Regulations': {
      score: 76.5,
      consumerInsight: "Lack of national incentives is a significant barrier, forcing manufacturers like Zero to offer own discounts."
    },
    'After-Sales Support and Service Network': {
      score: 68.5,
      consumerInsight: "Service network quality and reliability are key differentiators in the Swiss market."
    },
    'Resale Value and Longevity': {
      score: 69.5,
      consumerInsight: "Concerns about battery degradation and uncertain long-term value due to rapid tech evolution."
    },
    'Market Segmentation': {
      score: 85.0,
      consumerInsight: "BMW (~50% SoV) and Zero (~40% SoV) dominate market share, with clear brand positioning driving competition."
    }
  }
}; 