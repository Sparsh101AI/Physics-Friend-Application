import "./HomePage.css";
import Card from "react-bootstrap/Card";

function HomePage() {
  return (
    <Card className="homeBody">
      <Card.Title className="homeTitle">Welcome to Physics Friend</Card.Title>
      <Card.Text className="homeText">Hello</Card.Text>
    </Card>
  );
}

export default HomePage;
