import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavComponent from './NavBar/navbar.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NavComponent />, document.getElementById('navbar'));
ReactDOM.render(<App />, document.getElementById('root'));


if(window.location.href === "http://localhost:3000/activities") {
  let thisButton = document.getElementById("activity-btn");
  thisButton.setAttribute("style", "background-color:#42a4f4;");
}

else if(window.location.href === "http://localhost:3000/flights") {
  let thisButton = document.getElementById("flight-btn");
  thisButton.setAttribute("style", "background-color:#42a4f4;");
}

else if(window.location.href === "http://localhost:3000/hotels") {
  let thisButton = document.getElementById("hotel-btn");
  thisButton.setAttribute("style", "background-color:#42a4f4;");
}

else if(window.location.href === "http://localhost:3000/message") {
  let thisButton = document.getElementById("msg-btn");
  thisButton.setAttribute("style", "background-color:#42a4f4;");
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
