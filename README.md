# BMW ID Template

This project contains a React dashboard that displays data generated from markdown reports. 

## Setup

A setup script is provided for Codex to automatically install npm dependencies before running tests or the app. The script lives at `.config/codex/setup.sh` and simply runs `npm install` in the project root.

## Usage

1. Place markdown reports in the `full-wri-reports/` and `full-conversation-insights reports/` directories.
2. Run `npm run generate-data` to convert the reports into JSON files.
3. Start the dashboard with `npm start`.

The `generate-data` step is executed automatically whenever `npm start` or `npm run build` is invoked via `prestart` and `prebuild` hooks in `package.json`.
