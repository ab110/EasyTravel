// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class MyComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <label>
          Origin:
          <input type="text" name="Origin" />
        </label><br></br>
        <label>
          Destination:
          <input type="text" name="Destination" />
        </label><br></br>
        <label>
          Start Date:
          <input type="date" name="State Date" />
        </label><br></br>
        <label>
          End Date:
          <input type="date" name="End Date" />
        </label><br></br>
        <input type="submit" value="Submit" />
    </form>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
