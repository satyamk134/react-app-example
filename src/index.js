import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Users from  './components/users/users'
import Contact from './components/contact-us/contact-us'
import Header from './components/header/header';
import Todo from './components/todo/todo'
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore } from 'redux';
import login from './components/login/login';
import HomeLayout from './layouts/home/home';
import AppLayout from './layouts/app/app';
import TextField from '@material-ui/core/TextField';
import NotFound from './components/NotFound'
const store = createStore(rootReducer)
const routing = (
  <React.StrictMode>
  <Provider store={store}>
  <Router>
     <Switch>
      <Route exact path="/" component={login} />
      <Route path="/dashboard" component={AppLayout} />
      <Route path="/login" component={login} />
      <Route path="/login/?id" component={login} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
       <Route path="*" component={NotFound} />
     </Switch>
      
     
    
      
  </Router>
  </Provider>
  </React.StrictMode>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
