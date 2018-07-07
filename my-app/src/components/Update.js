import React, { Component } from 'react';
import { fetchPostById, updateBlogPost } from '../actions/blogPostActions.js';
import Form from './Form.js';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPost: []
        }
        console.log("Line 11 Update.js: " + this.props.match.params.postId);
        // this.state.props.params no longer in use
        fetchPostById(this.props.match.params.postId)
        .then((data) => {
                console.log("Line 15 Update.js, data id: " + data.id);
                console.log("Line 15 Update.js, data user: " + data.user);
                this.setState(function(state) {
                        state.blogPost = data;
                        return state;
                    }
                )
                console.log("Current state: " + this.state.blogPost.user);
            }
        ).catch(function(error) {
                return error;
            }
        );
        console.log("Line 28 Update.js, post id: " + this.props.match.params.postId);
    }

    handleSubmit(updateData) {
        console.log("Line 32 Update.js, state: " + updateData.id);
        console.log("Line 33 Update.js, this: " + this.props);
        // updateBlogPost(this.state.blogPost.id, data)
        // The id here couldn't get passed, why????? hard code number, ex: 3 then it runs
        updateBlogPost(this.state.blogPost.id, updateData)
        .then(request => {
                this.props.history.push("/posts");
            }
        );
    }

    render() {
        return (
            <div>
                {/* Need to bind handleSubmit method here */}
                <Form onSubmit={this.handleSubmit.bind(this)}
                        user={this.state.blogPost.user}
                        comment={this.state.blogPost.comment} />
            </div>
        );
    }
}

export default Update;