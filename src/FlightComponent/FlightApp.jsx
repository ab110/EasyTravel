// This is a place holder for the initial application state.
import React from 'react';
import { Button } from 'react-bootstrap';

let mockResults = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class FlightComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Origin: "boston",
      Destination: "ny",
      StartDate: '05/04/2019',
      EndDate: '06/04/2019',
      IsHidden: true,
      flightList: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
    })
  }

  onSubmit(e) {

    e.preventDefault();
    this.setState({
      IsHidden: false
    })
    this.getFlight();
  }

  getFlight = async () => {
    const response = await fetch('/flightTest');
    const body = await response.json();
    this.state.flightList = body;
    let mockResults = body;
    console.log(mockResults);
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    const results = this.state.flightList.map((result) =>
        <FlightResult id={result.id} name={result.name} price={result.price} time={result.time} />
    );
    return (
      <div>
        <form>
          <label>
            Origin:
            <input type="text" name="Origin" value={this.state.Origin} onChange={e => this.onChange(e)}/>
          </label><br></br>
          <label>
            Destination:
            <input type="text" name="Destination" value={this.state.Destination} onChange={e => this.onChange(e)}/>
          </label><br></br>
          <label>
            Start Date:
            <input type="date" name="StartDate" value={this.state.StartDate} onChange={e => this.onChange(e)}/>
          </label><br></br>
          <label>
            End Date:
            <input type="date" name="EndDate" value={this.state.EndDate} onChange={e => this.onChange(e)}/>
          </label><br></br>
        <Button type="submit" name="SubmitButton" onClick={e => this.onSubmit(e)}>Submit</Button>
        </form>

        {!this.state.IsHidden &&
        <div>
          <h2>Showing Flight Results for {this.state.Origin} to {this.state.Destination} for {this.state.StartDate} to {this.state.EndDate}</h2>
          {results}
          <a href="/hotels">Go to Housing Plans</a>
        </div>
        }
      </div>
    );
  }
}


class FlightResult extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      IsHidden: true
    };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(){
    this.setState({
      IsHidden: false
    })
  }

  render() {
    return (
      <h3>
        <Button onClick={this.onSelect}>Select</Button> {this.props.id}. {this.props.name}: (${this.props.price}
        , {this.props.time})
        {!this.state.IsHidden &&
        <h4 style={{color:"#c67007"}} >You've selected to fly with {this.props.Name}!</h4>
        }
      </h3>
    )
  }
}

// This renders the JSX component inside the content node:
export { FlightComponent, FlightResult };
