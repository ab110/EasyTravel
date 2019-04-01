import React from "react";
import ReactDOM from 'react-dom';
import { Navbar, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import './navbar.css';

class NavComponent extends React.Component {
  render() {
    return (
      <Navbar className="bg-dark justify-content-between">
        <div class="branding header-space">
          <a href="./home" class="nav-link">
            <span class="title header-title">
              <h1>EasyTravel <i class="fas fa-plane-departure"></i></h1>
            </span>
          </a>
        </div>
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Go</Button>
        </Form>
      </Navbar>

    );
  }
}

export default NavComponent;
