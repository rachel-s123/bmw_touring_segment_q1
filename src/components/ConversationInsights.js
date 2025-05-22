import React from 'react';
import { Paper, Typography, Grid, Box, Card, CardContent, Divider } from '@mui/material';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { getMarketData } from '../data/conversationData';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MessageIcon from '@mui/icons-material/Message';

const SENTIMENT_COLORS = {
  Positive: '#48b83c',
  Negative: '#e63329',
  Neutral: '#666666'
};

const marketThemeQuotes = {
  'France': {
    'Range & Autonomy': {
      quote: '"La moto électrique souffre... d\'une autonomie bien trop faible"',
      context: 'This quote reflects the common concern about electric motorcycle range limitations, with riders questioning if current battery technology can meet their needs.',
      source: 'Le Repaire des Motards'
    },
    'Performance': {
      quote: '"surpris... c\'est vachement facile à conduire... super pour la ville"',
      context: 'This direct quote captures the surprise of riders experiencing electric motorcycle performance, particularly highlighting the ease of urban riding.',
      source: 'Cleanrider'
    },
    'Price & Value': {
      quote: '"délirant par rapport aux prestations offertes"',
      context: 'This quote directly addresses the perceived disconnect between electric motorcycle prices and the features they offer, especially after the 2024 eco-bonus removal.',
      source: 'Le Repaire des Motards'
    },
    'Design & Heritage': {
      quote: '"une Harley sans bruit, est-ce encore une Harley ?"',
      context: 'This quote raises a fundamental question about brand identity in the electric era, questioning whether removing traditional elements like engine noise changes the essence of iconic motorcycle brands.',
      source: 'Forum Discussion'
    },
    'Charging Infrastructure': {
      quote: '"les électriques sont perçues comme de vraies motos, parce qu\'elles marchent bien"',
      context: 'This quote suggests that reliable charging infrastructure is helping electric motorcycles gain acceptance as legitimate motorcycles in the market.',
      source: 'Cleanrider'
    }
  },
  'Belgium': {
    'Performance & Ride Experience': {
      quote: '"I LOVE mine... riding an electric one is almost zen-like"',
      context: 'This quote captures the positive experience of electric motorcycle performance, emphasizing the smooth and peaceful riding experience.',
      source: 'Reddit User'
    },
    'Range & Battery Technology': {
      quote: '"we have chargers at every 50 km here in Belgium"',
      context: 'This quote highlights the practical aspect of charging infrastructure in Belgium, showing how riders plan their routes around available charging points.',
      source: 'Reddit User'
    },
    'Cost & Incentives': {
      quote: '"Company motor ipv car"',
      context: 'This quote reflects the growing trend of companies considering electric motorcycles as part of their fleet, highlighting the business case for electric mobility.',
      source: 'Reddit User'
    },
    'Design & Style': {
      quote: '"Now I find it cool – it turns heads at every stoplight, and that\'s part of the fun"',
      context: 'This quote shows how initial skepticism about electric motorcycle design can turn into appreciation, particularly for the BMW CE 04\'s distinctive styling.',
      source: 'CE 04 Owner'
    },
    'Reliability & Maintenance': {
      quote: '"a worthless pile of iron"',
      context: 'This negative quote reflects concerns about reliability and after-sales support, particularly regarding specific issues with certain electric motorcycle models.',
      source: 'Electric Motorcycle Forum'
    }
  },
  'CS': {
    'Range & Performance': {
      quote: '"Fast!... user-friendly... remarkable efficiency around town"',
      context: 'This quote captures the positive performance aspects of electric motorcycles, particularly their urban efficiency and user-friendly nature.',
      source: 'MCNews Review'
    },
    'Cost & Value': {
      quote: '"Even with fuel savings, it will take me X years to break even on a €15k electric bike"',
      context: 'This quote reflects the common concern about the high upfront cost and long-term value proposition of electric motorcycles.',
      source: 'Forum Discussion'
    },
    'Design & Innovation': {
      quote: '"looks like it\'s from a sci-fi flick"',
      context: 'This quote highlights the futuristic design appeal of electric motorcycles, particularly the BMW CE 04\'s distinctive styling.',
      source: 'Czech Review'
    },
    'Heritage & Culture': {
      quote: '"battery nonsense is bought by nobody"',
      context: 'This quote represents the traditionalist perspective that questions the viability of electric motorcycles in the market.',
      source: 'Slovak Forum User'
    },
    'Infrastructure & Policy': {
      quote: '"we have chargers at every 50 km here"',
      context: 'This quote reflects the practical considerations of charging infrastructure availability across the region.',
      source: 'Regional Forum'
    }
  },
  'Italy': {
    'Performance & Riding Experience': {
      quote: '"Moto che in città è la svolta totale a livello di consumi, divertimento e comfort"',
      context: 'This quote captures the positive experience of urban electric motorcycle performance, highlighting efficiency, fun, and comfort.',
      source: 'Moto.it Review'
    },
    'Design & Styling': {
      quote: '"O lo si ama o lo si odia" (you either love it or hate it)',
      context: 'This quote reflects the polarized opinions about the CE 04\'s futuristic design, which some see as bold and innovative while others find it controversial.',
      source: 'InMoto Magazine'
    },
    'Range & Battery': {
      quote: '"L\'unico neo al momento è l\'autonomia..."',
      context: 'This quote represents the common concern about range limitations, which remains a key consideration for potential buyers.',
      source: 'Zero DS Owner Review'
    },
    'Price & Value': {
      quote: '"15.000 EURO DI SCOOTER"',
      context: 'This quote highlights the ongoing discussion about the high price point of electric motorcycles compared to traditional models.',
      source: 'YouTube Review'
    },
    'Brand Heritage': {
      quote: '"addio benzina... cambiamento epocale"',
      context: 'This quote reflects the significant shift in motorcycle culture as traditional brands embrace electric mobility.',
      source: 'InMoto Magazine'
    }
  },
  'Netherlands': {
    'Range & Charging': {
      quote: '"het hete hangijzer bij elektrische motoren is en blijft de actieradius"',
      context: 'This quote reflects the primary concern about electric motorcycle range limitations, which remains the most discussed topic in the Dutch market.',
      source: 'Facebook Community Post'
    },
    'Performance & Ride Experience': {
      quote: '"trekken ongelooflijk hard"',
      context: 'This quote captures the enthusiasm for electric motorcycle performance, particularly the impressive acceleration and power delivery.',
      source: 'Testmotor.nl Review'
    },
    'Cost & Value': {
      quote: '"de bpm-vrijstelling voor nieuwe elektrische motorfietsen vervalt"',
      context: 'This quote highlights the significant impact of the 2025 BPM tax changes on electric motorcycle pricing and market adoption.',
      source: 'Tweakers News'
    },
    'Design & Styling': {
      quote: '"Ook niet vreemd met zoiets."',
      context: 'This quote represents the polarized opinions about electric motorcycle design, particularly regarding the BMW CE 04\'s futuristic styling.',
      source: 'Harley Davidson Forum'
    },
    'Heritage & Emotion': {
      quote: '"BMW moet wel, maar de markt is er nog niet klaar voor"',
      context: 'This quote reflects the tension between traditional motorcycle culture and the transition to electric mobility.',
      source: 'Harley Davidson Forum'
    }
  },
  'Nordics': {
    'Performance & Range': {
      quote: '"quick and very smooth" with "deceptively quick acceleration without any drama"',
      context: 'This quote captures the positive experience of electric motorcycle performance, particularly the smooth power delivery and impressive acceleration.',
      source: 'ADVrider Review'
    },
    'Cost & Value': {
      quote: '"I ride mine every day… Saves me $200 a month not paying [for gas]"',
      context: 'This quote highlights the significant cost savings from electric motorcycle ownership, particularly in terms of fuel costs.',
      source: 'Reddit User'
    },
    'Charging & Infrastructure': {
      quote: '"ideal charging for BMW CE 04" – discussing how often to charge to 100% to balance the battery',
      context: 'This quote represents the practical discussions about battery care and charging habits in the Nordic market.',
      source: 'Reddit Discussion'
    },
    'Reliability & Maintenance': {
      quote: '"I\'m done being a Zero rider" after months of problems and noted the lack of dealer support',
      context: 'This quote reflects concerns about reliability and after-sales support, particularly in markets with limited dealer networks.',
      source: 'Reddit User'
    },
    'Design & Emotional Appeal': {
      quote: '"ugly electric scoot"',
      context: 'This quote represents the polarized opinions about electric motorcycle design, particularly regarding the BMW CE 04\'s futuristic styling.',
      source: 'Reddit Comment'
    }
  },
  'Portugal': {
    'Performance & Technology': {
      quote: '"0–50 km/h in 2.6s" on BMW CE 04',
      context: 'This quote highlights the impressive acceleration capabilities of the BMW CE 04, which is a key selling point for electric motorcycles in the Portuguese market.',
      source: 'Andar de Moto Review'
    },
    'Cost & Incentives': {
      quote: '"apoios do Estado… incluíndo motociclos" now available',
      context: 'This quote reflects the importance of government incentives in making electric motorcycles more accessible in Portugal.',
      source: 'Motomais News'
    },
    'Design & Aesthetics': {
      quote: '"revolução… design vanguardista" that opens a "novo capítulo" in urban mobility',
      context: 'This quote captures the strong positive reception of BMW\'s innovative design language, particularly for the CE 04.',
      source: 'Motomais Review'
    },
    'Practicality & Use Cases': {
      quote: '"cumprir mais de 100 km entre cada carga" comfortably',
      context: 'This quote demonstrates the practical range capabilities of electric motorcycles for daily urban use in Portugal.',
      source: 'Andar de Moto Review'
    },
    'Brand Comparison & Heritage': {
      quote: '"líder de mercado…com histórico mais sólido"',
      context: 'This quote reflects the market perception of Zero Motorcycles as an established EV specialist, while BMW brings its heritage and quality to the electric segment.',
      source: 'Motomais Interview'
    }
  },
  'Spain': {
    'Performance & Riding Experience': {
      quote: '"muy ágiles" and "con una aceleración impresionante"',
      context: 'This quote captures the positive experience of electric motorcycle performance, particularly highlighting the impressive acceleration and agility.',
      source: 'BMWMotos Forum'
    },
    'Range & Battery': {
      quote: '"no haces 130 km ni de coña" (you won\'t get 130 km, no way)',
      context: 'This quote reflects the common concern about real-world range limitations, with riders noting actual range is often less than claimed.',
      source: 'CE 04 Owner Review'
    },
    'Cost & Value': {
      quote: '"el precio es una barbaridad" (the price is outrageous)',
      context: 'This quote represents the widespread concern about high electric motorcycle prices, particularly for premium models like the CE 04.',
      source: 'BMWMotos Forum'
    },
    'Design & Heritage': {
      quote: '"diseño futurista" that looks like a "concept bike on the road"',
      context: 'This quote highlights the polarizing but innovative design of the CE 04, which some riders find too futuristic while others appreciate its bold styling.',
      source: 'BMWMotos Forum'
    },
    'Reliability & Support': {
      quote: '"por lo demás ningún problema" (no problems otherwise)',
      context: 'This quote from a CE 04 owner reflects generally positive reliability experiences, though concerns about specialized service remain.',
      source: 'BMWMotos Forum'
    }
  },
  'Switzerland': {
    'Performance & Riding Experience': {
      quote: '"accélération démente" and "la moto la plus rapide du marché à l\'accélération"',
      context: 'This quote captures the enthusiastic response to electric motorcycle performance, particularly highlighting the impressive acceleration capabilities.',
      source: 'ActuMoto Review'
    },
    'Range & Charging': {
      quote: '"Switzerland seems to have a lot more charging stations than electric motorcycles"',
      context: 'This quote reflects the current state of charging infrastructure in Switzerland, noting the availability of charging stations but limited electric motorcycle adoption.',
      source: 'Electric Motorcycle Forum'
    },
    'Cost & Value': {
      quote: '"les primes d\'incitation... n\'existent pas... en Suisse"',
      context: 'This quote highlights the lack of government incentives for electric motorcycles in Switzerland, which has led manufacturers to offer their own discounts.',
      source: 'Zero Country Manager'
    },
    'Design & Heritage': {
      quote: '"très futuriste... tous les éléments singuliers du design y figuraient"',
      context: 'This quote reflects the strong reception of BMW\'s innovative design language, particularly for the CE 04\'s futuristic styling.',
      source: 'AcidMoto Review'
    },
    'Reliability & Support': {
      quote: '"le seul et unique revendeur de Suisse Romande"',
      context: 'This quote highlights the limited dealer network for electric motorcycles in Switzerland, particularly in the French-speaking region.',
      source: 'ActuMoto News'
    }
  },
  'UK': {
    'Performance & Riding Experience': {
      quote: '"monstrous torque delivered smoothly" with handling "so well-rounded it\'s as engaging to ride as petrol competition"',
      context: 'This quote captures the enthusiastic response to electric motorcycle performance, particularly highlighting the impressive acceleration and handling capabilities.',
      source: 'Motorcycle News Review'
    },
    'Range & Charging': {
      quote: '"range, charge time, silence and how powerful it is dominate the conversation as it does with any electric bike"',
      context: 'This quote reflects the primary concerns about electric motorcycle range and charging infrastructure in the UK market.',
      source: 'Bennetts BikeSocial'
    },
    'Cost & Value': {
      quote: '"very expensive to buy relative to conventional motorcycles... you\'ll need to cover a lot of miles on electricity to pay back the premium"',
      context: 'This quote highlights the ongoing discussion about the high price point and value proposition of electric motorcycles in the UK.',
      source: 'Bennetts Electric Bike Guide 2025'
    },
    'Design & Heritage': {
      quote: '"daring to produce such a dramatic electric motorcycle… a masterpiece of style and engineering"',
      context: 'This quote reflects the strong reception of BMW\'s innovative design language, particularly for the CE 04\'s futuristic styling.',
      source: 'Motorcycle News Review'
    },
    'Reliability & Support': {
      quote: '"Zero\'s support is non-existent…parts are a hustle to get"',
      context: 'This quote highlights concerns about after-sales support and parts availability for electric motorcycles in the UK.',
      source: 'Electric Motorcycle Forum'
    }
  }
};

