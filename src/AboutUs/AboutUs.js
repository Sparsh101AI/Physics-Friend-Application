import "./AboutUs.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

function AboutUs() {
  return (
    <Card className="box">
      <Card.Title className="title">About Us</Card.Title>
      <Card.Title className="title2">Our Mission:</Card.Title>
      <Card.Text className="text">
        Physics Friend was created to help aid students in solving physics
        problems. Although the Physics Calculator tool was specifically designed
        for the Alberta Physics 20 Curriculum, we hope that Physics Friend can
        be of use to many students around the world.
      </Card.Text>
      <Card.Title className="title2">Who We Are:</Card.Title>
      <Card.Text className="text">
        We are two grade twelve students with an interest in physics and a
        passion for computer science. We thought of creating Physics Friend in
        grade eleven while working on physics assignments (What a coincidence!)
        and noticing that their were no tools readily avaliable to assist us in
        solving physics problems. So instead of waiting for a physics solver to
        be created we decided to make our own!
      </Card.Text>
    </Card>
  );
}

export default AboutUs;
