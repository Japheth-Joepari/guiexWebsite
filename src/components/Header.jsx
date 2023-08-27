import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import logo from "../assets/images/guiexlogo1.jpeg"; // Assuming the path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Heart, Search, ShoppingBag } from "react-feather";
import { FormControl, InputGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const location = useLocation();
  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <div className="fixed-top">
      <Navbar
        bg="white shadow-sm"
        variant="light"
        className="p-4 d-lg-flex d-xl-flex d-md-none d-sm-none d-xs-none d-none flex-row"
      >
        <div className="d-flex flex-row justify-content-between w-100">
          <Navbar.Brand href="#home">
            <Link to="/">
              <img src={logo} alt="" className="logoImg" />
            </Link>
          </Navbar.Brand>

          <Button
            variant=" outline-light"
            onClick={handleShowOffcanvas}
            className="d-lg-none d-xl-none d-md-block d-sm-block d-xs-block"
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <div>
            <Nav
              className="me-auto"
              variant="underline"
              defaultActiveKey="/home"
            >
              <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/shop"
                active={location.pathname === "/shop"}
              >
                Shop
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/bridals"
                active={location.pathname === "/bridals"}
              >
                Bridals & Apparels
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/academy"
                active={location.pathname === "/academy"}
              >
                Fashion Academy
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/empowerment"
                active={location.pathname === "/empowerment"}
              >
                Fashion & Skill Empowerment
              </Nav.Link>
            </Nav>
          </div>
          <div className="d-flex flex-row gap-4 d-lg-flex d-xl-flex d-md-none d-sm-none d-xs-none">
            <Search />
            <Heart />
            <ShoppingBag />
          </div>
        </div>
      </Navbar>

      {/* small & medium screens */}
      <Navbar
        bg="white shadow-sm"
        variant="light"
        className="p-1 d-md-flex d-lg-none d-xl-none d-xs-flex flex-row justify-content-between "
      >
        <Button
          variant=" outline-light"
          onClick={handleShowOffcanvas}
          className="d-lg-none d-xl-none d-md-block d-sm-block d-xs-block"
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>

        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={logo} alt="" className="logoImg" />
          </Link>
        </Navbar.Brand>

        <div className="d-flex flex-row gap-4 d-md-flex d-sm-flex d-lg-none d-xl-none d-xs-flex">
          <ShoppingBag />
        </div>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas}>
        <Offcanvas.Header closeButton className="bg-light">
          {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column gap-3 text-muted">
          <InputGroup className="search-input">
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-icon"
              // Add other FormControl props as needed
            />
            <InputGroup.Text id="search-icon">
              <Search />
            </InputGroup.Text>
          </InputGroup>
          <Nav
            className="me-auto d-flex flex-column"
            variant="underline"
            defaultActiveKey="/home"
          >
            <div className="d-flex gap-4">
              <Nav.Link
                as={Link}
                to="/"
                active={location.pathname === "/"}
                className="text-decoration-none text-muted"
              >
                <b>Home</b>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/shop"
                active={location.pathname === "/shop"}
                className="text-decoration-none text-muted"
              >
                <b>Shop</b>
              </Nav.Link>
            </div>

            <div className="d-flex flex-column gap-3">
              <Nav.Link
                as={Link}
                to="/bridals"
                active={location.pathname === "/bridals"}
                className="text-decoration-none text-muted"
              >
                <b>Bridals & Apparels</b>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/academy"
                active={location.pathname === "/academy"}
                className="text-decoration-none text-muted"
              >
                <b>Fashion Academy</b>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/empowerment"
                active={location.pathname === "/empowerment"}
                className="text-decoration-none text-muted"
              >
                <b>Fashion & Skill Empowerment</b>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                active={location.pathname === "/about"}
                className="text-decoration-none text-muted"
              >
                <b>About Us</b>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                active={location.pathname === "/contact"}
                className="text-decoration-none text-muted"
              >
                <b>Contact Us</b>
              </Nav.Link>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
