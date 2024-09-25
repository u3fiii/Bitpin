import { useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import "../../styles/common/bottom-navigation.scss";

import home from "../../assets/lottie/home.json";
import markets from "../../assets/lottie/markets.json";
import trade from "../../assets/lottie/trade.json";
import easytrade from "../../assets/lottie/easytrade.json";
import wallet from "../../assets/lottie/wallet.json";

const BottomNavigation: React.FC = () => {
  const [activeItem, setActiveItem] = useState("");

  // Create a ref for controlling the Lottie animation
  const homeRef = useRef<LottieRefCurrentProps>(null);
  const marketRef = useRef<LottieRefCurrentProps>(null);
  const tradeRef = useRef<LottieRefCurrentProps>(null);
  const easyTradeRef = useRef<LottieRefCurrentProps>(null);
  const walletRef = useRef<LottieRefCurrentProps>(null);

  // Function to handle click event
  const handleHomeClick = () => {
    if (
      homeRef.current &&
      marketRef.current &&
      tradeRef.current &&
      easyTradeRef.current &&
      walletRef.current
    ) {
      homeRef.current.play();
      setActiveItem("home");
      // stop other animation
      marketRef.current.stop();
      tradeRef.current.stop();
      easyTradeRef.current.stop();
      walletRef.current.stop();
    }
  };

  const handleMarketClick = () => {
    if (
      homeRef.current &&
      marketRef.current &&
      tradeRef.current &&
      easyTradeRef.current &&
      walletRef.current
    ) {
      marketRef.current.play();
      setActiveItem("market");
      // stop other animation
      homeRef.current.stop();
      tradeRef.current.stop();
      easyTradeRef.current.stop();
      walletRef.current.stop();
    }
  };
  const handleTradeClick = () => {
    if (
      homeRef.current &&
      marketRef.current &&
      tradeRef.current &&
      easyTradeRef.current &&
      walletRef.current
    ) {
      tradeRef.current.play();
      setActiveItem("trade");
      // stop other animation
      homeRef.current.stop();
      marketRef.current.stop();
      easyTradeRef.current.stop();
      walletRef.current.stop();
    }
  };

  const handleEasyTradeClick = () => {
    if (
      homeRef.current &&
      marketRef.current &&
      tradeRef.current &&
      easyTradeRef.current &&
      walletRef.current
    ) {
      easyTradeRef.current.play();
      setActiveItem("easytrade");
      // stop other animation
      homeRef.current.stop();
      marketRef.current.stop();
      tradeRef.current.stop();
      walletRef.current.stop();
    }
  };
  const handleWalletClick = () => {
    if (
      homeRef.current &&
      marketRef.current &&
      tradeRef.current &&
      easyTradeRef.current &&
      walletRef.current
    ) {
      walletRef.current.play();
      setActiveItem("wallet");
      // stop other animation
      homeRef.current.stop();
      marketRef.current.stop();
      easyTradeRef.current.stop();
      tradeRef.current.stop();
    }
  };

  return (
    <div className="bottom-navigation">
      <div className="lottie-container">
        <div
          className={
            activeItem == "home" ? "nav-item home active" : "nav-item home"
          }
          onClick={handleHomeClick}
        >
          <Lottie
            lottieRef={homeRef} // Pass the ref to Lottie
            animationData={home}
            className="nav-icon lottie-home"
            autoplay={false}
            loop={false} // Ensure it doesn't loop
          />
          <p className="nav-name home"> خانه</p>
        </div>
        <div
          className={
            activeItem == "market"
              ? "nav-item market active"
              : "nav-item market"
          }
          onClick={handleMarketClick}
        >
          <Lottie
            lottieRef={marketRef} // Pass the ref to Lottie
            animationData={markets}
            className="nav-icon lottie-home"
            autoplay={false}
            loop={false} // Ensure it doesn't loop
          />
          <p className="nav-name market"> بازارها</p>
        </div>
        <div
          className={
            activeItem == "trade" ? "nav-item trade active" : "nav-item trade"
          }
          onClick={handleTradeClick}
        >
          <Lottie
            lottieRef={tradeRef} // Pass the ref to Lottie
            animationData={trade}
            className="nav-icon lottie-home"
            autoplay={false}
            loop={false} // Ensure it doesn't loop
          />
          <p className="nav-name market"> معامله</p>
        </div>
        <div
          className={
            activeItem == "easytrade"
              ? "nav-item easytrade active"
              : "nav-item easytrade"
          }
          onClick={handleEasyTradeClick}
        >
          <Lottie
            lottieRef={easyTradeRef} // Pass the ref to Lottie
            animationData={easytrade}
            className="nav-icon lottie-home"
            autoplay={false}
            loop={false} // Ensure it doesn't loop
          />
          <p className="nav-name market"> خرید آسان</p>
        </div>
        <div
          className={
            activeItem == "wallet"
              ? "nav-item wallet active"
              : "nav-item wallet"
          }
          onClick={handleWalletClick}
        >
          <Lottie
            lottieRef={walletRef} // Pass the ref to Lottie
            animationData={wallet}
            className="nav-icon lottie-wallet"
            autoplay={false}
            loop={false} // Ensure it doesn't loop
          />
          <p className="nav-name market"> کیف پول</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
