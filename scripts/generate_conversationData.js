const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../reports/market_analysis');
const outputFile = path.join(__dirname, '../src/data/conversationData.js');

function parseThemeData(content) {
  const themeDataMatch = content.match(/## Theme Data\n([\s\S]*?)(?=##|$)/);
  if (!themeDataMatch) return [];

  const themeLines = themeDataMatch[1].split('\n')
    .filter(line => line.trim().startsWith('-'))
    .map(line => {
      const match = line.match(/- (.*?): (\d+)/);
      if (match) {
        return {
          subject: match[1].trim(),
          value: parseInt(match[2], 10)
        };
      }
      return null;
    })
    .filter(item => item !== null);

  return themeLines;
}

function parseThemeInsights(content) {
  const themeInsightsMatch = content.match(/## Theme Insights\n([\s\S]*?)(?=#|$)/);
  if (!themeInsightsMatch) return {};

  const insights = {};
  const themeBlocks = themeInsightsMatch[1].split('\n- **').filter(block => block.trim());

  themeBlocks.forEach(block => {
    const lines = block.split('\n');
    const theme = lines[0].replace(/\*\*/g, '').trim();
    const quote = lines.find(line => line.includes('Quote:'))?.split('Quote:')[1].trim().replace(/"/g, '');
    const explanation = lines.find(line => line.includes('Explanation:'))?.split('Explanation:')[1].trim();
    const source = lines.find(line => line.includes('Source:'))?.split('Source:')[1].trim();

    if (theme && quote && explanation && source) {
      if (!insights[theme]) {
        insights[theme] = [];
      }
      insights[theme].push({
        quote,
        context: explanation,
        source
      });
    }
  });

  return insights;
}

function parseSentimentData(content) {
  const sentimentDataMatch = content.match(/## Sentiment Data\n([\s\S]*?)(?=##|$)/);
  if (!sentimentDataMatch) return [];

  const sentimentLines = sentimentDataMatch[1].split('\n')
    .filter(line => line.trim().startsWith('-'))
    .map(line => {
      const match = line.match(/- (.*?): (\d+)/);
      if (match) {
        return {
          name: match[1].trim(),
          value: parseInt(match[2], 10)
        };
      }
      return null;
    })
    .filter(item => item !== null);

  return sentimentLines;
}

function parseSentimentInsights(content) {
  const sentimentSection = content.split('# Sentiment Analysis')[1];
  if (!sentimentSection) return {};

  const insightsSection = sentimentSection.split('## Sentiment Insights')[1];
  if (!insightsSection) return {};

  const insights = {
    Positive: [],
    Neutral: [],
    Negative: []
  };

  const sections = insightsSection.split('###').filter(section => section.trim());

  sections.forEach(section => {
    const lines = section.split('\n').map(line => line.trim()).filter(line => line);
    const sentiment = lines[0].replace('Sentiment', '').trim();

    if (insights[sentiment]) {
      const quote = lines.find(line => line.includes('Quote:'))?.split('Quote:')[1].trim().replace(/"/g, '');
      const explanation = lines.find(line => line.includes('Explanation:'))?.split('Explanation:')[1].trim();
      const source = lines.find(line => line.includes('Source:'))?.split('Source:')[1].trim();

      if (quote && explanation && source) {
        insights[sentiment].push({
          quote,
          context: explanation,
          source
        });
      }
    }
  });

  return insights;
}

function parseMarketReport(markdownContent) {
  const themeData = parseThemeData(markdownContent);
  const themeInsights = parseThemeInsights(markdownContent);
  const sentimentData = parseSentimentData(markdownContent);
  const sentimentInsights = parseSentimentInsights(markdownContent);

  return {
    themeData,
    themeInsights,
    sentimentData,
    sentimentInsights
  };
}

function main() {
  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.md'));
  const out = {};

  files.forEach(file => {
    const market = path.basename(file, '.md').toLowerCase();
    const mdContent = fs.readFileSync(path.join(inputDir, file), 'utf8');
    const data = parseMarketReport(mdContent);
    out[market] = data;
  });

  const js = `// This file is auto-generated. Do not edit directly.
// Run 'npm run generate-conversation-data' to update.

export const conversationData = ${JSON.stringify(out, null, 2)};\n`;

  fs.writeFileSync(outputFile, js);
  console.log('Generated conversation data file:', outputFile);
}

main(); 