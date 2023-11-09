import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../css/main/Header.css";
import { Link } from "react-router-dom";
import HeaderCustomNavDropdownElement from "./HeaderCustomNavDropdownElement";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="navBar">
        <Container className="px-10 d-flex justify-content-between">
          <Link to="/">
            <img src="/image/main/logo2.png" className="logo" alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="spaceDiv"></div>
              <Nav.Link className="navText mx-2" href="/">
                홈
              </Nav.Link>
              <Nav.Link className="navText mx-2" href="/">
                애견 매칭
              </Nav.Link>
              <Nav.Link className="navText mx-2" href="/somoim">
                애견 소모임
              </Nav.Link>
              <Nav.Link className="navText mx-2" href="/">
                쇼핑
              </Nav.Link>
              <HeaderCustomNavDropdownElement theme="커뮤니티" />
              <Nav.Link className="navText mx-2" href="/">
                로그인
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
