import React, { useState, useEffect } from 'react';
import { Paper, Typography, Grid, Box, Card, CardContent, Divider, CircularProgress } from '@mui/material';
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

const ConversationInsights = ({ selectedMarket }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const marketData = getMarketData(selectedMarket);
    setData(marketData);
  }, [selectedMarket]);

  if (!data) {
    return null;
  }

  return (
    <Box>
      {/* Theme Data Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Theme Analysis
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={data.themeData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Theme" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            {Object.entries(data.themeInsights).map(([theme, insights]) => (
              <Card key={theme} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {theme}
                  </Typography>
                  {insights.map((insight, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                        "{insight.quote}"
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {insight.context}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Source: {insight.source}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Paper>

      {/* Sentiment Analysis Section */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Sentiment Analysis
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data.sentimentData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {data.sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={SENTIMENT_COLORS[entry.name.replace(' Sentiment', '')]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            {Object.entries(data.sentimentInsights).map(([sentiment, insights]) => (
              <Card key={sentiment} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {sentiment} Sentiment
                  </Typography>
                  {insights.map((insight, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                        "{insight.quote}"
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {insight.context}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Source: {insight.source}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ConversationInsights; 