import { Container, Nav, Navbar } from "react-bootstrap";
import { useUser } from "../../context/user-context";
import { PeopleFill } from "react-bootstrap-icons";

const Navigation = () => {
  const { user, loggedIn, handleLogin, handleLogOut } = useUser();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Shoperoo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/public">Public lists</Nav.Link>
            {loggedIn && (
              <>
                <Nav.Link href="/private">My Lists</Nav.Link>
                <Nav.Link href="/combine">List Generator</Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            {!loggedIn && (
              <>
                <Nav.Link onClick={handleLogin}>Login</Nav.Link>
                <Nav.Link href="/register">Registration</Nav.Link>
              </>
            )}
            {loggedIn && (
              <>
                <Navbar.Text>
                  <PeopleFill
                    color="green"
                    size={22}
                    style={{ marginRight: 5 }}
                  />
                  <a href="/account-details">{user.displayName}</a>
                </Navbar.Text>

                <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
