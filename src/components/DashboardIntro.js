import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';
import { getMarketIntroduction } from '../data/marketIntroductions';

const SectionPreview = ({ title, description }) => (
  <Box sx={{ mb: 3 }}>
    <Typography 
      variant="h6" 
      sx={{ 
        fontSize: '1.1rem',
        fontWeight: 500,
        mb: 1
      }}
    >
      {title}
    </Typography>
    <Typography 
      variant="body1" 
      sx={{ 
        color: 'text.secondary',
        fontSize: '0.95rem',
        lineHeight: 1.6
      }}
    >
      {description}
    </Typography>
  </Box>
);

const DashboardIntro = ({ selectedMarket }) => {
  const marketData = getMarketIntroduction(selectedMarket);

  return (
    <Paper sx={{ p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontSize: '1.5rem',
            fontWeight: 500,
            mb: 2 
          }}
        >
          {marketData.title}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 3,
            fontSize: '1rem',
            lineHeight: 1.6,
            whiteSpace: 'pre-line'
          }}
        >
          {marketData.introduction}
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontSize: '1.1rem',
            fontWeight: 500,
            mb: 2 
          }}
        >
          Data Sources & Methodology
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'text.secondary',
            fontSize: '0.95rem',
            lineHeight: 1.6,
            whiteSpace: 'pre-line'
          }}
        >
          {marketData.methodology}
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontSize: '1.1rem',
            fontWeight: 500,
            mb: 3 
          }}
        >
          Dashboard Sections
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <SectionPreview
              title="Market Analysis"
              description="Market-specific insights on electric motorcycle segment dynamics, including CE 04 performance, CE 02 potential, and competitive landscape analysis."
            />
            <SectionPreview
              title="Market Score Cards"
              description="Quantitative analysis of key performance indicators, showing how different attributes resonate compared to regional averages."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SectionPreview
              title="Strategic Recommendations"
              description="Market-specific strategic guidance based on competitive analysis and local market dynamics, with focus on both CE 04 and CE 02 positioning."
            />
            <SectionPreview
              title="Attribute Resonance"
              description="Heat map visualization of how different product attributes and features resonate across markets, informing product strategy and marketing focus."
            />
          </Grid>
        </Grid>
      </Box>

      <Typography 
        variant="body1" 
        sx={{ 
          color: 'text.secondary',
          fontSize: '0.95rem',
          lineHeight: 1.6
        }}
      >
        This analysis serves as a strategic tool for understanding market dynamics, competitive positioning, and growth opportunities 
        in the electric motorcycle segment for {selectedMarket}. Key focus areas include market reception of the CE 04, 
        potential for the CE 02, and competitive differentiation in this specific market context.
      </Typography>
    </Paper>
  );
};

export default DashboardIntro; 