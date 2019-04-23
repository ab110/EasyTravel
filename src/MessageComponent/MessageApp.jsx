// This is a place holder for the initial application state.
import React from 'react';
import { Button } from 'react-bootstrap';
import { geoMercator, geoPath } from 'd3-geo'

let mockResults = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class MessageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msgContent: "",
      messageList: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
    })
  }


  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/message');
    const body = await response.json();
    this.state.messageList = body;
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  onSubmit(e){
    e.preventDefault();
    this.setState({
      IsHidden: false
    });
    fetch('/message', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userid: this.state.userId,
            content: this.state.msgContent
        })
    })
    .then((res) => {
        console.log(res);
    });
    let msg = {"userid": this.state.userId, "content": this.state.msgContent};
    this.state.messageList.push(msg);
    this.state.msgContent = "";
    this.state.userId = "";
  }

  render() {
    const messages = this.state.messageList.map((result) =>
        <Message userid={result.userid} content={result.content} />
    );
    return (
      <div>
        <div className="message-form">
          <form>
            Enter User Name:
            <input type="text" name="userId" value={this.state.userId} onChange={e => this.onChange(e)}></input>
            Type Message:
            <input type="text" name="msgContent" value={this.state.msgContent} onChange={e => this.onChange(e)}></input>
          </form>
          <Button className="send-msg" onClick={e => this.onSubmit(e)}> Submit </Button>
        </div>
        <div>{messages}</div>
      </div>
    );
  }
}


class Message extends React.Component {
  constructor(props) {
    super(props);
    this.userid = this.props.userid;
    this.content = this.props.content;
  }

  render() {
    return (
      <h3>
        {this.props.userid}: {this.props.content}
      </h3>
    )
  }
}

// This renders the JSX component inside the content node:
export { MessageComponent, Message };
