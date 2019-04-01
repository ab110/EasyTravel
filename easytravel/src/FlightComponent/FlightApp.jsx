// This is a place holder for the initial application state.
import React from 'react';
import { Button } from 'react-bootstrap';
import './FlightApp.css';

const mockResults = [
  {
    ID: 1,
    Name: "United",
    Price: 534,
    Time: "9:30 PM",
    Link: "https://www.united.com/en/us"
  },
  {
    ID: 2,
    Name: "Delta",
    Price: 314,
    Time: "3:41 PM",
    Link: "https://www.delta.com"
  },
  {
    ID: 3,
    Name: "Alaska Air",
    Price: 254,
    Time: "10:15 AM",
    Link: "https://www.alaskaair.com"
  }
];

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
      IsHidden: true
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
  }

  render() {
    const results = mockResults.map((result) => <FlightResult ID={result.ID} Name={result.Name} Price={result.Price} Time={result.Time} Link={result.Link} />);
    return (
      <div className="flight-component">
        <div className="alignment-wrap">
          <form>
            <label>
              Origin:
              <input className="flight-info" type="text" name="Origin" value={this.state.Origin} onChange={e => this.onChange(e)}/>
            </label><br></br>
            <label>
                Destination:
                <input className="flight-info" type="text" name="Destination" value={this.state.Destination} onChange={e => this.onChange(e)}/>
              </label><br></br>
            <label>
                Start Date:
                <input className="flight-info" type="date" name="StartDate" value={this.state.StartDate} onChange={e => this.onChange(e)}/>
              </label><br></br>
            <label>
                End Date:
                <input className="flight-info" type="date" name="EndDate" value={this.state.EndDate} onChange={e => this.onChange(e)}/>
            </label><br></br>
            <Button type="submit" name="SubmitButton" onClick={e => this.onSubmit(e)}>Submit</Button>
          </form>
        </div>
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
        <Button onClick={this.onSelect}>Select</Button> {this.props.ID}. {this.props.Name}: (${this.props.Price}
        , {this.props.Time}) <a href={this.props.Link}>Book Flight</a>
        {!this.state.IsHidden &&
        <h4 style={{color:"#c67007"}} >You've selected to fly with {this.props.Name}!</h4>
        }
      </h3>
    )
  }
}

// This renders the JSX component inside the content node:
export { FlightComponent, FlightResult };
