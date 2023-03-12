import React from "react";
import { Button, Image, Form, Card } from "react-bootstrap";
import "./custom.css";

const Signup = () => {
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
            <Form className="rounded p-4">
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter Password" />
                {/* <Form.Text className="text-muted">
                  We will never share your website with anyone
                </Form.Text> */}
              </Form.Group>

              <Button variant="primary" type="submit">
                Signup
              </Button>
              <div>
                {" "}
                Already a member?<a href="Login"> Login</a>{" "}
              </div>
            </Form>
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Signup;
