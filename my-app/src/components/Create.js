import React, { Component } from 'react';
import Form from './Form.js';
import { createBlogPost } from '../actions/blogPostActions.js';

class Create extends Component {
    handleSubmit(data) {
        createBlogPost(data);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default Create;