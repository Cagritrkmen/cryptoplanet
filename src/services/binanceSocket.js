/**
 * Binance WebSocket servis dosyası
 * Belirli bir sembol için canlı fiyat verisi çeker
 * @param {string} symbol - Binance sembolü (örn: btcusdt)
 * @param {(price: string, raw: object) => void} onPrice - Fiyat güncellendiğinde çağrılır
 * @returns {WebSocket} - Açılan WebSocket bağlantısı
 */
export function subscribeBinancePrice(symbol, onPrice) {
  const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`);
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data && data.p) {
      onPrice(data.p, data);
    }
  };
  ws.onerror = (err) => {
    console.error('Binance WS error:', err);
  };
  return ws;
} 