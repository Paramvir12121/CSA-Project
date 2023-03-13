import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar
        className="justify-content-center"
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="/">Home </Navbar.Brand>
        <Navbar.Brand href="/login">Login</Navbar.Brand>
        <Navbar.Text>
          Signed in as: <a href="/login">Paramvir Singh</a>
        </Navbar.Text>
      </Navbar>
    </>
  );
}

export default Header;
