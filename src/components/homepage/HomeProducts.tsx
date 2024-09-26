import "../../styles/homepage/home-products.scss";

import variz from "../../assets/icons/variz.svg";
import bitLoan from "../../assets/icons/bitLoan.svg";
import turbo from "../../assets/icons/Turbo.svg";
import invite from "../../assets/icons/invite.svg";
import bot from "../../assets/icons/bot.svg";
import pinfinity from "../../assets/icons/pinfinity.svg";
import security from "../../assets/icons/Security.svg";
import more from "../../assets/icons/more.svg";

const HomeProducts = () => {
  return (
    <div className="home-products">
      <div className="home-product variz">
        <div className="icon-wrapper">
          <img src={invite} />
        </div>
        <p>دعوت دوستان</p>
      </div>
      <div className="home-product variz">
        <div className="icon-wrapper">
          <img src={variz} />
        </div>
        <p>واریز</p>
      </div>
      <div className="home-product variz">
        <div className="icon-wrapper">
          <img src={bitLoan} />
        </div>
        <p>وام</p>
      </div>
      <div className="home-product variz">
        <div className="icon-wrapper">
          <img src={turbo} />
        </div>
        <p>واریز</p>
      </div>

      <div className="home-product variz">
        <div className="icon-wrapper">
          <img src={more} />
        </div>
        <p>بیشتر</p>
      </div>
      <div className="home-product variz">
        <div className="icon-wrapper">
          <img src={bot} />
        </div>
        <p>بات</p>
      </div>
      <div className="home-product variz">
        <div className="icon-wrapper">
          <img src={pinfinity} />
        </div>
        <p>پین‌فینیتی</p>
      </div>
      <div className="home-product variz">
        <div className="icon-wrapper">
          <img src={security} />
        </div>
        <p>امنیت</p>
      </div>
    </div>
  );
};

export default HomeProducts;
