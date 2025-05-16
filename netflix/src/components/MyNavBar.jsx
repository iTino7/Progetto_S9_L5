import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Bell, PersonCircle, Search } from "react-bootstrap-icons";

function MyNavBar(props) {
  return (
    <>
      <Container fluid className="p-0">
        <Navbar expand="lg" className="navbar-expand-lg text-white">
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                src={`/src/assets/${props.img}.png`}
                alt="Logo"
                width="100"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="text-white">
              <Nav
                className="me-auto my-2 my-lg-0 text-white"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#" className="text-white fs-5">
                  Home
                </Nav.Link>
                <Nav.Link href="#" className="text-secondary pe-auto fs-5" >
                  Tv Shows
                </Nav.Link>
                <Nav.Link href="#" className="text-secondary pe-auto fs-5" >
                  Movies
                </Nav.Link>
                <Nav.Link href="#" className="text-secondary pe-auto fs-5" >
                  Recently Added
                </Nav.Link>
                <Nav.Link href="#" className="text-secondary pe-auto fs-5" >
                  My List
                </Nav.Link>
              </Nav>
              <div className="ms-auto d-flex align-items-center">
                <Nav.Link className="text-white">
                  <Search className={props.fontIcon} />
                </Nav.Link>
                <p className="mb-0 mx-3">KIDS</p>
                <Bell className={props.fontIcon} />
                <PersonCircle className={`${props.fontIcon} ms-4`} />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default MyNavBar;
