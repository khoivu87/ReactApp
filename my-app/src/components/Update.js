import React, { Component } from 'react';
import { fetchSinglePost, updateBlogPost } from '../actions/blogPostActions.js';
import Form from './Form.js';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPost: []
        }
        console.log("Line 11 Update.js: " + this.props.match.params.postId);
        // this.state.props.params no longer in use
        fetchSinglePost(this.props.match.params.postId)
        .then((data) => {
            console.log("Line 15 Update.js, data id: " + data.id);
            console.log("Line 15 Update.js, data user: " + data.user);
                this.setState(function(state) {
                        state.blogPost = data;
                        return state;
                    }
                )
            }
        ).catch(function(error) {
                return error;
            }
        );
        console.log("Line 25 Update.js, post id: " + this.props.match.params.postId);
    }

    handleSubmit(data) {
        console.log("Line 31 Update.js, state: " + data.id);
        console.log("Line 32 Update.js, this: " + this.props);
        // updateBlogPost(this.state.blogPost.id, data)
        // The id here couldn't get passed, why????? hard code number, ex: 3 then it runs
        updateBlogPost(this.state.blogPost.id, data)
        .then(request => {
                this.props.history.push("/posts");
            }
        );
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