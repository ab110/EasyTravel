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
      <div>
        <h1>
          Housing Plan
        </h1>
        <h3>
          Plan 1: ($87) <a href="https://www.marriott.com/default.mi">Book</a><br></br>
          Plan 2: ($93) <a href="https://www.fourseasons.com/">Book</a><br></br>
          Plan 3: ($66) <a href="https://www3.hilton.com/en/index.html?WT.mc_id=zLADA0WW1XX2PSH3DA4PPC5PPC6MULTIBR7">Book</a><br></br>
      </h3>

      <a href="view03.html">Recommendations</a>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
