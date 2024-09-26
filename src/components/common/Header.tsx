import "../../styles/common/header.scss";

import logo from "../../assets/icons/logo1_Dark.svg";
import profile from "../../assets/icons/profile.svg";
import headphone from "../../assets/icons/headphone.svg";
import notification from "../../assets/icons/notification.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} />
      </div>
      <div className="header-icons-container">
        <div className="header-icon">
          <img src={profile} />
        </div>
        <div className="header-icon">
          <img src={headphone} />
        </div>
        <div className="header-icon">
          <img src={notification} />
        </div>
      </div>
    </div>
  );
};

export default Header;