const marketSentimentQuotes = {
  'France': {
    'Positive': [
      {
        quote: '"c\'est vachement facile à conduire... super pour la ville"',
        context: 'This quote directly expresses the rider\'s positive experience with urban riding, highlighting the ease of use and practicality.',
        source: 'Cleanrider'
      },
      {
        quote: '"la meilleure moto électrique"',
        context: 'This direct quote shows strong endorsement of the electric motorcycle\'s capabilities and features.',
        source: 'Moto Magazine'
      }
    ],
    'Neutral': [
      {
        quote: '"Quelle autonomie réelle ?"',
        context: 'This question reflects practical concerns about actual range capabilities, seeking clarification on real-world performance.',
        source: 'Forum Discussion'
      },
      {
        quote: '"pour le scoot urbain, oui"',
        context: 'This quote shows a measured assessment of electric motorcycles\' current role, specifically acknowledging their urban utility.',
        source: 'Forum Discussion'
      }
    ],
    'Negative': [
      {
        quote: '"On veut le bruit, l\'odeur, les vibrations... C\'est pour le plaisir"',
        context: 'This quote directly expresses the traditional rider\'s concern about losing the sensory experience that defines motorcycle riding for them.',
        source: 'Cleanrider'
      },
      {
        quote: '"paying a premium for less power"',
        context: 'This quote specifically addresses the price-performance ratio concern, questioning the value proposition of electric motorcycles.',
        source: 'Cleanrider'
      }
    ]
  },
  'Belgium': {
    'Positive': [
      {
        quote: '"echt een gemak" (really a convenience)',
        context: 'This quote from a CE 04 owner in Ghent highlights the practical benefits of electric motorcycles for daily commuting.',
        source: 'Reddit User'
      },
      {
        quote: '"Quel silence, quelle pêche, quelle liberté!"',
        context: 'This quote captures the surprise and delight of a traditional biker experiencing electric motorcycle performance for the first time.',
        source: 'FEBIAC'
      }
    ],
    'Neutral': [
      {
        quote: '"Real world cost of running an electric motorcycle over 20.000 km"',
        context: 'This discussion topic shows the practical, research-oriented nature of many conversations about electric motorcycle ownership.',
        source: 'Reddit User'
      },
      {
        quote: '"we have chargers at every 50 km here in Belgium"',
        context: 'This factual statement about charging infrastructure represents the neutral, information-sharing aspect of electric motorcycle discussions.',
        source: 'Reddit User'
      }
    ],
    'Negative': [
      {
        quote: '"does not deserve the name of motorcycle"',
        context: 'This quote represents the traditionalist perspective that questions whether electric vehicles can truly be considered motorcycles.',
        source: 'FEBIAC'
      },
      {
        quote: '"far more expensive than comparable gas bikes"',
        context: 'This quote reflects common concerns about the price premium of electric motorcycles compared to traditional models.',
        source: 'FEBIAC'
      }
    ]
  },
  'CS': {
    'Positive': [
      {
        quote: '"urban warrior with crisp performance… and great fit and finish"',
        context: 'This quote from a CE 02 review highlights the positive experience of urban electric motorcycle performance.',
        source: 'Cycle World Review'
      },
      {
        quote: '"it\'s expensive, but I smile every time I twist the throttle"',
        context: 'This quote captures the emotional satisfaction of electric motorcycle ownership despite the cost.',
        source: 'Owner Review'
      }
    ],
    'Neutral': [
      {
        quote: '"How does the CE 04 charge?"',
        context: 'This question represents the practical, information-seeking nature of many conversations about electric motorcycles.',
        source: 'Forum Discussion'
      },
      {
        quote: '"What\'s the real range of Zero SR/F?"',
        context: 'This question reflects the common need for clarification about real-world performance capabilities.',
        source: 'Forum Discussion'
      }
    ],
    'Negative': [
      {
        quote: '"battery nonsense is bought by nobody"',
        context: 'This quote represents the skeptical view of electric motorcycles in some traditional riding communities.',
        source: 'Slovak Forum User'
      },
      {
        quote: '"future young riders will care more about personal carbon footprint and ESG score than freedom and speed"',
        context: 'This quote reflects concerns about changing motorcycle culture and values in the electric era.',
        source: 'Czech Forum User'
      }
    ]
  },
  'Italy': {
    'Positive': [
      {
        quote: '"Fantastica moto meravigliosa eccezionale completa"',
        context: 'This quote shows strong enthusiasm for the electric motorcycle experience, particularly its performance and features.',
        source: 'Moto.it Review'
      },
      {
        quote: '"ai semafori fa arrabbiare i 600!"',
        context: 'This quote highlights the impressive acceleration and performance that surprises traditional motorcycle riders.',
        source: 'Forum Discussion'
      }
    ],
    'Neutral': [
      {
        quote: '"Zero XE (2025) – 20 CV, 100 km autonomia... Prezzo €6.565"',
        context: 'This quote represents the factual, information-sharing nature of many discussions about new models and specifications.',
        source: 'Moto.it News'
      },
      {
        quote: '"da prendere con tranquillità e da programmare se pensi di andare oltre i 200 km"',
        context: 'This quote reflects the practical considerations of electric motorcycle ownership, particularly regarding range planning.',
        source: 'Zero DS Owner'
      }
    ],
    'Negative': [
      {
        quote: '"Incubo" (nightmare)',
        context: 'This quote represents a rare but significant negative experience with reliability issues and service problems.',
        source: 'CE 04 Owner Review'
      },
      {
        quote: '"uno dei limiti continua ad essere l\'infrastruttura"',
        context: 'This quote highlights concerns about charging infrastructure limitations in Italy.',
        source: 'Forum Discussion'
      }
    ]
  },
  'Netherlands': {
    'Positive': [
      {
        quote: '"Tijdens onze testrit werd het motorgeluid… nooit gemist. Niet hoeven schakelen ook niet"',
        context: 'This quote shows the positive experience of electric motorcycle riding, highlighting the benefits of simplified operation and smooth performance.',
        source: 'Testmotor.nl Review'
      },
      {
        quote: '"zeker eens de moeite waard om naar te kijken en te testrijden!"',
        context: 'This quote encourages others to experience electric motorcycles firsthand, reflecting growing interest in the segment.',
        source: 'Eko-Motorwear Blog'
      }
    ],
    'Neutral': [
      {
        quote: '"kocht net een tweedehands BMW C Evolution"',
        context: 'This quote represents the practical, information-seeking nature of many discussions about electric motorcycle ownership.',
        source: 'Forum Discussion'
      },
      {
        quote: '"Is een elektrische motor klaar voor dagelijks gebruik?"',
        context: 'This question reflects the measured assessment of electric motorcycles\' current role in daily transportation.',
        source: 'YouTube Review'
      }
    ],
    'Negative': [
      {
        quote: '"ze maken niet of nauwelijks geluid en ze trillen niet"',
        context: 'This quote represents the traditionalist perspective that questions the sensory experience of electric motorcycles.',
        source: 'Facebook Group Discussion'
      },
      {
        quote: '"zet een dikke streep door de… groei van elektrische motoren"',
        context: 'This quote highlights concerns about government policy changes affecting electric motorcycle adoption.',
        source: 'Facebook Group Post'
      }
    ]
  },
  'Nordics': {
    'Positive': [
      {
        quote: '"smooth power" and lack of gear shifts on the Zero SR/F',
        context: 'This quote shows the positive experience of electric motorcycle riding, highlighting the benefits of simplified operation and smooth performance.',
        source: 'ADVrider Review'
      },
      {
        quote: '"turn heads" and attract riders who value innovation',
        context: 'This quote reflects the positive reception of electric motorcycle design and innovation in the Nordic market.',
        source: 'Forum Discussion'
      }
    ],
    'Neutral': [
      {
        quote: '"Real world cost of running an electric motorcycle over 20.000 km"',
        context: 'This discussion topic shows the practical, research-oriented nature of many conversations about electric motorcycle ownership.',
        source: 'Forum Discussion'
      },
      {
        quote: '"we have chargers at every 50 km here"',
        context: 'This factual statement about charging infrastructure represents the neutral, information-sharing aspect of electric motorcycle discussions.',
        source: 'Forum Discussion'
      }
    ],
    'Negative': [
      {
        quote: '"I\'m concerned about price, and range… any electric bike at a price I\'m willing to pay either [doesn\'t have enough range]"',
        context: 'This quote represents the common concern about the trade-off between price and range in electric motorcycles.',
        source: 'Reddit Discussion'
      },
      {
        quote: '"ze maken niet of nauwelijks geluid en ze trillen niet"',
        context: 'This quote represents the traditionalist perspective that questions the sensory experience of electric motorcycles.',
        source: 'Forum Discussion'
      }
    ]
  },
  'Portugal': {
    'Positive': [
      {
        quote: '"uma mota de grande qualidade" capable of long rides per charge',
        context: 'This quote shows strong endorsement of electric motorcycle quality and range capabilities.',
        source: 'Clube Português Motociclismo'
      },
      {
        quote: '"grande oportunidade de crescimento" for the sector',
        context: 'This quote reflects optimism about the future of electric motorcycles in Portugal.',
        source: 'Motomais Interview'
      }
    ],
    'Neutral': [
      {
        quote: '"a BMW C-Evo pode carregar a 2700W num posto lento"',
        context: 'This quote represents the practical, information-sharing nature of many discussions about charging infrastructure.',
        source: 'Clube Português Motociclismo'
      },
      {
        quote: '"105 cv e 200 Nm" for the LiveWire',
        context: 'This quote shows the factual, technical nature of many discussions about electric motorcycle specifications.',
        source: 'Automóveis Elétricos'
      }
    ],
    'Negative': [
      {
        quote: '"mais elevado do que… Opel Corsa-e"',
        context: 'This quote reflects concerns about the high price of electric motorcycles compared to other vehicles.',
        source: 'Automóveis Elétricos'
      },
      {
        quote: '"não vou conseguir fazê-la [viagem] com uma única carga"',
        context: 'This quote represents common concerns about range limitations for longer trips.',
        source: 'Clube Português Motociclismo'
      }
    ]
  },
  'Spain': {
    'Positive': [
      {
        quote: '"potencia desmedida" and "increíble" to ride',
        context: 'This quote shows strong enthusiasm for electric motorcycle performance, particularly the impressive acceleration and power delivery.',
        source: 'BMWMotos Forum'
      },
      {
        quote: '"ahorro 1.200 euros anuales" in fuel and maintenance',
        context: 'This quote highlights the significant cost savings from electric motorcycle ownership, particularly in terms of fuel and maintenance costs.',
        source: 'Xataka Review'
      }
    ],
    'Neutral': [
      {
        quote: '"¿Cuántos kilómetros reales hace?" (How many real kilometers does it do?)',
        context: 'This question represents the practical, information-seeking nature of many discussions about electric motorcycle range.',
        source: 'Forum Discussion'
      },
      {
        quote: '"Renovación del plan MOVES" (MOVES plan renewal)',
        context: 'This quote reflects the factual discussion of government incentives and their impact on electric motorcycle adoption.',
        source: 'Anesdor News'
      }
    ],
    'Negative': [
      {
        quote: '"¿para qué te vas a comprar... una Zero... si por 9000€ te compras una Z900...?"',
        context: 'This quote represents the common concern about electric motorcycle prices compared to traditional models.',
        source: 'ForoCoches Forum'
      },
      {
        quote: '"quizás tiene 150km de autonomía... luego 2 o 3 horas a que se cargue"',
        context: 'This quote highlights concerns about range limitations and long charging times.',
        source: 'ForoCoches Forum'
      }
    ]
  },
  'Switzerland': {
    'Positive': [
      {
        quote: '"couple incroyable délivré instantanément" and "agréable" riding experience',
        context: 'This quote shows strong enthusiasm for electric motorcycle performance, particularly the instant torque and smooth riding experience.',
        source: 'ActuMoto Review'
      },
      {
        quote: '"l\'avenir de la mobilité urbaine est électrique"',
        context: 'This quote reflects optimism about the future of electric mobility in urban areas.',
        source: 'BMW Press Release'
      }
    ],
    'Neutral': [
      {
        quote: '"BMW Motorrad\'s sales fell 1.9% in 2023 with 3,377 bikes, but the CE 04 led global electric sales"',
        context: 'This quote represents factual reporting of market performance without emotional bias.',
        source: 'BMW Press Release'
      },
      {
        quote: '"0,5% market share for e-motos in H1 2019"',
        context: 'This quote provides objective market data without taking a position on electric motorcycles.',
        source: 'AcidMoto News'
      }
    ],
    'Negative': [
      {
        quote: '"le sujet qui fâche" regarding range limitations',
        context: 'This quote represents the common concern about electric motorcycle range limitations.',
        source: 'AcidMoto Review'
      },
      {
        quote: '"les motocyclistes roulant aux électrons... ont souvent des problèmes à trouver une borne disponible"',
        context: 'This quote highlights the practical challenges of finding available charging stations for electric motorcycles.',
        source: 'ActuMoto News'
      }
    ]
  },
  'UK': {
    'Positive': [
      {
        quote: '"truly loves this motorcycle" after 15,000 miles of ownership',
        context: 'This quote shows strong endorsement of electric motorcycle ownership experience from a long-term owner.',
        source: 'YouTube Review'
      },
      {
        quote: '"it costs pennies to run and maintenance is minimal – over years it can even out"',
        context: 'This quote highlights the cost benefits of electric motorcycle ownership, particularly in terms of running costs and maintenance.',
        source: 'Owner Review'
      }
    ],
    'Neutral': [
      {
        quote: '"Can an electric bike handle my 50-mile commute? How do I charge it if I live in a flat?"',
        context: 'This quote represents the practical, information-seeking nature of many discussions about electric motorcycle ownership.',
        source: 'Forum Discussion'
      },
      {
        quote: '"only 0.2% of large bike sales are electric currently"',
        context: 'This quote provides objective market data without taking a position on electric motorcycles.',
        source: 'Bennetts News'
      }
    ],
    'Negative': [
      {
        quote: '"half the price and three times the range would be better"',
        context: 'This quote represents the common concern about electric motorcycle prices and range limitations.',
        source: 'Visordown Comment'
      },
      {
        quote: '"range claims are a complete lie" with "~43 miles per charge versus 80+ claimed"',
        context: 'This quote highlights concerns about real-world range performance compared to manufacturer claims.',
        source: 'Zero DS Owner Review'
      }
    ]
  }
};

