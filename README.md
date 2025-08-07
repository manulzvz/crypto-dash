# Crypto Dash

A responsive dashboard built with React and Vite that fetches real‑time cryptocurrency market data from the CoinGecko API and visualizes price trends.

---

## Features

- **Real‑time API Integration**: Fetches live market data (prices, market cap, 24h change) using the CoinGecko REST API.
- **React Hooks**: Utilizes `useState` and `useEffect` for state management and side effects.
- **Environment Variables**: Manages API endpoints with Vite’s `import.meta.env` (e.g., `VITE_API_URL`).
- **Reusable Components**: Modular React components for improved maintainability.
- **Interactive Charts**: Displays historical price trends using Chart.js via the `react-chartjs-2` wrapper.
- **Loading & Error Handling**: Gracefully handles loading states and API errors.
- **Deployment**: Automatically deploys to Vercel for continuous updates.

---

## Tech Stack

- **Framework**: React
- **Bundler**: Vite
- **Charts**: Chart.js & react-chartjs-2
- **API**: CoinGecko REST API
- **Deployment**: Vercel

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/manulzvz/crypto-dash.git
   cd crypto-dash
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set environment variable**

   Create a `.env` file in the project root and add your API URL:

   ```bash
   VITE_API_URL=https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

---

## Usage

- Open your browser at `http://localhost:5173` (or the URL shown in your terminal).
- Browse the list of top 10 cryptocurrencies by market cap.
- Click on a coin to view its price trend chart.

---

## Live Demo

Try it live on Vercel: [https://crypto-dash-two-liart.vercel.app](https://crypto-dash-two-liart.vercel.app)

---

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start development server     |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview the production build |

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-feature`.
3. Commit your changes: `git commit -m 'Add my feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Open a pull request.

---

## Contact

Manuel López – [GitHub](https://github.com/manulzvz) – [manuel@example.com](mailto:manuel@example.com)
