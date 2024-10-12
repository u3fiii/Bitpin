import BottomNavigation from "../components/common/BottomNavigation";
import "../styles/homepage/homepage.scss";
import Header from "../components/common/Header";

import WealthCard from "../components/homepage/WealthCard";
import HomeProducts from "../components/homepage/HomeProducts";
import BannerSwiper from "../components/homepage/BannerSwiper";
import CryptoPrice from "../components/homepage/CryptoPrice";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="responsive-message">
        <p>با موبایل وارد شوید و یا سایز مرورگر را به موبایل تغییر دهید.</p>
      </div>
      <div className="homepage-wrapper">
        <Header />
        <div className="homepage-content">
          <WealthCard />
          <HomeProducts />
        </div>
        <BannerSwiper />
        <CryptoPrice />
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Homepage;
