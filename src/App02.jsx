// This is a place holder for the initial application state.
const mockResults = [
  {
    ID: 1,
    Price: 87,
    Link: "https://www.marriott.com/default.mi"
  },
  {
    ID: 2,
    Price: 93,
    Link: "https://www.fourseasons.com/"
  },
  {
    ID: 3,
    Price: 66,
    Link: "https://www3.hilton.com/en/index.html?WT.mc_id=zLADA0WW1XX2PSH3DA4PPC5PPC6MULTIBR7"
  }
];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class MyComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const results = mockResults.map((result) => <HotelResult ID={result.ID} Price={result.Price} Link={result.Link} />);
    return (
      <div>
        <h1>Housing Plans</h1>
        
        {results}

        <a href="view03.html">Go to Travel Recommendations</a>
      </div>
    );
  }
}

class HotelResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h3>
        Hotel {this.props.ID}: ${this.props.Price} <a href={this.props.Link}>Book Hotel</a>
      </h3>
    )
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
