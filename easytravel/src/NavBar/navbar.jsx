import React from "react";
import ReactDOM from 'react-dom';
import { Navbar, Form, FormControl, Button, InputGroup } from 'react-bootstrap';

class NavComponent extends React.Component {
  render() {
    return (
      <Navbar className="bg-light justify-content-between">
        <div className="brand">
          <a href='/home'>EasyTravel</a>
        </div>
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Go</Button>
        </Form>
        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
      </Navbar>

    );
  }
}

export default NavComponent;
