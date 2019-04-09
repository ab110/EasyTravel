// This is a place holder for the initial application state.
import React from 'react';
import { Button } from 'react-bootstrap';

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
    console.log(this.state.msgContent);
    fetch('/message', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: 3,
            content: this.state.msgContent
        })
    })
    .then((res) => {
        console.log(res)
    })
    this.state.msgContent = "";
  }

  render() {
    const messages = this.state.messageList.map((result) =>
        <Message id={result.id} content={result.content} />
    );
    return (
      <div>
        <div>
          {messages}
        </div>
        <div className="message-form">
          <form>
            Type Message:
            <input type="text" name="msgContent" value={this.state.msgContent} onChange={e => this.onChange(e)}></input>
          </form>
          <Button className="send-msg" onClick={e => this.onSubmit(e)}> Submit </Button>
        </div>
      </div>
    );
  }
}


class Message extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      IsHidden: true
    };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(){
    this.setState({
      IsHidden: false
    })
  }

  render() {
    return (
      <h3>
        {this.props.id}. {this.props.content}
      </h3>
    )
  }
}

// This renders the JSX component inside the content node:
export { MessageComponent, Message };
