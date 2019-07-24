import React from "react";
import bannerPath from "../img/star-wars-banner.jpg";
const Header = () => {
  return (
    <div>
      <img src={bannerPath} alt="Star Wars Banner" id="headerBanner" />
    </div>
  );
};
export default Header;
