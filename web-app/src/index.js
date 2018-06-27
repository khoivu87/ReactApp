import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class MainLayout extends React.Component{
  render() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/widgets">Widgets</Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
      )
  }
}

class Home extends React.Component{
  render() {
    return (<h1>Home Page</h1>)
  }
}

class SearchLayout extends React.Component{
  render() {
    return (
      <div className="search">
        <header className="search-header"></header>
        <div className="results">
          {this.props.children}
        </div>
        <div className="search-footer pagination"></div>
      </div>
      )
  }
}

class UserList extends React.Component{
  render() {
    return (
      <ul className="user-list">
        <li>Dan</li>
        <li>Ryan</li>
        <li>Michael</li>
      </ul>
      )
  }
}

class WidgetList extends React.Component{
  render() {
    return (
      <ul className="widget-list">
        <li>Widget 1</li>
        <li>Widget 2</li>
        <li>Widget 3</li>
      </ul>
      )
  }
}

//========================================

ReactDOM.render((
  <Router>
      <Route path="/" component={MainLayout}>
        <div>
          <Route path="/" component={Home} />
          <Route component={SearchLayout}>
            <div>
              <Route path="users" component={UserList} />
              <Route path="widgets" component={WidgetList} />
            </div>
          </Route>
        </div>
      </Route>
  </Router>
), document.getElementById('root'));