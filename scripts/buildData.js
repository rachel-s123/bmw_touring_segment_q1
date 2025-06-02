const fs = require('fs');
const path = require('path');

const wriDir = path.join(__dirname, '..', 'full-wri-reports');
const convDir = path.join(__dirname, '..', 'full-conversation-insights reports');
const outDir = path.join(__dirname, '..', 'src', 'generated');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function toTitleCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function parseWriReports() {
  const files = fs.readdirSync(wriDir).filter(f => f.endsWith('.md'));
  const markets = [];
  const attributesSet = new Set();
  const scores = {};

  for (const file of files) {
    const market = toTitleCase(file.split('-')[0]);
    markets.push(market);
    const content = fs.readFileSync(path.join(wriDir, file), 'utf8');
    const section = content.split('## WRI Scores')[1];
    if (!section) continue;
    const lines = section.split('\n');
    for (const line of lines) {
      if (!line.trim().startsWith('|')) continue;
      const cols = line.split('|').map(c => c.trim()).filter(Boolean);
      if (cols[0] === 'Attribute' || cols[0].startsWith(':') || cols.length < 6) continue;
      const attribute = cols[0];
      const valueStr = cols[cols.length - 1].replace(/\*\*/g, '');
      const value = parseFloat(valueStr);
      attributesSet.add(attribute);
      if (!scores[attribute]) scores[attribute] = {};
      scores[attribute][market] = value;
    }
  }

  return {
    markets,
    attributes: Array.from(attributesSet),
    scores
  };
}

function parseConversationReports() {
  const files = fs.readdirSync(convDir).filter(f => f.endsWith('.md'));
  const marketData = {};

  for (const file of files) {
    const market = toTitleCase(file.split('-')[0]);
    const content = fs.readFileSync(path.join(convDir, file), 'utf8');

    const sentimentMatch = content.match(/Sentiment Distribution:[^\n]*Positive[^0-9]*(\d+)[^\n]*Neutral[^0-9]*(\d+)[^\n]*Negative[^0-9]*(\d+)/i);
    const topicMatch = content.match(/Topic Prevalence:[^\n]*Performance[^0-9]*~?(\d+)[^\n]*Design\/Style[^0-9]*~?(\d+)[^\n]*Range\/Charging[^0-9]*~?(\d+)[^\n]*Price\/Cost[^0-9]*~?(\d+)/i);

    const sentimentData = sentimentMatch ? [
      { name: 'Positive', value: Number(sentimentMatch[1]) },
      { name: 'Neutral', value: Number(sentimentMatch[2]) },
      { name: 'Negative', value: Number(sentimentMatch[3]) }
    ] : [];

    const themeData = topicMatch ? [
      { subject: 'Performance', value: Number(topicMatch[1]) },
      { subject: 'Design', value: Number(topicMatch[2]) },
      { subject: 'Range', value: Number(topicMatch[3]) },
      { subject: 'Price', value: Number(topicMatch[4]) },
      { subject: 'Charging', value: Number(topicMatch[3]) }
    ] : [];

    const insightsSection = content.split('Quarterly Insights & Trends')[1] || '';
    const insightLines = [];
    insightsSection.split('\n').forEach(line => {
      const match = line.match(/^\*\s+(.*)/);
      if (match) {
        insightLines.push(match[1].trim());
      }
    });

    marketData[market] = {
      sentimentData,
      themeData,
      insights: insightLines
    };
  }

  return marketData;
}

function main() {
  const wriData = parseWriReports();
  fs.writeFileSync(path.join(outDir, 'wriData.json'), JSON.stringify(wriData, null, 2));

  const convData = parseConversationReports();
  fs.writeFileSync(path.join(outDir, 'conversationData.json'), JSON.stringify(convData, null, 2));

  console.log('Generated data files in', outDir);
}

main();
