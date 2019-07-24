import React from "react";
import bannerPath from "../img/star-wars-banner.jpg";
const Header = () => {
  return (
    <header>
      <img src={bannerPath} alt="Star Wars Banner" id="headerBanner" />
    </header>
  );
};
export default Header;
