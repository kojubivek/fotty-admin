import React from "react";
import {
  Container,
  Dropdown,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, Badge } from "@mui/material";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import HomeIcon from "@mui/icons-material/Home";
export const CustomNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md" className="">
        <Container fluid>
          <Navbar.Brand href="#">FootyBaller</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                FootyBaller
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">
                  <NotificationsIcon />
                </Nav.Link>
                <Nav.Link href="#action2">
                  <HomeIcon />
                </Nav.Link>
                <NavDropdown
                  title="Menu"
                  id={`offcanvasNavbarDropdown-expand-$md`}
                >
                  <NavDropdown.Item className="d-flex" href="#action3">
                    <Avatar alt="profile">B</Avatar>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4"></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
