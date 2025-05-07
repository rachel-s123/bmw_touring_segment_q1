import React from 'react';
import { Paper, Typography, Grid, Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { getCompetitorData, COMPETITOR_COLORS } from '../data/competitorData';

const CompetitorAnalysis = ({ selectedMarket }) => {
  const data = getCompetitorData(selectedMarket);

  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Competitor Analysis - {selectedMarket}
      </Typography>
      
      <Grid container spacing={4}>
        {/* Share of Voice Chart */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Share of Voice
          </Typography>
          <Box sx={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data.shareOfVoice}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={(entry) => `${entry.name}: ${entry.value}%`}
                >
                  {data.shareOfVoice.map((entry) => (
                    <Cell 
                      key={entry.name}
                      fill={COMPETITOR_COLORS[entry.name]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Grid>

        {/* Competitor Strengths */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Competitor Strengths
          </Typography>
          <List>
            {Object.entries(data.competitorStrengths).map(([competitor, strengths], index) => (
              <React.Fragment key={competitor}>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" sx={{ color: COMPETITOR_COLORS[competitor] }}>
                        {competitor}
                      </Typography>
                    }
                    secondary={
                      <List dense>
                        {strengths.map((strength, idx) => (
                          <ListItem key={idx}>
                            <ListItemText
                              primary={strength}
                              sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    }
                  />
                </ListItem>
                {index < Object.entries(data.competitorStrengths).length - 1 && (
                  <Divider variant="inset" component="li" />
                )}
              </React.Fragment>
            ))}
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CompetitorAnalysis; 