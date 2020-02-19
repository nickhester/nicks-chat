import React from 'react';
import Conversation from '../Conversation/Conversation';
import WelcomePage from '../WelcomePage/WelcomePage';

export default class NickChatWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = { messages: [], currentPage: 'welcome', userName: '' };
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

    updateUserName = (name) => {
        this.setState({ userName: name, currentPage: 'conversation' });
    }
    
    render() {
        if (this.state.currentPage === 'welcome') {
            return (
                <WelcomePage
                    handleSubmitName={this.updateUserName}
                />
            );
        }
        else {
            return (
                <Conversation
                id={'test-conversation'}
                    messages={this.state.messages}
                    handleNewInputSubmitted={this.handleNewLocalInput}
                    getLatestMessages={this.callGetConversation}
                    currentAuthor={this.state.userName}
                />
            );
        }
    }
}