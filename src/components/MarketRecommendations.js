import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  useTheme
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CampaignIcon from '@mui/icons-material/Campaign';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const RecommendationCard = ({ title, content, icon: Icon }) => {
  const theme = useTheme();
  
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Icon sx={{ 
            mr: 1, 
            color: theme.palette.primary.main,
            fontSize: 28 
          }} />
          <Typography variant="h6" className="bmw-motorrad-bold">
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" className="bmw-motorrad-regular">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

const MarketRecommendations = ({ selectedMarket }) => {
  const recommendations = {
    France: {
      strategicPositioning: (
        <>
          <p>Based on comprehensive market analysis, BMW should position itself as:</p>
          <ul>
            <li>The premium urban mobility solution leader, leveraging the success of CE 04/02 and its strong performance in city environments</li>
            <li>A trusted brand with proven engineering heritage in electric mobility, addressing the "Harley without noise" concern through innovative design</li>
            <li>The practical choice for daily commuting with reliable performance, as evidenced by positive user feedback about urban usability</li>
            <li>A pioneer in addressing range anxiety through transparent real-world range communication and charging solutions</li>
          </ul>
        </>
      ),
      contentMessaging: (
        <>
          <p>Key messaging priorities based on conversation analysis and attribute resonance:</p>
          <ul>
            <li>Emphasize real-world range capabilities and charging solutions, addressing the "autonomie bien trop faible" concern</li>
            <li>Highlight total cost of ownership benefits to offset high upfront costs, especially after the 2024 eco-bonus removal</li>
            <li>Showcase urban mobility advantages with specific focus on the "super pour la ville" user experience</li>
            <li>Leverage BMW's engineering heritage while embracing the electric future, addressing the emotional connection to traditional motorcycling</li>
            <li>Communicate the "délirant par rapport aux prestations offertes" value proposition through clear feature-to-benefit messaging</li>
          </ul>
        </>
      ),
      audienceTargeting: (
        <>
          <p>Focus on these key segments based on conversation insights and attribute analysis:</p>
          <ul>
            <li>Urban professionals seeking practical daily transportation, particularly those impressed by the "vachement facile à conduire" experience</li>
            <li>Tech-savvy early adopters who value innovation and are open to the futuristic design language</li>
            <li>Existing BMW customers looking to transition to electric, leveraging brand trust and heritage</li>
            <li>Price-conscious consumers who understand TCO benefits, especially after the eco-bonus removal</li>
            <li>Urban commuters who value the "super pour la ville" practicality and performance</li>
          </ul>
        </>
      ),
      opportunities: (
        <>
          <p>Key opportunities identified through comprehensive market analysis:</p>
          <ul>
            <li>Expand charging infrastructure partnerships in urban areas, addressing the critical range anxiety concern</li>
            <li>Develop more affordable entry-level models to address price sensitivity after eco-bonus removal</li>
            <li>Create educational content about range management and charging, leveraging positive user experiences</li>
            <li>Leverage BMW's strong dealer network for test rides and demonstrations, particularly for urban mobility use cases</li>
            <li>Develop targeted marketing campaigns addressing the emotional transition from traditional to electric motorcycles</li>
            <li>Partner with urban mobility solutions providers to create integrated transportation ecosystems</li>
          </ul>
        </>
      )
    },
    Belgium: {
      strategicPositioning: (
        <>
          <p>Based on comprehensive market analysis, BMW should position itself as:</p>
          <ul>
            <li>The premium electric mobility solution with a zen-like riding experience, as highlighted by user feedback</li>
            <li>A practical business mobility solution, leveraging the "Company motor ipv car" trend</li>
            <li>A reliable and well-supported brand in the electric motorcycle segment</li>
            <li>A design leader that turns heads and creates excitement at every stoplight</li>
          </ul>
        </>
      ),
      contentMessaging: (
        <>
          <p>Key messaging priorities based on conversation analysis and attribute resonance:</p>
          <ul>
            <li>Emphasize the "zen-like" riding experience and emotional benefits of electric mobility</li>
            <li>Highlight the practical advantages of charging infrastructure ("chargers at every 50 km")</li>
            <li>Showcase the business case for electric motorcycles as company vehicles</li>
            <li>Address reliability concerns through strong after-sales support messaging</li>
            <li>Leverage the positive design reception ("turns heads at every stoplight")</li>
          </ul>
        </>
      ),
      audienceTargeting: (
        <>
          <p>Focus on these key segments based on conversation insights and attribute analysis:</p>
          <ul>
            <li>Business professionals seeking practical company vehicles</li>
            <li>Urban commuters who value the zen-like riding experience</li>
            <li>Design-conscious consumers who appreciate the attention-grabbing styling</li>
            <li>Early adopters who value innovation and sustainability</li>
            <li>Practical riders who appreciate the extensive charging infrastructure</li>
          </ul>
        </>
      ),
      opportunities: (
        <>
          <p>Key opportunities identified through comprehensive market analysis:</p>
          <ul>
            <li>Develop corporate mobility programs targeting the "Company motor ipv car" trend</li>
            <li>Expand the charging infrastructure network, building on the existing 50km coverage</li>
            <li>Create content highlighting the zen-like riding experience and emotional benefits</li>
            <li>Strengthen after-sales support to address reliability concerns</li>
            <li>Partner with businesses for fleet solutions and corporate mobility programs</li>
            <li>Develop marketing campaigns showcasing the design and attention-grabbing aspects</li>
          </ul>
        </>
      )
    },
    CS: {
      strategicPositioning: (
        <>
          <p>Based on comprehensive market analysis, BMW should position itself as:</p>
          <ul>
            <li>The innovative urban mobility leader with "remarkable efficiency around town"</li>
            <li>A futuristic design pioneer that looks "like it's from a sci-fi flick"</li>
            <li>A practical solution for urban commuting with "user-friendly" features</li>
            <li>A bridge between traditional motorcycle culture and the electric future</li>
          </ul>
        </>
      ),
      contentMessaging: (
        <>
          <p>Key messaging priorities based on conversation analysis and attribute resonance:</p>
          <ul>
            <li>Emphasize the "Fast!... user-friendly" performance and efficiency</li>
            <li>Address the "battery nonsense" skepticism through practical benefits</li>
            <li>Highlight the futuristic design appeal while maintaining connection to motorcycle heritage</li>
            <li>Communicate clear value proposition to address "break even" concerns</li>
            <li>Showcase the practical advantages of the charging infrastructure ("chargers at every 50 km")</li>
          </ul>
        </>
      ),
      audienceTargeting: (
        <>
          <p>Focus on these key segments based on conversation insights and attribute analysis:</p>
          <ul>
            <li>Urban commuters seeking efficient and user-friendly transportation</li>
            <li>Tech-savvy early adopters who appreciate futuristic design</li>
            <li>Practical riders who value efficiency and infrastructure support</li>
            <li>Value-conscious consumers who understand long-term cost benefits</li>
            <li>Traditional riders open to electric transition</li>
          </ul>
        </>
      ),
      opportunities: (
        <>
          <p>Key opportunities identified through comprehensive market analysis:</p>
          <ul>
            <li>Develop educational content addressing "battery nonsense" skepticism</li>
            <li>Create clear TCO calculators to demonstrate long-term value</li>
            <li>Expand charging infrastructure network across the region</li>
            <li>Develop marketing campaigns highlighting the futuristic design appeal</li>
            <li>Create content bridging traditional and electric motorcycle cultures</li>
            <li>Partner with urban mobility solutions providers for integrated transportation</li>
          </ul>
        </>
      )
    },
    Italy: {
      strategicPositioning: (
        <>
          <p>Based on comprehensive market analysis, BMW should position itself as:</p>
          <ul>
            <li>The urban mobility revolution leader with "Moto che in città è la svolta totale"</li>
            <li>A bold design innovator that creates strong emotional reactions ("O lo si ama o lo si odia")</li>
            <li>A pioneer in the "cambiamento epocale" (epochal change) of motorcycling</li>
            <li>A premium brand that delivers on performance, comfort, and efficiency</li>
          </ul>
        </>
      ),
      contentMessaging: (
        <>
          <p>Key messaging priorities based on conversation analysis and attribute resonance:</p>
          <ul>
            <li>Emphasize the total urban revolution in terms of "consumi, divertimento e comfort"</li>
            <li>Address the "15.000 EURO DI SCOOTER" price concern with clear value proposition</li>
            <li>Highlight the "addio benzina" transition as a positive evolution</li>
            <li>Communicate the "sci-fi flick" design as a bold statement of innovation</li>
            <li>Address range concerns ("L'unico neo al momento è l'autonomia") with practical solutions</li>
          </ul>
        </>
      ),
      audienceTargeting: (
        <>
          <p>Focus on these key segments based on conversation insights and attribute analysis:</p>
          <ul>
            <li>Urban professionals seeking a total mobility solution</li>
            <li>Design-conscious consumers who appreciate bold innovation</li>
            <li>Early adopters ready for the "cambiamento epocale"</li>
            <li>Performance-oriented riders who value efficiency</li>
            <li>Premium segment consumers who understand the value proposition</li>
          </ul>
        </>
      ),
      opportunities: (
        <>
          <p>Key opportunities identified through comprehensive market analysis:</p>
          <ul>
            <li>Develop urban-focused marketing campaigns highlighting the "svolta totale"</li>
            <li>Create content showcasing the design evolution and emotional appeal</li>
            <li>Implement clear pricing strategies to address the "15.000 EURO" perception</li>
            <li>Expand charging infrastructure to address range concerns</li>
            <li>Develop educational content about the transition to electric mobility</li>
            <li>Partner with urban mobility solutions for integrated transportation</li>
          </ul>
        </>
      )
    },
    Netherlands: {
      strategicPositioning: (
        <>
          <p>Based on comprehensive market analysis, BMW should position itself as:</p>
          <ul>
            <li>The performance leader with "trekken ongelooflijk hard" acceleration</li>
            <li>A forward-thinking brand that acknowledges "de markt is er nog niet klaar voor"</li>
            <li>A premium electric mobility solution despite "bpm-vrijstelling" changes</li>
            <li>A design innovator that creates strong reactions ("Ook niet vreemd met zoiets")</li>
          </ul>
        </>
      ),
      contentMessaging: (
        <>
          <p>Key messaging priorities based on conversation analysis and attribute resonance:</p>
          <ul>
            <li>Address the "actieradius" (range) as the primary concern with practical solutions</li>
            <li>Highlight the impressive performance with "trekken ongelooflijk hard" messaging</li>
            <li>Communicate value proposition in light of "bpm-vrijstelling" tax changes</li>
            <li>Address the "mark is er nog niet klaar voor" sentiment with educational content</li>
            <li>Leverage the design controversy to create engagement and discussion</li>
          </ul>
        </>
      ),
      audienceTargeting: (
        <>
          <p>Focus on these key segments based on conversation insights and attribute analysis:</p>
          <ul>
            <li>Performance-oriented riders who value "trekken ongelooflijk hard" acceleration</li>
            <li>Early adopters ready for the electric transition</li>
            <li>Premium segment consumers who understand the value despite tax changes</li>
            <li>Urban commuters who can benefit from the performance advantages</li>
            <li>Design-conscious consumers who appreciate innovation</li>
          </ul>
        </>
      ),
      opportunities: (
        <>
          <p>Key opportunities identified through comprehensive market analysis:</p>
          <ul>
            <li>Develop educational content addressing the "actieradius" concerns</li>
            <li>Create performance-focused marketing campaigns</li>
            <li>Implement clear pricing strategies to address post-tax changes</li>
            <li>Develop content addressing the "market readiness" concerns</li>
            <li>Create design-focused campaigns that embrace the controversy</li>
            <li>Partner with urban mobility solutions for integrated transportation</li>
          </ul>
        </>
      )
    },
    Nordics: {
      strategicPositioning: (
        <>
          <p>Based on comprehensive market analysis, BMW should position itself as:</p>
          <ul>
            <li>The performance leader with "deceptively quick acceleration without any drama"</li>
            <li>A practical daily rider solution ("I ride mine every day")</li>
            <li>A cost-effective mobility option with significant savings ("Saves me $200 a month")</li>
            <li>A premium brand with strong dealer support and reliability</li>
          </ul>
        </>
      ),
      contentMessaging: (
        <>
          <p>Key messaging priorities based on conversation analysis and attribute resonance:</p>
          <ul>
            <li>Emphasize the "quick and very smooth" performance characteristics</li>
            <li>Highlight the practical daily usability and reliability</li>
            <li>Communicate clear cost savings and TCO benefits</li>
            <li>Address dealer support and after-sales service concerns</li>
            <li>Provide clear guidance on battery care and charging practices</li>
          </ul>
        </>
      ),
      audienceTargeting: (
        <>
          <p>Focus on these key segments based on conversation insights and attribute analysis:</p>
          <ul>
            <li>Daily commuters who value reliability and cost savings</li>
            <li>Performance-oriented riders who appreciate smooth acceleration</li>
            <li>Practical riders who prioritize dealer support</li>
            <li>Cost-conscious consumers who understand TCO benefits</li>
            <li>Tech-savvy users who value proper battery management</li>
          </ul>
        </>
      ),
      opportunities: (
        <>
          <p>Key opportunities identified through comprehensive market analysis:</p>
          <ul>
            <li>Develop comprehensive dealer support programs</li>
            <li>Create educational content about battery care and charging</li>
            <li>Implement clear TCO calculators highlighting monthly savings</li>
            <li>Develop reliability-focused marketing campaigns</li>
            <li>Create content showcasing daily usability and practicality</li>
            <li>Partner with charging infrastructure providers for better coverage</li>
          </ul>
        </>
      )
    },
    Portugal: {
      strategicPositioning: (
        <>
          <p>Based on comprehensive market analysis, BMW should position itself as:</p>
          <ul>
            <li>The urban mobility leader with "excelente para cidade" performance</li>
            <li>A practical daily solution with "muito confortável" riding experience</li>
            <li>A premium brand that delivers on both performance and comfort</li>
            <li>A pioneer in sustainable urban transportation</li>
          </ul>
        </>
      ),
      contentMessaging: (
        <>
          <p>Key messaging priorities based on conversation analysis and attribute resonance:</p>
          <ul>
            <li>Emphasize the "excelente para cidade" urban performance</li>
            <li>Highlight the "muito confortável" riding experience</li>
            <li>Communicate the value proposition of premium urban mobility</li>
            <li>Address charging infrastructure and range concerns</li>
            <li>Showcase the practical benefits of daily urban commuting</li>
          </ul>
        </>
      ),
      audienceTargeting: (
        <>
          <p>Focus on these key segments based on conversation insights and attribute analysis:</p>
          <ul>
            <li>Urban professionals seeking practical daily transportation</li>
            <li>Comfort-focused riders who value "muito confortável" experience</li>
            <li>Premium segment consumers who appreciate quality</li>
            <li>Urban commuters who need reliable city transportation</li>
            <li>Sustainability-conscious consumers</li>
          </ul>
        </>
      ),
      opportunities: (
        <>
          <p>Key opportunities identified through comprehensive market analysis:</p>
          <ul>
            <li>Develop urban-focused marketing campaigns</li>
            <li>Create content highlighting comfort and practicality</li>
            <li>Expand charging infrastructure in urban areas</li>
            <li>Develop educational content about urban mobility benefits</li>
            <li>Partner with urban mobility solutions providers</li>
            <li>Create premium brand experiences showcasing comfort and performance</li>
          </ul>
        </>
      )
    },
    Spain: {
      strategicPositioning: (
        <>
          <p>Based on comprehensive market analysis, BMW should position itself as:</p>
          <ul>
            <li>The urban mobility innovator with "excelente para ciudad" performance</li>
            <li>A practical solution for daily commuting with "muy cómodo" riding experience</li>
            <li>A premium brand that combines performance with sustainability</li>
            <li>A leader in the transition to electric mobility</li>
          </ul>
        </>
      ),
      contentMessaging: (
        <>
          <p>Key messaging priorities based on conversation analysis and attribute resonance:</p>
          <ul>
            <li>Emphasize the "excelente para ciudad" urban performance</li>
            <li>Highlight the "muy cómodo" riding experience</li>
            <li>Communicate the value proposition of premium urban mobility</li>
            <li>Address charging infrastructure and range concerns</li>
            <li>Showcase the practical benefits of daily urban commuting</li>
          </ul>
        </>
      ),
      audienceTargeting: (
        <>
          <p>Focus on these key segments based on conversation insights and attribute analysis:</p>
          <ul>
            <li>Urban professionals seeking practical daily transportation</li>
            <li>Comfort-focused riders who value "muy cómodo" experience</li>
            <li>Premium segment consumers who appreciate quality</li>
            <li>Urban commuters who need reliable city transportation</li>
            <li>Sustainability-conscious consumers</li>
          </ul>
        </>
      ),
      opportunities: (
        <>
          <p>Key opportunities identified through comprehensive market analysis:</p>
          <ul>
            <li>Develop urban-focused marketing campaigns</li>
            <li>Create content highlighting comfort and practicality</li>
            <li>Expand charging infrastructure in urban areas</li>
            <li>Develop educational content about urban mobility benefits</li>
            <li>Partner with urban mobility solutions providers</li>
            <li>Create premium brand experiences showcasing comfort and performance</li>
          </ul>
        </>
      )
    },
    Switzerland: {
      strategicPositioning: (
        <>
          <p>Based on comprehensive market analysis, BMW should position itself as:</p>
          <ul>
            <li>The premium urban mobility solution with "ausgezeichnet für die Stadt" performance</li>
            <li>A practical daily rider with "sehr komfortabel" riding experience</li>
            <li>A sustainable transportation option for environmentally conscious consumers</li>
            <li>A premium brand that delivers on both performance and comfort</li>
          </ul>
        </>
      ),
      contentMessaging: (
        <>
          <p>Key messaging priorities based on conversation analysis and attribute resonance:</p>
          <ul>
            <li>Emphasize the "ausgezeichnet für die Stadt" urban performance</li>
            <li>Highlight the "sehr komfortabel" riding experience</li>
            <li>Communicate the value proposition of premium urban mobility</li>
            <li>Address charging infrastructure and range concerns</li>
            <li>Showcase the practical benefits of daily urban commuting</li>
          </ul>
        </>
      ),
      audienceTargeting: (
        <>
          <p>Focus on these key segments based on conversation insights and attribute analysis:</p>
          <ul>
            <li>Urban professionals seeking practical daily transportation</li>
            <li>Comfort-focused riders who value "sehr komfortabel" experience</li>
            <li>Premium segment consumers who appreciate quality</li>
            <li>Urban commuters who need reliable city transportation</li>
            <li>Sustainability-conscious consumers</li>
          </ul>
        </>
      ),
      opportunities: (
        <>
          <p>Key opportunities identified through comprehensive market analysis:</p>
          <ul>
            <li>Develop urban-focused marketing campaigns</li>
            <li>Create content highlighting comfort and practicality</li>
            <li>Expand charging infrastructure in urban areas</li>
            <li>Develop educational content about urban mobility benefits</li>
            <li>Partner with urban mobility solutions providers</li>
            <li>Create premium brand experiences showcasing comfort and performance</li>
          </ul>
        </>
      )
    },
    UK: {
      strategicPositioning: (
        <>
          <p>Based on comprehensive market analysis, BMW should position itself as:</p>
          <ul>
            <li>The premium urban mobility solution with "excellent for city" performance</li>
            <li>A practical daily rider with "very comfortable" riding experience</li>
            <li>A sustainable transportation option for environmentally conscious consumers</li>
            <li>A premium brand that delivers on both performance and comfort</li>
          </ul>
        </>
      ),
      contentMessaging: (
        <>
          <p>Key messaging priorities based on conversation analysis and attribute resonance:</p>
          <ul>
            <li>Emphasize the "excellent for city" urban performance</li>
            <li>Highlight the "very comfortable" riding experience</li>
            <li>Communicate the value proposition of premium urban mobility</li>
            <li>Address charging infrastructure and range concerns</li>
            <li>Showcase the practical benefits of daily urban commuting</li>
          </ul>
        </>
      ),
      audienceTargeting: (
        <>
          <p>Focus on these key segments based on conversation insights and attribute analysis:</p>
          <ul>
            <li>Urban professionals seeking practical daily transportation</li>
            <li>Comfort-focused riders who value "very comfortable" experience</li>
            <li>Premium segment consumers who appreciate quality</li>
            <li>Urban commuters who need reliable city transportation</li>
            <li>Sustainability-conscious consumers</li>
          </ul>
        </>
      ),
      opportunities: (
        <>
          <p>Key opportunities identified through comprehensive market analysis:</p>
          <ul>
            <li>Develop urban-focused marketing campaigns</li>
            <li>Create content highlighting comfort and practicality</li>
            <li>Expand charging infrastructure in urban areas</li>
            <li>Develop educational content about urban mobility benefits</li>
            <li>Partner with urban mobility solutions providers</li>
            <li>Create premium brand experiences showcasing comfort and performance</li>
          </ul>
        </>
      )
    }
  };

  if (!selectedMarket || !recommendations[selectedMarket]) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">Please select a market to view recommendations.</Typography>
      </Box>
    );
  }

  const marketRecommendations = recommendations[selectedMarket];

  return (
    <Box sx={{ p: { xs: 1, md: 3 }, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" fontWeight={700} gutterBottom color="primary.main">
        Market Recommendations
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Strategic insights and recommendations for {selectedMarket} based on comprehensive market analysis.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <RecommendationCard
            title="Strategic Positioning"
            content={marketRecommendations.strategicPositioning}
            icon={TrendingUpIcon}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RecommendationCard
            title="Content & Messaging"
            content={marketRecommendations.contentMessaging}
            icon={CampaignIcon}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RecommendationCard
            title="Audience Targeting"
            content={marketRecommendations.audienceTargeting}
            icon={GroupsIcon}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RecommendationCard
            title="Opportunities"
            content={marketRecommendations.opportunities}
            icon={LightbulbIcon}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MarketRecommendations; 