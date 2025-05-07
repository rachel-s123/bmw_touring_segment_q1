import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { marketData } from '../data/marketData';

const TopAttributes = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Top Resonating Attributes
      </Typography>
      <List>
        {marketData.topResonance.map((item, index) => (
          <ListItem key={index} sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                {item.attribute}
              </Typography>
              <Typography variant="subtitle1" component="div">
                {item.score.toFixed(1)}
              </Typography>
            </Box>
            <ListItemText
              secondary={item.reasoning}
              sx={{ mt: 0 }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TopAttributes; 