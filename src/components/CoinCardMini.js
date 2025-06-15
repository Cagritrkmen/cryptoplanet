'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import useBinancePrice from '../hooks/useBinancePrice';

/**
 * CoinCardMini
 * Küçük kart şeklinde coin bilgisi + canlı fiyat gösterir.
 * @param {object} props
 * @param {object} props.coin - CoinGecko coin objesi
 * @param {number} [props.index]
 */
export default function CoinCardMini({ coin, index = 0 }) {
  // Binance'ten canlı fiyatı almak için hook
  useBinancePrice(`${coin.symbol}usdt`);
  const livePrice = useSelector((state) => state.price.prices[`${coin.symbol.toUpperCase()}USDT`]);

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className={`bg-white rounded-3 p-4 h-100 ${index === 1 ? 'shadow-sm' : ''}`}>        
        <div className="d-flex align-items-center gap-3 mb-3">
          <img
            src={coin.image}
            alt={coin.name}
            width={24}
            height={24}
            style={{ borderRadius: '50%' }}
          />
          <div>
            <div className="fw-bold" style={{ fontSize: 14 }}>
              {coin.name}
            </div>
            <div className="text-secondary" style={{ fontSize: 14 }}>
              {coin.symbol.toUpperCase()}/USD
            </div>
          </div>
        </div>
        <div className="fw-bold mb-2" style={{ fontSize: 24 }}>
          USD ${livePrice ? Number(livePrice).toLocaleString() : coin.current_price.toLocaleString()}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-secondary" style={{ fontSize: 14 }}>
            {coin.market_cap ? (coin.market_cap / 1000000000).toFixed(1) + 'B' : 'N/A'}
          </span>
          <span
            className={`badge rounded-pill px-2 py-1 ${
              coin.price_change_percentage_24h >= 0 ? 'bg-success' : 'bg-danger'
            }`}
            style={{ fontSize: 12 }}
          >
            {coin.price_change_percentage_24h >= 0 ? '+' : ''}
            {coin.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
} 