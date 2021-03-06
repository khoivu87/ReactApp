import React, { Component } from 'react';
import { fetchAllPosts } from '../actions/blogPostActions.js';
import { deleteBlogPost } from '../actions/blogPostActions.js';
import Table from './Table.js';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: []
        };

        fetchAllPosts()
        .then(
            (data) => {
                // Need to understand 'this' here. Is it the List class? How to call it?
                console.log('Line 15: ', this);
                this.setState(function(state) {
                        state.blogPosts = data;
                        return state;
                    }
                );   
            }
        )
        .catch(function(error) {
                console.error('Error', error);
            }
        );
    }

    onDelete(id) {
        deleteBlogPost(id)
        .then((data) => {
            let blogPosts = this.state.blogPosts.filter((post) => {
                    return id !== post.id;
                }
            );

            this.setState(function(state) {
                    state.blogPosts = blogPosts;
                    return state;
                }
            );
        })
        .catch(function(error) {
                return error;
            }
        );
    }

    render() {
        return (
            <div>
                <Table blogPosts={this.state.blogPosts}
                        onDelete={this.onDelete.bind(this)} />
            </div>
        );
    }
}

export default List;