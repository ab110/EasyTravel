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
        Recomendations
      </h1>
      <h3>
          Axe Throwing: ($20) <a href="https://www.rageaxethrowing.com/en/">View</a><br></br>
          Sushi: ($25) <a href="http://mizusbg.com/sanjose/menusanjose/">View</a><br></br>
          Hiking Trail: (Free) <a href="https://www.alltrails.com/parks/us/california/almaden-quicksilver-county-park">View</a><br></br>
      </h3>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
