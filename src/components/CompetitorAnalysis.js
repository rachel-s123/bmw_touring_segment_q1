import React from 'react';
import { Typography, Grid, Card, CardContent, Box, Divider, Paper, Tooltip as MuiTooltip, IconButton } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MessageIcon from '@mui/icons-material/Message';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { getCompetitorData } from '../data/competitorData';

const ICONS = [
  <TrendingUpIcon color="primary" />, // 0
  <LightbulbIcon color="primary" />, // 1
  <CampaignIcon color="primary" />, // 2
  <MessageIcon color="primary" />, // 3
];

// Custom color palette: BMW blue, others in greys
const SOV_COLORS = {
  'BMW Motorrad': '#0066B1',
  'Zero Motorcycles': '#757575',
  'Energica': '#B0B0B0',
  'LiveWire': '#D3D3D3',
  'CAKE': '#E0E0E0',
  'Others': '#F5F5F5'
};

const FRANCE_SOV_CONTEXT =
  'Share of Voice is based on the proportion of online conversations mentioning each brand in Q1 2025. BMW Motorrad led with 40-50% share, followed by Zero Motorcycles (25-30%), Energica and LiveWire (each ~10% or less).';

// Custom label for pie slices
const renderPieLabel = ({ cx, cy, midAngle, outerRadius, percent, name, value }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 24;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="#222"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontWeight="bold"
      fontSize={15}
      style={{ fontFamily: 'inherit' }}
    >
      {name}: {value}%
    </text>
  );
};

// Custom legend (vertical column)
const CustomLegend = ({ payload }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 2 }}>
    {payload.map((entry) => (
      <Box key={entry.value} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Box sx={{ width: 16, height: 16, borderRadius: '50%', background: entry.color, mr: 1 }} />
        <Typography variant="body2" fontWeight={entry.value === 'BMW Motorrad' ? 700 : 400} color={entry.value === 'BMW Motorrad' ? 'primary.main' : 'text.primary'}>
          {entry.value}
        </Typography>
      </Box>
    ))}
  </Box>
);

// Custom tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload;
    return (
      <Paper elevation={3} sx={{ p: 1.5 }}>
        <Typography variant="subtitle2" fontWeight={700}>{name}</Typography>
        <Typography variant="body2">{value}% of mentions</Typography>
      </Paper>
    );
  }
  return null;
};

const CompetitorAnalysis = ({ selectedMarket }) => {
  const data = getCompetitorData(selectedMarket);
  const isFrance = selectedMarket === 'France';
  const getCompetitorIcon = (idx) => ICONS[idx % ICONS.length];

  return (
    <Box sx={{ p: { xs: 1, md: 3 }, maxWidth: 1200, mx: 'auto' }}>
      <Paper elevation={2} sx={{ mb: 4, p: 3, background: '#f8fafc' }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="h5" fontWeight={700} color="primary.main" sx={{ mr: 1 }}>
            Share of Voice (Q1 2025)
          </Typography>
          {isFrance && (
            <MuiTooltip title={FRANCE_SOV_CONTEXT} arrow>
              <IconButton size="small" sx={{ color: 'primary.main' }}>
                <InfoOutlinedIcon fontSize="small" />
              </IconButton>
            </MuiTooltip>
          )}
        </Box>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {/* Pie Chart */}
          <Grid item xs={12} md={7}>
            <Box sx={{ width: '100%', maxWidth: 900, height: 325, mx: 'auto' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.shareOfVoice}
                    dataKey="value"
                    nameKey="name"
                    cx="55%"
                    cy="50%"
                    outerRadius={70}
                    label={renderPieLabel}
                    isAnimationActive={true}
                  >
                    {data.shareOfVoice.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={SOV_COLORS[entry.name] || '#B0B0B0'} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Grid>
          {/* Legend */}
          <Grid item xs={12} md={5}>
            <CustomLegend payload={data.shareOfVoice.map((entry) => ({ value: entry.name, color: SOV_COLORS[entry.name] || '#B0B0B0' }))} />
          </Grid>
        </Grid>
      </Paper>

      {/* Competitor cards */}
      <Typography variant="h4" fontWeight={700} gutterBottom color="primary.main">
        Competitor Analysis
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
        Key strengths, weaknesses, and opportunities for each major competitor in {selectedMarket}.
      </Typography>
      <Grid container spacing={3}>
        {Object.entries(data.competitorStrengths).map(([competitor, strengths], idx) => (
          <Grid item xs={12} md={6} key={competitor}>
            <Card elevation={2} sx={{ borderLeft: `6px solid ${competitor === 'BMW Motorrad' ? '#0066B1' : '#757575'}` }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <Box mr={1}>{getCompetitorIcon(idx)}</Box>
                  <Typography variant="h6" fontWeight={700} color={competitor === 'BMW Motorrad' ? '#0066B1' : 'text.primary'}>
                    {competitor}
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Box mb={2}>
                  <Typography variant="subtitle2" fontWeight={600} gutterBottom color="success.main" display="flex" alignItems="center">
                    <CheckCircleIcon fontSize="small" sx={{ mr: 1 }} />Strengths
                  </Typography>
                  {strengths.map((s, i) => (
                    <Typography key={i} variant="body2" sx={{ mb: 0.5, pl: 3 }}>
                      {s}
                    </Typography>
                  ))}
                </Box>
                {data.competitorWeaknesses[competitor] && data.competitorWeaknesses[competitor].length > 0 && (
                  <Box mb={2}>
                    <Typography variant="subtitle2" fontWeight={600} gutterBottom color="error.main" display="flex" alignItems="center">
                      <WarningIcon fontSize="small" sx={{ mr: 1 }} />Weaknesses
                    </Typography>
                    {data.competitorWeaknesses[competitor].map((w, i) => (
                      <Typography key={i} variant="body2" sx={{ mb: 0.5, pl: 3 }}>
                        {w}
                      </Typography>
                    ))}
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {data.gapsToExploit && data.gapsToExploit.length > 0 && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" fontWeight={700} gutterBottom color="primary.main">
            Market Opportunities
          </Typography>
          <Grid container spacing={3}>
            {data.gapsToExploit.map((gap, idx) => (
              <Grid item xs={12} md={6} key={gap.title}>
                <Card elevation={1} sx={{ borderLeft: '6px solid #1c69d4' }}>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={1}>
                      <LightbulbIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="subtitle1" fontWeight={600} color="primary.main">
                        {gap.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {gap.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default CompetitorAnalysis; 