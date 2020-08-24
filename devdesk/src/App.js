import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import HelperDashboard from "./components/HelperDashboard";
import PrivateRoute from "./components/utils/PrivateRoute";
import StudentDashboard from "./components/students/StudentDashboard";
import NewTicketForm from "./components/students/NewTicketForm";

function App() {


  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute exact path="/helper_dashboard" component={HelperDashboard} />
          <PrivateRoute exact path="/student_dashboard" component={StudentDashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" />
          <Route exact path="/studentdashboard" component={StudentDashboard} />
          <Route exact path="/newticketform" component={NewTicketForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
