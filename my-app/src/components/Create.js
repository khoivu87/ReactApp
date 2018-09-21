import React, { Component } from 'react';
import Form from './Form.js';
import { createBlogPost } from '../actions/blogPostActions.js';

class Create extends Component {

    handleSubmit(data) {
        createBlogPost(data)
        .then(request => {
                console.log(this.props);
                // this.props.router.push doesn't work anymore, no .bind(this)
                // Need to understand the props here
                this.props.history.push("/posts");
            }
        );
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)} />
            </div>
        );
    }
}

export default Create;