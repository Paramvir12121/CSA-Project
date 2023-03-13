import React from "react";
import { Button, Image, Form, Card } from "react-bootstrap";

function Main() {
  return (
    <>
      <Card className="background mt-5">
        <Card.Img
          className="masthead"
          src="https://wallpapers-hub.art/wallpaper-images/58332.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card>
            <Card.Body className="rounded p-4   ">
              <Card.Title className="justify-content-center ">
                Card Title
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" href="/signup">
                Sign Up
              </Button>
            </Card.Body>
          </Card>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
export default Main;
