import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Table extends Component {
    // Useless constructor
    constructor(props) {
        super(props);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    // Need to get the index of current element
    deleteHandler(index, event) {
        console.log("Table.js, deleteHandler: " + this.props.blogPosts[index].id);
        event.preventDefault();
        this.props.onDelete(this.props.blogPosts[index].id);
    }

    render() {
        return (
            <div>
                <table className="table table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>User</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.blogPosts && this.props.blogPosts.map((post, index) => {
                        return(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.user}</td>
                                <td>{post.comment}</td>
                                <td>
                                    <NavLink className="btn btn-default btn-sm"
                                        to={"/posts/update/" + post.id}>
                                        Edit
                                    </NavLink>
                                    <button type="button"
                                        className="btn btn-default btn-sm"
                                        onClick={this.deleteHandler.bind(this, index)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <NavLink to="/posts/create" className="btn btn-lg btn-success">Create</NavLink>
            </div>
        );
    }
}

export default Table;
// If I turn (post, index) => { } at line 30 into a function, it doesn't work. Need to understand why