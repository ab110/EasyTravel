"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var mockResults = [{
  ID: 1,
  Name: "Axe Throwing",
  Price: 20,
  Link: "https://www.rageaxethrowing.com/en/"
}, {
  ID: 2,
  Name: "Sushi",
  Price: 25,
  Link: "http://mizusbg.com/sanjose/menusanjose/"
}, {
  ID: 3,
  Name: "Hiking",
  Price: "Free",
  Link: "https://www.alltrails.com/parks/us/california/almaden-quicksilver-county-park"
}];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var ActivityComponent = function (_React$Component) {
  _inherits(ActivityComponent, _React$Component);

  function ActivityComponent() {
    _classCallCheck(this, ActivityComponent);

    return _possibleConstructorReturn(this, (ActivityComponent.__proto__ || Object.getPrototypeOf(ActivityComponent)).call(this));
  }

  _createClass(ActivityComponent, [{
    key: "render",
    value: function render() {
      var results = mockResults.map(function (result) {
        return React.createElement(ActivityResult, { ID: result.ID, Name: result.Name, Price: result.Price, Link: result.Link });
      });
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Activity Recomendations"
        ),
        results
      );
    }
  }]);

  return ActivityComponent;
}(React.Component);

var ActivityResult = function (_React$Component2) {
  _inherits(ActivityResult, _React$Component2);

  function ActivityResult(props) {
    _classCallCheck(this, ActivityResult);

    var _this2 = _possibleConstructorReturn(this, (ActivityResult.__proto__ || Object.getPrototypeOf(ActivityResult)).call(this, props));

    _this2.state = {
      IsHidden: true
    };

    _this2.onSelect = _this2.onSelect.bind(_this2);
    return _this2;
  }

  _createClass(ActivityResult, [{
    key: "onSelect",
    value: function onSelect() {
      this.setState({
        IsHidden: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "h3",
        null,
        React.createElement(
          "a",
          { style: { color: "#FF0000" }, onClick: this.onSelect },
          "Select"
        ),
        " ",
        this.props.ID,
        ". ",
        this.props.Name,
        ": $",
        this.props.Price,
        " ",
        React.createElement(
          "a",
          { href: this.props.Link },
          "View"
        ),
        !this.state.IsHidden && React.createElement(
          "h4",
          { style: { color: "#c67007" } },
          "You've selected to try ",
          this.props.Name,
          "!"
        )
      );
    }
  }]);

  return ActivityResult;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(ActivityComponent, null), contentNode);