import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Header>
        <ul>
          <li>
            <Link to="/home">Home Page </Link>
          </li>
          <li>
            <Link to="/todo"> Todo Page</Link>
          </li>
          <li>
            <Link to="/users"> Users Page</Link>
          </li>
        </ul>
      </Header>
    );
  }
}
export default Header;
