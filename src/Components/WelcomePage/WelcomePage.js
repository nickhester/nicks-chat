import React from 'react';
import PropTypes from 'prop-types';

export default class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nameTextInput: '' };
    }

    handleOnInputChanged = (event) => {
        this.setState({ nameTextInput: event.target.value });
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.submitInput();
        }
    };

    submitInput = () => {
        this.props.handleSubmitName(this.state.nameTextInput);
    }

    render() {
        return (
            <React.Fragment>
                <label htmlFor="name-input">Enter a name</label>
                <input
                    id="name-input"
                    type="text"
                    value={this.state.nameTextInput}
                    onChange={this.handleOnInputChanged}
                    onKeyUp={this.handleKeyUp}
                />
            </React.Fragment>
        )
    }
}

WelcomePage.propTypes = {
    handleSubmitName: PropTypes.func
}