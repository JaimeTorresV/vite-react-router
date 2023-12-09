import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { CDBBox } from "cdbreact";
import { useClerk, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function NavbarItem() {
  const navigate = useNavigate();
  const { openSignIn } = useClerk();

  const handleClick = (path) => {
    navigate(path);
  };

  const handleSignInClick = () => {
    openSignIn();
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img alt="logo" src="\src\assets\img\Logo.png" width="130px" />
          </a>
        </CDBBox>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onClick={() => handleClick("/")}>Inicio</Nav.Link>
            <Nav.Link onClick={() => handleClick("/services")}>
              Servicios
            </Nav.Link>
            <Nav.Link onClick={() => handleClick("/projects")}>
              Proyectos
            </Nav.Link>
            <Nav.Link onClick={() => handleClick("/about")}>Nosotros</Nav.Link>
            <Nav.Link onClick={() => handleClick("/contact")}>
              Contacto
            </Nav.Link>
          </Nav>
          <Nav>
            <SignedIn>
              <Nav.Item className="d-flex justify-content-center justify-content-lg-end">
                <UserButton />
              </Nav.Item>
            </SignedIn>
            <SignedOut>
              <Nav.Item className="d-flex justify-content-center justify-content-lg-end">
                <Button variant="primary" size="sm" onClick={handleSignInClick}>
                  Ingresar
                </Button>
              </Nav.Item>
            </SignedOut>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarItem;
