import React, { Component } from 'react';

class Table extends Component {
    // Useless constructor
/*     constructor(props) {
        super(props);
    } */

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
                    {this.props.blogPosts && this.props.blogPosts.map(function(post) {
                        return(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.user}</td>
                                <td>{post.comment}</td>
                                <td>
                                    <a href="" className="btn btn-default btn-sm">Edit</a>
                                    <a href="" className="btn btn-default btn-sm">Delete</a>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;