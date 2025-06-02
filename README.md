# BMW ID Template

This project contains a React dashboard that displays data generated from markdown reports. 

## Setup

A setup script is provided for Codex to automatically install npm dependencies before running tests or the app. The script lives at `.config/codex/setup.sh` and simply runs `npm install` in the project root.

## Usage

1. Place markdown reports in the `reports/` directory:
   - `reports/wri/` - WRI (World Rider Index) reports
   - `reports/market_analysis/` - Market analysis reports
   - `reports/executive_summaries/` - Executive summary reports
   - `reports/market_recommendations/` - Market recommendations

2. Generate data files:
   ```bash
   npm run generate-wri-data
   npm run generate-competitor-data
   npm run generate-conversation-data
   npm run generate-executive-summaries
   npm run generate-market-recommendations
   ```

3. Start the dashboard:
   ```bash
   npm start
   ```

The data generation scripts will create JavaScript files in `src/data/` that are used by the dashboard components.
