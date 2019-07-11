import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class UserItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Col sm="4">
        <Link to={"/user/" + data.id}>
          <Card color="primary">
            <CardBody className="text-center">
              <CardTitle color="white">{data.name}</CardTitle>
              <CardSubtitle> ({data.username})</CardSubtitle>
              <CardText>{data.phone}</CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>
    );
  }
}

export default UserItem;
