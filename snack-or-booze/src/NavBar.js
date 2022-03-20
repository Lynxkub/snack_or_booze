import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({ numDrinks , numSnacks }) {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>
        <NavLink exact to='/add_item' className='navbar-brand'>
          Add Menu Item
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">Snacks-{numSnacks}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/drinks'>Drinks-{numDrinks}</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
