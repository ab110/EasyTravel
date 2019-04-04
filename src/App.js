import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import { ActivityComponent, ActivityResult } from './ActivityComponent/ActivityApp.jsx';
import { FlightComponent, FlightResult } from './FlightComponent/FlightApp.jsx';
import { HotelComponent, HotelResult } from './HotelComponent/HotelApp.jsx';
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
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };


  // never let a process live forever
 // always kill a process everytime we are done using it


 // just a note, here, in the front end, we use the id key of our data object
 // in order to identify which we want to Update or delete.
 // for our back end, we use the object id assigned by MongoDB to modify
 // data base entries

 // our first get method that uses our backend api to
 // fetch data from our data base

  render(){
    return (
      <Router>
        <br />
        <div className="btn-container" role="group" aria-label="Basic example">
          <div className="btn-group">
            <Button href="/flights" type="button" className="btn btn-secondary" id="flight-btn">Flights</Button>
            <Button href="/hotels" type="button" className="btn btn-secondary" id="hotel-btn">Hotels</Button>
            <Button href="/activities" type="button" className="btn btn-secondary" id="activity-btn">Activities</Button>
          </div>
        </div>
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
