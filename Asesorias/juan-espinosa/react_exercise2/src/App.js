import React from 'react';
import Nav from "./Nav";
import Profile from "./Profile";
import Navigation from "./Navigation";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Navigation" component={Navigation} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);



export default App;
