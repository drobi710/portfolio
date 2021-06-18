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

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navigation" expand="md">
        <NavbarToggler
          id="toggler"
          className="ml-auto navbar-light"
          onClick={toggle}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav-fill w-100" navbar>
            <NavItem>
              <ButtonGroup>
                <Button id="gitBtn">
                  <i class="fa fa-github fa-lg" />
                </Button>
                <Button id="liBtn">
                  <i class="fa fa-linkedin fa-lg" />
                </Button>
              </ButtonGroup>
            </NavItem>
            <NavItem>
              <NavLink id="navLink" href="/">
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="navLink" href="/about/">
                ABOUT ME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="navLink" href="/myworks/">
                MY WORKS
              </NavLink>
            </NavItem>
            <NavItem>
              <Button id="sayhello" href="/">
                SAY HELLO!
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
