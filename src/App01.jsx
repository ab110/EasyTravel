// This is a place holder for the initial application state.
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
          <button type="submit" name="SubmitButton" onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
        
        {!this.state.IsHidden && 
        <div>
          <h2>Showing Flight Results for {this.state.Origin} to {this.state.Destination} for {this.state.StartDate} to {this.state.EndDate}</h2>
          {results}
          <a href="view02.html">Go to Housing Plans</a>
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
        <a style={{color:"#FF0000"}} onClick={this.onSelect}>Select</a> {this.props.ID}. {this.props.Name}: (${this.props.Price}
        , {this.props.Time}) <a href={this.props.Link}>Book Flight</a>
        {!this.state.IsHidden && 
        <h4 style={{color:"#c67007"}} >You've selected to fly with {this.props.Name}!</h4>
        }
      </h3>
    )
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<FlightComponent />, contentNode);
