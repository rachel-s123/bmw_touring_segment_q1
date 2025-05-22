import React, { useState } from 'react';
import { Paper, Typography, Grid, Box, Tabs, Tab, Card, CardContent, Divider, Link } from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InsightsIcon from '@mui/icons-material/Insights';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GroupsIcon from '@mui/icons-material/Groups';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InfoIcon from '@mui/icons-material/Info';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { getMarketIntroduction } from '../data/marketIntroductions';
import { marketSources } from '../data/marketSources';

const TabPanel = ({ children, value, index }) => (
  <Box hidden={value !== index} sx={{ pt: 3 }}>
    {value === index && children}
  </Box>
);

const sectionData = [
  {
    title: 'Executive Summary',
    description: "High-level overview of market performance, key trends, and strategic implications for BMW's electric motorcycle segment.",
    icon: <AssessmentIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />,
  },
  {
    title: 'Attribute Resonance',
    description: 'Detailed analysis of how different product attributes and features resonate with consumers, helping inform product strategy and marketing focus.',
    icon: <InsightsIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />,
  },
  {
    title: 'Market Insights',
    description: 'In-depth analysis of market dynamics, consumer behavior, and competitive landscape specific to each market.',
    icon: <ShowChartIcon sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />,
  },
  {
    title: 'Competitor Analysis',
    description: "Comprehensive evaluation of competitor positioning, market share, and strategic implications for BMW's electric motorcycle portfolio.",
    icon: <GroupsIcon sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />,
  },
];

const methodologyData = [
  {
    title: 'Conversation Analysis',
    description: 'Monitors volume and sentiment of online discussions, tracks share of voice across competitors, analyzes key themes and consumer concerns, and identifies emerging trends and pain points.',
    icon: <AnalyticsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />,
  },
  {
    title: 'Weighted Resonance Index',
    description: 'Evaluates 16 key market attributes, weights importance across sales data, social discussions, consumer reviews, and expert analysis, provides quantitative measure of attribute significance, and identifies critical market drivers and barriers.',
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />,
  }
];

const scopeData = [
  {
    title: 'Dashboard Scope',
    description: 'This dashboard provides comprehensive insights into the entire electric motorcycle segment, not just BMW brands. All attribute scores and sentiment analysis are derived from conversations and data across the entire segment, offering a holistic view of market dynamics and consumer preferences.',
    icon: <InfoIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />,
  }
];

const usageData = [
  {
    title: 'Strategic Applications',
    description: 'The insights provided in this dashboard can be leveraged to support key business decisions including: targeting specific consumer segments, developing effective messaging strategies, refining market positioning, and making informed strategic decisions about product development and market entry.',
    icon: <LightbulbIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />,
  }
];

const SourceItem = ({ source }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
      {source.name}
      {source.type && (
        <Typography component="span" variant="caption" sx={{ ml: 1, color: 'text.secondary' }}>
          ({source.type})
        </Typography>
      )}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {source.description}
    </Typography>
  </Box>
);

const SourceSection = ({ title, sources }) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" sx={{ mb: 2, fontSize: '1.1rem' }}>
      {title}
    </Typography>
    {sources.map((source, index) => (
      <SourceItem key={index} source={source} />
    ))}
  </Box>
);

const DashboardIntro = ({ selectedMarket }) => {
  const [tabValue, setTabValue] = useState(0);
  const marketData = getMarketIntroduction(selectedMarket);
  // Get sources for the selected market (case-insensitive match)
  const marketKey = Object.keys(marketSources).find(
    key => key.toLowerCase() === (selectedMarket || '').toLowerCase()
  );
  const sources = marketKey ? marketSources[marketKey].sources : [];

  // Group sources by type
  const sourcesByType = sources.reduce((acc, src) => {
    const type = src.type || 'Other';
    if (!acc[type]) acc[type] = [];
    acc[type].push(src);
    return acc;
  }, {});

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Paper sx={{ p: 4, background: '#f8fafc' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Understanding the Data" />
          <Tab label="Data Sources" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={3}>
            {scopeData.map((scope, idx) => (
              <Grid item xs={12} md={6} key={scope.title}>
                <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {scope.icon}
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, mt: 1, textAlign: 'center' }}>
                      {scope.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                      {scope.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            {usageData.map((usage, idx) => (
              <Grid item xs={12} md={6} key={usage.title}>
                <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {usage.icon}
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, mt: 1, textAlign: 'center' }}>
                      {usage.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                      {usage.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider sx={{ my: 4 }} />
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
          <Grid container spacing={3}>
            {sectionData.map((section, idx) => (
              <Grid item xs={12} sm={6} md={3} key={section.title}>
                <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {section.icon}
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, mt: 1, textAlign: 'center' }}>
                      {section.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                      {section.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider sx={{ my: 4 }} />
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontSize: '1.1rem',
              fontWeight: 500,
              mb: 3 
            }}
          >
            Methodology
          </Typography>
          <Grid container spacing={3}>
            {methodologyData.map((method, idx) => (
              <Grid item xs={12} md={6} key={method.title}>
                <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {method.icon}
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, mt: 1, textAlign: 'center' }}>
                      {method.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                      {method.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        {selectedMarket && sources.length > 0 ? (
          <Box>
            {Object.entries(sourcesByType).map(([type, typeSources]) => (
              <SourceSection 
                key={type}
                title={type}
                sources={typeSources}
              />
            ))}
          </Box>
        ) : (
          <Typography color="text.secondary">
            Please select a market to view its data sources.
          </Typography>
        )}
      </TabPanel>
    </Paper>
  );
};

export default DashboardIntro; 