import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import HelperDashboard from './components/HelperDashboard'
import StudentDashboard from './components/StudentDashboard'
import PrivateRoute from './components/utils/PrivateRoute'

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
        </Switch>
        </div>
    </Router>
    
  );
}

export default App;
