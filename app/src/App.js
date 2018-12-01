import React, { Component } from "react";
import "./App.css";
import Component1 from "./Component1.js";
import Component2 from "./Component2.js";
import Component3 from "./Component3.js";
import Component4 from "./Component4.js";
import { Helmet } from "react-helmet";

import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>React Title Management</title>
        </Helmet>
        <h1>React Title Management</h1>

        <div>
          <a href="https://github.com/clane/React-basic-routing">
            https://github.com/clane/React-basic-routing
          </a>
        </div>

        <BrowserRouter>
          <div>

            <ul role="navigation">
              <li><Link to="Component1">Component 1</Link></li>
              <li><Link to="Component2">Component 2</Link></li>
              <li><Link to="Component3">Component 3</Link></li>
              <li><Link to="Component4">Component 4</Link></li>
            </ul>

            <Switch>
              <Route path="/Component1" component={Component1} />
              <Route path="/Component2" component={Component2} />
              <Route path="/Component3" component={Component3} />
              <Route path="/Component4" component={Component4} />
              <Redirect from="/" to="/Component1" />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
