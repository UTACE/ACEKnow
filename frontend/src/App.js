import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./Components/AboutPage";
import CanadaPage from "./Components/Canada/CanadaPage";
import ChinaPage from "./Components/ChinaPage";
import VirusMap from "./Components/VirusMap";
import BacktoSchoolPage from "./Components/BacktoSchool/BacktoSchoolPage";
import HealthCode from "./Components/HealthCode/HealthCodePage"
import VerifyHealthCodePage from "./Components/HealthCode/VerifyHealthCodePage";
import LoginPage from "./Components/LoginPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import {mainDomain} from "./configuration";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      reactDev: false,
      isLoggedIn: false,
      isLoggedInChecked: false,
    }

    this.loginHandler = this.loginHandler.bind(this)
    this.logoutHandler = this.logoutHandler.bind(this)
    this.requestHandler = this.requestHandler.bind(this)
  }

  componentDidMount() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // dev code
      console.log("reactjs dev mode")
      this.setState({
        reactDev: true
      })
    }

    let refreshToken = localStorage.getItem('refreshToken')
    if (refreshToken === null) {
      this.setState({
        isLoggedIn: false,
        isLoggedInChecked: true
      })
    } else {
      this.refreshTokenHandler().then(result => {
        console.log(result)
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
            <Route path="/about" component={AboutPage} />
            <Route path="/tocanada" component={CanadaPage} />
            <Route path="/tochina" component={ChinaPage} />
            <Route path="/virusmap" component={VirusMap} />
            <Route path="/backtoschool" component={BacktoSchoolPage}/>
            <Route path="/healthCode/:healthID/" component={HealthCode}/>
            <Route path="/verifyHealthCode">
              <VerifyHealthCodePage
                loginHandler={this.loginHandler}
                logoutHandler={this.logoutHandler}
                requestHandler={this.requestHandler}
                isLoggedIn={this.state.isLoggedIn}
                isLoggedInChecked={this.state.isLoggedInChecked}
              />
            </Route>
            <Route path="/login">
              <LoginPage
                loginHandler={this.loginHandler}
                isLoggedIn={this.state.isLoggedIn}
              />
            </Route>
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    )
  }

  async loginHandler (username, password) {
    const response = await fetch(mainDomain + 'api/token/obtain/', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    if (!response.ok) {
      return false
    }

    const json = await response.json()
    localStorage.setItem('refreshToken', json.refresh);
    this.setState({
      isLoggedIn: true,
      isLoggedInChecked: true
    })
    return true
  }

  async refreshTokenHandler () {
    let refreshToken = localStorage.getItem('refreshToken')
    const response = await fetch(mainDomain + 'api/token/refresh/', {
      method: 'POST',
      body: JSON.stringify({
        refresh: refreshToken,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    if (!response.ok) {
      this.setState({
        isLoggedIn: false,
        isLoggedInChecked: true
      })
      return false
    }

    const json = await response.json()
    localStorage.setItem('accessToken', json.access);
    localStorage.setItem('refreshToken', json.refresh);

    const userInfoResponse = await fetch(mainDomain + 'api/getUserInfo/', {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": "JWT " + json.access
      }
    })
    const userInfojson = await userInfoResponse.json()
    localStorage.setItem('username', userInfojson.username);

    this.setState({
      isLoggedIn: true,
      isLoggedInChecked: true
    })
    return true
  }

  async requestHandler (type, APIurl, bodyParam = null) {
    let accessToken = localStorage.getItem('accessToken')

    let response
    if (bodyParam !== null) {
      response = await fetch(mainDomain + APIurl, {
        method: type,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": "JWT " + accessToken
        },
        body: JSON.stringify(bodyParam)
      })
    } else {
      response = await fetch(mainDomain + APIurl, {
        method: type,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": "JWT " + accessToken
        },
      })
    }

    if (!response.ok) {
      let refreshTokenResponse = await this.refreshTokenHandler()
      if (refreshTokenResponse) {
        // access token expired and now refreshed
        // restart the request
        accessToken = localStorage.getItem('accessToken')

        let newResponse;
        if (bodyParam !== null) {
          newResponse = await fetch(mainDomain + APIurl, {
            method: type,
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Authorization": "JWT " + accessToken
            },
            body: JSON.stringify(bodyParam)
          })
        } else {
          newResponse = await fetch(mainDomain + APIurl, {
            method: type,
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Authorization": "JWT " + accessToken
            },
          })
        }

        if (!newResponse.ok) {throw newResponse}
        return newResponse
      } else {
        // refresh token is also expired, logged out immediately
        throw response
      }
    }

    return response
  }

  async logoutHandler () {
    let refreshToken = localStorage.getItem('refreshToken')
    let accessToken = localStorage.getItem('accessToken')

    await fetch(mainDomain + 'api/logout/', {
      method: 'POST',
      body: JSON.stringify({
        refresh: refreshToken,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": "JWT " + accessToken
      }
    })

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');

    this.setState({
      isLoggedIn: false,
      isLoggedInChecked: true
    })
  }
}

export default App;
