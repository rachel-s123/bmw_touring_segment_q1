const fs = require('fs');
const path = require('path');

// Directories
const marketMdDir = path.join(__dirname, '../reports/wri');
const outputDir = path.join(__dirname, '../src/data');

// Helper: Parse attribute scores and insights from a market markdown file
function parseMarketMarkdown(mdPath) {
  const content = fs.readFileSync(mdPath, 'utf8');
  const lines = content.split('\n');
  const marketMatch = content.match(/^# WRI Report: (.+)$/m);
  const market = marketMatch ? marketMatch[1].trim() : path.basename(mdPath, '.md');
  
  // Parse scores
  const scores = {};
  let inScores = false;
  let inRecommendations = false;
  const recommendations = [];
  let currentSection = '';
  
  for (const line of lines) {
    // Parse scores
    if (line.trim().startsWith('### Attribute Scores')) {
      inScores = true;
      continue;
    }
    if (inScores) {
      if (!line.trim() || line.startsWith('#') || line.startsWith('---') || line.startsWith('##')) {
        inScores = false;
      } else {
        const match = line.match(/^([\w .&\-()]+):\s*([\d.]+)$/);
        if (match) {
          scores[match[1].trim()] = parseFloat(match[2]);
        }
      }
    }
    
    // Parse recommendations
    if (line.trim().startsWith('### Strategic Recommendations')) {
      inRecommendations = true;
      continue;
    }
    if (inRecommendations) {
      if (!line.trim() || line.startsWith('#') || line.startsWith('---') || line.startsWith('##')) {
        inRecommendations = false;
      } else {
        if (line.trim().startsWith('Short Term:') || line.trim().startsWith('Long Term:') || line.trim().startsWith('Priorities:')) {
          currentSection = line.trim().replace(':', '');
        } else if (line.trim().startsWith('-')) {
          recommendations.push({
            title: currentSection,
            details: line.trim().substring(1).trim()
          });
        }
      }
    }
  }
  
  return { market, scores, recommendations };
}

// Main function to process all markets
function processMarkets() {
  const files = fs.readdirSync(marketMdDir).filter(f => f.endsWith('.md'));
  const marketData = {
    markets: [],
    attributes: new Set(),
    scores: {},
    deviations: {},
    insights: {}
  };
  
  // First pass: collect all data
  const marketScores = {};
  files.forEach(file => {
    const { market, scores, recommendations } = parseMarketMarkdown(path.join(marketMdDir, file));
    marketData.markets.push(market);
    marketScores[market.toLowerCase()] = scores;
    marketData.insights[market.toLowerCase()] = recommendations;
    
    // Collect all attributes
    Object.keys(scores).forEach(attr => marketData.attributes.add(attr));
  });
  
  // Convert attributes Set to Array
  marketData.attributes = Array.from(marketData.attributes).sort();
  
  // Calculate mean scores and deviations
  const meanScores = {};
  marketData.attributes.forEach(attr => {
    const scores = Object.values(marketScores).map(market => market[attr]).filter(score => score !== undefined);
    meanScores[attr] = scores.reduce((a, b) => a + b, 0) / scores.length;
  });
  
  // Build scores and deviations objects
  marketData.attributes.forEach(attr => {
    marketData.scores[attr] = {};
    marketData.deviations[attr] = {};
    
    marketData.markets.forEach(market => {
      const marketKey = market.toLowerCase();
      const score = marketScores[marketKey]?.[attr] || 0;
      marketData.scores[attr][marketKey] = score;
      marketData.deviations[attr][marketKey] = score - meanScores[attr];
    });
  });
  
  return marketData;
}

// Generate output files
function generateOutputFiles(data) {
  // Generate wriData.js
  const wriDataContent = `// Generated WRI data
export const marketData = ${JSON.stringify(data, null, 2)};
`;
  fs.writeFileSync(path.join(outputDir, 'wriData.js'), wriDataContent);
  
  // Generate wriInsights.js
  const insightsContent = `// Generated WRI insights
export const marketInsights = ${JSON.stringify(data.insights, null, 2)};
`;
  fs.writeFileSync(path.join(outputDir, 'wriInsights.js'), insightsContent);
  
  console.log('Generated WRI data files in', outputDir);
}

// Main execution
function main() {
  console.log('Processing WRI data...');
  const data = processMarkets();
  generateOutputFiles(data);
}

main();
