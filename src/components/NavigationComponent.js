import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navigation" expand="md">
        <NavbarToggler className="ml-auto navbar-dark" onClick={toggle}>
          <i className={!isOpen ? "fa fa-bars fa-lg" : "fa fa-times fa-lg"} />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav-fill w-100" navbar>
            <NavItem>
              <ButtonGroup id="socialnav">
              <a href="https://github.com/drobi710" rel="noopener noreferrer" target="_blank">
                <Button
                  id="gitBtn"
                >
                  <i class="fa fa-github fa-lg" />
                </Button>
                </a>
                <a href="https://www.linkedin.com/in/danielle-robitshek/" rel="noopener noreferrer" target="_blank">
                <Button
                  id="liBtn"
                >
                  <i class="fa fa-linkedin fa-lg" />
                </Button>
                </a>
              </ButtonGroup>
            </NavItem>
            <NavItem>
              <NavLink
                exact
                activeClassName="activeHome"
                className="nav-link"
                to="/home"
              >
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about"
              >
                ABOUT ME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/works"
              >
                MY WORKS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/contact"
              >
                <Button id="sayhello">SAY HELLO!</Button>
              </NavLink>
            </NavItem>
            {/* <NavbarBrand><img src={girl} id="navgirl" /></NavbarBrand> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
