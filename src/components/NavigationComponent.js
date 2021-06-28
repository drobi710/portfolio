import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import girl from "../assets/images/portfolio/cutegirllarge.png";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navigation" expand="md">
        <NavbarToggler className="ml-auto navbar-dark" onClick={toggle}><i class="fa fa-bars fa-lg" /></NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav-fill w-100" navbar>
            <NavItem>
              <ButtonGroup id="socialnav">
                <Button
                  id="gitBtn"
                  href="https://github.com/drobi710"
                  target="blank"
                >
                  <i class="fa fa-github fa-lg" />
                </Button>
                <Button
                  id="liBtn"
                  href="https://www.linkedin.com/in/danielle-robitshek/"
                  target="blank"
                >
                  <i href="linkedin.com" class="fa fa-linkedin fa-lg" />
                </Button>
              </ButtonGroup>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">
                ABOUT ME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/myworks/">
                MY WORKS
              </NavLink>
            </NavItem>
            <NavItem>
              <Button id="sayhello" href="/">
                SAY HELLO!
              </Button>
            </NavItem>
            {/* <NavbarBrand><img src={girl} id="navgirl" /></NavbarBrand> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
