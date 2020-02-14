import React from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { word: undefined };
  }

  componentDidMount() {
    this.callServer()
      .then(res => this.setState({word: res.message}))
      .catch(err => console.log(err));
  }

  callServer = async () => {
    const response = await fetch('/ping');
    const body = await response.json();
    return body;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.word ? this.state.word : '---'}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
