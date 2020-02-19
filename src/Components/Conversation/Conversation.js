import React from 'react';
import PropTypes from 'prop-types';
import './Conversation.scss';
import ConversationInput from '../ConversationInput/ConversationInput';

export default class Conversation extends React.Component {
    componentDidMount() {
        this.props.getLatestMessages();
    }

    displayMessages = () => {
        return this.props.messages.map(msg => {
            return (
                <div className="conversation-message">
                    <div className="conversation-message-author">
                        {`${msg.author}:`}
                    </div>
                    <div className="conversation-message-text">
                        {msg.text}
                    </div>
                </div>
            )
        });
    }

    handleNewInputSubmitted = (message) => {
        this.props.handleNewInputSubmitted({
            text: message,
            author: this.props.currentAuthor
        })
    }

    render() {
        return (
            <div id={this.props.id} className="conversation">
                {this.displayMessages()}
                <ConversationInput
                    onInputSubmit={this.handleNewInputSubmitted}
                />
            </div>
        )
    }
}

Conversation.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        author: PropTypes.string,   // todo: this should be an object, and required
        dateTime: PropTypes.string  // todo: this should be an object
    })).isRequired,
    id: PropTypes.string.isRequired,
    handleNewInputSubmitted: PropTypes.func,
    getLatestMessages: PropTypes.func,
    currentAuthor: PropTypes.string,
}