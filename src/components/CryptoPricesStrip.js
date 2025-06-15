"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupportedCoinsAsync } from "../store/coinSlice";
import CoinCardMini from "./CoinCardMini";

/**
 * CryptoPricesStrip
 * Renders the small strip with tabs and first 4 coin cards (Figma "Today's Crypto" block)
 * @param {boolean} overlap - if true, adds negative margin-top so it can overlap previous section
 */
export default function CryptoPricesStrip({ overlap = false }) {
  const dispatch = useDispatch();
  const { coins, status, error } = useSelector((state) => state.coins);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSupportedCoinsAsync({ per_page: 20, sparkline: false }));
    }
  }, [dispatch, status]);

  const wrapperClasses = overlap ? "position-relative" : "";
  const wrapperStyle = overlap ? { zIndex: 2, marginTop: "-90px", maxWidth: 1200 } : {};

  return (
    <div className={`container ${wrapperClasses}`} style={wrapperStyle}>
      <div className="bg-white rounded-4 shadow-lg p-4" style={{ minHeight: 180 }}>
        {/* Tab Menu (static) */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          <button className="btn btn-primary rounded-pill px-4 py-2 fw-bold" style={{ fontSize: 14 }}>
            Crypto
          </button>
          {["DeFi", "BSC", "NFT", "Metaverse", "Polkadot", "Solana", "Opensea", "Makersplace"].map((tab) => (
            <button
              key={tab}
              className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-bold text-dark"
              style={{ fontSize: 14, border: "none" }}
            >
              {tab}
            </button>
          ))}
        </div>
        <hr className="my-4" style={{ color: "#E5E5E5" }} />
        {/* Coin cards */}
        {status === "loading" ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="text-danger text-center py-5">{error}</div>
        ) : (
          <div className="row g-3">
            {coins.slice(0, 4).map((coin, index) => (
              <CoinCardMini key={coin.id} coin={coin} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 