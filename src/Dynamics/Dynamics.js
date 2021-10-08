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
            <Card.Body id="d1">
              <Card.Title>
                <h4 id="d1">
                  <em id="d1">
                    F <sub id="d1">net</sub> = m a
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="d1">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="d1">Net Force (N)</h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">Mass (kg)</h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">
                Acceleration (m/s <sup id="d1">2</sup>)
              </h6>
              <input id="d1" className="inp"></input>
              <br />
              <button className="calcbtn">Calculate</button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">Press Calculate!</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body id="d1">
              <Card.Title id="d1">
                <h4 id="d1">
                  <em id="d1">
                    F <sub id="d1">g</sub> = m g
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="d1">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="d1">Force Gravity (N)</h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">Mass (kg)</h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">
                Acceleration due to Gravity (m/s<sup id="d1">2</sup>)
              </h6>
              <input id="d1" className="inp"></input>
              <br />
              <button className="calcbtn">Cacluate</button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">Press Calculate!</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body id="d1">
              <Card.Title>
                <h4 id="d1">
                  <em id="d1">
                    F <sub id="d1">f static</sub> = μ <sub id="d1">s</sub> F{" "}
                    <sub id="d1">N</sub>
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="d1">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="d1">Force of Static Friction (N)</h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">Static Friction Coefficient</h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">Normal Force (N)</h6>
              <input id="d1" className="inp"></input>
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
            <Card.Body id="d1">
              <Card.Title>
                {" "}
                <h4 id="d1">
                  <em id="d1">
                    F <sub id="d1">f kinetic</sub> = μ <sub id="d1">k</sub> F{" "}
                    <sub id="d1">N</sub>
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="d1">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="d1">Force of Friction Kinetic (N)</h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">Kinetic Friction Coefficient</h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">Normal Force</h6>
              <input id="d1" className="inp"></input>
              <br />
              <button className="calcbtn">Calculate</button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">Press Calculate!</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body id="d1">
              <Card.Title>
                <h4 id="d1">
                  <em id="d1">
                    F <sub id="d1">g</sub> = (G m <sub id="d1">1</sub> m{" "}
                    <sub id="d1">2</sub> ) / (r <sup id="d1">2</sup>)
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="d1">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="d1">Force Gravity (N)</h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">
                Gravitational Constant (N m<sup id="d1">2</sup> / kg
                <sup id="d1">2</sup>)
              </h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">Mass One (kg)</h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">Mass Two (kg)</h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">Radius (m)</h6>
              <input id="d1" className="inp"></input>
              <br />
              <button className="calcbtn">Calculate</button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">Press Calculate!</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body id="d1">
              <Card.Title>
                <h4 id="d1">
                  <em id="d1">
                    g = (G m <sub id="d1">source</sub> ) / (r{" "}
                    <sup id="d1">2</sup>)
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="d1">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="d1">
                Gravity (m/s<sup id="d1">2</sup>)
              </h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">
                Gravitational Constant (N m<sup id="d1">2</sup> / kg
                <sup id="d1">2</sup>)
              </h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">Mass Source (kg)</h6>
              <input id="d1" className="inp"></input>
              <h6 id="d1">Radius (m)</h6>
              <input id="d1" className="inp"></input>
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
