import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  Button,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
class Header extends React.Component {
  render() {
    return (
      <header className="container">
        <Navbar color="secondary" light expand="md">
          <Nav className="ml-auto" navbar>
            <NavbarBrand color="success" light href="/">
              APP
            </NavbarBrand>
            <NavItem color="white">
              <Button color="success">
                <Link to={"/home"}>Home Page</Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button color="success">
                <Link to={"/todo"}>Todo Page</Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button color="success">
                <Link to={"/users"}>Users Page</Link>
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;
