import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setPrice } from '../store/priceSlice';
import { subscribeBinancePrice } from '../services/binanceSocket';

/**
 * React hook: Belirli bir sembol için Binance WebSocket ile fiyatı Redux'a yazar
 * @param {string} symbol - Binance sembolü (örn: BTCUSDT)
 */
const useBinancePrice = (symbol) => {
  const dispatch = useDispatch();
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    if (!symbol) return;
    const ws = subscribeBinancePrice(symbol, (price) => {
      const now = Date.now();
      if (now - lastUpdateRef.current >= 3000) {
        lastUpdateRef.current = now;
        dispatch(setPrice({ symbol: symbol.toUpperCase(), price }));
      }
    });
    return () => {
      ws.close();
    };
  }, [symbol, dispatch]);
};

export default useBinancePrice; 