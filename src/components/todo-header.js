import React, { Component } from 'react'

export default class TodoHeader extends Component {

    handleSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.add(text)
        }
    }

    render() {
        return (
            <input type="text"
                   autoFocus="true"
                   onKeyDown={this.handleSubmit} />
        );
    }
};
