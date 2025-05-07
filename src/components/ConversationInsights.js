import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { getMarketData } from '../data/conversationData';

const SENTIMENT_COLORS = {
  Positive: '#48b83c',
  Negative: '#e63329',
  Neutral: '#666666'
};

const ConversationInsights = ({ selectedMarket }) => {
  const { themeData, sentimentData, insights } = getMarketData(selectedMarket);

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

      <Grid container spacing={4}>
        {/* Theme Analysis */}
        <Grid item xs={12} md={6}>
          <Box sx={{ height: 400 }}>
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
        </Grid>

        {/* Sentiment Analysis */}
        <Grid item xs={12} md={6}>
          <Box sx={{ height: 400 }}>
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
        </Grid>

        {/* Key Insights */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Key Insights for {selectedMarket}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {insights?.map((insight, index) => (
              <Typography key={index} variant="body1">
                • {insight}
              </Typography>
            )) || (
              <Typography variant="body1">
                • Data analysis in progress for this market.
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ConversationInsights; 