'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import useBinancePrice from '../hooks/useBinancePrice';
import Sparkline from './Sparkline';
import Link from 'next/link';

/**
 * CoinTableRow
 * Tek bir tablo satırı, canlı fiyatı Binance'ten alır.
 * @param {object} props
 * @param {object} props.coin - CoinGecko coin objesi
 * @param {number} props.index - Sıralama numarası
 * @param {boolean} [props.showSparkline] - 7 günlük sparkline gösterilsin mi?
 */
export default function CoinTableRow({ coin, index = 0, showSparkline = false }) {
  useBinancePrice(`${coin.symbol}usdt`);
  const livePrice = useSelector((state) => state.price.prices[`${coin.symbol.toUpperCase()}USDT`]);
  const priceDisplay = livePrice ? Number(livePrice).toLocaleString() : coin.current_price.toLocaleString();

  return (
    <tr className="align-middle" style={{ fontSize: 17, fontWeight: 500 }}>
      <td className="ps-4">{index + 1}</td>
      <td className="d-flex align-items-center gap-3">
        <img src={coin.image} alt={coin.name} width={36} height={36} style={{ borderRadius: 8, background: '#F4F5F6', padding: 4 }} />
        <div>
          <div className="fw-bold text-dark" style={{ fontSize: 18 }}>{coin.name}</div>
          <div className="text-secondary text-uppercase small" style={{ fontSize: 14 }}>{coin.symbol}</div>
        </div>
      </td>
      <td className="fw-bold text-dark" style={{ fontSize: 18 }}>${priceDisplay}</td>
      <td
        className={coin.price_change_percentage_24h >= 0 ? 'text-success fw-semibold' : 'text-danger fw-semibold'}
        style={{ fontSize: 16 }}
      >
        {coin.price_change_percentage_24h >= 0 ? '+' : ''}
        {coin.price_change_percentage_24h?.toFixed(2)}%
      </td>
      <td className="text-dark" style={{ fontSize: 16 }}>${coin.market_cap.toLocaleString()}</td>
      {showSparkline && (
        <td>
          <Sparkline
            data={coin.sparkline_in_7d?.price}
            color={coin.price_change_percentage_24h >= 0 ? '#45B26B' : '#FF6838'}
          />
        </td>
      )}
      <td className="pe-4">
        <Link href="/markets" className="btn btn-outline-primary rounded-pill px-4 fw-semibold" style={{ fontSize: 16 }}>
          Trade
        </Link>
      </td>
    </tr>
  );
} 