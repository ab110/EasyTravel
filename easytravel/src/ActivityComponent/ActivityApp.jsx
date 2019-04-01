// This is a place holder for the initial application state.
import React from 'react';

const mockResults = [
  {
    ID: 1,
    Name: "Axe Throwing",
    Price: 20,
    Link: "https://www.rageaxethrowing.com/en/"
  },
  {
    ID: 2,
    Name: "Sushi",
    Price: 25,
    Link: "http://mizusbg.com/sanjose/menusanjose/"
  },
  {
    ID: 3,
    Name: "Hiking",
    Price: "Free",
    Link: "https://www.alltrails.com/parks/us/california/almaden-quicksilver-county-park"
  }
];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class ActivityComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const results = mockResults.map((result) => <ActivityResult ID={result.ID} Name={result.Name} Price={result.Price} Link={result.Link} />);
    return (
      <div>
        <h1>Activity Recomendations</h1>

        {results}

        <button>Show Travel Packages</button>
      </div>
    );
  }
}

class ActivityResult extends React.Component {
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
      <div>
        <h3>
          <a style={{color:"#FF0000"}} onClick={this.onSelect}>Select</a> {this.props.ID}
            . {this.props.Name}: ${this.props.Price} <a href={this.props.Link}>View</a>
          {!this.state.IsHidden &&
            <h4 style={{color:"#c67007"}} >You've selected to try {this.props.Name}!</h4>
          }
        </h3>
      </div>
    )
  }
}

// This renders the JSX component inside the content node:
export { ActivityComponent, ActivityResult }
