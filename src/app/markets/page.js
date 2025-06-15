"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupportedCoinsAsync } from "../../store/coinSlice";
import Sparkline from "@/components/Sparkline";
import CryptoPricesStrip from "@/components/CryptoPricesStrip";
import CoinTableRow from "../../components/CoinTableRow";

const TABS = [
  { key: "spot", label: "Spot" },
  { key: "derivatives", label: "Derivatives" },
  { key: "favorites", label: "Favorites" },
];

export default function MarketsPage() {
  const dispatch = useDispatch();
  const { coins, status, error } = useSelector((state) => state.coins);
  const [activeTab, setActiveTab] = useState("spot");
  const [displayCount, setDisplayCount] = useState(20);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSupportedCoinsAsync({ per_page: 250, sparkline: true }));
    }
  }, [dispatch, status]);

  return (
    <>
      {/* Hero Section */}
      <section className="position-relative py-5" style={{ background: '#EEF4FF'}}>
        <div className="container py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ minHeight: 460 }}>
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="fw-bold mb-3" style={{ fontSize: 72, color: '#23262F', letterSpacing: '-2%' }}>
              Today's Cryptocurrency prices
            </h1>
            <p className="text-secondary fs-5">
              The global crypto market cap is <span className="fw-bold" style={{ color: '#23262F' }}>$1.86T</span>
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src="/images/markets-bg.png" alt="abstract" className="img-fluid" style={{ maxHeight: 360 }} />
          </div>
        </div>
      </section>
      <CryptoPricesStrip overlap />

      <main className="bg-white min-vh-100 py-5">
        <div className="container">
          {/* Tab Menüsü */}
          <ul className="nav nav-pills mb-4 gap-2">
            {TABS.map((tab) => (
              <li className="nav-item" key={tab.key}>
                <button
                  className={`nav-link rounded-pill px-4 ${activeTab === tab.key ? "active" : ""}`}
                  style={{ fontWeight: 600, fontSize: 18 }}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
          {/* Market Tablosu */}
          <div className="bg-white rounded-4 shadow-sm p-3">
            <div className="table-responsive">
              <table className="table align-middle table-hover mb-0" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead className="bg-white">
                  <tr style={{ fontSize: 16, fontWeight: 700, color: '#777E90' }}>
                    <th className="py-3 ps-4 text-secondary" style={{ borderTopLeftRadius: 16 }}>#</th>
                    <th className="py-3 text-secondary">Name</th>
                    <th className="py-3 text-secondary">Last Price</th>
                    <th className="py-3 text-secondary">24h %</th>
                    <th className="py-3 text-secondary">Market Cap</th>
                    <th className="py-3 text-secondary">Last 7 Days</th>
                    <th className="py-3 pe-4 text-secondary" style={{ borderTopRightRadius: 16 }}></th>
                  </tr>
                </thead>
                <tbody>
                  {status === "loading" ? (
                    <tr><td colSpan={7} className="text-center py-5">Loading...</td></tr>
                  ) : status === "failed" ? (
                    <tr><td colSpan={7} className="text-danger text-center py-5">{error}</td></tr>
                  ) : (
                    coins.slice(0, displayCount).map((coin, i) => (
                      <CoinTableRow key={coin.id} coin={coin} index={i} showSparkline />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {/* Load More */}
          {displayCount < coins.length && (
            <div className="d-flex justify-content-center mt-4">
              <button
                className="btn btn-outline-primary rounded-pill px-5 py-2 fw-semibold"
                style={{ fontSize: 18 }}
                onClick={() => setDisplayCount((c) => c + 20)}
              >
                Load More
              </button>
            </div>
          )}
        </div>

        {/* Learn & Earn Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold" style={{ fontSize: 48 }}>Learn And Earn</h2>
              <p className="text-secondary" style={{ maxWidth: 544, margin: '0 auto', fontSize: 20 }}>
                Stacks is a production-ready library of stackable content blocks built in React Native.
              </p>
            </div>

            <div className="row g-4">
              {[1, 2, 3].map((i) => (
                <div className="col-12 col-md-4" key={i}>
                  <div className="card h-100 border-0 rounded-4 overflow-hidden shadow-sm">
                    <div className="position-relative d-flex align-items-center justify-content-center" style={{ height: 200, background: '#F4F5F6' }}>
                      <button className="btn btn-primary rounded-circle" style={{ width: 48, height: 48 }}>
                        <i className="fa fa-play text-white" />
                      </button>
                    </div>
                    <div className="p-4 d-flex flex-column gap-3">
                      <span className="badge bg-primary text-white rounded-pill align-self-start text-uppercase" style={{ fontSize: 12 }}>Learn & Earn</span>
                      <h5 className="fw-bold" style={{ fontSize: 20 }}>Learn about UI8 coin and earn an All-Access Pass</h5>
                      <div className="d-flex align-items-center justify-content-between mt-auto">
                        <div className="d-flex align-items-center gap-2">
                          <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#45B26B', display: 'inline-block' }} />
                          <span className="fw-semibold">Floyd Buckridge</span>
                        </div>
                        <span className="text-secondary" style={{ fontSize: 14 }}>Feb 03, 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-center mt-5">
              <button className="btn btn-outline-primary rounded-pill px-5 py-2 fw-semibold" style={{ fontSize: 18 }}>Load More</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 