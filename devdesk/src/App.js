import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import HelperDashboard from "./components/HelperDashboard";
import PrivateRoute from "./components/utils/PrivateRoute";
import StudentDashboard from "./components/students/StudentDashboard";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" />
          <Route exact path="/studentdashboard" component={StudentDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
