// This file is auto-generated. Do not edit directly.
// Run 'npm run generate-conversation-data' to update.

export const conversationData = {
  "france": {
    "themeData": [
      {
        "subject": "Urban Mobility",
        "value": 80
      },
      {
        "subject": "Performance",
        "value": 70
      },
      {
        "subject": "Affordability",
        "value": 60
      }
    ],
    "themeInsights": {
      "- Urban Mobility": [
        {
          "quote": "City riding is where electric shines.",
          "context": "Urban mobility is the top theme in French discussions.",
          "source": "Social Media"
        }
      ],
      "Performance": [
        {
          "quote": "Acceleration is instant and fun.",
          "context": "Performance is a key driver for enthusiasts.",
          "source": "Forum"
        }
      ]
    },
    "sentimentData": [
      {
        "name": "Positive Sentiment",
        "value": 65
      },
      {
        "name": "Neutral Sentiment",
        "value": 25
      },
      {
        "name": "Negative Sentiment",
        "value": 10
      }
    ],
    "sentimentInsights": {
      "Positive": [
        {
          "quote": "Love the quiet ride and low maintenance.",
          "context": "Positive sentiment is driven by convenience and innovation.",
          "source": "Owner Review"
        }
      ],
      "Neutral": [
        {
          "quote": "Still waiting for more charging stations.",
          "context": "Neutral sentiment reflects infrastructure concerns.",
          "source": "News Article"
        }
      ],
      "Negative": [
        {
          "quote": "Too expensive for most riders.",
          "context": "Price remains a barrier for many.",
          "source": "Social Media"
        }
      ]
    }
  }
};

export function getMarketData(market) {
  const marketKey = market.toLowerCase();
  return conversationData[marketKey] || {
    themeData: [],
    themeInsights: {},
    sentimentData: [],
    sentimentInsights: {
      Positive: [],
      Neutral: [],
      Negative: []
    }
  };
}
