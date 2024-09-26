import { useState } from "react";
import "../../styles/homepage/crypto-price.scss";

import {
  popularCryptos,
  mostProfitedCryptos,
  leastProfitedCryptos,
} from "../../data/cryptoData"; // Import the crypto data

const CryptoPrice = () => {
  const [activeTab, setActiveTab] = useState<
    "popular" | "mostProfited" | "leastProfited"
  >("popular");

  const getCurrentCryptoData = () => {
    switch (activeTab) {
      case "popular":
        return popularCryptos;
      case "mostProfited":
        return mostProfitedCryptos;
      case "leastProfited":
        return leastProfitedCryptos;
      default:
        return [];
    }
  };

  const currentCryptoData = getCurrentCryptoData();

  return (
    <div className="crypto-price-container">
      <div className="tab-container">
        <div
          className={`tab ${activeTab === "popular" ? "active" : ""}`}
          onClick={() => setActiveTab("popular")}
        >
          پر طرفدارها
        </div>
        <div
          className={`tab ${activeTab === "mostProfited" ? "active" : ""}`}
          onClick={() => setActiveTab("mostProfited")}
        >
          پر سودترین‌ها
        </div>
        <div
          className={`tab ${activeTab === "leastProfited" ? "active" : ""}`}
          onClick={() => setActiveTab("leastProfited")}
        >
          پر ضررها
        </div>
      </div>

      {/* Use a key based on activeTab to trigger re-render and animation */}
      <div className="crypto-container" key={activeTab}>
        {currentCryptoData.map((crypto) => (
          <div className="crypto-item" key={crypto.id}>
            <div className="name-logo">
              <img
                className="crypto-logo"
                src={crypto.logo}
                alt={`${crypto.englishName} Logo`}
              />
              <div className="name-container">
                <div className="english-name">{crypto.englishName}</div>
                <div className="farsi-name">{crypto.persianName}</div>
              </div>
            </div>
            <div className="price-container">
              {crypto.price.toLocaleString()}
              <p>تومان</p>
            </div>
            <div
              className="profit"
              style={{
                color: crypto.change > 0 ? "#4EF09D" : "#FF5A5A",
                backgroundColor:
                  crypto.change > 0
                    ? "rgba(74, 243, 44, 0.05)"
                    : "rgba(243, 0, 20, 0.05)",
              }}
            >
              {crypto.change.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoPrice;
