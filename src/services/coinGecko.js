// CoinGecko API servis fonksiyonu

/**
 * CoinGecko'dan market verisi çeker
 * @param {Object} options
 * @param {string} options.vs_currency - Para birimi (usd, eur, vs)
 * @param {number} options.per_page - Sayfa başı coin sayısı
 * @param {number} options.page - Sayfa numarası
 * @returns {Promise<Array>} Coin listesi
 */
export async function fetchMarketCoins({ vs_currency = "usd", per_page = 8, page = 1 } = {}) {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currency}&order=market_cap_desc&per_page=${per_page}&page=${page}&sparkline=true`;
  try {
    const res = await fetch(url, { headers: { 'accept': 'application/json' } });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`API error: ${res.status} - ${errText}`);
    }
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data from CoinGecko. " + err.message);
  }
} 