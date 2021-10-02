import "./Kinematics.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import CardGroup from "react-bootstrap/CardGroup";
import React from "react";

function Kinematics() {
  //VDT Variables
  const [vdtAnswer, setVDTAnswer] = React.useState("Press Calculate!");
  const [vdt_V, setVDT_V] = React.useState("");
  const [vdt_D, setVDT_D] = React.useState("");
  const [vdt_T, setVDT_T] = React.useState("");
  let changeVDT_V = (event) => {
    const newValue = event.target.value;
    setVDT_V(newValue);
  };
  let changeVDT_D = (event) => {
    const newValue = event.target.value;
    setVDT_D(newValue);
  };
  let changeVDT_T = (event) => {
    const newValue = event.target.value;
    setVDT_T(newValue);
  };
  let changeVDT_Answer = () => {
    const vdt_variables = [vdt_V, vdt_D, vdt_T];
    let counter = 0;
    for (var i = 0; i < vdt_variables.length; i++)
      if (vdt_variables[i] === "") counter++;
    if (counter > 1) {
      setVDTAnswer("ERROR");
      return;
    }
    if (counter === 0 && parseInt(vdt_V) === vdt_D / vdt_T) {
      setVDTAnswer("Equation is Correct");
      return;
    } else if (counter === 0) {
      setVDTAnswer("Equation is Incorrect");
      return;
    }
    if (vdt_T === "") setVDTAnswer(vdt_D / vdt_V + " s");
    if (vdt_V === "") setVDTAnswer(vdt_D / vdt_T + " m/s");
    if (vdt_D === "") setVDTAnswer(vdt_V * vdt_T + " m");
  };
  return (
    <div>
      <div>
        <CardGroup>
          <Card className="cardg">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>
                <em>
                  V <sub className="i">ave</sub> = d / t
                </em>
              </Card.Title>
              <Card.Text>
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6>Average Velocity (m/s)</h6>
              <input onChange={changeVDT_V}></input>
              <h6>Distance (m)</h6>
              <input onChange={changeVDT_D}></input>
              <h6>Time (s)</h6>
              <input onChange={changeVDT_T}></input>
              <br />
              <button onClick={changeVDT_Answer}>Calculate!</button>
            </Card.Body>
            <Card.Footer>
              <h5>Answer:</h5>
              <h5>{vdtAnswer}</h5>
            </Card.Footer>
          </Card>
          <Card className="cardg">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="cardg">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>

      <div>
        <CardGroup>
          <Card className="cardg">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="cardg">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="cardg">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Kinematics;
