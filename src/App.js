import React, { useState, useEffect } from 'react';
import './App.css';

// Dummy data for stocks
const initialStocks = [
  { symbol: 'AAPL', price: 150.45, change: -1.23 },
  { symbol: 'MSFT', price: 295.50, change: 3.25 },
  // ... More stocks
];

function App() {
  const [stocks, setStocks] = useState(initialStocks);

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(stocks => stocks.map(stock => ({
        ...stock,
        price: Math.max(0, (stock.price + (Math.random() - 0.5) * 10).toFixed(2)),
        change: (Math.random() - 0.5) * 10,
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stock-board">
      {stocks.map((stock, index) => (
        <div key={index} className="stock-row">
          <div className="stock-cell stock-symbol">{stock.symbol}</div>
          <div className="stock-cell stock-price">{stock.price}</div>
          <div className={`stock-cell stock-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
            {stock.change.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
