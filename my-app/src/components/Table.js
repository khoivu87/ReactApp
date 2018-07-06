import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Table extends Component {
    // Useless constructor
/*     constructor(props) {
        super(props);
    } */

    deleteHandler(i, event) {
        event.preventDefault();
        this.props.onDelete(this.props.blogPosts[i].id);
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
                    {this.props.blogPosts.map(function(post) {
                        return(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.user}</td>
                                <td>{post.comment}</td>
                                <td>
                                    <NavLink className="btn btn-default btn-sm"
                                        to={"/posts/update/" + post.id}>Edit</NavLink>
                                    <button className="btn btn-default btn-sm"
                                        >Delete</button>
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