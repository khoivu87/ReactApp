import React, { Component } from 'react';
import { fetchSinglePost, updateBlogPost } from '../actions/blogPostActions.js';
import Form from './Form.js';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPost: []
        }

        fetchSinglePost(this.props.params.postId)
        .then(function(data) {
                this.setState(function(state){
                        state.blogPost = data;
                        return state;
                    }
                )
            }
        ).catch(function(error) {
                return error;
            }
        );
    }

    handleSubmit(data) {
        updateBlogPost(this.state.blogPost.id, data);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}
                        user={this.state.blogPost.user}
                        comment={this.state.blogPost.comment} />
            </div>
        );
    }
}

export default Update;