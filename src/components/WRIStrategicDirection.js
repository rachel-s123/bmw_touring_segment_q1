import React, { useMemo } from 'react';
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from '@mui/material';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import MessageIcon from '@mui/icons-material/Message';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WarningIcon from '@mui/icons-material/Warning';
import { marketInsights } from '../data/wriInsights';

const StrategyCard = ({ title, content, icon }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {icon}
        <Typography variant="h6" component="div" sx={{ ml: 1 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {content}
      </Typography>
    </CardContent>
  </Card>
);

const StrategicDirection = ({ selectedMarket }) => {
  const recommendations = useMemo(() => {
    const marketData = marketInsights[selectedMarket?.toLowerCase()];
    if (!marketData || !marketData.strategicRecommendations) {
      return [];
    }
    return marketData.strategicRecommendations;
  }, [selectedMarket]);

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Strategic Recommendations for {selectedMarket}
      </Typography>
      <Grid container spacing={3}>
        {recommendations.map((rec, index) => {
          let icon;
          switch (index) {
            case 0:
              icon = <GpsFixedIcon color="primary" />;
              break;
            case 1:
              icon = <MessageIcon color="primary" />;
              break;
            case 2:
              icon = <LightbulbIcon color="primary" />;
              break;
            case 3:
              icon = <WarningIcon color="primary" />;
              break;
            default:
              icon = <LightbulbIcon color="primary" />;
          }

          return (
            <Grid item xs={12} md={6} lg={3} key={rec.title}>
              <StrategyCard
                title={rec.title}
                content={rec.details}
                icon={icon}
              />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default StrategicDirection; 