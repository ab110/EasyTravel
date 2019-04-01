import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import './App.css';
import { ActivityComponent, ActivityResult } from './ActivityComponent/ActivityApp.jsx';
import { FlightComponent, FlightResult } from './FlightComponent/FlightApp.jsx';
import { HotelComponent, HotelResult } from './HotelComponent/HotelApp.jsx';

class LandingPage extends React.Component{
  render() {
    return(
      <Button href="/flights">Start Traveling</Button>
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

function App() {
  return (
    <Router>
      <div>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
  );
}

export default App;
