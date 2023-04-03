# OpenAI API Fetcher

This repository provides an isolated entrypoint into the world of fetching results from OpenAI's API. It's designed for simplicity and ease of use, perfect for beginners who want to start exploring the powerful capabilities of OpenAI's GPT engines.

Dive into the code and documentation to start generating creative text outputs with ease.

## Getting Started

### Add your API key

Create an account at https://platform.openai.com/signup and obtain your API key.

Copy the `.env.local.example` file to `.env.local`:

```shell
cp .env.local.example .env.local
```

Open the `.env` file and add your OpenAI API key:

```shell
OPENAI_API_KEY=your_api_key_here
```

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
