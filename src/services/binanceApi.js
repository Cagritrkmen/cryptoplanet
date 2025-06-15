// Binance REST API utility functions

/**
 * Fetch all trading symbols with USDT quote asset from Binance
 * @returns {Promise<string[]>} e.g. ['BTCUSDT','ETHUSDT']
 */
export async function fetchBinanceUsdtSymbols() {
  const url = 'https://api.binance.com/api/v3/exchangeInfo';
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Binance API error ${res.status}`);
  const data = await res.json();
  return data.symbols
    .filter((s) => s.quoteAsset === 'USDT' && s.status === 'TRADING')
    .map((s) => s.symbol);
} 