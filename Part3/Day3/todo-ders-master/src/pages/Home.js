import React from "react";
import { Jumbotron, Container, Col, Row } from "reactstrap";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm-5>
              <h2>WELCOME</h2>
            </Col>
          </Row>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Fluid jumbotron</h1>
              <p className="lead">
                This is a modified jumbotron that occupies the entire horizontal
                space of its parent.
              </p>
            </Container>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default HomePage;