const generateRecommendations = (selectedMarket, themeData, sentimentData) => {
  const recommendations = {
    'France': {
      strategy: [
        {
          title: 'Dual-Model Urban Strategy',
          description: 'Leverage the CE 04 as the premium urban commuter and the CE 02 as the accessible entry point, creating a clear product hierarchy in the electric segment.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Range Confidence Program',
          description: 'Develop comprehensive range education programs for both CE 04 and CE 02, with specific focus on their different use cases and target audiences.',
          icon: <LightbulbIcon />
        }
      ],
      marketing: [
        {
          title: 'Premium Urban Experience',
          description: 'Create campaigns showcasing the CE 04\'s premium urban mobility and the CE 02\'s accessible innovation, targeting different segments of the urban market.',
          icon: <CampaignIcon />
        },
        {
          title: 'Total Cost of Ownership',
          description: 'Develop clear messaging around the value proposition of both models, with CE 04 focusing on premium benefits and CE 02 on accessibility and entry-level advantages.',
          icon: <MessageIcon />
        }
      ],
      positioning: [
        {
          title: 'BMW Electric Portfolio',
          description: 'Position the CE 04 as the premium electric choice and the CE 02 as the accessible innovation, creating a clear product hierarchy in the urban mobility segment.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Urban Performance Leadership',
          description: 'Highlight the performance advantages of both models in urban environments, with CE 04 emphasizing premium features and CE 02 focusing on agility and ease of use.',
          icon: <LightbulbIcon />
        }
      ],
      messaging: [
        {
          title: 'Emotional Premium Experience',
          description: 'Develop messaging that emphasizes the premium feel of the CE 04 and the accessible innovation of the CE 02, targeting different emotional needs of urban riders.',
          icon: <MessageIcon />
        },
        {
          title: 'Practical Premium Benefits',
          description: 'Communicate the practical advantages of both models: CE 04\'s premium features and storage capacity, and CE 02\'s compact design and urban agility.',
          icon: <CampaignIcon />
        }
      ],
      product: [
        {
          title: 'Range Optimization',
          description: 'Consider developing long-range versions of both models, with CE 04 focusing on extended urban range and CE 02 on optimal city commuting distance.',
          icon: <LightbulbIcon />
        },
        {
          title: 'Charging Solutions',
          description: 'Develop BMW-specific charging solutions and partnerships that cater to both premium (CE 04) and entry-level (CE 02) ownership experiences.',
          icon: <TrendingUpIcon />
        }
      ],
      target_audience: [
        {
          title: 'CE 04 Premium Urban',
          description: 'Target urban professionals and premium commuters with the CE 04, emphasizing its premium features, comfort, and storage capabilities.',
          icon: <MessageIcon />
        },
        {
          title: 'CE 02 Urban Innovators',
          description: 'Target younger urban riders and first-time electric buyers with the CE 02, focusing on its accessible innovation and urban agility.',
          icon: <CampaignIcon />
        }
      ]
    },
    'Belgium': {
      strategy: [
        {
          title: 'Urban-First Market Approach',
          description: 'Focus on the CE 04 as the premium urban mobility solution, leveraging Belgium\'s dense urban centers and strong commuting culture.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Charging Network Integration',
          description: 'Develop partnerships with Belgium\'s existing charging infrastructure providers to ensure seamless integration for BMW electric models.',
          icon: <LightbulbIcon />
        }
      ],
      marketing: [
        {
          title: 'Premium Urban Experience',
          description: 'Create campaigns showcasing the CE 04\'s premium urban mobility features, emphasizing its convenience and style in Belgian cities.',
          icon: <CampaignIcon />
        },
        {
          title: 'Total Cost of Ownership',
          description: 'Develop clear messaging around the value proposition, highlighting Belgium\'s tax incentives and lower operating costs.',
          icon: <MessageIcon />
        }
      ],
      positioning: [
        {
          title: 'Premium Electric Mobility',
          description: 'Position BMW electric models as the premium choice in Belgium\'s growing electric motorcycle market, emphasizing quality and reliability.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Urban Performance Leader',
          description: 'Highlight the performance advantages of BMW electric models in urban environments, particularly their ease of use and practicality.',
          icon: <LightbulbIcon />
        }
      ],
      messaging: [
        {
          title: 'Emotional Premium Experience',
          description: 'Develop messaging that emphasizes the premium feel and unique experience of BMW electric models, addressing both emotional and practical benefits.',
          icon: <MessageIcon />
        },
        {
          title: 'Practical Premium Benefits',
          description: 'Communicate the practical advantages of BMW electric models, focusing on convenience, reliability, and cost-effectiveness.',
          icon: <CampaignIcon />
        }
      ],
      product: [
        {
          title: 'Range Optimization',
          description: 'Consider developing long-range versions of the CE 04 specifically for the Belgian market, addressing range concerns for longer commutes.',
          icon: <LightbulbIcon />
        },
        {
          title: 'Charging Solutions',
          description: 'Develop BMW-specific charging solutions that integrate with Belgium\'s existing charging infrastructure.',
          icon: <TrendingUpIcon />
        }
      ],
      target_audience: [
        {
          title: 'Urban Professionals',
          description: 'Target urban professionals and commuters with the CE 04, emphasizing its premium features and practical benefits for daily use.',
          icon: <MessageIcon />
        },
        {
          title: 'Early Adopters',
          description: 'Focus on tech-savvy early adopters who appreciate innovation and are willing to pay a premium for cutting-edge electric mobility.',
          icon: <CampaignIcon />
        }
      ]
    },
    'CS': {
      strategy: [
        {
          title: 'Regional Market Segmentation',
          description: 'Develop distinct strategies for high-volume markets (Poland, Greece) versus emerging markets (Bulgaria, Romania), with tailored messaging and support.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Urban Performance Focus',
          description: 'Emphasize the CE 04\'s urban capabilities and the CE 02\'s accessibility, addressing the strong interest in city commuting across the region.',
          icon: <LightbulbIcon />
        }
      ],
      marketing: [
        {
          title: 'Design Leadership',
          description: 'Leverage the strong positive reception of BMW\'s electric design language, particularly the CE 04\'s futuristic styling that "turns heads".',
          icon: <CampaignIcon />
        },
        {
          title: 'Real-World Experience',
          description: 'Develop campaigns showcasing actual owner experiences and real-world performance, addressing range and charging concerns with practical examples.',
          icon: <MessageIcon />
        }
      ],
      positioning: [
        {
          title: 'Premium Urban Mobility',
          description: 'Position BMW electric models as the premium choice for urban mobility, emphasizing their performance, design, and practical benefits.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Innovation Leadership',
          description: 'Highlight BMW\'s leadership in electric motorcycle innovation, particularly in design and technology features.',
          icon: <LightbulbIcon />
        }
      ],
      messaging: [
        {
          title: 'Performance & Practicality',
          description: 'Develop messaging that emphasizes the instant torque and urban efficiency of electric motorcycles, addressing both performance and practical benefits.',
          icon: <MessageIcon />
        },
        {
          title: 'Design & Innovation',
          description: 'Communicate the unique design language and innovative features of BMW electric models, appealing to both traditional and new riders.',
          icon: <CampaignIcon />
        }
      ],
      product: [
        {
          title: 'Range Optimization',
          description: 'Consider developing region-specific range options, with focus on urban commuting distances for high-density markets.',
          icon: <LightbulbIcon />
        },
        {
          title: 'Charging Solutions',
          description: 'Develop partnerships with regional charging infrastructure providers to ensure seamless integration for BMW electric models.',
          icon: <TrendingUpIcon />
        }
      ],
      target_audience: [
        {
          title: 'Urban Professionals',
          description: 'Target urban professionals in major cities with the CE 04, emphasizing its premium features and practical benefits for daily commuting.',
          icon: <MessageIcon />
        },
        {
          title: 'Tech-Savvy Early Adopters',
          description: 'Focus on younger, tech-savvy riders who appreciate innovation and are willing to be early adopters of electric mobility.',
          icon: <CampaignIcon />
        }
      ]
    },
    'Italy': {
      strategy: [
        {
          title: 'Urban Performance Leadership',
          description: 'Leverage the strong positive reception of urban performance to position BMW electric models as the premium choice for city commuting.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Design Innovation Focus',
          description: 'Embrace the polarizing design as a strength, targeting younger, design-conscious urban professionals who appreciate bold styling.',
          icon: <LightbulbIcon />
        }
      ],
      marketing: [
        {
          title: 'Performance Storytelling',
          description: 'Develop campaigns showcasing real-world performance advantages, particularly the instant torque and acceleration that "makes 600cc riders angry at the lights".',
          icon: <CampaignIcon />
        },
        {
          title: 'Total Cost of Ownership',
          description: 'Create clear messaging around the value proposition, highlighting lower running costs and maintenance benefits to offset the higher initial price.',
          icon: <MessageIcon />
        }
      ],
      positioning: [
        {
          title: 'Premium Urban Mobility',
          description: 'Position BMW electric models as the premium choice for urban mobility, emphasizing their performance, design, and practical benefits.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Innovation Leadership',
          description: 'Highlight BMW\'s leadership in electric motorcycle innovation, particularly in design and technology features.',
          icon: <LightbulbIcon />
        }
      ],
      messaging: [
        {
          title: 'Performance & Practicality',
          description: 'Develop messaging that emphasizes the instant torque and urban efficiency of electric motorcycles, addressing both performance and practical benefits.',
          icon: <MessageIcon />
        },
        {
          title: 'Design & Innovation',
          description: 'Communicate the unique design language and innovative features of BMW electric models, appealing to both traditional and new riders.',
          icon: <CampaignIcon />
        }
      ],
      product: [
        {
          title: 'Range Optimization',
          description: 'Consider developing region-specific range options, with focus on urban commuting distances for high-density markets.',
          icon: <LightbulbIcon />
        },
        {
          title: 'Charging Solutions',
          description: 'Develop partnerships with regional charging infrastructure providers to ensure seamless integration for BMW electric models.',
          icon: <TrendingUpIcon />
        }
      ],
      target_audience: [
        {
          title: 'Urban Professionals',
          description: 'Target urban professionals in major cities with the CE 04, emphasizing its premium features and practical benefits for daily commuting.',
          icon: <MessageIcon />
        },
        {
          title: 'Design-Conscious Early Adopters',
          description: 'Focus on younger, design-conscious riders who appreciate innovation and are willing to be early adopters of electric mobility.',
          icon: <CampaignIcon />
        }
      ]
    },
    'Netherlands': {
      strategy: [
        {
          title: 'Urban Performance Leadership',
          description: 'Leverage the strong positive reception of urban performance to position BMW electric models as the premium choice for city commuting, particularly in dense urban areas.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Total Cost of Ownership Focus',
          description: 'Develop clear messaging around the value proposition, highlighting lower running costs and maintenance benefits to offset the higher initial price and BPM tax impact.',
          icon: <LightbulbIcon />
        }
      ],
      marketing: [
        {
          title: 'Performance Storytelling',
          description: 'Create campaigns showcasing real-world performance advantages, particularly the instant torque and acceleration that impresses traditional riders.',
          icon: <CampaignIcon />
        },
        {
          title: 'Practical Benefits Communication',
          description: 'Develop messaging that emphasizes the practical advantages of electric motorcycles, including simplified operation and reduced maintenance.',
          icon: <MessageIcon />
        }
      ],
      positioning: [
        {
          title: 'Premium Urban Mobility',
          description: 'Position BMW electric models as the premium choice for urban mobility, emphasizing their performance, design, and practical benefits.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Innovation Leadership',
          description: 'Highlight BMW\'s leadership in electric motorcycle innovation, particularly in design and technology features.',
          icon: <LightbulbIcon />
        }
      ],
      messaging: [
        {
          title: 'Performance & Practicality',
          description: 'Develop messaging that emphasizes the instant torque and urban efficiency of electric motorcycles, addressing both performance and practical benefits.',
          icon: <MessageIcon />
        },
        {
          title: 'Design & Innovation',
          description: 'Communicate the unique design language and innovative features of BMW electric models, appealing to both traditional and new riders.',
          icon: <CampaignIcon />
        }
      ],
      product: [
        {
          title: 'Range Optimization',
          description: 'Consider developing region-specific range options, with focus on urban commuting distances for high-density markets.',
          icon: <LightbulbIcon />
        },
        {
          title: 'Charging Solutions',
          description: 'Develop partnerships with regional charging infrastructure providers to ensure seamless integration for BMW electric models.',
          icon: <TrendingUpIcon />
        }
      ],
      target_audience: [
        {
          title: 'Urban Professionals',
          description: 'Target urban professionals in major cities with the CE 04, emphasizing its premium features and practical benefits for daily commuting.',
          icon: <MessageIcon />
        },
        {
          title: 'Early Adopters',
          description: 'Focus on tech-savvy early adopters who appreciate innovation and are willing to be early adopters of electric mobility.',
          icon: <CampaignIcon />
        }
      ]
    },
    'Nordics': {
      strategy: [
        {
          title: 'Regional Market Segmentation',
          description: 'Develop distinct strategies for high-volume markets (Sweden, Norway) versus emerging markets (Finland, Denmark), with tailored messaging and support.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Winter Performance Focus',
          description: 'Emphasize cold-weather capabilities and battery management features, addressing the unique challenges of Nordic climate conditions.',
          icon: <LightbulbIcon />
        }
      ],
      marketing: [
        {
          title: 'Performance Leadership',
          description: 'Create campaigns showcasing the instant torque and smooth acceleration that impresses traditional riders, particularly in Norway\'s mountain roads.',
          icon: <CampaignIcon />
        },
        {
          title: 'Environmental Benefits',
          description: 'Develop messaging that emphasizes zero emissions and sustainability, aligning with Nordic environmental values.',
          icon: <MessageIcon />
        }
      ],
      positioning: [
        {
          title: 'Premium Urban Mobility',
          description: 'Position BMW electric models as the premium choice for urban mobility, emphasizing their performance, design, and practical benefits.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Innovation Leadership',
          description: 'Highlight BMW\'s leadership in electric motorcycle innovation, particularly in design and technology features.',
          icon: <LightbulbIcon />
        }
      ],
      messaging: [
        {
          title: 'Performance & Practicality',
          description: 'Develop messaging that emphasizes the instant torque and urban efficiency of electric motorcycles, addressing both performance and practical benefits.',
          icon: <MessageIcon />
        },
        {
          title: 'Design & Innovation',
          description: 'Communicate the unique design language and innovative features of BMW electric models, appealing to both traditional and new riders.',
          icon: <CampaignIcon />
        }
      ],
      product: [
        {
          title: 'Range Optimization',
          description: 'Consider developing region-specific range options, with focus on urban commuting distances for high-density markets.',
          icon: <LightbulbIcon />
        },
        {
          title: 'Charging Solutions',
          description: 'Develop partnerships with regional charging infrastructure providers to ensure seamless integration for BMW electric models.',
          icon: <TrendingUpIcon />
        }
      ],
      target_audience: [
        {
          title: 'Urban Professionals',
          description: 'Target urban professionals in major cities with the CE 04, emphasizing its premium features and practical benefits for daily commuting.',
          icon: <MessageIcon />
        },
        {
          title: 'Early Adopters',
          description: 'Focus on tech-savvy early adopters who appreciate innovation and are willing to be early adopters of electric mobility.',
          icon: <CampaignIcon />
        }
      ]
    },
    'Portugal': {
      strategy: [
        {
          title: 'Urban Performance Leadership',
          description: 'Leverage the strong positive reception of urban performance to position BMW electric models as the premium choice for city commuting.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Incentive Integration',
          description: 'Develop clear messaging around government incentives (Plan MOVES) and total cost of ownership to address price concerns.',
          icon: <LightbulbIcon />
        }
      ],
      marketing: [
        {
          title: 'Design Innovation',
          description: 'Create campaigns showcasing the CE 04\'s avant-garde design and technological innovation.',
          icon: <CampaignIcon />
        },
        {
          title: 'Real-World Performance',
          description: 'Develop messaging that emphasizes the instant torque and urban efficiency of electric motorcycles.',
          icon: <MessageIcon />
        }
      ],
      positioning: [
        {
          title: 'Premium Urban Mobility',
          description: 'Position BMW electric models as the premium choice for urban mobility, emphasizing their performance, design, and practical benefits.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Innovation Leadership',
          description: 'Highlight BMW\'s leadership in electric motorcycle innovation, particularly in design and technology features.',
          icon: <LightbulbIcon />
        }
      ],
      messaging: [
        {
          title: 'Performance & Practicality',
          description: 'Develop messaging that emphasizes the instant torque and urban efficiency of electric motorcycles, addressing both performance and practical benefits.',
          icon: <MessageIcon />
        },
        {
          title: 'Design & Innovation',
          description: 'Communicate the unique design language and innovative features of BMW electric models, appealing to both traditional and new riders.',
          icon: <CampaignIcon />
        }
      ],
      product: [
        {
          title: 'Range Optimization',
          description: 'Consider developing region-specific range options, with focus on urban commuting distances for high-density markets.',
          icon: <LightbulbIcon />
        },
        {
          title: 'Charging Solutions',
          description: 'Develop partnerships with regional charging infrastructure providers to ensure seamless integration for BMW electric models.',
          icon: <TrendingUpIcon />
        }
      ],
      target_audience: [
        {
          title: 'Urban Professionals',
          description: 'Target urban professionals in major cities with the CE 04, emphasizing its premium features and practical benefits for daily commuting.',
          icon: <MessageIcon />
        },
        {
          title: 'Early Adopters',
          description: 'Focus on tech-savvy early adopters who appreciate innovation and are willing to be early adopters of electric mobility.',
          icon: <CampaignIcon />
        }
      ]
    },
    'UK': {
      strategy: [
        {
          title: 'Urban Performance Leadership',
          description: 'Leverage the strong positive reception of urban performance to position BMW electric models as the premium choice for city commuting.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Charging Infrastructure Integration',
          description: 'Develop partnerships with UK charging networks to ensure seamless integration for BMW electric models, particularly focusing on urban charging solutions.',
          icon: <LightbulbIcon />
        }
      ],
      marketing: [
        {
          title: 'Performance Storytelling',
          description: 'Create campaigns showcasing the impressive acceleration and smooth riding experience of electric motorcycles.',
          icon: <CampaignIcon />
        },
        {
          title: 'Total Cost of Ownership',
          description: 'Develop clear messaging around the value proposition, highlighting lower running costs and maintenance benefits to offset the higher initial price.',
          icon: <MessageIcon />
        }
      ],
      positioning: [
        {
          title: 'Premium Urban Mobility',
          description: 'Position BMW electric models as the premium choice for urban mobility, emphasizing their performance, design, and practical benefits.',
          icon: <TrendingUpIcon />
        },
        {
          title: 'Innovation Leadership',
          description: 'Highlight BMW\'s leadership in electric motorcycle innovation, particularly in design and technology features.',
          icon: <LightbulbIcon />
        }
      ],
      messaging: [
        {
          title: 'Performance & Practicality',
          description: 'Develop messaging that emphasizes the instant torque and urban efficiency of electric motorcycles, addressing both performance and practical benefits.',
          icon: <MessageIcon />
        },
        {
          title: 'Design & Innovation',
          description: 'Communicate the unique design language and innovative features of BMW electric models, appealing to both traditional and new riders.',
          icon: <CampaignIcon />
        }
      ],
      product: [
        {
          title: 'Range Optimization',
          description: 'Consider developing region-specific range options, with focus on urban commuting distances for high-density markets.',
          icon: <LightbulbIcon />
        },
        {
          title: 'Charging Solutions',
          description: 'Develop partnerships with regional charging infrastructure providers to ensure seamless integration for BMW electric models.',
          icon: <TrendingUpIcon />
        }
      ],
      target_audience: [
        {
          title: 'Urban Professionals',
          description: 'Target urban professionals in major cities with the CE 04, emphasizing its premium features and practical benefits for daily commuting.',
          icon: <MessageIcon />
        },
        {
          title: 'Early Adopters',
          description: 'Focus on tech-savvy early adopters who appreciate innovation and are willing to be early adopters of electric mobility.',
          icon: <CampaignIcon />
        }
      ]
    }
  };

  return recommendations[selectedMarket] || null;
};

