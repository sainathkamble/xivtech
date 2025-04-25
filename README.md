# Cryptocurrency Price Tracker

A real-time cryptocurrency price tracking application built with React, TypeScript, and Redux Toolkit.

## Features

- Real-time price updates using WebSocket simulation
- Interactive price charts for each cryptocurrency
- Detailed market information including:
  - Current price
  - Price changes (1h, 24h, 7d)
  - Market cap
  - 24h volume
  - Circulating supply
- Responsive design
- Error handling and loading states

## Tech Stack

- React 18
- TypeScript
- Redux Toolkit
- Styled Components
- Recharts
- Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sainathkamble/xivtech.git
cd crypto-price-tracker
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running Tests

```bash
npm run test
# or
yarn test
```

## Project Structure

```
src/
├── components/     # React components
├── services/       # API and WebSocket services
├── store/          # Redux store and slices
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── App.tsx         # Main application component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 