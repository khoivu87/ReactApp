import React, { Component } from 'react';
import { fetchBlogPosts } from '../actions/blogPostActions.js';
import Table from './Table.js';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: []
        };

        fetchBlogPosts()
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

    render() {
        return (
            <div>
                <Table blogPosts={this.state.blogPosts} />
            </div>
        );
    }
}

export default List;