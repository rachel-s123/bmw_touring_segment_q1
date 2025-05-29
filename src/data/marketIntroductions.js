// Market-specific introductions combining conversation insights and WRI analysis
const marketIntroductions = {
  'Market 1': {
    title: "Market 1 Overview",
    introduction: `Market 1 represents a diverse market with varying levels of electric motorcycle adoption. The market shows significant variations in infrastructure development and adoption rates.

Key market characteristics:
- Diverse market conditions
- Varying levels of charging infrastructure
- Mixed government support and incentives
- Growing urban mobility needs
- Price sensitivity as a key factor
- Emerging focus on sustainability`,
    methodology: `This dashboard combines two complementary analytical approaches:

1. Conversation Analysis:
   - Monitors volume and sentiment of online discussions
   - Tracks share of voice across competitors
   - Analyzes key themes and consumer concerns
   - Identifies emerging trends and pain points

2. Weighted Resonance Index (WRI):
   - Evaluates 16 key market attributes
   - Weights importance across sales data, social discussions, consumer reviews, and expert analysis
   - Provides quantitative measure of attribute significance
   - Identifies critical market drivers and barriers`
  },
  'Market 2': {
    title: "Market 2 Overview",
    introduction: `Market 2 demonstrates strong environmental consciousness and technological adoption. The market shows particular interest in all-weather capabilities and practical usage considerations.

Key market characteristics:
- Strong environmental focus
- Advanced charging infrastructure
- Significant government incentives
- Weather adaptation requirements
- High technological adoption rate
- Seasonal usage patterns`,
    methodology: `This dashboard combines two complementary analytical approaches:

1. Conversation Analysis:
   - Monitors volume and sentiment of online discussions
   - Tracks share of voice across competitors
   - Analyzes key themes and consumer concerns
   - Identifies emerging trends and pain points

2. Weighted Resonance Index (WRI):
   - Evaluates 16 key market attributes
   - Weights importance across sales data, social discussions, consumer reviews, and expert analysis
   - Provides quantitative measure of attribute significance
   - Identifies critical market drivers and barriers`
  }
};

// Helper function to get market introduction data
export const getMarketIntroduction = (market) => {
  return marketIntroductions[market] || {
    title: "Market Overview Not Available",
    introduction: "Market-specific data not available.",
    methodology: "Analysis methodology not available for this market."
  };
}; 