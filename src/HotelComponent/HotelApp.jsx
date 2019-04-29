// This is a place holder for the initial application state.
import React from 'react';
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'

const mockResults = [
  {
    ID: 1,
    Name: "Marriott",
    Price: 87,
    Link: "https://www.marriott.com/default.mi"
  },
  {
    ID: 2,
    Name: "Four Seasons",
    Price: 93,
    Link: "https://www.fourseasons.com/"
  },
  {
    ID: 3,
    Name: "Hilton",
    Price: 66,
    Link: "https://www3.hilton.com/en/index.html?WT.mc_id=zLADA0WW1XX2PSH3DA4PPC5PPC6MULTIBR7"
  }
];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class HotelComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const results = mockResults.map((result) => <HotelResult ID={result.ID} Name={result.Name} Price={result.Price} Link={result.Link} />);
    return (
      <div>
        <h1>Housing Plans</h1>

        {results}

        <a href="/activities">Go to Activity Recommendations</a>
      </div>
    );
  }
}

class HotelResult extends React.Component {
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
      <Alert variant="secondary">
        <Alert.Heading><Button onClick={this.onSelect}>Select</Button> {this.props.ID}
          . {this.props.Name} ${this.props.Price}</Alert.Heading> <a href={this.props.Link}>Book Hotel</a>
        {!this.state.IsHidden &&
          <h4 style={{color:"#c67007"}} >You've selected to stay at {this.props.Name}!</h4>
        }
      </Alert>
    )
  }
}

// This renders the JSX component inside the content node:
export { HotelComponent, HotelResult };
