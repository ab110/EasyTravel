// This is a place holder for the initial application state.
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

      </div>
    );
  }
}

class ActivityResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h3>
        {this.props.ID}. {this.props.Name}: ${this.props.Price} <a href={this.props.Link}>View</a>
      </h3>
    )
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<ActivityComponent />, contentNode);
