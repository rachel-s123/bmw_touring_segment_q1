import React from 'react';
import { 
  Box, 
  Typography, 
  Grid,
  Card,
  CardContent,
  useTheme,
  Tooltip,
  Divider,
  Alert
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';
import RecommendIcon from '@mui/icons-material/Recommend';
import { executiveSummaries } from '../data/executiveSummaries';

const AccentBar = ({ color }) => (
  <Box sx={{ height: 6, width: '100%', bgcolor: color, borderRadius: 2, mb: 2 }} />
);

const InsightCard = ({ title, icon: Icon, color, summaryPoints }) => {
  const theme = useTheme();
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 3, p: 0, background: theme.palette.background.paper }}>
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: 3 }}>
        <AccentBar color={color} />
        <Box display="flex" alignItems="center" mb={1}>
          <Icon sx={{ mr: 1, color: color, fontSize: 36 }} />
          <Typography variant="h6" fontWeight={700} color={color}>
            {title}
          </Typography>
        </Box>
        <ul style={{ margin: 0, paddingLeft: 20, marginBottom: 0 }}>
          {summaryPoints && summaryPoints.length > 0 ? summaryPoints.map((point, idx) => (
            <li key={idx} style={{ marginBottom: 6, fontSize: 16 }}>{point}</li>
          )) : <li>No data available.</li>}
        </ul>
      </CardContent>
    </Card>
  );
};

const ExecutiveSummary = ({ selectedMarket }) => {
  const theme = useTheme();
  const normalizedMarket = selectedMarket?.toLowerCase();
  const summary = normalizedMarket && executiveSummaries[normalizedMarket];

  if (!normalizedMarket || !summary) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="info">Please select a market to view executive summary.</Alert>
      </Box>
    );
  }

  const cardColors = [theme.palette.primary.main, theme.palette.info.main, theme.palette.success.main];

  return (
    <Box sx={{ p: { xs: 1, md: 4 }, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h3" fontWeight={800} gutterBottom color="primary.main" sx={{ letterSpacing: -1 }}>
        Executive Summary
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 5, fontSize: 18 }}>
        Comprehensive market analysis and strategic insights for {selectedMarket}
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12} md={4}>
          <InsightCard
            title="Attribute Resonance"
            icon={TrendingUpIcon}
            color={cardColors[0]}
            summaryPoints={summary.attributeResonance}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InsightCard
            title="Market Insights"
            icon={BarChartIcon}
            color={cardColors[1]}
            summaryPoints={summary.marketInsights}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InsightCard
            title="Competitor Analysis"
            icon={GroupsIcon}
            color={cardColors[2]}
            summaryPoints={summary.competitorAnalysis}
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }}>
        <Card sx={{ boxShadow: 3, borderRadius: 3, p: 0, background: theme.palette.background.paper }}>
          <CardContent sx={{ p: 3 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <RecommendIcon sx={{ mr: 1, color: theme.palette.secondary.main, fontSize: 36 }} />
              <Typography variant="h6" fontWeight={700} color={theme.palette.secondary.main}>
                Strategic Recommendations
              </Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li><strong>Strategic Positioning:</strong> {summary.strategicPositioning || 'N/A'}</li>
              <li><strong>Content & Messaging:</strong> {summary.contentMessaging || 'N/A'}</li>
              <li><strong>Audience Targeting:</strong> {summary.audienceTargeting || 'N/A'}</li>
              <li><strong>Key Opportunity:</strong> {summary.keyOpportunity || 'N/A'}</li>
            </ul>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ExecutiveSummary; 