import React, { Component } from 'react'

export default class TodoHeader extends Component {

    state = {
        text: this.props.text || ''
    }

    handleSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.add(text)
            this.setState({ text: '' })
        }
    }

    handleChange = e => {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <input type="text"
                   autoFocus="true"
                   onKeyDown={this.handleSubmit}
                   value={this.state.text}
                   onChange={this.handleChange}
            />
        );
    }
};
