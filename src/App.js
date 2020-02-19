import React from 'react';
import './App.scss';
import Conversation from './Components/Conversation/Conversation';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { messages: []};
  }

  componentDidMount() {
    this.callGetConversation();
  }

  handleNewLocalInput = (input) => {
    this.postToConversation(input);
    this.callGetConversation();
  }

  callGetConversation = () => {
    this.getConversation()
    .then(res => this.setState({messages: res.messages}))
    .catch(err => console.log(err));
  }

  getConversation = async () => {
    const response = await fetch('/conversation');
    const body = await response.json();
    return body;
  }

  postToConversation = async (body) => {
    const response = await fetch('/conversation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    return await response.json();
  }

  render() {
    return (
      <div className="App">
        <Conversation
          id={'test-conversation'}
          messages={this.state.messages}
          handleNewInputSubmitted={this.handleNewLocalInput}
        />
      </div>
    );
  }
}

export default App;
