import "./Calculator.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React from "react";

function Calculator() {
  const [ButtonState, setButtonState] = React.useState([
    "homeButtonColor",
    "button-color",
    "button-color",
  ]);
  return (
    <div>
      <br />

      <div>
        <p className="header1">Select A Topic!</p>
      </div>

      <br />

      <CardGroup>
        <Card className="cardg">
          <Card.Body id="kinematics">
            <Card.Title className="calcTitle" id="kinematics">
              Kinematics
            </Card.Title>
            
            <Card.Text className="calcText" id="kinematics">
              Solve common word problems and equations which pretain to
              kinematics. Problems which fall under kinematics include variables
              such as velocity, distance, acceleration, and time.
            </Card.Text>
          </Card.Body>
          <Link
                to="/Kinematics"
                className="auto1"
                onClick={() =>
                  setButtonState([
                    "button-color",
                    "pcButtonColor",
                    "button-color",
                  ])
                }
              >
                <li className={ButtonState[1]} id="calcButton">
                  Physics Calculator
                </li>
              </Link>
        </Card>

        <Card className="cardg">
          <Card.Body id="dynamics">
            <Card.Title className="calcTitle" id="dynamics">
              Dynamics
            </Card.Title>
            <Card.Text className="calcText" id="dynamics">
              Solve common word problems and equations which pretain to
              dynamics. Problems which fall under dynamics include variables
              such as force, mass, gravity, acceleration, and friction.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardg">
          <Card.Body id="cM">
            <Card.Title className="calcTitle" id="cM">
              Circular Motion
            </Card.Title>
            <Card.Text className="calcText" id="cM">
              <br />
              Coming Soon...
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <br />

      <br />

      <br />
    </div>
  );
}

export default Calculator;
