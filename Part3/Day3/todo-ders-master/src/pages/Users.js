import React from "react";
import axios from "axios";
import UserItem from "../components/UserItem";
import { Container, Row, Col } from "reactstrap";

class UsersPage extends React.Component {
  state = {
    users: []
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ users: response.data });
  }

  render() {
    const { users } = this.state;
    return (
      <main>
        <Container>
          <Row>
            {users.map((user, index) => (
              <UserItem key={index} data={user} />
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}

export default UsersPage;
