import "./AboutUs.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function AboutUs() {
  return (
    <div className="b">
      <Container className="background">
        <Card className="About">
          <h1 className="Header">About Us</h1>
          <p className="Body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
            malesuada risus. Integer sapien velit, euismod id ornare ut,
            efficitur ac felis. Mauris congue tristique eros, sit amet iaculis
            lectus accumsan in. Donec auctor consequat luctus. In placerat ante
            scelerisque sapien sollicitudin, non tincidunt ipsum faucibus.
            Pellentesque ut est ut tortor efficitur lobortis in eu ligula.
            Curabitur eros mi, iaculis nec urna eget, volutpat viverra metus.
            Etiam scelerisque orci augue, suscipit interdum dui convallis sed.
            Aenean tincidunt ex nulla, non hendrerit lorem convallis quis. Nunc
            scelerisque scelerisque enim quis rhoncus. Vestibulum in porta nisi.
            Curabitur sagittis, mauris nec venenatis mollis, odio nulla
            imperdiet orci, quis euismod elit nibh a sem. Vivamus elit nisl,
            accumsan mollis dignissim vitae, finibus eu augue. Praesent id
            pellentesque magna, non suscipit sapien. Vivamus dignissim pretium
            velit a volutpat. Etiam sed turpis id ex cursus commodo vel nec
            tortor. Sed nec felis vel justo gravida lacinia sit amet at nisl.
          </p>
        </Card>
      </Container>
    </div>
  );
}

export default AboutUs;
