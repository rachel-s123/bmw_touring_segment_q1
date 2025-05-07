import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const trendData = [
  {
    month: 'Jan',
    marketShare: 2.8,
    salesVolume: 450,
    customerInterest: 65
  },
  {
    month: 'Feb',
    marketShare: 3.2,
    salesVolume: 520,
    customerInterest: 72
  },
  {
    month: 'Mar',
    marketShare: 3.9,
    salesVolume: 610,
    customerInterest: 85
  }
];

const MarketTrends = () => {
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Q1 Market Trends
      </Typography>
      <Box sx={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <LineChart
            data={trendData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="marketShare"
              name="Market Share (%)"
              stroke="#1c69d4"
              strokeWidth={2}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="salesVolume"
              name="Sales Volume"
              stroke="#48b83c"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="customerInterest"
              name="Customer Interest Index"
              stroke="#ff9d00"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default MarketTrends; 