import React from 'react';
import PropTypes from 'prop-types';

export default class ConversationInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { textInput: '' };
    }

    handleOnInputChanged = (event) => {
        this.setState({ textInput: event.target.value });
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.submitInput();
        }
    };

    submitInput = () => {
        this.props.onInputSubmit(this.state.textInput);
        this.setState({ textInput: '' });
    }

    render() {
        return (
            <input
                type="text"
                value={this.state.textInput}
                onChange={this.handleOnInputChanged}
                onKeyUp={this.handleKeyUp}
            />
        )
    }
}

ConversationInput.propTypes = {
    onInputSubmit: PropTypes.func
}