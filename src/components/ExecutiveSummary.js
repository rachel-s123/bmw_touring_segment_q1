import React from 'react';
import { 
  Box, 
  Typography, 
  Grid,
  Card,
  CardContent,
  useTheme,
  Tooltip,
  Divider
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';
import RecommendIcon from '@mui/icons-material/Recommend';
import { marketInsights } from '../data/marketInsights';

const AccentBar = ({ color }) => (
  <Box sx={{ height: 6, width: '100%', bgcolor: color, borderRadius: 2, mb: 2 }} />
);

const InsightCard = ({ title, icon: Icon, color, summaryPoints, tooltipDetails }) => {
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
          {summaryPoints.map((point, idx) => (
            <li key={idx} style={{ marginBottom: 6, fontSize: 16 }}>
              {tooltipDetails && tooltipDetails[idx] ? (
                <Tooltip title={tooltipDetails[idx]} arrow placement="right">
                  <span>{point}</span>
                </Tooltip>
              ) : point}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ExecutiveSummary = ({ selectedMarket }) => {
  const theme = useTheme();
  const normalizeMarketKey = (market) => {
    if (!market) return null;
    if (market === 'Central & Southern Europe' || market === 'CS') {
      return 'csRegion';
    }
    return market.toLowerCase().replace(/\s+/g, '');
  };

  const normalizedMarket = normalizeMarketKey(selectedMarket);
  
  if (!normalizedMarket || !marketInsights[normalizedMarket]) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">Please select a market to view insights.</Typography>
      </Box>
    );
  }

  // AI-generated summaries for all markets (concise, 3 points max per card)
  const aiSummaries = {
    France: {
      attributeResonance: [
        "Battery range & cost are top concerns (WRI: 95.0)",
        "Urban mobility is the primary use case (WRI: 91.5)",
        "Charging infrastructure is a key barrier (WRI: 88.5)"
      ],
      attributeResonanceDetails: [
        "Range and cost are the most critical technical attributes for French buyers.",
        "Urban mobility defines the core successful use case and value proposition.",
        "Perceived inadequacy of charging infrastructure impacts purchase decisions."
      ],
      marketInsights: [
        "Range, affordability, and charging are top barriers.",
        "Urban mobility leads the segment.",
        "BMW's brand reputation is strong."
      ],
      marketInsightsDetails: [
        "Range, affordability, and charging infrastructure are the top barriers to adoption.",
        "CE 04/02 leads the urban mobility segment.",
        "BMW's engineering heritage is a market asset."
      ],
      competitorAnalysis: [
        "BMW and Zero dominate share of voice.",
        "Zero is the benchmark for performance.",
        "Other brands have niche appeal."
      ],
      competitorAnalysisDetails: [
        "BMW leads in urban mobility discussions.",
        "Zero is seen as the benchmark for performance and range.",
        "Energica and LiveWire have niche appeal." 
      ]
    },
    Switzerland: {
      attributeResonance: [
        "Range anxiety & cost are main barriers (WRI: 95.0/91.0)",
        "Performance is highly praised (WRI: 88.5)",
        "Charging network is dense but car-focused (WRI: 88.5)"
      ],
      attributeResonanceDetails: [
        "Real-world range and cost are critical concerns.",
        "Instant torque and smooth acceleration drive enthusiast interest.",
        "First bike-specific station in Bevaix is a positive step."
      ],
      marketInsights: [
        "Range anxiety, charging, and cost are main barriers.",
        "Performance and urban mobility are key positives.",
        "BMW and Zero dominate market share."
      ],
      marketInsightsDetails: [
        "Lack of national incentives impacts adoption.",
        "Performance and urban mobility drive interest.",
        "BMW and Zero have ~90% share of voice." 
      ],
      competitorAnalysis: [
        "BMW and Zero are market leaders.",
        "BMW's brand trust is a key advantage.",
        "Zero praised for performance and community."
      ],
      competitorAnalysisDetails: [
        "BMW's after-sales support is a differentiator.",
        "Zero is praised for performance and engagement.",
        "Other brands have niche presence." 
      ]
    },
    CS: {
      attributeResonance: [
        "Range & price are top concerns (WRI: 95.0)",
        "Urban use is the main use-case (WRI: 91.5)",
        "Performance exceeds expectations (WRI: 88.0)"
      ],
      attributeResonanceDetails: [
        "Range and price are the most prominent concerns, especially for touring and cold weather.",
        "Urban use is the defining use-case, especially in congested cities.",
        "Instant torque and acceleration are strong positives." 
      ],
      marketInsights: [
        "High price sensitivity slows adoption.",
        "Urban commuting is the main use case.",
        "BMW dominates share of voice."
      ],
      marketInsightsDetails: [
        "Limited incentives slow adoption.",
        "Performance is a strong positive.",
        "Zero is the main competitor." 
      ],
      competitorAnalysis: [
        "BMW and Zero are main players.",
        "BMW's brand trust is a key advantage.",
        "Energica and LiveWire are niche brands."
      ],
      competitorAnalysisDetails: [
        "BMW's urban focus is a key advantage.",
        "Zero is the main competitor.",
        "Other brands have niche presence." 
      ]
    },
    Portugal: {
      attributeResonance: [
        "Range anxiety & price are top concerns (WRI: 95.0/93.0)",
        "Incentives are critical (WRI: 87.0)",
        "Performance is a strong draw (WRI: 83.0)"
      ],
      attributeResonanceDetails: [
        "Range anxiety and real-world range dominate discussions.",
        "Incentives are critical for market viability.",
        "Instant torque and acceleration are strong draws." 
      ],
      marketInsights: [
        "Extreme price sensitivity.",
        "Range and infrastructure are critical barriers.",
        "BMW and Zero lead discussions."
      ],
      marketInsightsDetails: [
        "Reliance on government incentives.",
        "Performance and brand trust are positives.",
        "Market is nascent but growing." 
      ],
      competitorAnalysis: [
        "Zero is the benchmark competitor.",
        "BMW is a trusted brand.",
        "LiveWire and Energica are niche."
      ],
      competitorAnalysisDetails: [
        "Zero is seen as the benchmark.",
        "BMW is trusted for reliability.",
        "Other brands have niche appeal." 
      ]
    },
    Belgium: {
      attributeResonance: [
        "Battery range & affordability are top concerns (WRI: 92.0/91.0)",
        "Performance & urban practicality drive interest.",
        "Charging infrastructure is a barrier."
      ],
      attributeResonanceDetails: [
        "Battery range and affordability are the top concerns.",
        "Performance appeal and urban practicality drive interest.",
        "Charging infrastructure and service network concerns impact adoption." 
      ],
      marketInsights: [
        "Urban mobility dominates the market.",
        "Performance, brand, and practicality are key drivers.",
        "Range anxiety and high costs are barriers."
      ],
      marketInsightsDetails: [
        "Urban commuting is the main use case.",
        "BMW's dealer network is a strength.",
        "Zero leads market discussions." 
      ],
      competitorAnalysis: [
        "Zero leads market discussions.",
        "BMW is gaining ground with urban focus.",
        "Limited model ranges and premium pricing are weaknesses."
      ],
      competitorAnalysisDetails: [
        "Zero has strong performance reputation.",
        "BMW's brand trust is a strength.",
        "Other brands have niche presence." 
      ]
    },
    Nordics: {
      attributeResonance: [
        "Range anxiety is dominant (WRI: 95.0)",
        "High price is a barrier (WRI: 91.5)",
        "Performance is praised (WRI: 82.5)"
      ],
      attributeResonanceDetails: [
        "Long distances and winter conditions amplify range anxiety.",
        "High purchase price is a major barrier.",
        "Instant torque and acceleration are praised." 
      ],
      marketInsights: [
        "Range, cost, and charging are top concerns.",
        "Performance is a key positive.",
        "BMW and Zero dominate share of voice."
      ],
      marketInsightsDetails: [
        "Policy support is lacking.",
        "Market remains niche.",
        "BMW's brand trust is a key advantage." 
      ],
      competitorAnalysis: [
        "BMW and Zero are main players.",
        "BMW's brand trust is a key advantage.",
        "Service network is a vulnerability for niche brands."
      ],
      competitorAnalysisDetails: [
        "BMW and Zero dominate share of voice.",
        "Service network is a vulnerability for niche brands.",
        "Other brands have niche presence." 
      ]
    },
    Spain: {
      attributeResonance: [
        "Range & cost are top concerns (WRI: 95.0)",
        "Performance is a key positive (WRI: 88.0)",
        "Urban mobility defines the segment (WRI: 86.5)"
      ],
      attributeResonanceDetails: [
        "Range and cost dictate usability and market appeal.",
        "Performance generates excitement.",
        "Urban mobility is the key use case." 
      ],
      marketInsights: [
        "Range, cost, and charging are top barriers.",
        "Incentive sensitivity is high.",
        "Urban mobility is the key use case."
      ],
      marketInsightsDetails: [
        "Plan MOVES significantly impacts sales.",
        "Reliability and service are crucial.",
        "BMW's network is a strength." 
      ],
      competitorAnalysis: [
        "Zero and BMW lead discussions.",
        "BMW's brand trust is an advantage.",
        "Energica and LiveWire are niche."
      ],
      competitorAnalysisDetails: [
        "Zero is the benchmark for performance.",
        "BMW's service network is a key advantage.",
        "Other brands have niche appeal." 
      ]
    },
    UK: {
      attributeResonance: [
        "Range & cost are top concerns (WRI: 95.0)",
        "Charging is a major hurdle (WRI: 88.5)",
        "Performance generates excitement (WRI: 88.5)"
      ],
      attributeResonanceDetails: [
        "Range dictates usability and limits market appeal.",
        "Charging limitations are a major hurdle.",
        "Performance showcases EV capabilities." 
      ],
      marketInsights: [
        "Range, cost, and charging are top barriers.",
        "Performance is a major draw.",
        "BMW's brand heritage is an advantage."
      ],
      marketInsightsDetails: [
        "Urban commuting is the main use case.",
        "Lack of incentives amplifies cost barriers.",
        "BMW's support network is a key advantage." 
      ],
      competitorAnalysis: [
        "BMW and Zero are main players.",
        "BMW's brand trust is a differentiator.",
        "LiveWire and Energica are niche brands."
      ],
      competitorAnalysisDetails: [
        "BMW's after-sales support is a differentiator.",
        "Zero is a main competitor.",
        "Other brands have niche presence." 
      ]
    },
    Italy: {
      attributeResonance: [
        "Affordability & performance are top concerns (WRI: 95.0/93.0)",
        "Range is a major concern (WRI: 93.0)",
        "Urban mobility & design are highly valued (WRI: 91.5)"
      ],
      attributeResonanceDetails: [
        "Affordability is the most critical factor despite TCO benefits.",
        "Range limitations are a major concern.",
        "Urban mobility and design innovation are highly valued." 
      ],
      marketInsights: [
        "Affordability, performance, and range are top concerns.",
        "Urban mobility and design innovation are valued.",
        "BMW's brand heritage is strong."
      ],
      marketInsightsDetails: [
        "Minimal cultural resistance to EVs.",
        "BMW's reliability is a market asset.",
        "Market is pragmatic and performance-driven." 
      ],
      competitorAnalysis: [
        "Energica leads discussions.",
        "BMW's brand trust is an advantage.",
        "Performance and innovation are differentiators."
      ],
      competitorAnalysisDetails: [
        "Zero and BMW follow Energica in share of voice.",
        "BMW's dealer network is a key advantage.",
        "Other brands have niche appeal." 
      ]
    },
    Netherlands: {
      attributeResonance: [
        "Battery range & cost are top concerns (WRI: 95.0)",
        "BPM tax removal is a major negative (WRI: 92.0)",
        "Performance is a key positive (WRI: 83.5)"
      ],
      attributeResonanceDetails: [
        "Range defines usability limits and influences purchase decisions.",
        "The removal of the BPM tax exemption significantly increases costs.",
        "Strong acceleration drives enthusiast interest."
      ],
      marketInsights: [
        "BPM tax in 2025 will increase costs.",
        "Range anxiety & charging are key barriers.",
        "BMW's brand trust is a competitive advantage."
      ],
      marketInsightsDetails: [
        "The BPM tax is the defining market factor for 2025.",
        "Convenience and infrastructure are fundamental challenges.",
        "Reliability and trust are valued by Dutch buyers."
      ],
      competitorAnalysis: [
        "Zero & Energica dominate conversations.",
        "BMW has strong brand trust.",
        "Performance & reliability are key differentiators."
      ],
      competitorAnalysisDetails: [
        "Zero and Energica have higher share-of-voice.",
        "BMW is trusted despite lower share-of-voice.",
        "Performance and reliability set brands apart."
      ]
    }
  };

  // Fallback for markets not yet summarized concisely
  const fallbackSummary = {
    attributeResonance: ["See detailed report for key attribute resonance."],
    attributeResonanceDetails: ["No summary available."],
    marketInsights: ["See detailed report for market insights."],
    marketInsightsDetails: ["No summary available."],
    competitorAnalysis: ["See detailed report for competitor analysis."],
    competitorAnalysisDetails: ["No summary available."]
  };

  const summary = aiSummaries[selectedMarket] || fallbackSummary;

  const cardColors = [theme.palette.primary.main, theme.palette.info.main, theme.palette.success.main, theme.palette.secondary.main];

  const getStrategicRecommendations = () => {
    if (!selectedMarket) return null;
    const recommendations = {
      France: {
        strategicPositioning: "Premium urban mobility solution leader, leveraging CE 04/02 success in city environments",
        contentMessaging: "Emphasize real-world range capabilities and charging solutions",
        audienceTargeting: "Urban professionals seeking practical daily transportation",
        opportunities: "Expand charging infrastructure partnerships in urban areas"
      },
      Switzerland: {
        strategicPositioning: "Premium urban mobility solution with 'ausgezeichnet für die Stadt' performance",
        contentMessaging: "Emphasize the 'ausgezeichnet für die Stadt' urban performance",
        audienceTargeting: "Urban professionals seeking practical daily transportation",
        opportunities: "Develop urban-focused marketing campaigns"
      },
      CS: {
        strategicPositioning: "Innovative urban mobility leader with 'remarkable efficiency around town'",
        contentMessaging: "Emphasize the 'Fast!... user-friendly' performance and efficiency",
        audienceTargeting: "Urban commuters seeking efficient and user-friendly transportation",
        opportunities: "Develop educational content addressing 'battery nonsense' skepticism"
      },
      Portugal: {
        strategicPositioning: "Urban mobility leader with 'excelente para cidade' performance",
        contentMessaging: "Emphasize the 'excelente para cidade' urban performance",
        audienceTargeting: "Urban professionals seeking practical daily transportation",
        opportunities: "Develop urban-focused marketing campaigns"
      },
      Belgium: {
        strategicPositioning: "Premium electric mobility solution with zen-like riding experience",
        contentMessaging: "Emphasize the 'zen-like' riding experience and emotional benefits",
        audienceTargeting: "Business professionals seeking practical company vehicles",
        opportunities: "Develop corporate mobility programs targeting the 'Company motor ipv car' trend"
      },
      Nordics: {
        strategicPositioning: "Performance leader with 'deceptively quick acceleration without any drama'",
        contentMessaging: "Emphasize the 'quick and very smooth' performance characteristics",
        audienceTargeting: "Daily commuters who value reliability and cost savings",
        opportunities: "Develop comprehensive dealer support programs"
      },
      Spain: {
        strategicPositioning: "Urban mobility innovator with 'excelente para ciudad' performance",
        contentMessaging: "Emphasize the 'excelente para ciudad' urban performance",
        audienceTargeting: "Urban professionals seeking practical daily transportation",
        opportunities: "Develop urban-focused marketing campaigns"
      },
      UK: {
        strategicPositioning: "Premium urban mobility solution with 'excellent for city' performance",
        contentMessaging: "Emphasize the 'excellent for city' urban performance",
        audienceTargeting: "Urban professionals seeking practical daily transportation",
        opportunities: "Develop urban-focused marketing campaigns"
      },
      Italy: {
        strategicPositioning: "Urban mobility revolution leader with 'Moto che in città è la svolta totale'",
        contentMessaging: "Emphasize the total urban revolution in terms of 'consumi, divertimento e comfort'",
        audienceTargeting: "Urban professionals seeking a total mobility solution",
        opportunities: "Develop urban-focused marketing campaigns highlighting the 'svolta totale'"
      },
      Netherlands: {
        strategicPositioning: "Performance leader with 'trekken ongelooflijk hard' acceleration",
        contentMessaging: "Address the 'actieradius' (range) as the primary concern",
        audienceTargeting: "Performance-oriented riders who value acceleration",
        opportunities: "Develop educational content addressing the 'actieradius' concerns"
      }
    };
    const marketRecs = recommendations[selectedMarket];
    if (!marketRecs) return null;
    return (
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
              <li><strong>Strategic Positioning:</strong> {marketRecs.strategicPositioning}</li>
              <li><strong>Content & Messaging:</strong> {marketRecs.contentMessaging}</li>
              <li><strong>Audience Targeting:</strong> {marketRecs.audienceTargeting}</li>
              <li><strong>Key Opportunity:</strong> {marketRecs.opportunities}</li>
            </ul>
          </CardContent>
        </Card>
      </Box>
    );
  };

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
            tooltipDetails={summary.attributeResonanceDetails}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InsightCard
            title="Market Insights"
            icon={BarChartIcon}
            color={cardColors[1]}
            summaryPoints={summary.marketInsights}
            tooltipDetails={summary.marketInsightsDetails}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InsightCard
            title="Competitor Analysis"
            icon={GroupsIcon}
            color={cardColors[2]}
            summaryPoints={summary.competitorAnalysis}
            tooltipDetails={summary.competitorAnalysisDetails}
          />
        </Grid>
      </Grid>
      {getStrategicRecommendations()}
    </Box>
  );
};

export default ExecutiveSummary; 