"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var mockResults = [{
  ID: 1,
  Name: "United",
  Price: 534,
  Time: "9:30 PM",
  Link: "https://www.united.com/en/us"
}, {
  ID: 2,
  Name: "Delta",
  Price: 314,
  Time: "3:41 PM",
  Link: "https://www.delta.com"
}, {
  ID: 3,
  Name: "Alaska Air",
  Price: 254,
  Time: "10:15 AM",
  Link: "https://www.alaskaair.com"
}];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var FlightComponent = function (_React$Component) {
  _inherits(FlightComponent, _React$Component);

  function FlightComponent(props) {
    _classCallCheck(this, FlightComponent);

    var _this = _possibleConstructorReturn(this, (FlightComponent.__proto__ || Object.getPrototypeOf(FlightComponent)).call(this, props));

    _this.state = {
      Origin: "boston",
      Destination: "ny",
      StartDate: '05/04/2019',
      EndDate: '06/04/2019',
      IsHidden: true
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(FlightComponent, [{
    key: "onChange",
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      this.setState({
        IsHidden: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var results = mockResults.map(function (result) {
        return React.createElement(FlightResult, { ID: result.ID, Name: result.Name, Price: result.Price, Time: result.Time, Link: result.Link });
      });
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
            React.createElement("input", { type: "text", name: "Origin", value: this.state.Origin, onChange: function onChange(e) {
                return _this2.onChange(e);
              } })
          ),
          React.createElement("br", null),
          React.createElement(
            "label",
            null,
            "Destination:",
            React.createElement("input", { type: "text", name: "Destination", value: this.state.Destination, onChange: function onChange(e) {
                return _this2.onChange(e);
              } })
          ),
          React.createElement("br", null),
          React.createElement(
            "label",
            null,
            "Start Date:",
            React.createElement("input", { type: "date", name: "StartDate", value: this.state.StartDate, onChange: function onChange(e) {
                return _this2.onChange(e);
              } })
          ),
          React.createElement("br", null),
          React.createElement(
            "label",
            null,
            "End Date:",
            React.createElement("input", { type: "date", name: "EndDate", value: this.state.EndDate, onChange: function onChange(e) {
                return _this2.onChange(e);
              } })
          ),
          React.createElement("br", null),
          React.createElement(
            "button",
            { type: "submit", name: "SubmitButton", onClick: function onClick(e) {
                return _this2.onSubmit(e);
              } },
            "Submit"
          )
        ),
        !this.state.IsHidden && React.createElement(
          "div",
          null,
          React.createElement(
            "h2",
            null,
            "Showing Flight Results for ",
            this.state.Origin,
            " to ",
            this.state.Destination,
            " for ",
            this.state.StartDate,
            " to ",
            this.state.EndDate
          ),
          results,
          React.createElement(
            "a",
            { href: "HotelView.html" },
            "Go to Housing Plans"
          )
        )
      );
    }
  }]);

  return FlightComponent;
}(React.Component);

var FlightResult = function (_React$Component2) {
  _inherits(FlightResult, _React$Component2);

  function FlightResult(props) {
    _classCallCheck(this, FlightResult);

    var _this3 = _possibleConstructorReturn(this, (FlightResult.__proto__ || Object.getPrototypeOf(FlightResult)).call(this, props));

    _this3.state = {
      IsHidden: true
    };

    _this3.onSelect = _this3.onSelect.bind(_this3);
    return _this3;
  }

  _createClass(FlightResult, [{
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
        ": ($",
        this.props.Price,
        ", ",
        this.props.Time,
        ") ",
        React.createElement(
          "a",
          { href: this.props.Link },
          "Book Flight"
        ),
        !this.state.IsHidden && React.createElement(
          "h4",
          { style: { color: "#c67007" } },
          "You've selected to fly with ",
          this.props.Name,
          "!"
        )
      );
    }
  }]);

  return FlightResult;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(FlightComponent, null), contentNode);