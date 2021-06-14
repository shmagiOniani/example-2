import React from "react";
// React-Router Components
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// Local Components
import Nav from "./components/Nav/Nav";
import Device from "./components/Device/Device";
// Local Router Component
import { routes } from "./routes";
// Styles
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {routes.map((prop) => {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={prop.path}
              />
            );
          })}
          <Route exact path="/Device/Device/:model">
            <Device />
          </Route>
          <Route exact path="/Device/Device">
            <Device />
          </Route>
          <Route exact path="/">
            <Redirect to="/Dashboard/Application" />
          </Route>
          <Redirect to="/NotFound" />
        </Switch>
      </div>
    </Router>
  );
}
