import React, { useContext } from "react";
import { Button, ButtonGroup, Card, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle /> Login with Google
        </Button>
        <Button className="mb-2" variant="outline-dark">
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>

      <div className="mt-4">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-3">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;
