import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddEditUser from './components/AddEditUser';
import ShowUsers from './components/ShowUsers';

ReactDOM.render(
    <Router>
        <div>
          <Route exact path="/" component={ShowUsers} />
          <Route exact path="/add" component={AddEditUser} />
          <Route path="/showusers" component={ShowUsers} />
        </div>
    </Router>,
    document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
