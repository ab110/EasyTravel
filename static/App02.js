"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var mockResults = [{
  ID: 1,
  Price: 87,
  Link: "https://www.marriott.com/default.mi"
}, {
  ID: 2,
  Price: 93,
  Link: "https://www.fourseasons.com/"
}, {
  ID: 3,
  Price: 66,
  Link: "https://www3.hilton.com/en/index.html?WT.mc_id=zLADA0WW1XX2PSH3DA4PPC5PPC6MULTIBR7"
}];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var HotelComponent = function (_React$Component) {
  _inherits(HotelComponent, _React$Component);

  function HotelComponent() {
    _classCallCheck(this, HotelComponent);

    return _possibleConstructorReturn(this, (HotelComponent.__proto__ || Object.getPrototypeOf(HotelComponent)).call(this));
  }

  _createClass(HotelComponent, [{
    key: "render",
    value: function render() {
      var results = mockResults.map(function (result) {
        return React.createElement(HotelResult, { ID: result.ID, Price: result.Price, Link: result.Link });
      });
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Housing Plans"
        ),
        results,
        React.createElement(
          "a",
          { href: "view03.html" },
          "Go to Activity Recommendations"
        )
      );
    }
  }]);

  return HotelComponent;
}(React.Component);

var HotelResult = function (_React$Component2) {
  _inherits(HotelResult, _React$Component2);

  function HotelResult(props) {
    _classCallCheck(this, HotelResult);

    return _possibleConstructorReturn(this, (HotelResult.__proto__ || Object.getPrototypeOf(HotelResult)).call(this, props));
  }

  _createClass(HotelResult, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h3",
        null,
        "Hotel ",
        this.props.ID,
        ": $",
        this.props.Price,
        " ",
        React.createElement(
          "a",
          { href: this.props.Link },
          "Book Hotel"
        )
      );
    }
  }]);

  return HotelResult;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(HotelComponent, null), contentNode);