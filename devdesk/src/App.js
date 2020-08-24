import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import HelperDash from './components/Helper/HelperDashboard';
import HelperTickets from './components/Helper/HelperTickets';

function App() {
  return (
    <div className="App">
      <Route exact path = "/">
     <Register />
     </Route>
     <Route exact path="/helpertickets"><HelperTickets /></Route>
     <Route exact path = "/helperdash">
     <HelperDash />
     </Route>
    </div>
  );
}

export default App;
