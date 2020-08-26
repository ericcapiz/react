import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./StudentDashboard.css";
import Search from "./Search";

const StudentNav = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light >
        <NavbarBrand
          href="/"
          className="mr-auto"
          style={{ fontFamily: "Roboto Mono , serif", fontSize: "2rem", fontWeight: "bolder", color: "#74CBC1" }}
        >
          Dev Desk
        </NavbarBrand>

        <i className="fa fa-search" style={{color: "#74CBC1"}}></i>
        <Search />

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar style={{cursor: "pointer"}}>
            <NavItem>
              <NavLink href="/new_ticket_form/">Create a new ticket</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/student_dashboard">
                Go to Student Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/helper_dashboard">Go to Helper Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/log_out">Log Out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default StudentNav;
