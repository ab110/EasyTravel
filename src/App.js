import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import { ActivityComponent, ActivityResult } from './ActivityComponent/ActivityApp.jsx';
import { FlightComponent, FlightResult } from './FlightComponent/FlightApp.jsx';
import { HotelComponent, HotelResult } from './HotelComponent/HotelApp.jsx';
import {MessageComponent, Message} from './MessageComponent/MessageApp.jsx'
import axios from "axios";

class LandingPage extends React.Component{
  render() {
    return(
      <div className="startbtn">
        <Button className="btn-lg btn-success" href="/flights">Start Traveling</Button>
      </div>
    )
  }
}

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path:"/home",
    component: LandingPage
  },
  {
    path: "/flights",
    component: FlightComponent
  },
  {
    path: "/hotels",
    component: HotelComponent
  },
  {
    path: "/activities",
    component: ActivityComponent
  },
  {
    path:"/message",
    component: MessageComponent
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

class App extends React.Component {
  state = {
    data: null
  };

  /*componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/home');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };*/


  render(){
    return (
      <Router>
        <br />
        <nav class="navbar nav-justified">
          <a class="nav-item nav-link active" href="/flights" id="flight-btn">Flights</a>
          <a class="nav-item nav-link" href="/hotels" id="hotel-btn">Hotels</a>
          <a class="nav-item nav-link" href="/activities" id="activity-btn">Activities</a>
          <a class="nav-item nav-link" href="/message" id="msg-btn">Forum</a>
        </nav>
        
        <br />
        <br />
        
        <div className="component-content">
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
