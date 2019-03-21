// This is a place holder for the initial application state.
const state = [
  
];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Origin: "boston",
      Destination: "ny",
      StartDate: '05/04/2019',
      EndDate: '06/04/2019'
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
	}

  render() {
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

        <h2>
          Showing results for {this.state.Origin} to {this.state.Destination} for {this.state.StartDate} to {this.state.EndDate}
        </h2>
        <h3>
          Flight 1: ($534, 9:30 PM) <a href="https://www.united.com/en/us">Book Flight</a><br></br>
          Flight 2: ($314, 3:41 PM) <a href="https://www.delta.com/">Book Flight</a><br></br>
          Flight 3: ($254, 10:15 AM ) <a href="https://www.alaskaair.com/">Book Flight</a><br></br>
        </h3>

        <a href="view02.html">Housing</a>

      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
