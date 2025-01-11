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
   - Copy `.dev.vars.example` to `.dev.vars`
   - Fill in the required environment variables:
     - `API_KEY`: Your API authentication key
     - `SITE_URL`: The base URL of your API

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

| Variable | Description |
|----------|-------------|
| API_KEY | Authentication key for the API |
| SITE_URL | Base URL of the API endpoint |

## License

[MIT](LICENSE)