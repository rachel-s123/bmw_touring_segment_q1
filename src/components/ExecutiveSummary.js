import React from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Grid, 
  Divider,
  Card,
  CardContent,
  useTheme
} from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import TopicIcon from '@mui/icons-material/Topic';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import RecommendIcon from '@mui/icons-material/Recommend';
import { marketInsights } from '../data/marketInsights';
import { getAttributeInsights } from '../data/wriInsights';

const InsightCard = ({ title, content, icon: Icon }) => {
  const theme = useTheme();
  
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Icon sx={{ 
            mr: 1, 
            color: theme.palette.primary.main,
            fontSize: 28 
          }} />
          <Typography variant="h6" className="bmw-motorrad-bold">
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" className="bmw-motorrad-regular">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ExecutiveSummary = ({ selectedMarket }) => {
  const normalizeMarketKey = (market) => {
    if (!market) return null;
    if (market === 'Central & Southern Europe' || market === 'CS') {
      return 'csRegion';
    }
    // Convert to lowercase and remove spaces
    const normalized = market.toLowerCase().replace(/\s+/g, '');
    // Handle special cases
    if (normalized === 'switzerland') return 'switzerland';
    return normalized;
  };

  const getMarketDisplayName = (market) => {
    if (market === 'csRegion') {
      return 'Central & Southern Europe';
    }
    // Capitalize first letter of each word
    return market.split(/(?=[A-Z])/).join(' ').replace(/\b\w/g, c => c.toUpperCase());
  };

  const normalizedMarket = normalizeMarketKey(selectedMarket);
  
  if (!normalizedMarket || !marketInsights[normalizedMarket]) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">Please select a market to view insights.</Typography>
      </Box>
    );
  }

  const market = marketInsights[normalizedMarket];

  const getKeyTopics = () => {
    const topics = [];
    
    // Get topics from market_position or topics
    if (market.topics) {
      Object.entries(market.topics).forEach(([key, value]) => {
        topics.push(`${key.replace(/_/g, ' ')}: ${value.sentiment}`);
      });
    }
    
    // Add performance if available
    if (market.performance?.sentiment) {
      topics.push(`performance: ${market.performance.sentiment}`);
    }

    return topics.slice(0, 3).join('; ');
  };

  const getAttributeResonance = () => {
    if (!selectedMarket) {
      return "Please select a market to view attribute resonance.";
    }

    try {
      // Get the market's key drivers from wriInsights
      const marketData = marketInsights[selectedMarket];
      if (!marketData || !marketData.keyDrivers || !marketData.keyDrivers.high) {
        return "No attribute resonance data available for this market.";
      }

      // Get top 3 high key drivers
      const top3Drivers = marketData.keyDrivers.high.slice(0, 3);
      
      // Format the output
      const formattedDrivers = top3Drivers.map(driver => ({
        attribute: driver.attribute,
        score: driver.score,
        insight: driver.insight
      }));

      // Return formatted string with the top 3 drivers
      return formattedDrivers.map(driver => 
        `${driver.attribute} (${driver.score}): ${driver.insight}`
      ).join('\n\n');

    } catch (error) {
      console.error('Error getting attribute resonance:', error);
      return "Error retrieving attribute resonance data.";
    }
  };

  const insights = {
    conversationSentiment: {
      title: "Conversation Sentiment",
      content: `${market.sentiment.overall}. Positives: ${market.sentiment.positives[0]}. Negatives: ${market.sentiment.negatives[0]}`,
      icon: SentimentSatisfiedAltIcon
    },
    keyTopics: {
      title: "Key Topics",
      content: getKeyTopics(),
      icon: TopicIcon
    },
    attributeResonance: {
      title: "Attribute Resonance",
      content: getAttributeResonance(),
      icon: TrendingUpIcon
    },
    marketDynamics: {
      title: "Market Dynamics",
      content: market.marketPosition?.overview || market.topics?.market_position?.key_points?.[0] || 'Market dynamics data not available',
      icon: BarChartIcon
    }
  };

  const getMarketSpecificRecommendations = () => {
    const recommendations = [];
    
    // Add core recommendations based on available data
    if (market.sentiment?.positives?.[0]) {
      recommendations.push({
        title: "Leverage Strengths",
        details: market.sentiment.positives[0]
      });
    }

    if (market.sentiment?.negatives?.[0]) {
      recommendations.push({
        title: "Address Core Barriers",
        details: market.sentiment.negatives[0]
      });
    }

    if (market.marketPosition?.overview || market.topics?.market_position?.key_points?.[0]) {
      recommendations.push({
        title: "Market Development",
        details: market.marketPosition?.overview || market.topics?.market_position?.key_points?.[0]
      });
    }

    // If no recommendations were generated, provide defaults
    if (recommendations.length === 0) {
      return [{
        title: "Market Analysis Required",
        details: "Detailed market data not available. Further analysis recommended."
      }];
    }

    return recommendations;
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        className="bmw-motorrad-bold"
        sx={{ mb: 4 }}
      >
        {getMarketDisplayName(normalizedMarket)} Market Summary
      </Typography>
      
      <Grid container spacing={3}>
        {Object.entries(insights).map(([key, insight]) => (
          <Grid item xs={12} md={6} key={key}>
            <InsightCard 
              title={insight.title} 
              content={insight.content}
              icon={insight.icon}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography 
          variant="h5" 
          gutterBottom 
          className="bmw-motorrad-bold"
        >
          Recommendations
        </Typography>
        <Paper sx={{ p: 3, mt: 2 }}>
          {getMarketSpecificRecommendations().map((rec, index) => (
            <React.Fragment key={index}>
              <Typography variant="body1" paragraph className="bmw-motorrad-regular">
                {index + 1}. {rec.title}: {rec.details}
              </Typography>
              {index < getMarketSpecificRecommendations().length - 1 && <Divider sx={{ my: 1 }} />}
            </React.Fragment>
          ))}
        </Paper>
      </Box>
    </Box>
  );
};

export default ExecutiveSummary; 