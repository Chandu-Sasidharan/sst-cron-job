# SST Cron Job

This project uses [Serverless Stack (SST)](https://sst.dev/) to deploy a Lambda function that runs every 10 minutes.

## Overview

- **Function**: The function (implemented in `app/packages/functions/main.ts`) runs every 10 minutes.

## Setup

1. **AWS Credentials**  
   Make sure your AWS credentials are configured.

2. **Install Dependencies**
   ```sh
   npm install
   ```

## Local Development

To run the project locally in development mode, execute:

```sh
npm run dev
```

This command uses SST to start a local environment that allows you to test and iterate on the cron function.

## Deployment

Deploy the Lambda function to your AWS account by running:

```sh
npm run deploy
```
