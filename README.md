# Crypto Dash

[![State](https://img.shields.io/badge/state-experimental-yellow)](https://github.com/manulzvz/crypto-dash)
[![Last Commit](https://img.shields.io/github/last-commit/manulzvz/crypto-dash)](https://github.com/manulzvz/crypto-dash/commits/main)
[![license](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A responsive dashboard built with React and Vite that fetches real‑time cryptocurrency market data from the CoinGecko API and visualizes price trends..

---

## Table of Contents

- [Crypto Dash](#crypto-dash)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Run Project](#run-project)
  - [Demo](#demo)
  - [Project Structure](#project-structure)
  - [Contributions](#contributions)
  - [Project Status](#project-status)
  - [Contact](#contact)

---

## Description

- **Real‑time API Integration**: Fetches live market data (prices, market cap, 24h change) using the CoinGecko REST API.
- **React Hooks**: Utilizes `useState` and `useEffect` for state management and side effects.
- **Environment Variables**: Manages API endpoints with Vite’s `import.meta.env` (e.g., `VITE_API_URL`).
- **Reusable Components**: Modular React components for improved maintainability.
- **Interactive Charts**: Displays historical price trends using Chart.js via the `react-chartjs-2` wrapper.
- **Loading & Error Handling**: Gracefully handles loading states and API errors.
- **Deployment**: Automatically deploys to Vercel for continuous updates.

---

## Technologies

- **Frontend:** React
- **Styles:** TailwindCSS
- **Backend / API:** CoinGecko REST API
- **Tools:** Git, Prettier, Vite

---

## Installation

```bash
# Clone repository
git clone https://github.com/manulzvz/crypto-dash.git

# Enter to directory
cd crypto-dash

# Install dependencies
npm install

# Set environment variable
# Create a .env file in the project root and add your API URL:
   VITE_API_URL=https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false
```

## Run Project

```bash
npm run dev
```

## Demo

Try it live on: [https://crypto-dash-two-liart.vercel.app](https://crypto-dash-two-liart.vercel.app)

## Project Structure

```text
crypto-dash/
├── src/
│   ├── components/
│   │   ├── ...
│   ├── pages/
│   │   ├── ...
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── eslint.config.js
├── index.html
├── README.md
├── vite.config.js
└── package.json
```

## Contributions

1. Fork the repository
2. Create a feature/new-feature branch
3. Commit your changes
4. Open a Pull Request

## Project Status

- Experimental

## Contact

GitHub: [manulzvz](https://github.com/manulzvz)

LinkedIn: [manulzvz](https://www.linkedin.com/in/manulzvz/)

Email: <manulzvz@gmail.com>
