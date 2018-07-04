import React, { Component } from 'react';
import Form from './Form.js';

class Create extends Component {
    handleSubit(data) {
        console.log('form submission data', data);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubit} />
            </div>
        );
    }
}

export default Create;