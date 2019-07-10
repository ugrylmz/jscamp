import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Component/Header";

import HomePage from "./Pages/Home";
import TodoPage from "./Pages/Todo";
import UsersPage from "./Pages/Users";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route component={HomePage} path={"/home"} />
          <Route component={TodoPage} path={"/todo"} />
          <Route component={UsersPage} path={"/users"} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
