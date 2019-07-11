import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import { UserDetail, Users, Home, Todo } from "./pages";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <div className="Row">
            <div className="col">
              {" "}
              <Route component={Home} path={"/home"} />
            </div>
            <div className="col">
              {" "}
              <Route component={Todo} path={"/todo"} />
            </div>
            <div className="col">
              <Route component={Users} path={"/users"} />
            </div>
            <div className="col">
              <Route component={UserDetail} path={"/user/:id"} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
