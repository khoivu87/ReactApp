import React, {Component} from 'react';
import FetchTable from '../Controller/FetchTable';
// import PostJSON from '../Controller/PostJSON.js';

class NewAdmin extends Component {
    render() {
        return (
            <div className="cover">
                <div className="cover-head">
                    <h1>Welcome to Admin view</h1>
                    <h3>Products</h3>
                </div>
                <div className="cover-body">
                    <NewSearch />
                    <NewTable />
                </div>
            </div>
        );
    }
}

class NewSearch extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search" />
                <button type="button" name="filterBtn">Filter</button>
            </form>
        );
    }
}

class NewTable extends Component {
    render() {
        return (
            <FetchTable />
        );
    }
}

export default NewAdmin;