import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { 
  Container, 
  CssBaseline, 
  Typography, 
  Box, 
  Paper,
  Tabs,
  Tab
} from '@mui/material';
import theme from './theme';
import './styles/fonts.css';
import DashboardIntro from './components/DashboardIntro';
import AttributeHeatmap from './components/AttributeHeatmap';
import MarketSelector from './components/MarketSelector';
import ConversationInsights from './components/ConversationInsights';
import CompetitorAnalysis from './components/CompetitorAnalysis';
import ExecutiveSummary from './components/ExecutiveSummary';
import MarketWRIScoreCards from './components/MarketWRIScoreCards';
import WRIStrategicDirection from './components/WRIStrategicDirection';
import AttributeResonanceDefinition from './components/AttributeResonanceDefinition';
import MarketRecommendations from './components/MarketRecommendations';
import bmwLogo from './assets/bmw-black.jpg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function App() {
  const [selectedMarket, setSelectedMarket] = useState('Switzerland');
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between', 
          alignItems: 'center',
          mb: 4,
          gap: 2
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 3,
            mb: { xs: 2, md: 0 }
          }}>
            <img 
              src={bmwLogo} 
              alt="BMW Motorrad Logo" 
              style={{ 
                height: '40px',
                width: 'auto',
                objectFit: 'contain'
              }} 
            />
            <Box>
              <Typography 
                variant="h4" 
                component="h1" 
                sx={{ 
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                  fontWeight: 700,
                  color: 'primary.main',
                  fontFamily: 'BMW Motorrad',
                  letterSpacing: '-0.02em',
                  mb: 0.5
                }}
              >
                Electric Segment Insights
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  color: 'text.secondary',
                  fontFamily: 'BMW Motorrad',
                  fontWeight: 400
                }}
              >
                Q1 2025 V2 Region Analysis
              </Typography>
            </Box>
          </Box>
          <MarketSelector selectedMarket={selectedMarket} onMarketChange={setSelectedMarket} />
        </Box>

        <Paper sx={{ mb: 3 }}>
          <Tabs 
            value={currentTab} 
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              '& .MuiTab-root': {
                fontSize: '0.9rem',
                minHeight: 48,
                fontFamily: 'BMW Motorrad',
                textTransform: 'none',
                fontWeight: 500,
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: 'primary.main',
                  fontWeight: 700
                }
              }
            }}
          >
            <Tab label="Market Overview" />
            <Tab label="Executive Summary" />
            <Tab label="Attribute Resonance" />
            <Tab label="Market Insights" />
            <Tab label="Competitor Analysis" />
            <Tab label="Recommendations" />
          </Tabs>
        </Paper>

        <TabPanel value={currentTab} index={0}>
          <DashboardIntro selectedMarket={selectedMarket} />
        </TabPanel>

        <TabPanel value={currentTab} index={1}>
          <ExecutiveSummary selectedMarket={selectedMarket} />
        </TabPanel>

        <TabPanel value={currentTab} index={2}>
          <AttributeResonanceDefinition selectedMarket={selectedMarket} />
          <Box sx={{ mt: 4 }}>
            <MarketWRIScoreCards selectedMarket={selectedMarket} />
          </Box>
          <Box sx={{ mt: 4 }}>
            <AttributeHeatmap selectedMarket={selectedMarket} />
          </Box>
          <Box sx={{ mt: 4 }}>
            <WRIStrategicDirection selectedMarket={selectedMarket} />
          </Box>
        </TabPanel>

        <TabPanel value={currentTab} index={3}>
          <ConversationInsights selectedMarket={selectedMarket} />
        </TabPanel>

        <TabPanel value={currentTab} index={4}>
          <CompetitorAnalysis selectedMarket={selectedMarket} />
        </TabPanel>

        <TabPanel value={currentTab} index={5}>
          <MarketRecommendations selectedMarket={selectedMarket} />
        </TabPanel>
      </Container>
    </ThemeProvider>
  );
}

export default App; 