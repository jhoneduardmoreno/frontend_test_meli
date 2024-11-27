# Mercado Libre Challenge

This project is an implementation of Mercado Libre's technical challenge, built with [Next.js](https://nextjs.org/). The project allows users to search for products and view their details, similar to the Mercado Libre experience. It leverages both Static Site Generation (SSG) and Server-Side Rendering (SSR) capabilities to optimize performance and user experience.

## Features

- Product search
- Detailed product view
- Responsive design
- Purchase animations with confetti
- Mercado Libre API integration

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/jhoneduardmoreno/frontend_test_meli.git
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create environment variables
   - Copy `.env.example` to `.env`
   ```bash
   cp .env.example .env
   ```
   - Fill in the required environment variables in `.env`

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Check `.env.example` for reference on required environment variables:

```env
NEXT_PUBLIC_API_URL=https://api.mercadolibre.com
```