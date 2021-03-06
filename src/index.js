import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import Users from  './components/users/users'
import Contact from './components/contact-us/contact-us'

import { Route,  BrowserRouter as Router,Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore } from 'redux';
import HomeLayout from './layouts/home/home';
import AppLayout from './layouts/app/app';
import Products from './layouts/app/products'
import NotFound from './components/NotFound';
import PrivateRoute from './components/privateRoute';
import { ToastContainer } from 'react-toastify';
import  {RegisterComp} from './components/Register'
const store = createStore(rootReducer)
const routing = (
  <React.StrictMode>
  <ToastContainer></ToastContainer>
  <Provider store={store}>
  <Router>
     <Switch>
      {/* <Route exact path="/" render={(history)=>(<Redirect to='/login' />)} /> */}
      <Route exact path="/" component={HomeLayout} />
      <Route  path="/login" component={HomeLayout} />
      <PrivateRoute path="/dashboard" component={AppLayout}></PrivateRoute>
      <PrivateRoute path="/products" component={Products}></PrivateRoute>
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
      <Route path="/register" component={RegisterComp} />
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
