import React, { useState, useEffect } from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import { Auth } from "aws-amplify";

function App() {
  const [isLoggedIn, hasLoggedIn] = useState(false);
  const [loggedEmail, setLoggedEmail] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      hasLoggedIn(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  const handleLogout = async e => {
    e.preventDefault();
    await Auth.signOut();
    hasLoggedIn(false);
  };

  return (
    !isAuthenticating && (
      <div className="App container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">SKratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {isLoggedIn ? (
                <LinkContainer to="/logout">
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </LinkContainer>
              ) : (
                <>
                  <LinkContainer to="/signup">
                    <Nav.Link>Signup</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes
          appProps={{ isLoggedIn, hasLoggedIn, loggedEmail, setLoggedEmail }}
        />
      </div>
    )
  );
}

export default App;
