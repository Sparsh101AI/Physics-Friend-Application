import "./Nav.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";

function Nav1() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="nav-color1"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="logoM.png"
              width="170"
              height="70"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="auto">
              <Link to="/" className="auto1">
                <li className="button-color"> Home</li>
              </Link>

              <Link to="/AboutUs" className="auto1">
                <li className="button-color">Physics Calculator</li>
              </Link>

              <Link to="/AboutUs" className="auto1">
                <li className="button-color">About Us</li>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nav1;
