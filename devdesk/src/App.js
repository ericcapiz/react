import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import HelperDash from "./components/Helper/HelperDashboard";
import HelperTickets from "./components/Helper/HelperTickets";
import StudentDashboard from "./components/StudentDashboard";
import PrivateRoute from "./components/utils/PrivateRoute";

function App() {
  return (
    <Router>
      <div>
        <Switch>
     <Route exact path="/helpertickets"><HelperTickets /></Route>
     <Route exact path = "/helperdash">
     <HelperDash />
     </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;