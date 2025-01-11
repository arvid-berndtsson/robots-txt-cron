# Robots.txt Analyzer Cron Job

A Cloudflare Worker that periodically triggers a cleanup operation via an API endpoint.

## Overview

This worker is designed to run as a scheduled task (cron job) that calls a specific API endpoint with authentication. It's built using Cloudflare Workers and TypeScript.

## Prerequisites

- Node.js (latest LTS version recommended)
- Wrangler CLI (Cloudflare Workers CLI)
- A Cloudflare account

## Setup

1. Clone the repository:
```bash
git clone https://github.com/arvid-berndtsson/robots-txt-cron.git
cd robots-txt-cron
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - For local development:
     - Copy `.dev.vars.example` to `.dev.vars`
     - `API_KEY`: Your API authentication key
     - `BASE_URL`: The base URL of your API
   - For production:
     - Go to your GitHub repository settings
     - Navigate to "Settings" → "Secrets and variables" → "Actions"
     - Add "Repository secrets" for each environment variable

## Development

To run the worker locally:
```bash
npm run dev
```

To run tests:
```bash
npm test
```

To build the project:
```bash
npm run build
```

## Deployment

Deploy to Cloudflare Workers:
```bash
npm run deploy
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| API_KEY | Authentication key for the API (sensitive - set as repository secret) | Yes |
| BASE_URL | Base URL of the API endpoint | Yes |

## License

[MIT](LICENSE)