const ConversationInsights = ({ selectedMarket }) => {
  const { themeData, sentimentData } = getMarketData(selectedMarket);
  const currentMarketQuotes = marketThemeQuotes[selectedMarket];
  const currentSentimentQuotes = marketSentimentQuotes[selectedMarket];
  const recommendations = generateRecommendations(selectedMarket, themeData, sentimentData);

  const renderCustomizedLabel = (entry) => {
    return `${entry.name} (${entry.value}%)`;
  };

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        {selectedMarket} - Q1 2024 Market Conversation Analysis
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Analysis of customer feedback, dealer insights, and market research data.
      </Typography>

      <Grid container spacing={3}>
        {/* Theme Analysis and Quotes */}
        <Grid item xs={12} md={6}>
          <Box sx={{ height: 400, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Key Discussion Themes
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={themeData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Theme Prevalence"
                  dataKey="value"
                  stroke="#1c69d4"
                  fill="#1c69d4"
                  fillOpacity={0.6}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </Box>
          
          {/* Theme Quotes and Context - Only show for France */}
          {currentMarketQuotes && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Theme Insights
              </Typography>
              <Grid container spacing={2}>
                {Object.entries(currentMarketQuotes).map(([theme, data]) => (
                  <Grid item xs={12} key={theme}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent sx={{ p: 2 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {theme}
                        </Typography>
                        <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 0.5 }}>
                          "{data.quote}"
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                          {data.context}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                          Source: {data.source}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Grid>

        {/* Sentiment Analysis and Key Insights */}
        <Grid item xs={12} md={6}>
          <Box sx={{ height: 400, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Market Sentiment Distribution
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={renderCustomizedLabel}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={SENTIMENT_COLORS[entry.name]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Box>

          {/* Sentiment Quotes - Only show for France */}
          {currentSentimentQuotes && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Sentiment Insights
              </Typography>
              <Grid container spacing={2}>
                {Object.entries(currentSentimentQuotes).map(([sentiment, quotes]) => (
                  <Grid item xs={12} key={sentiment}>
                    <Card sx={{ 
                      height: '100%',
                      borderLeft: `4px solid ${SENTIMENT_COLORS[sentiment]}`
                    }}>
                      <CardContent sx={{ p: 2 }}>
                        <Typography variant="subtitle1" sx={{ 
                          fontWeight: 600, 
                          mb: 1,
                          color: SENTIMENT_COLORS[sentiment]
                        }}>
                          {sentiment} Sentiment
                        </Typography>
                        {quotes.map((quote, index) => (
                          <Box key={index} sx={{ mb: index < quotes.length - 1 ? 2 : 0 }}>
                            <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 0.5 }}>
                              "{quote.quote}"
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                              {quote.context}
                            </Typography>
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                              Source: {quote.source}
                            </Typography>
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Grid>
      </Grid>

      {/* Recommendations Section */}
      {recommendations && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Strategic Recommendations
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            AI-generated insights and recommendations based on market conversation analysis.
          </Typography>

          <Grid container spacing={3}>
            {Object.entries(recommendations).map(([category, items]) => (
              <Grid item xs={12} md={6} key={category}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ 
                      textTransform: 'capitalize',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}>
                      {category}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Grid container spacing={2}>
                      {items.map((item, index) => (
                        <Grid item xs={12} key={index}>
                          <Box sx={{ 
                            display: 'flex',
                            gap: 2,
                            alignItems: 'flex-start'
                          }}>
                            <Box sx={{ 
                              color: 'primary.main',
                              display: 'flex',
                              alignItems: 'center'
                            }}>
                              {item.icon}
                            </Box>
                            <Box>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Paper>
  );
};

export default ConversationInsights; 