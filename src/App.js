import React from 'react';
import './App.scss';
import NickChatWrapper from './Components/NickChatWrapper/NickChatWrapper';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NickChatWrapper />
      </div>
    );
  }
}

export default App;
