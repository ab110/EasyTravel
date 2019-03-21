"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var MyComponent = function (_React$Component) {
  _inherits(MyComponent, _React$Component);

  function MyComponent(props) {
    _classCallCheck(this, MyComponent);

    var _this = _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this, props));

    _this.state = {
      Origin: "boston",
      Destination: "ny",
      StartDate: '05/04/2019',
      EndDate: '06/04/2019'
    };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(MyComponent, [{
    key: "onChange",
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          null,
          React.createElement(
            "label",
            null,
            "Origin:",
            React.createElement("input", { type: "text", name: "Origin", onChange: function onChange(e) {
                return _this2.onChange(e);
              } })
          ),
          React.createElement("br", null),
          React.createElement(
            "label",
            null,
            "Destination:",
            React.createElement("input", { type: "text", name: "Destination", onChange: function onChange(e) {
                return _this2.onChange(e);
              } })
          ),
          React.createElement("br", null),
          React.createElement(
            "label",
            null,
            "Start Date:",
            React.createElement("input", { type: "date", name: "StartDate", onChange: function onChange(e) {
                return _this2.onChange(e);
              } })
          ),
          React.createElement("br", null),
          React.createElement(
            "label",
            null,
            "End Date:",
            React.createElement("input", { type: "date", name: "EndDate", onChange: function onChange(e) {
                return _this2.onChange(e);
              } })
          ),
          React.createElement("br", null),
          React.createElement("input", { type: "submit", value: "Submit" })
        ),
        React.createElement(
          "h2",
          null,
          "Showing results for ",
          this.state.Origin,
          " to ",
          this.state.Destination,
          " for ",
          this.state.StartDate,
          " to ",
          this.state.EndDate
        ),
        React.createElement(
          "h3",
          null,
          "Flight 1: ($534, 9:30 PM) ",
          React.createElement(
            "a",
            { href: "https://www.united.com/en/us" },
            "Book Flight"
          ),
          React.createElement("br", null),
          "Flight 2: ($314, 3:41 PM) ",
          React.createElement(
            "a",
            { href: "https://www.delta.com/" },
            "Book Flight"
          ),
          React.createElement("br", null),
          "Flight 3: ($254, 10:15 AM ) ",
          React.createElement(
            "a",
            { href: "https://www.alaskaair.com/" },
            "Book Flight"
          ),
          React.createElement("br", null)
        )
      );
    }
  }]);

  return MyComponent;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MyComponent, null), contentNode);