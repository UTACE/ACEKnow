import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      reactDev: false,
    }
  }

  componentDidMount() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // dev code
      console.log("reactjs dev mode")
      this.setState({
        reactDev: true
      })
    }
  }

  render() {
    return(
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <AboutPage/>
            </Route>
            <Route path="/">
              <HomePage reactDev={this.state.reactDev}/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
