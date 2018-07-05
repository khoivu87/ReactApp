import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            user: this.props.user || 'some user',
            comment: this.props.comment || 'some comment'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState(props);
    }

    // This bitch is deprecated in React V4
    /* getInitialState() {
        return {
            
        }
        console.log(this.props.comment);
        console.log(this.props.user);
    } */

    handleUserChange(event) {
        this.setState({
            user: event.target.value
        });
    }

    handleCommentChange(event) {
        this.setState({
            comment: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <form name="blog_post" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div id="blog_post">
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="blog_post_user">User</label>
                        <div className="col-sm-3">
                            <input type="text"
                                    id="blog_post_user"
                                    required="required"
                                    value={this.state.user}
                                    onChange={event => this.handleUserChange(event)}
                                    className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="blog_post_comment">Comment</label>
                        <div className="col-sm-8">
                            <input type="text"
                                    id="blog_post_comment"
                                    required="required"
                                    value={this.state.comment}
                                    onChange={this.handleCommentChange.bind(this)}
                                    className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <button type="submit"
                                    id="blog_post_submit"
                                    className="btn-default btn">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;