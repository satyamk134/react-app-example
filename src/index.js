import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Users from  './components/users/users'
import Contact from './components/contact-us/contact-us'
import Header from './components/header/header';
import Todo from './components/todo/todo'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <React.StrictMode>
  <Router>
    <div>
    <Header />
      <Route exact path="/" component={Todo} />
      <Route exact path="/app" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
  </React.StrictMode>
)
ReactDOM.render(
  
   routing
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
