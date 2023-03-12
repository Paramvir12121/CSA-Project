import React from "react";
import { Button, Image, Form, Card } from "react-bootstrap";
import "./custom.css";

function Login() {
  return (
    <>
      <Card>
        <Card.Img
          className="masthead"
          src="https://wallpapers-hub.art/wallpaper-images/58332.jpg"
          alt="Card image"
          // class="mw-10"
        />
        <Card.ImgOverlay>
          {/* <Card.Title>Card title</Card.Title> */}
          <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form className="rounded p-4 ">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                  We will never share your website with anyone
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                {/* <Form.Text className="text-muted">
                  We will never share your website with anyone
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me"></Form.Check>
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
              <div>
                <p>
                  Not a member?<a href="Signup"> Signup</a>
                </p>
              </div>
            </Form>
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default Login;
