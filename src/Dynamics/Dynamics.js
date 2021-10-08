import "./Dynamics.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import React from "react";

function Dynamics() {
  return (
    <div>
      <div>
        <CardGroup>
          <Card className="kcard">
            <Card.Body>
              <Card.Title>
                <h4>
                  <em>
                    F <sub>net</sub> = m a
                  </em>
                </h4>
              </Card.Title>
              <Card.Text>
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6>Net Force (N)</h6>
              <input className="inp"></input>
              <h6>Mass (kg)</h6>
              <input className="inp"></input>
              <h6>
                Acceleration (m/s <sup>2</sup>)
              </h6>
              <input className="inp"></input>
              <br />
              <button className="calcbtn">Calculate</button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">Press Calculate!</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body>
              <Card.Title>
                <h4>
                  <em>
                    F <sub>g</sub> = m g
                  </em>
                </h4>
              </Card.Title>
              <Card.Text>
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6>Force Gravity (N)</h6>
              <input className="inp"></input>
              <h6>Mass (kg)</h6>
              <input className="inp"></input>
              <h6>
                Acceleration due to Gravity (m/s<sup>2</sup>)
              </h6>
              <input className="inp"></input>
              <br />
              <button className="calcbtn">Cacluate</button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">Press Calculate!</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body>
              <Card.Title>
                <h4>
                  <em>
                    F <sub>f static</sub> = μ <sub>s</sub> F <sub>N</sub>
                  </em>
                </h4>
              </Card.Title>
              <Card.Text>
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6>Force of Static Friction (N)</h6>
              <input className="inp"></input>
              <h6>Static Friction Coefficient</h6>
              <input className="inp"></input>
              <h6>Normal Force (N)</h6>
              <input className="inp"></input>
              <br />
              <button className="calcbtn">Cacluate</button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">Press Calculate!</h5>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <div>
        <CardGroup>
          <Card className="kcard">
            <Card.Body>
              <Card.Title>
                {" "}
                <h4>
                  <em>
                    F <sub>f kinetic</sub> = μ <sub>k</sub> F <sub>N</sub>
                  </em>
                </h4>
              </Card.Title>
              <Card.Text>
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6>Force of Friction Kinetic (N)</h6>
              <input className="inp"></input>
              <h6>Kinetic Friction Coefficient</h6>
              <input className="inp"></input>
              <h6>Normal Force</h6>
              <input className="inp"></input>
              <br />
              <button className="calcbtn">Calculate</button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">Press Calculate!</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body>
              <Card.Title>
                <h4>
                  <em>
                    F <sub>g</sub> = (G m <sub>1</sub> m <sub>2</sub> ) / (r{" "}
                    <sup>2</sup>)
                  </em>
                </h4>
              </Card.Title>
              <Card.Text>
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6>Force Gravity (N)</h6>
              <input className="inp"></input>
              <h6>
                Gravitational Constant (N m<sup>2</sup> / kg<sup>2</sup>)
              </h6>
              <input className="inp"></input>
              <h6>Mass One (kg)</h6>
              <input className="inp"></input>
              <h6>Mass Two (kg)</h6>
              <input className="inp"></input>
              <h6>Radius (m)</h6>
              <input className="inp"></input>
              <br />
              <button className="calcbtn">Calculate</button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">Press Calculate!</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body>
              <Card.Title>
                <h4>
                  <em>
                    g = (G m <sub>source</sub> ) / (r <sup>2</sup>)
                  </em>
                </h4>
              </Card.Title>
              <Card.Text>
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6>
                Gravity (m/s<sup>2</sup>)
              </h6>
              <input className="inp"></input>
              <h6>
                Gravitational Constant (N m<sup>2</sup> / kg<sup>2</sup>)
              </h6>
              <input className="inp"></input>
              <h6>Mass Source (kg)</h6>
              <input className="inp"></input>
              <h6>Radius (m)</h6>
              <input className="inp"></input>
              <br />
              <button className="calcbtn">Calculate</button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">Press Calculate!</h5>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Dynamics;
