import "./Calculator.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React from "react";

function Calculator() {
  return (
    <div>
      <br />

      <div>
        <p className="header1">Select A Topic!</p>
      </div>

      <br />

      <CardGroup>
        <Link className="linkcolor" to="/Kinematics">
          <Card className="cardg">
            <Card.Body id="kinematics">
              <Card.Title className="calcTitle" id="kinematics">
                Kinematics
              </Card.Title>
              <Card.Text className="calcText" id="kinematics">
                Solve common word problems and equations which pretain to
                kinematics. Problems which fall under kinematics include
                variables such as velocity, distance, acceleration, and time.
                <br />
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link className="linkcolor" to="/Dynamics">
          <Card className="cardg">
            <Card.Body id="dynamics">
              <Card.Title className="calcTitle" id="dynamics">
                Dynamics
              </Card.Title>
              <Card.Text className="calcText" id="dynamics">
                Solve common word problems and equations which pretain to
                dynamics. Problems which fall under dynamics include variables
                such as force, mass, gravity, acceleration, and friction.
                <br />
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link className="linkcolor" to="/Kinematics">
          <Card className="cardg">
            <Card.Body id="cM">
              <Card.Title className="calcTitle" id="cM">
                Circular Motion
              </Card.Title>
              <Card.Text className="calcText" id="cM">
                <br />
                Coming Soon...
                <br />
                <br />
                <br />
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </CardGroup>

      <br />

      <br />

      <br />
    </div>
  );
}

export default Calculator;
